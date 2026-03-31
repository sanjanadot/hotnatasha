import { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Hot Natasha for premium escort services in Pune. Contact us via phone, email, or our booking form.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
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
