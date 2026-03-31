import { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Book Now',
  description: 'Book your premium escort experience with Hot Natasha in Pune. Simple, secure, and confidential booking process.',
  alternates: {
    canonical: `${siteConfig.url}/booknow`,
  },
};

export default function BookNowPage() {
  return (
    <>
      {/* Inner Header */}
      <section 
        className="inner-header"
        style={{ backgroundImage: 'url(/images/bg/about-our-company.webp)' }}
      >
        <div className="container">
          <div className="header-content">
            <h1>Book <span className="text-highlight">Now</span></h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="active">Book Now</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-page-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Book Your <span className="text-highlight">Exclusive Experience</span>
            </h2>
            <div className="diamond-line"></div>
            <p className="section-description">
              Ready to experience the finest escort services in Pune? Fill out the
              form below with your requirements, and our team will get back to you
              promptly to confirm your booking.
            </p>
          </div>

          <div className="booking-features">
            <div className="feature">
              <i className="fa fa-lock"></i>
              <h4>100% Secure</h4>
              <p>Your information is completely secure and confidential.</p>
            </div>
            <div className="feature">
              <i className="fa fa-clock-o"></i>
              <h4>Quick Response</h4>
              <p>We respond to all booking requests within 30 minutes.</p>
            </div>
            <div className="feature">
              <i className="fa fa-check-circle"></i>
              <h4>Verified Escorts</h4>
              <p>All our escorts are verified and professional.</p>
            </div>
          </div>

          <div className="booking-form-large">
            <BookingForm variant="full" title="Complete Your Booking" />
          </div>
        </div>
      </section>
    </>
  );
}
