import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Hot Natasha',
  description: 'The page you were looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
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
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '120px',
            color: '#d70000',
            marginBottom: '10px',
            lineHeight: 1,
          }}>404</h1>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Page Not Found</h2>
          <p style={{
            color: '#666',
            maxWidth: '500px',
            margin: '0 auto 30px',
          }}>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
