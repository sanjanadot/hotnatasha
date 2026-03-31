import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, majorCities } from '@/data/site-config';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Locations',
  description: 'Find premium escort services in your city. Hot Natasha offers escort services across major cities in India.',
  alternates: {
    canonical: `${siteConfig.url}/location`,
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
                href={`/escorts-in-${city}`}
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
