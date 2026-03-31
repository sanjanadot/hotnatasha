import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your booking request. We will contact you shortly.',
};

export default function ThankYouPage() {
  return (
    <section style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 0',
      marginTop: '100px',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '80px', color: '#4caf50', marginBottom: '30px' }}>
            <i className="fa fa-check-circle"></i>
          </div>
          <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Thank You!</h1>
          <p style={{ marginBottom: '15px', color: '#666' }}>
            Your booking request has been submitted successfully. Our team will
            contact you shortly to confirm your booking.
          </p>
          <p style={{ marginBottom: '15px', color: '#666' }}>
            For immediate assistance, you can also reach us at:
          </p>
          <div style={{
            background: '#f5f5f5',
            padding: '20px',
            borderRadius: '10px',
            margin: '30px 0',
          }}>
            <p style={{ margin: '10px 0' }}>
              <i className="fa fa-phone"></i>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} style={{ color: '#d70000', textDecoration: 'none', marginLeft: '10px' }}>
                {siteConfig.phone}
              </a>
            </p>
            <p style={{ margin: '10px 0' }}>
              <i className="fa fa-envelope"></i>
              <a href={`mailto:${siteConfig.email}`} style={{ color: '#d70000', textDecoration: 'none', marginLeft: '10px' }}>
                {siteConfig.email}
              </a>
            </p>
          </div>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
