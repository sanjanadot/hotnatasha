import { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';
import BookingForm from '@/components/BookingForm';
import Stats from '@/components/Stats';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Escorts in Pune - Premium VIP Escort Service',
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

// JSON-LD Schema for LocalBusiness
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hot Natasha Escorts in Pune',
  image: `${siteConfig.url}/images/banner/escorts-in-pune.webp`,
  '@id': siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: 'MH',
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5204,
    longitude: 73.8567,
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
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I book escorts in Pune through Hot Natasha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Booking an escort through Hot Natasha is simple and discreet. Just visit our website, browse the available profiles, and use the booking form to send your requirements. Our team will confirm your booking promptly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your escort services confidential and safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we prioritize your privacy and ensure all services are 100% confidential. Our professional team guarantees a secure and discreet experience for all clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of escorts are available in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hot Natasha offers a diverse selection of escorts in Pune, including high-profile models, VIP companions, Russian escorts, independent escorts, and elite professionals who cater to various preferences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are escort services available for both residents and travelers in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our services are available for both Pune residents and visitors. We cater to a wide range of clients, ensuring exceptional service regardless of your location.',
      },
    },
  ],
};

export default function HomePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <HeroBanner
        title="Escorts In Pune"
        subtitle="Your Ultimate"
        highlightedWord="Pune"
        description="Premium escorts in Pune offering luxurious and discreet companionship tailored to your desires. Experience elegance and sophistication."
      />

      {/* CTA */}
      <CTA />

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Independent Escorts In <span className="text-highlight">Pune</span>
            </h2>
            <div className="diamond-line"></div>
            <p className="section-description">
              Pune, known for its vibrant culture and bustling lifestyle, offers
              discreet and premium <strong>Escorts in Pune</strong> services that
              cater to diverse preferences. These Escorts In Pune are known for
              their elegance, charm, and professionalism, ensuring a memorable
              experience for those seeking companionship.
            </p>
          </div>

          <div className="services-grid">
            <ServiceCard
              title="Russian Escorts"
              description="Discover the allure of refined Escorts with Russian Escorts in Pune. Known for their beauty and sophistication, these escorts offer memorable experiences that cater to your unique desires."
              image="/images/russian-escorts.webp"
              href="/russian-escorts"
            />
            <ServiceCard
              title="VIP Escorts"
              description="Indulge in luxury and exclusivity with VIP Escorts in Pune. Hot and Sexy Natasha elite Escorts In Pune are perfect for adding charm and sophistication to your evenings."
              image="/images/vip-escorts.webp"
              href="/vip-escorts"
            />
            <BookingForm variant="sidebar" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Stats Section */}
      <Stats />

      {/* CTA */}
      <CTA />

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="title text-center">
            About Our <span className="text-highlight">Escorts in Pune</span>
          </h2>
          <div className="diamond-line"></div>
          
          <div className="content-block">
            <p>
              Welcome to a world of elegance and sophistication with our
              exclusive escorts in Pune. We offer you a personalized Escorts
              Service experience tailored to your preferences and desires.
            </p>
            <p>
              Each of our escorts is carefully selected for their beauty, charm,
              and ability to create a luxurious and memorable experience. They
              are professional, discreet, and committed to ensuring your
              satisfaction.
            </p>
          </div>

          <h3 className="subtitle">Why Choose Our Escorts in Pune?</h3>
          <div className="content-block">
            <p>
              Choosing the right escort is about more than just appearance—it's
              about connection, class, and creating a remarkable experience. Our
              escorts embody all these qualities and more, making us the trusted
              name in Pune for high-end Escorts Service services.
            </p>
            <p>
              We prioritize your privacy and comfort, ensuring that every
              interaction is seamless and enjoyable.
            </p>
          </div>

          <h3 className="subtitle">Exclusive Services Tailored for You</h3>
          <div className="content-block">
            <p>
              Our escorts are available for a range of services, ensuring that
              your specific needs are met. Whether it's a romantic dinner, a
              cultural tour of Pune, or a private evening, our professionals are
              here to make it special.
            </p>
          </div>

          <h3 className="subtitle">Book with Confidence</h3>
          <div className="content-block">
            <p>
              Booking our escorts in Pune is simple, secure, and hassle-free.
              We maintain complete confidentiality and provide professional
              service from start to finish. Your satisfaction and privacy are
              our top priorities.
            </p>
          </div>

          <h3 className="subtitle">Your Journey Begins Here</h3>
          <div className="content-block">
            <p>
              Discover the finest escorts in Pune who redefine luxury and
              Escorts Service. Whether it's for a special occasion or a private
              rendezvous, we promise an experience filled with elegance, charm,
              and sophistication.
            </p>
            <p>
              Contact us now to begin your journey with Pune's most exclusive
              and trusted escort service. Your satisfaction is our ultimate
              goal, and we look forward to serving you.
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
              <h2>Book Your Exclusive Experience Now!</h2>
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
