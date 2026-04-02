'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig, mainNavItems, serviceCategories } from '@/data/site-config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="contact-link">
              <i className="fa fa-phone"></i> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="contact-link">
              <i className="fa fa-envelope-o"></i> {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <Link href="/" className="logo">
              <Image
                src="/images/logo-2.webp"
                alt="Hot Natasha — Premium Escort Service in Pune"
                width={200}
                height={67}
                priority
              />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger"></span>
            </button>

            {/* Navigation Menu */}
            <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <Link href="/" className="nav-link active">Home</Link>
              </li>
              <li 
                className="has-dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services" className="nav-link">Services</Link>
                {servicesOpen && (
                  <div className="mega-menu">
                    <div className="mega-menu-content">
                      {serviceCategories.map((column, colIndex) => (
                        <div key={colIndex} className="mega-menu-column">
                          <ul>
                            {column.map((item) => (
                              <li key={item.slug}>
                                <Link href={`/${item.slug}`}>{item.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link href="/about-us" className="nav-link">About Us</Link>
              </li>
              <li>
                <Link href="/location" className="nav-link">Location</Link>
              </li>
              <li>
                <Link href="/gallery" className="nav-link">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link">Contact</Link>
              </li>
              <li>
                <Link href="/booknow" className="nav-link highlight">Book Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
