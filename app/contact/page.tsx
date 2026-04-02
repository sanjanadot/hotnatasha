import { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Contact Us | Book Escorts in Pune | Hot Natasha',
  description: 'Contact Hot Natasha to book premium escorts in Pune. Call or WhatsApp +91-9038976363 anytime 24/7. Fast response, 100% discreet, no advance payment required.',
  authors: [{ name: 'Hot Natasha', url: siteConfig.url }],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact Hot Natasha | Book Escorts in Pune 24/7',
    description: 'Reach Hot Natasha anytime — call or WhatsApp +91-9038976363. Fast booking confirmed in minutes. 100% confidential.',
    url: `${siteConfig.url}/contact`,
    siteName: 'Hot Natasha',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/banner/escorts-in-pune.webp`,
        width: 1240,
        height: 600,
        alt: 'Contact Hot Natasha — Escorts in Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Hot Natasha | Escorts in Pune',
    description: 'Call or WhatsApp +91-9038976363. Book premium escorts in Pune anytime 24/7.',
    images: [`${siteConfig.url}/images/banner/escorts-in-pune.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Inner Header */}
      <section 
        className="inner-header"
        style={{ backgroundImage: 'url(/images/bg/about-our-company.webp)' }}
      >
        <div className="container">
          <div className="header-content">
            <h1>Contact <span className="text-highlight">Us</span></h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="active">Contact</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Have questions or ready to book? Contact us through any of the
                methods below or fill out our booking form.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fa fa-phone"></i>
                  <div>
                    <strong>Phone</strong>
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}>
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fa fa-envelope-o"></i>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fa fa-map-marker"></i>
                  <div>
                    <strong>Address</strong>
                    <p>
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <BookingForm variant="full" title="Send Us a Message" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
