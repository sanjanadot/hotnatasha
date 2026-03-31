import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site-config';
import { escortTypes } from '@/data/escort-types';

export default function Footer() {
  const leftColumnTypes = escortTypes.slice(0, 13);
  const rightColumnTypes = escortTypes.slice(13);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <Image
              src="/images/logo-2.webp"
              alt="Hot Natasha Escorts Services"
              width={200}
              height={67}
              className="footer-logo"
            />
            <p className="footer-description">
              Welcome to Hot Natasha, Welcome you with open arms. We heartily welcome you to our web world.
            </p>
            <Link href="/about-us" className="footer-link">
              About US
            </Link>
            <p className="footer-address">
              {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}
            </p>
            <ul className="footer-contact">
              <li>
                <i className="fa fa-phone"></i>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <i className="fa fa-envelope-o"></i>
                <a href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <i className="fa fa-globe"></i>
                <a href={siteConfig.url}>
                  {siteConfig.url.replace('https://', '')}
                </a>
              </li>
            </ul>
            {/* DMCA Badges */}
            <div className="dmca-badges">
              <a 
                href="//www.dmca.com/Protection/Status.aspx?ID=a099565a-4eb3-4789-9879-f60a357366cd" 
                title="DMCA.com Protection Status"
              >
                <Image
                  src="https://images.dmca.com/Badges/dmca_protected_sml_120l.png?ID=a099565a-4eb3-4789-9879-f60a357366cd"
                  alt="DMCA.com Protection Status"
                  width={120}
                  height={24}
                />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="footer-column footer-services">
            <h4 className="footer-title">Our Escorts Service for Incall &amp; Outcall In India</h4>
            <div className="services-grid">
              <ul>
                {leftColumnTypes.map((type) => (
                  <li key={type.slug}>
                    <Link href={`/${type.slug}`}>{type.name}</Link>
                  </li>
                ))}
              </ul>
              <ul>
                {rightColumnTypes.map((type) => (
                  <li key={type.slug}>
                    <Link href={`/${type.slug}`}>{type.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
