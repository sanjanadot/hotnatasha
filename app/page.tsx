import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTA from '@/components/CTA';
import BookingForm from '@/components/BookingForm';
import Stats from '@/components/Stats';
import { siteConfig, serviceCategories } from '@/data/site-config';

// ── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Escorts in Pune | #1 Premium VIP Escort Service | Hot Natasha',
  description:
    'Book premium escorts in Pune ✓ VIP, Russian & Model escorts ✓ 100% verified & confidential ✓ Available 24/7 across Koregaon Park, Hinjewadi & all Pune areas. Call +91-9038976363',
  keywords:
    'escorts in Pune, Pune escorts, VIP escorts Pune, Russian escorts Pune, model escorts Pune, independent escorts Pune, escort service Pune, call girls Pune, escorts near me Pune',
  authors: [{ name: 'Hot Natasha', url: siteConfig.url }],
  openGraph: {
    title: 'Escorts in Pune | #1 Premium VIP Escort Service | Hot Natasha',
    description:
      'Premium verified escorts in Pune — VIP, Russian, model escorts & more. 100% confidential. Available 24/7. Call +91-9038976363',
    url: siteConfig.url,
    siteName: 'Hot Natasha',
    images: [
      {
        url: `${siteConfig.url}/images/banner/escorts-in-pune.webp`,
        width: 1200,
        height: 630,
        alt: 'Escorts in Pune - Hot Natasha Premium Escort Service',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts in Pune | Hot Natasha',
    description: 'Premium verified escorts in Pune — 24/7 available. Call +91-9038976363',
    images: [`${siteConfig.url}/images/banner/escorts-in-pune.webp`],
  },
  alternates: { canonical: siteConfig.url },
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

// ── JSON-LD SCHEMAS ──────────────────────────────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hot Natasha Escorts in Pune',
  description:
    "Hot Natasha is Pune's most trusted premium escort service, offering verified VIP escorts, Russian escorts, model escorts and more — available 24/7 across all major Pune areas.",
  image: `${siteConfig.url}/images/banner/escorts-in-pune.webp`,
  '@id': siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  foundingDate: '2014',
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '7000',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: { '@type': 'City', name: 'Pune' },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.twitter],
  priceRange: '$$$',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url }],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Book an Escort in Pune',
  description: 'Simple 4-step process to book a premium escort in Pune through Hot Natasha.',
  totalTime: 'PT5M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Browse Escort Profiles',
      text: 'Browse verified escort profiles on hotnatasha.in. Choose from 24+ categories — VIP, Russian, model, college, housewife, and independent escorts.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Call or WhatsApp Us',
      text: 'Contact us at +91-9038976363 via call or WhatsApp. Share your preferred escort type, date, time, and Pune location.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Get Instant Confirmation',
      text: 'Our team confirms your booking within minutes. All details are shared securely and completely discreetly.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Enjoy Your Experience',
      text: 'Your verified escort arrives on time at your location. Enjoy a premium, professional, and unforgettable experience.',
    },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Escorts in Pune | Hot Natasha',
  description: 'Premium verified escorts in Pune — discreet, available 24/7.',
  url: siteConfig.url,
  inLanguage: 'en-IN',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.vso-speakable'],
  },
  about: { '@type': 'LocalBusiness', name: 'Hot Natasha Escorts in Pune' },
};

// 12 FAQs — ASO / VSO / Featured Snippet optimised
const faqItems = [
  {
    q: 'What are escorts in Pune?',
    a: "Escorts in Pune are professional adult companions who provide discreet, high-quality companionship services tailored to individual preferences. Hot Natasha offers Pune's most verified selection of VIP escorts, Russian escorts, model escorts, and independent escorts — available 24/7 across Koregaon Park, Hinjewadi, Shivajinagar, and all major areas.",
  },
  {
    q: 'How do I book an escort in Pune?',
    a: 'To book an escort in Pune through Hot Natasha: (1) Browse our verified profiles, (2) Call or WhatsApp +91-9038976363, (3) Share your preference, date, and location, (4) Receive instant confirmation. The entire booking process takes under 5 minutes.',
  },
  {
    q: 'Are escort services in Pune 100% confidential?',
    a: 'Yes, absolutely. Hot Natasha never shares your personal details with anyone. All bookings are handled privately, all communications are discreet, and our escorts maintain complete confidentiality throughout every engagement. Your privacy is our top priority.',
  },
  {
    q: 'What types of escorts are available in Pune?',
    a: 'Hot Natasha offers 24+ escort categories in Pune including VIP escorts, Russian escorts, model escorts, college girl escorts, housewife escorts, independent escorts, air hostess escorts, Punjabi escorts, South Indian escorts, Bengali escorts, and many more.',
  },
  {
    q: 'Are escort services available near me in Pune?',
    a: "Yes, Hot Natasha covers every major Pune neighbourhood. Whether you're in Koregaon Park, Hinjewadi, Shivajinagar, Baner, Viman Nagar, Hadapsar, Kharadi, Wakad, Aundh, Magarpatta, Kalyani Nagar, Camp, or anywhere in Pune — we're just a call away.",
  },
  {
    q: 'Are Hot Natasha escorts verified?',
    a: "Yes, every escort at Hot Natasha is personally verified before listing. We verify identity, authenticity, and professionalism to ensure a genuine, high-quality experience every time. With 7,000+ satisfied clients since 2014, our verification standards are Pune's highest.",
  },
  {
    q: 'Do you offer in-call and out-call escort services in Pune?',
    a: 'Yes, Hot Natasha offers both in-call and out-call escort services across Pune. For out-call, our escorts visit your hotel, home, or preferred location. For in-call, we have premium discreet locations available in key Pune areas including Koregaon Park and Shivajinagar.',
  },
  {
    q: 'Are escorts available 24/7 in Pune?',
    a: 'Yes, Hot Natasha escorts are available 24 hours a day, 7 days a week — including late nights, early mornings, weekends, and public holidays. We understand companionship needs arise at any hour, so we are always ready to assist you anywhere in Pune.',
  },
  {
    q: 'How quickly can I get an escort in Pune?',
    a: 'Hot Natasha offers fast, efficient bookings. Once you contact us at +91-9038976363 via call or WhatsApp, we confirm your booking within minutes. For immediate bookings in Pune, our escorts are typically available within 1–2 hours depending on your location.',
  },
  {
    q: 'Which is the best escort service in Pune?',
    a: "Hot Natasha is Pune's most trusted escort service — rated 4.9/5 by over 7,000 satisfied clients and operating since 2014. We stand out for 100% verified escorts, complete confidentiality, 24/7 availability, and a seamless booking experience across all Pune areas.",
  },
  {
    q: 'What makes VIP escorts in Pune different from regular escorts?',
    a: 'VIP escorts at Hot Natasha Pune are premium-tier companions — typically high-profile models, sophisticated professionals, or elite personalities. They offer a more exclusive, refined experience ideal for high-profile events, corporate dinners, luxury travel, or private engagements requiring elegance and class.',
  },
  {
    q: 'Is Hot Natasha a safe and legitimate escort service in Pune?',
    a: 'Yes. Hot Natasha operates with full transparency, legal compliance, and the highest safety standards. All escorts are health-verified, client data is fully protected, and every engagement is conducted professionally. We have maintained a 4.9/5 trust rating from 7,000+ clients over 10+ years.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

// ── PAGE DATA ────────────────────────────────────────────────────────────────
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
  { icon: 'fa-lock', title: '100% Confidential', desc: 'Every booking handled with absolute discretion. Your personal details are never shared with anyone.' },
  { icon: 'fa-check-circle', title: 'Personally Verified Escorts', desc: 'Every escort is verified for identity, beauty, and professionalism before being listed.' },
  { icon: 'fa-clock-o', title: 'Available 24/7', desc: 'Day, night, weekends, holidays — our escorts are available round the clock across all of Pune.' },
  { icon: 'fa-mobile', title: 'Book in Under 5 Minutes', desc: 'Call or WhatsApp at any time. Instant confirmation, zero paperwork, zero waiting.' },
  { icon: 'fa-map-marker', title: 'In-Call & Out-Call', desc: 'We serve your hotel, home, or premium in-call locations across 30+ Pune areas.' },
  { icon: 'fa-shield', title: 'Safe & Health-Verified', desc: 'Strict health, safety, and hygiene standards maintained for every client and engagement.' },
];

const featuredServices = [
  { slug: 'russian-escorts', name: 'Russian Escorts', image: '/images/services/russian-escorts.webp' },
  { slug: 'vip-escorts', name: 'VIP Escorts', image: '/images/services/vip-escorts.webp' },
  { slug: 'model-escorts', name: 'Model Escorts', image: '/images/services/model-escorts.webp' },
  { slug: 'college-escorts', name: 'College Escorts', image: '/images/services/college-escorts.webp' },
  { slug: 'housewife-escorts', name: 'Housewife Escorts', image: '/images/services/housewife-escorts.webp' },
  { slug: 'independent-escorts', name: 'Independent Escorts', image: '/images/services/independent-escorts.webp' },
];

const bookingSteps = [
  { step: '01', icon: 'fa-search', title: 'Browse & Choose', desc: 'Explore 24+ verified escort categories on our website — VIP, Russian, model, college, housewife, and more.' },
  { step: '02', icon: 'fa-phone', title: 'Call or WhatsApp', desc: 'Contact us at +91-9038976363. Tell us your type, date, time, and Pune location.' },
  { step: '03', icon: 'fa-check-square-o', title: 'Instant Confirmation', desc: 'Booking confirmed in minutes. All details shared securely and discreetly.' },
  { step: '04', icon: 'fa-heart', title: 'Enjoy the Experience', desc: 'Your verified escort arrives on time. Enjoy a premium, professional, unforgettable experience.' },
];

const testimonials = [
  {
    name: 'Rahul M.',
    area: 'Koregaon Park, Pune',
    rating: 5,
    text: 'Exceptional service from start to finish. The escort was exactly as described — beautiful, professional, and completely discreet. Booked within 10 minutes of calling. Hot Natasha is truly in a class of its own.',
    initials: 'RM',
  },
  {
    name: 'Vikram S.',
    area: 'Hinjewadi, Pune',
    rating: 5,
    text: "I've used multiple escort services in Pune but Hot Natasha is on a completely different level. Verified profiles, lightning-fast response, and 100% confidential. The VIP escort was truly world-class. Will absolutely book again.",
    initials: 'VS',
  },
  {
    name: 'Arjun P.',
    area: 'Viman Nagar, Pune',
    rating: 5,
    text: 'Booked a Russian escort for a private dinner event. The entire process was smooth and professional. Perfect discretion, punctual arrival, and an absolutely wonderful evening. Highly recommend to anyone in Pune.',
    initials: 'AP',
  },
];

const credentials = [
  { icon: 'fa-users', value: '7,000+', label: 'Satisfied Clients' },
  { icon: 'fa-star', value: '4.9 / 5', label: 'Average Rating' },
  { icon: 'fa-calendar', value: '10+ Yrs', label: 'Serving Pune' },
  { icon: 'fa-female', value: '27+', label: 'Elite Escorts' },
  { icon: 'fa-check', value: '100%', label: 'Verified Profiles' },
  { icon: 'fa-lock', value: '100%', label: 'Confidential' },
];

// ── COMPONENT ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schemas — LocalBusiness + BreadcrumbList + HowTo + WebPage (speakable) + FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO — above fold, LCP image has priority ── */}
      <HeroBanner
        title="Escorts In Pune"
        subtitle="Pune's No. 1 Premium"
        highlightedWord="Pune"
        description="Verified, discreet & luxurious escort service available 24/7 across Koregaon Park, Hinjewadi, Shivajinagar & all Pune areas. Rated 4.9/5 by 7,000+ clients."
      />

      {/* ── TRUST BAR ── */}
      <div className="trust-bar" role="complementary" aria-label="Trust signals and contact">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <i className="fa fa-star" aria-hidden="true"></i>
              <strong>4.9/5</strong>&nbsp;Rated — 7,000+ Reviews
            </div>
            <div className="trust-item">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} aria-label="Call Hot Natasha Pune">{siteConfig.phone}</a>
            </div>
            <div className="trust-item">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
              WhatsApp 24/7
            </div>
            <div className="trust-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              100% Verified Escorts
            </div>
            <div className="trust-item">
              <i className="fa fa-lock" aria-hidden="true"></i>
              100% Confidential
            </div>
            <div className="trust-item">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              Serving Pune Since 2014
            </div>
          </div>
        </div>
      </div>

      {/* ── ASO / ZERO POSITION ANSWER BLOCK — targets "what are escorts in Pune" featured-snippet query ── */}
      <section className="answer-block-section" aria-labelledby="answer-heading">
        <div className="container">
          <div className="answer-block">
            <div className="answer-block-icon" aria-hidden="true">
              <i className="fa fa-info-circle"></i>
            </div>
            <div className="answer-block-content vso-speakable">
              <h2 id="answer-heading">What Are Escorts in Pune?</h2>
              <p>
                <strong>Escorts in Pune</strong> are premium professional companions who provide discreet, high-quality
                companionship tailored to individual preferences. <strong>Hot Natasha</strong> is Pune&apos;s most trusted
                escort service — offering personally verified <strong>VIP escorts, Russian escorts, model escorts</strong>,
                and independent escorts available <strong>24/7 across all major Pune areas</strong> including Koregaon Park,
                Hinjewadi, Shivajinagar, Baner, and Viman Nagar.
                Rated <strong>4.9/5 by 7,000+ satisfied clients</strong> since 2014.
              </p>
              <div className="answer-tags">
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> Available 24/7 in Pune</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> 100% Verified Escorts</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> Fully Confidential</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> All Pune Areas Covered</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> In-Call &amp; Out-Call</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS — EEAT Authoritativeness Signals ── */}
      <section className="credentials-section" aria-label="Our credentials and track record">
        <div className="container">
          <div className="credentials-grid">
            {credentials.map((cred, index) => (
              <div key={index} className="credential-item">
                <i className={`fa ${cred.icon}`} aria-hidden="true"></i>
                <strong>{cred.value}</strong>
                <span>{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section className="featured-services-section" aria-labelledby="featured-services-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="featured-services-heading" className="title">
              Premium Escorts In <span className="text-highlight">Pune</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description vso-speakable">
              Browse Pune&apos;s most popular escort categories — each featuring personally verified, professional companions
              offering a discreet and luxurious experience tailored to your preferences.
            </p>
          </div>
          <div className="featured-services-grid">
            {featuredServices.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="featured-service-card" aria-label={`Book ${service.name} in Pune`}>
                <div className="featured-service-img">
                  <Image
                    src={service.image}
                    alt={`${service.name} in Pune — Hot Natasha`}
                    fill
                    loading="lazy"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="featured-service-overlay" aria-hidden="true">
                    <span className="btn btn-primary">View Profiles</span>
                  </div>
                </div>
                <div className="featured-service-info">
                  <h3>{service.name} in Pune</h3>
                  <span className="service-link-arrow" aria-hidden="true">
                    Book Now <i className="fa fa-angle-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {/* ── ALL SERVICE CATEGORY TYPES ── */}
      <section className="service-types-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="services-heading" className="title">
              All Escort Service Types in <span className="text-highlight">Pune</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description">
              Hot Natasha offers <strong>24+ verified escort categories</strong> in Pune. Whatever you&apos;re looking for
              — exotic, local, independent, or VIP — we have the perfect verified companion for you.
            </p>
          </div>
          <div className="service-types-grid">
            {serviceCategories.flat().map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="service-type-card">
                <i className="fa fa-diamond" aria-hidden="true"></i>
                <span>{service.name}</span>
                <span className="service-type-arrow" aria-hidden="true">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '35px' }}>
            <Link href="/services" className="btn btn-primary">
              View All Services &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW TO BOOK — ASO "how to" query + HowTo JSON-LD + VSO ── */}
      <section className="how-it-works-section" aria-labelledby="how-to-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="how-to-heading" className="title">
              How to Book an Escort in <span className="text-highlight">Pune</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description vso-speakable">
              Booking a premium escort in Pune through Hot Natasha is simple, fast, and completely discreet.
              Just 4 easy steps — done in under 5 minutes.
            </p>
          </div>
          <div className="steps-grid">
            {bookingSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number" aria-hidden="true">{step.step}</div>
                <div className="step-icon" aria-hidden="true">
                  <i className={`fa ${step.icon}`}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {index < bookingSteps.length - 1 && (
                  <div className="step-arrow" aria-hidden="true">
                    <i className="fa fa-angle-right"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="steps-cta">
            <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="btn btn-primary">
              <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call Now: {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <i className="fa fa-whatsapp" aria-hidden="true"></i>&nbsp; WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <Stats />

      {/* ── WHY CHOOSE US — VSO: "why is Hot Natasha Pune's best escort service?" ── */}
      <section className="why-choose-section" aria-labelledby="why-choose-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="why-choose-heading" className="title">
              Why is Hot Natasha Pune&apos;s <span className="text-highlight">Most Trusted</span> Escort Service?
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description vso-speakable">
              With 7,000+ satisfied clients, 10+ years of uninterrupted service, and a verified 4.9/5 rating —
              Hot Natasha is Pune&apos;s No. 1 escort service for quality, safety, and discretion.
            </p>
          </div>
          <div className="features-grid">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="feature-box">
                <div className="feature-icon" aria-hidden="true">
                  <i className={`fa ${feature.icon}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — EEAT Experience Signals ── */}
      <section className="testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="testimonials-heading" className="title">
              What Clients Say About <span className="text-highlight">Hot Natasha Pune</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description">
              Real feedback from verified clients across Pune. Join 7,000+ satisfied clients who trust Hot Natasha for
              premium, discreet, and unforgettable escort experiences.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }, (_, i) => (
                    <i key={i} className="fa fa-star" aria-hidden="true"></i>
                  ))}
                </div>
                <blockquote className="testimonial-text">
                  <p>&ldquo;{t.text}&rdquo;</p>
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar" aria-hidden="true">{t.initials}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUNE AREAS — Local SEO + VSO "escorts near me in Pune" ── */}
      <section className="pune-areas-section" aria-labelledby="areas-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="areas-heading" className="title">
              Find Escorts Near You in <span className="text-highlight">Pune</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description vso-speakable">
              Hot Natasha covers every major neighbourhood in Pune. Whether you search &quot;escorts near me in Pune&quot;
              or look for escorts in a specific area — we are always just one call away.
            </p>
          </div>
          <div className="areas-cloud" role="list" aria-label="Pune areas covered">
            {puneAreas.map((area) => (
              <span key={area} className="area-pill" role="listitem">
                <i className="fa fa-map-marker" aria-hidden="true"></i> {area}
              </span>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '30px' }}>
            <Link href="/location" className="btn btn-outline-light">
              View All Locations &nbsp;<i className="fa fa-map-marker" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      <CTA />

      {/* ── ABOUT + BOOKING FORM — EEAT Trustworthiness + Conversion ── */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text-col">
              <h2 id="about-heading" className="title">
                About <span className="text-highlight">Hot Natasha</span> — Pune&apos;s Premium Escort Service
              </h2>
              <div className="diamond-line-left" aria-hidden="true"></div>
              <p>
                <strong>Hot Natasha</strong> has been Pune&apos;s most trusted escort service since 2014 — built on trust,
                discretion, and excellence. Over 10+ years, we have earned the loyalty of 7,000+ clients across Pune, from
                Koregaon Park to Hinjewadi, Shivajinagar to Magarpatta.
              </p>
              <p>
                Every escort in our network undergoes a rigorous personal verification process — we confirm identity, health,
                and professionalism before any escort is listed. This commitment to quality is why our clients consistently
                rate us <strong>4.9 out of 5</strong>.
              </p>
              <h3 className="subtitle">Our Commitment to Quality, Safety &amp; Discretion</h3>
              <p>
                We operate with full transparency and legal compliance. Our team is reachable 24/7, our escort profiles are
                genuine and verified, and every booking is handled with utmost professionalism and complete confidentiality.
                Hot Natasha is Pune&apos;s most authoritative and experienced escort service — trusted by thousands.
              </p>
              <div className="eeat-badges">
                <div className="eeat-badge"><i className="fa fa-shield" aria-hidden="true"></i> <span>Legally Compliant</span></div>
                <div className="eeat-badge"><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Verified Profiles</span></div>
                <div className="eeat-badge"><i className="fa fa-lock" aria-hidden="true"></i> <span>Data Protected</span></div>
                <div className="eeat-badge"><i className="fa fa-calendar" aria-hidden="true"></i> <span>Trusted Since 2014</span></div>
              </div>
              <div className="about-cta-btns">
                <Link href="/booknow" className="btn btn-primary">
                  Book Now &nbsp;<i className="fa fa-calendar" aria-hidden="true"></i>
                </Link>
                <Link href="/about-us" className="btn btn-outline-dark">
                  About Us &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            <div className="about-form-col">
              <BookingForm variant="sidebar" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 12 FAQ — ASO / VSO / Zero Position Ranking ── */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="faq-heading" className="title">
              Frequently Asked Questions About <span className="text-highlight">Escorts in Pune</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description">
              Direct answers to the most commonly searched questions about escort services in Pune.
              Optimised for voice search, featured snippets, and zero-position Google results.
            </p>
          </div>
          <div className="faq-accordion" role="list">
            {faqItems.map((item, index) => (
              <details key={index} className="faq-item" role="listitem">
                <summary className="faq-question">
                  <span className="faq-q-number" aria-hidden="true">Q{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.q}</h3>
                  <span className="faq-toggle-icon" aria-hidden="true"><i className="fa fa-plus"></i></span>
                </summary>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM BOOKING FORM ── */}
      <section className="booking-section parallax" aria-labelledby="booking-heading">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-text">
              <h2 id="booking-heading">
                Book Your Exclusive <span className="text-highlight">Pune Experience</span> Now
              </h2>
              <div className="diamond-line-left" aria-hidden="true"></div>
              <p>
                Fill in the form or contact us directly — booking confirmed in minutes.
                Professional, discreet, and available 24/7 anywhere in Pune.
              </p>
              <ul className="booking-features">
                <li><i className="fa fa-check" aria-hidden="true"></i> 100% Confidential Booking</li>
                <li><i className="fa fa-check" aria-hidden="true"></i> Verified Escorts Only</li>
                <li><i className="fa fa-check" aria-hidden="true"></i> Available 24/7 in Pune</li>
                <li><i className="fa fa-check" aria-hidden="true"></i> In-Call &amp; Out-Call Services</li>
              </ul>
              <div className="booking-contact-btns">
                <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="btn btn-primary">
                  <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; {siteConfig.phone}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>&nbsp; WhatsApp
                </a>
              </div>
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

