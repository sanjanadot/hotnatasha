import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroBanner from '@/components/HeroBanner';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';
import BookingForm from '@/components/BookingForm';
import { escortTypes, getEscortTypeBySlug, formatEscortTypeName } from '@/data/escort-types';
import { siteConfig } from '@/data/site-config';

interface PageProps {
  params: {
    type: string;
  };
}

// Generate static params for all escort types
export async function generateStaticParams() {
  return escortTypes.map((type) => ({
    type: type.slug,
  }));
}

// Generate metadata for each escort type page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const escortType = getEscortTypeBySlug(params.type);
  
  if (!escortType) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${escortType.name} in Pune | Premium Escorts Services | Hot Natasha`,
    description: `Discover premium ${escortType.name} in Pune with Hot Natasha. ${escortType.description} Book now for memorable experiences. Call +91-9038976363`,
    authors: [{ name: 'Hot Natasha', url: siteConfig.url }],
    alternates: {
      canonical: `${siteConfig.url}/${params.type}`,
    },
    openGraph: {
      title: `${escortType.name} in Pune | Hot Natasha`,
      description: `Experience the finest ${escortType.name} in Pune. ${escortType.description}`,
      url: `${siteConfig.url}/${params.type}`,
      siteName: 'Hot Natasha',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}/images/services/${params.type}.webp`,
          width: 1000,
          height: 600,
          alt: `${escortType.name} in Pune - Hot Natasha`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${escortType.name} in Pune | Hot Natasha`,
      description: `Premium ${escortType.name} in Pune — 24/7 available. Call +91-9038976363`,
      images: [`${siteConfig.url}/images/services/${params.type}.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

export default function EscortTypePage({ params }: PageProps) {
  const { type } = params;
  
  const escortType = getEscortTypeBySlug(type);
  
  // Check if escort type exists
  if (!escortType) {
    notFound();
  }

  // JSON-LD Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: escortType.name,
    description: escortType.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Pune',
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Banner */}
      <HeroBanner
        title={escortType.name}
        subtitle="Premium"
        highlightedWord="Pune"
        description={escortType.description}
      />

      {/* CTA */}
      <CTA />

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="title">
              {escortType.name} In <span className="text-highlight">Pune</span>
            </h1>
            <div className="diamond-line"></div>
            <p className="section-description">
              Discover the finest {escortType.name.toLowerCase()} in Pune with
              Hot Natasha. Our {escortType.name.toLowerCase()} are known for
              their elegance, charm, and professionalism, ensuring a memorable
              experience for those seeking companionship. {escortType.description}
            </p>
          </div>

          <div className="services-grid">
            <ServiceCard
              title="Russian Escorts"
              description="Discover the allure of refined Escorts with Russian Escorts in Pune. Known for their beauty and sophistication, these escorts offer memorable experiences."
              image="/images/russian-escorts.webp"
              href="/russian-escorts"
            />
            <ServiceCard
              title="VIP Escorts"
              description="Indulge in luxury and exclusivity with VIP Escorts in Pune. Hot and Sexy Natasha elite Escorts are perfect for adding charm to your evenings."
              image="/images/vip-escorts.webp"
              href="/vip-escorts"
            />
            <BookingForm variant="sidebar" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="title text-center">
            Why Choose Our <span className="text-highlight">{escortType.name}</span>?
          </h2>
          <div className="diamond-line"></div>

          <div className="content-block">
            <p>
              At Hot Natasha, we pride ourselves on offering the finest{' '}
              {escortType.name.toLowerCase()} in Pune. Our companions are
              carefully selected for their beauty, charm, and ability to create
              unforgettable experiences.
            </p>
            <p>
              Whether you're attending a corporate event, exploring Pune's
              vibrant nightlife, or seeking a private evening of relaxation,
              our {escortType.name.toLowerCase()} are here to exceed your
              expectations.
            </p>
          </div>

          <h3 className="subtitle">Premium Quality Service</h3>
          <div className="content-block">
            <p>
              We prioritize your privacy and comfort, ensuring that every
              interaction is seamless, professional, and enjoyable. Our team
              is committed to providing you with the highest level of service.
            </p>
          </div>

          <h3 className="subtitle">Book Now</h3>
          <div className="content-block">
            <p>
              Ready to experience the best {escortType.name.toLowerCase()} in
              Pune? Contact us now to book your appointment. We guarantee
              complete confidentiality and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Bottom Booking Form */}
      <section className="booking-section parallax">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-text">
              <h2>Book Your {escortType.name} Now!</h2>
              <div className="diamond-line-left"></div>
              <p>
                Send us your requirements by filling out the form below. Our
                dedicated team will get in touch with you promptly to confirm
                your booking.
              </p>
            </div>
            <div className="booking-form-container">
              <BookingForm variant="full" title="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
