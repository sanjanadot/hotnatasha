import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroBanner from '@/components/HeroBanner';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';
import BookingForm from '@/components/BookingForm';
import { locationSlugs, formatLocationName } from '@/data/locations';
import { siteConfig } from '@/data/site-config';
import { escortTypes } from '@/data/escort-types';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all locations
export async function generateStaticParams() {
  return locationSlugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each location page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params?.slug;
  if (!slug) {
    return {
      title: 'Location Not Found',
    };
  }
  
  const locationName = formatLocationName(slug);
  
  return {
    title: `Hot Natasha Escorts in ${locationName} | Premium Escorts Services`,
    description: `Hot Natasha Escorts In ${locationName} offers premium escorts in ${locationName} with the best Escorts Service services. Professional, discreet, and luxurious experiences await. Book now for memorable moments.`,
    alternates: {
      canonical: `${siteConfig.url}/escorts-in-${slug}`,
    },
    openGraph: {
      title: `Hot Natasha Escorts in ${locationName} | Premium Escorts Services`,
      description: `Discover Hot Natasha Escorts In ${locationName}, your go-to destination for premium escorts in ${locationName}. Enjoy professional and luxurious Escorts Service services tailored to your desires. Book now.`,
      images: [
        {
          url: `${siteConfig.url}/images/banner/escorts-in-pune.webp`,
          width: 1240,
          height: 600,
          alt: `Premium Escorts in ${locationName} Services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Hot Natasha Escorts in ${locationName} | Premium Escorts Services`,
      description: `Experience the finest escorts in ${locationName} with Hot Natasha. We offer professional, discreet, and luxurious Escorts Service services. Contact us now!`,
    },
  };
}

export default function LocationPage({ params }: PageProps) {
  const slug = params?.slug;
  
  // Check if location exists
  if (!slug || !locationSlugs.includes(slug)) {
    notFound();
  }

  const locationName = formatLocationName(slug);

  // JSON-LD Schemas
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Hot Natasha Escorts in ${locationName}`,
    image: `${siteConfig.url}/images/banner/escorts-in-pune.webp`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Premium Location',
      addressLocality: locationName,
      addressRegion: 'IN',
      postalCode: '400001',
      addressCountry: 'IN',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
    ],
    priceRange: '$$$',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Escorts in ${locationName}`,
        item: `${siteConfig.url}/escorts-in-${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <HeroBanner
        title={`Escorts in ${locationName}`}
        subtitle="Premium Escort Services"
        description={`Experience the finest escorts in ${locationName} with Hot Natasha. We offer professional, discreet, and luxurious services tailored to your desires.`}
        backgroundImage="/images/banner/escorts-in-pune.webp"
      />

      {/* CTA Section */}
      <CTA
        title={`Looking for premium escorts in ${locationName}? Contact us now!`}
        buttonText="Book Now"
        buttonHref="/booknow"
      />

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="title">
              Hot Natasha – <span className="text-highlight">Escorts in {locationName}</span>
            </h1>
            <div className="diamond-line"></div>
          </div>
          <div className="section-description">
            <p>
              Welcome to Hot Natasha Escorts in {locationName}, your premier destination for 
              exceptional escort services. We pride ourselves on offering a curated selection 
              of sophisticated, intelligent, and charming companions who are dedicated to making 
              your experience truly memorable.
            </p>
            <p>
              Our {locationName} escorts are carefully selected based on their elegance, 
              personality, and ability to provide genuine companionship. Whether you&apos;re 
              attending a corporate event, exploring the city, or simply seeking pleasant 
              company, our escorts are perfect companions for any occasion.
            </p>
            <p>
              At Hot Natasha, we understand that discretion and professionalism are paramount. 
              All our services are conducted with the utmost respect for your privacy. Our team 
              in {locationName} is available 24/7 to assist you in finding the perfect companion 
              for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Our <span className="text-highlight">Services in {locationName}</span>
            </h2>
            <div className="diamond-line"></div>
          </div>
          <div className="services-grid">
            {escortTypes.slice(0, 6).map((type) => (
              <ServiceCard
                key={type.slug}
                title={`${type.name} in ${locationName}`}
                description={`Experience our premium ${type.name.toLowerCase()} services in ${locationName}. Professional and discreet companionship.`}
                image={`/images/services/${type.slug}.webp`}
                href={`/${type.slug}`}
                location={locationName}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Why Choose <span className="text-highlight">Hot Natasha in {locationName}</span>
            </h2>
            <div className="diamond-line"></div>
          </div>
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div className="feature-item" style={{ textAlign: 'center', padding: '30px' }}>
              <i className="fa fa-star" style={{ fontSize: '40px', color: '#d70000', marginBottom: '15px' }}></i>
              <h3>Premium Quality</h3>
              <p>Handpicked escorts who meet the highest standards of elegance and sophistication.</p>
            </div>
            <div className="feature-item" style={{ textAlign: 'center', padding: '30px' }}>
              <i className="fa fa-lock" style={{ fontSize: '40px', color: '#d70000', marginBottom: '15px' }}></i>
              <h3>100% Discretion</h3>
              <p>Your privacy is our top priority. All interactions are completely confidential.</p>
            </div>
            <div className="feature-item" style={{ textAlign: 'center', padding: '30px' }}>
              <i className="fa fa-clock-o" style={{ fontSize: '40px', color: '#d70000', marginBottom: '15px' }}></i>
              <h3>24/7 Availability</h3>
              <p>Our services are available round the clock to accommodate your schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-text">
              <h2>Book Your {locationName} Escort Today</h2>
              <p>
                Ready to experience the finest escort services in {locationName}? 
                Fill out our booking form or call us directly, and our team will 
                arrange the perfect companion for you.
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} style={{ color: '#fff' }}>
                  {siteConfig.phone}
                </a>
              </p>
            </div>
            <div className="booking-form-container">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Frequently Asked <span className="text-highlight">Questions</span>
            </h2>
            <div className="diamond-line"></div>
          </div>
          <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="accordion-item">
              <h4>How do I book an escort in {locationName}?</h4>
              <p>You can book by filling out our online form, calling us directly, or using WhatsApp. Our team will guide you through the process.</p>
            </div>
            <div className="accordion-item">
              <h4>Are your services available 24/7 in {locationName}?</h4>
              <p>Yes, our escort services are available round the clock in {locationName}. You can book at any time.</p>
            </div>
            <div className="accordion-item">
              <h4>Is my privacy protected?</h4>
              <p>Absolutely. We maintain strict confidentiality and never share client information. Your privacy is our top priority.</p>
            </div>
            <div className="accordion-item">
              <h4>Do you provide outcall services in {locationName}?</h4>
              <p>Yes, we provide both incall and outcall services in {locationName}. Our escorts can visit your hotel or preferred location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        title={`Ready to book your premium escort in ${locationName}?`}
        buttonText="Book Now"
        buttonHref="/booknow"
      />
    </>
  );
}
