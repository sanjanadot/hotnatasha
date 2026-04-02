import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, majorCities } from '@/data/site-config';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Escorts Service Locations Across India | Hot Natasha',
  description: 'Hot Natasha provides premium escorts in 20+ Indian cities — Pune, Mumbai, Delhi, Bangalore, Hyderabad, Goa, Jaipur & more. Call +91-9038976363 for instant booking.',
  authors: [{ name: 'Hot Natasha', url: siteConfig.url }],
  alternates: {
    canonical: `${siteConfig.url}/location`,
  },
  openGraph: {
    title: 'Escorts Service Locations Across India | Hot Natasha',
    description: 'Premium escorts available in 20+ major Indian cities. Verified, confidential, 24/7. Book now.',
    url: `${siteConfig.url}/location`,
    siteName: 'Hot Natasha',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/location/escorts-in-pune.webp`,
        width: 1000,
        height: 600,
        alt: 'Escorts Service Locations Across India — Hot Natasha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escort Service Locations | Hot Natasha',
    description: 'Premium escorts in 20+ Indian cities. 24/7 available. Call +91-9038976363.',
    images: [`${siteConfig.url}/images/location/escorts-in-pune.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

// Format city name for display
function formatCityName(city: string): string {
  return city.charAt(0).toUpperCase() + city.slice(1);
}

export default function LocationPage() {
  return (
    <>
      {/* Inner Header */}
      <section 
        className="inner-header"
        style={{ backgroundImage: 'url(/images/bg/about-our-company.webp)' }}
      >
        <div className="container">
          <div className="header-content">
            <h1>Our <span className="text-highlight">Locations</span></h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="active">Location</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Escorts Services <span className="text-highlight">Across India</span>
            </h2>
            <div className="diamond-line"></div>
            <p className="section-description">
              Hot Natasha provides premium escort services in major cities across
              India. Click on any city below to explore our services in that
              location.
            </p>
          </div>

          <div className="locations-grid">
            {majorCities.map((city) => (
              <Link
                key={city}
                href={`/location/${city}`}
                className="location-card"
              >
                <div className="location-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <h3>Escorts in {formatCityName(city)}</h3>
                <p>Premium escort services in {formatCityName(city)}</p>
                <span className="btn-link">
                  View Services <i className="fa fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
