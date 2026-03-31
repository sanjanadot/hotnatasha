import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTA from '@/components/CTA';
import BookingForm from '@/components/BookingForm';
import Stats from '@/components/Stats';
import { siteConfig, serviceCategories } from '@/data/site-config';

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

const puneAreas = [
  'Koregaon Park', 'Hinjewadi', 'Shivajinagar', 'Baner', 'Kothrud',
  'Viman Nagar', 'Hadapsar', 'Kharadi', 'Wakad', 'Aundh',
  'Deccan Gymkhana', 'Pimpri-Chinchwad', 'Magarpatta', 'Kalyani Nagar',
  'Wadgaon Sheri', 'Mundhwa', 'Pashan', 'Bavdhan', 'Katraj',
  'Kondhwa', 'Camp', 'Swargate', 'Sadashiv Peth', 'Shaniwar Wada',
  'Laxmi Road', 'Solapur Road', 'Airport Road', 'Wanowrie', 'NIBM Road',
  'Sus Road', 'Karve Nagar', 'Pune Cantonment', 'Yerwada', 'Wagholi',
];

const whyChooseFeatures = [
  {
    icon: 'fa-lock',
    title: '100% Confidential',
    desc: 'Every booking is handled with absolute discretion. Your personal details are never shared.',
  },
  {
    icon: 'fa-star',
    title: 'Premium Verified Escorts',
    desc: 'Every escort is personally verified for authenticity, beauty, and professionalism.',
  },
  {
    icon: 'fa-clock-o',
    title: '24/7 Available',
    desc: 'Available day and night to match your schedule anywhere across Pune.',
  },
  {
    icon: 'fa-mobile',
    title: 'Easy Booking',
    desc: 'Book via call, WhatsApp, or our online form in under 60 seconds.',
  },
  {
    icon: 'fa-map-marker',
    title: 'In-Call & Out-Call',
    desc: 'Services at your hotel, home, or our premium in-call locations across Pune.',
  },
  {
    icon: 'fa-shield',
    title: 'Safe & Hygienic',
    desc: 'We maintain the highest standards of safety and hygiene for every client.',
  },
];

const featuredServices = [
  { slug: 'russian-escorts', name: 'Russian Escorts', image: '/images/services/russian-escorts.webp' },
  { slug: 'vip-escorts', name: 'VIP Escorts', image: '/images/services/vip-escorts.webp' },
  { slug: 'model-escorts', name: 'Model Escorts', image: '/images/services/model-escorts.webp' },
  { slug: 'college-escorts', name: 'College Escorts', image: '/images/services/college-escorts.webp' },
  { slug: 'housewife-escorts', name: 'Housewife Escorts', image: '/images/services/housewife-escorts.webp' },
  { slug: 'independent-escorts', name: 'Independent Escorts', image: '/images/services/independent-escorts.webp' },
];

const faqItems = [
  {
    q: 'How can I book escorts in Pune through Hot Natasha?',
    a: 'Booking is simple and discreet. Browse our profiles, then call, WhatsApp, or fill the online form. Our team confirms your booking promptly.',
  },
  {
    q: 'Are your escort services confidential and safe?',
    a: 'Yes, 100% confidential. All bookings are handled privately and our professional team guarantees a secure, discreet experience for every client.',
  },
  {
    q: 'What kind of escorts are available in Pune?',
    a: 'Hot Natasha offers VIP escorts, model escorts, Russian escorts, college girls, housewives, independent escorts, and many more categories.',
  },
  {
    q: 'Are escort services available for both residents and travelers in Pune?',
    a: "Yes! Whether you're in Koregaon Park, Hinjewadi, or anywhere in Pune — we serve residents and hotel guests alike, 24/7.",
  },
];

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
        subtitle="Pune's Most Premium"
        highlightedWord="Pune"
        description="Discreet, luxurious, and unforgettable companionship in Pune. Verified escorts available 24/7 across Koregaon Park, Hinjewadi, Shivajinagar & all major areas."
      />

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <i className="fa fa-phone"></i>
              <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`}>{siteConfig.phone}</a>
            </div>
            <div className="trust-item">
              <i className="fa fa-whatsapp"></i>
              WhatsApp Available
            </div>
            <div className="trust-item">
              <i className="fa fa-clock-o"></i>
              24/7 Available in Pune
            </div>
            <div className="trust-item">
              <i className="fa fa-lock"></i>
              100% Confidential
            </div>
            <div className="trust-item">
              <i className="fa fa-map-marker"></i>
              All Pune Areas Covered
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services Section */}
      <section className="featured-services-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Independent Escorts In <span className="text-highlight">Pune</span>
            </h2>
            <div className="diamond-line"></div>
            <p className="section-description">
              Pune&apos;s most exclusive escorts service — from high-profile models and Russian escorts to VIP
              companions. Every escort is personally verified for beauty, professionalism, and discretion.
            </p>
          </div>
          <div className="featured-services-grid">
            {featuredServices.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="featured-service-card">
                <div className="featured-service-img">
                  <Image
                    src={service.image}
                    alt={`${service.name} in Pune`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="featured-service-overlay">
                    <span className="btn btn-primary">View Profiles</span>
                  </div>
                </div>
                <div className="featured-service-info">
                  <h3>{service.name} in Pune</h3>
                  <span className="service-link-arrow">
                    Book Now <i className="fa fa-angle-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* All Service Categories Grid */}
      <section className="service-types-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              All Escort Services in <span className="text-highlight">Pune</span>
            </h2>
            <div className="diamond-line"></div>
            <p className="section-description">
              Browse our complete range of escort categories — each features elite, verified escorts
              ready to provide a premium experience in Pune.
            </p>
          </div>
          <div className="service-types-grid">
            {serviceCategories.flat().map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="service-type-card">
                <i className="fa fa-diamond"></i>
                <span>{service.name}</span>
                <span className="service-type-arrow">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '35px' }}>
            <Link href="/services" className="btn btn-primary">
              View All Services &nbsp;<i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Why Choose <span className="text-highlight">Hot Natasha</span>
            </h2>
            <div className="diamond-line"></div>
            <p className="section-description">
              Pune&apos;s most trusted escort service — renowned for quality, discretion, and exceptional experiences
              that keep our clients coming back.
            </p>
          </div>
          <div className="features-grid">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="feature-box">
                <div className="feature-icon">
                  <i className={`fa ${feature.icon}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pune Areas */}
      <section className="pune-areas-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Escorts Available Across <span className="text-highlight">Pune</span>
            </h2>
            <div className="diamond-line"></div>
            <p className="section-description">
              Our premium escorts service covers every major area and neighbourhood in Pune.
              Wherever you are, we&apos;re just a call away.
            </p>
          </div>
          <div className="areas-cloud">
            {puneAreas.map((area) => (
              <span key={area} className="area-pill">
                <i className="fa fa-map-marker"></i> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* About + Booking Form Side-by-Side */}
      <section className="about-section">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text-col">
              <h2 className="title">
                About Our <span className="text-highlight">Escorts in Pune</span>
              </h2>
              <div className="diamond-line-left"></div>
              <p>
                Welcome to Hot Natasha — Pune&apos;s most refined and trusted escort service. We bring you a
                curated selection of premium companions including VIP escorts, model escorts, Russian escorts,
                and independent escorts, all based right here in Pune.
              </p>
              <p>
                Every escort in our network is personally verified for beauty, professionalism, and
                discretion. Whether you desire a sophisticated companion for a dinner event, a cultural tour
                of Pune&apos;s finest spots, or a private encounter, we tailor every experience to your
                preferences.
              </p>
              <h3 className="subtitle">Why Choose Our Escorts in Pune?</h3>
              <p>
                Our escorts embody elegance, confidence, and class. We are the trusted name in Pune for
                high-end escort services because we prioritise your privacy, comfort, and satisfaction —
                every single time.
              </p>
              <h3 className="subtitle">Book with Complete Confidence</h3>
              <p>
                Booking is simple, secure, and confidential. Call us, WhatsApp us, or fill out the form —
                our team confirms your booking promptly. Your privacy is our top priority.
              </p>
              <div className="about-cta-btns">
                <Link href="/booknow" className="btn btn-primary">
                  Book Now &nbsp;<i className="fa fa-calendar"></i>
                </Link>
                <Link href="/services" className="btn btn-outline-dark">
                  View Services &nbsp;<i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="about-form-col">
              <BookingForm variant="sidebar" />
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
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <i className="fa fa-question-circle"></i>
                  <h3>{item.q}</h3>
                </div>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Booking Form */}
      <section className="booking-section parallax">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-text">
              <h2>
                Book Your Exclusive <span className="text-highlight">Pune Experience</span> Now!
              </h2>
              <div className="diamond-line-left"></div>
              <p>
                Fill out the form and our team will get in touch to confirm your booking. Discreet,
                prompt, and professional.
              </p>
              <ul className="booking-features">
                <li><i className="fa fa-check"></i> 100% Confidential</li>
                <li><i className="fa fa-check"></i> Verified Escorts</li>
                <li><i className="fa fa-check"></i> Available 24/7 in Pune</li>
                <li><i className="fa fa-check"></i> In-Call &amp; Out-Call</li>
              </ul>
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
