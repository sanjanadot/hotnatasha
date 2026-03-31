import { Metadata } from 'next';
import { existsSync } from 'fs';
import { join } from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import HeroBanner from '@/components/HeroBanner';
import CTA from '@/components/CTA';
import BookingForm from '@/components/BookingForm';
import { locationSlugs, formatLocationName } from '@/data/locations';
import { siteConfig } from '@/data/site-config';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params?.slug;
  if (!slug) return { title: 'Location Not Found' };
  const loc = formatLocationName(slug);
  return {
    title: `Escorts in ${loc} | #1 Premium VIP Escort Service | Hot Natasha`,
    description: `Book premium escorts in ${loc} ✓ VIP, Russian & Model escorts ✓ 100% verified & confidential ✓ Available 24/7. Call +91-9038976363 for exclusive companionship in ${loc}.`,
    keywords: `escorts in ${loc}, ${loc} escorts, VIP escorts ${loc}, Russian escorts ${loc}, model escorts ${loc}, escort service ${loc}`,
    authors: [{ name: 'Hot Natasha', url: siteConfig.url }],
    openGraph: {
      title: `Escorts in ${loc} | Premium VIP Escort Service | Hot Natasha`,
      description: `Premium verified escorts in ${loc} — VIP, Russian, model & more. 100% confidential. Available 24/7. Call +91-9038976363`,
      url: `${siteConfig.url}/location/${slug}`,
      siteName: 'Hot Natasha',
      images: [{ url: `${siteConfig.url}/images/banner/escorts-in-pune.webp`, width: 1200, height: 630, alt: `Escorts in ${loc} — Hot Natasha` }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Escorts in ${loc} | Hot Natasha`,
      description: `Premium verified escorts in ${loc} — 24/7 available. Call +91-9038976363`,
      images: [`${siteConfig.url}/images/banner/escorts-in-pune.webp`],
    },
    alternates: { canonical: `${siteConfig.url}/location/${slug}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
  };
}

const credentials = [
  { icon: 'fa-users',   value: '7,000+',  label: 'Happy Clients' },
  { icon: 'fa-star',    value: '4.9/5',   label: 'Avg Rating' },
  { icon: 'fa-trophy',  value: '12+ Yrs', label: 'In Business' },
  { icon: 'fa-diamond', value: '200+',    label: 'Active Profiles' },
  { icon: 'fa-shield',  value: '100%',    label: 'Verified Escorts' },
  { icon: 'fa-lock',    value: '24/7',    label: 'Availability' },
];

const bookingSteps = [
  { step: '01', icon: 'fa-phone',        title: 'Call or WhatsApp',       desc: 'Reach our team on +91-9038976363. We answer 24 hours a day, 7 days a week — no voice menus, a real person picks up.' },
  { step: '02', icon: 'fa-comments',     title: 'Share Your Preferences',  desc: 'Tell us your location, preferred escort type, service, and available time. We share matching profiles instantly.' },
  { step: '03', icon: 'fa-check-circle', title: 'Booking Confirmed',       desc: 'Confirmed in minutes. Escort contacts you 30 minutes before arrival. Cash payment on arrival — zero advance required.' },
  { step: '04', icon: 'fa-star',         title: 'Enjoy Your Experience',   desc: 'Experience premium companionship. Your anonymous feedback helps us maintain our 4.9/5 standard.' },
];

const whyChooseFeatures = [
  { icon: 'fa-lock',         title: 'Absolute Privacy',       desc: '256-bit SSL encryption, NDAs for all staff, zero third-party data sharing. Your identity stays completely private.' },
  { icon: 'fa-check-circle', title: 'Verified Profiles Only', desc: 'Every escort is government-ID verified, personally interviewed, and health-screened before appearing on our platform.' },
  { icon: 'fa-clock-o',      title: '24/7 Availability',      desc: 'Our team and escorts are available round the clock — day, night, weekends, and public holidays without exception.' },
  { icon: 'fa-mobile',       title: 'Instant Confirmation',   desc: 'Fast bookings confirmed within minutes. Our team responds immediately via call or WhatsApp with zero delays.' },
  { icon: 'fa-map-marker',   title: 'Citywide Coverage',      desc: 'We cover hotels, residences, and private venues across the entire city and surrounding areas — in-call and out-call.' },
  { icon: 'fa-shield',       title: 'No Advance Payment',     desc: 'You pay only when the escort arrives — in cash. We never ask for tokens, deposits, or advance payments of any kind.' },
];

const allServices = [
  { slug: 'independent-escorts',  name: 'Independent Escorts',  image: '/images/services/independent-escorts.webp' },
  { slug: 'vip-escorts',          name: 'VIP Escorts',           image: '/images/services/vip-escorts.webp' },
  { slug: 'model-escorts',        name: 'Model Escorts',         image: '/images/services/model-escorts.webp' },
  { slug: 'russian-escorts',      name: 'Russian Escorts',       image: '/images/services/russian-escorts.webp' },
  { slug: 'college-escorts',      name: 'College Escorts',       image: '/images/services/college-escorts.webp' },
  { slug: 'housewife-escorts',    name: 'Housewife Escorts',     image: '/images/services/housewife-escorts.webp' },
  { slug: 'air-hostess-escorts',  name: 'Air Hostess Escorts',   image: '/images/services/air-hostess-escorts.webp' },
  { slug: 'hi-fi-escorts',        name: 'Hi-Fi Escorts',         image: '/images/services/hi-fi-escorts.webp' },
  { slug: 'celebrity-escorts',    name: 'Celebrity Escorts',     image: '/images/services/celebrity-escorts.webp' },
  { slug: 'north-indian-escorts', name: 'North Indian Escorts',  image: '/images/services/north-indian-escorts.webp' },
  { slug: 'punjabi-escorts',      name: 'Punjabi Escorts',       image: '/images/services/punjabi-escorts.webp' },
  { slug: 'bengali-escorts',      name: 'Bengali Escorts',       image: '/images/services/bengali-escorts.webp' },
];

export default function LocationPage({ params }: PageProps) {
  const slug = params?.slug;
  if (!slug || !locationSlugs.includes(slug)) notFound();

  const loc = formatLocationName(slug);

  const locationImagePath = `/images/escorts/escorts-in-${slug}.webp`;
  const locationImageSrc = existsSync(join(process.cwd(), 'public', locationImagePath))
    ? locationImagePath
    : '/images/escorts/bg-escorts.webp';

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Hot Natasha Escorts in ${loc}`,
    description: `Hot Natasha is the most trusted premium escort service in ${loc} — verified VIP escorts, Russian escorts, model escorts and more, available 24/7.`,
    image: `${siteConfig.url}/images/banner/escorts-in-pune.webp`,
    '@id': `${siteConfig.url}/location/${slug}`,
    url: `${siteConfig.url}/location/${slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: '2014',
    address: { '@type': 'PostalAddress', addressLocality: loc, addressRegion: 'IN', addressCountry: 'IN' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '7000', bestRating: '5', worstRating: '1' },
    priceRange: '$$$',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Location', item: `${siteConfig.url}/location` },
      { '@type': 'ListItem', position: 3, name: `Escorts in ${loc}`, item: `${siteConfig.url}/location/${slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `How do I book an escort in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Call or WhatsApp Hot Natasha on +91-9038976363. Share your ${loc} location, preferred escort type, and available time. Confirmed in minutes. Cash payment on arrival — zero advance.` } },
      { '@type': 'Question', name: `Are escorts available 24/7 in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Yes. Hot Natasha operates 24 hours a day, 7 days a week in ${loc} including weekends and public holidays.` } },
      { '@type': 'Question', name: `Is booking an escort in ${loc} discreet?`, acceptedAnswer: { '@type': 'Answer', text: `100% discreet. 256-bit SSL encryption, staff NDAs, zero third-party data sharing. Your ${loc} booking remains completely private.` } },
      { '@type': 'Question', name: `What escort types are available in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Independent, VIP, Russian, model, college, housewife, air hostess, hi-fi escorts and more — all in ${loc} for in-call and out-call.` } },
      { '@type': 'Question', name: `Do you offer out-call services in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Yes. Our escorts travel to your hotel, residence, or any discreet venue in ${loc} with full discretion.` } },
      { '@type': 'Question', name: `How quickly can an escort arrive in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Typically within 30–60 minutes of confirmation in ${loc}. The escort contacts you directly 30 minutes before arrival.` } },
    ],
  };

  const faqItems = [
    { q: `How do I book an escort in ${loc}?`,               a: `Call or WhatsApp Hot Natasha on +91-9038976363 anytime. Share your ${loc} location, preferred escort type, and time window. Booking confirmed in minutes with zero advance payment.` },
    { q: `Are escorts available 24/7 in ${loc}?`,            a: `Yes — Hot Natasha operates round the clock in ${loc}, including weekends and public holidays. Our team answers immediately and arranges a companion at any hour.` },
    { q: `Is booking an escort in ${loc} discreet?`,         a: `100% discreet. We use 256-bit SSL encryption, staff NDAs, and zero third-party data sharing. Your details and booking history in ${loc} are completely private.` },
    { q: `What escort types are available in ${loc}?`,       a: `Independent, VIP, Russian, model, college, housewife, air hostess, and hi-fi escorts — all available in ${loc} for both in-call and out-call bookings.` },
    { q: `Do you offer out-call services in ${loc}?`,        a: `Yes. Our escorts travel to your hotel, private residence, or any discreet venue in ${loc}. We are experienced with hotel discretion protocols for all major properties.` },
    { q: `How quickly can an escort arrive in ${loc}?`,      a: `Typically within 30–60 minutes of booking confirmation in ${loc}. The escort contacts you directly 30 minutes before arrival depending on your exact location in ${loc}.` },
    { q: `Are all escorts in ${loc} verified?`,              a: `Yes. Every escort undergoes our 4-stage verification: government ID check, authentic photo session, health screening, and a personal interview with our team. No unverified escort appears on our platform.` },
    { q: `How much do escort services cost in ${loc}?`,      a: `Pricing varies by escort type, duration, and in-call vs. out-call in ${loc}. Contact us on WhatsApp or call for a transparent, no-obligation quote. No hidden charges ever.` },
    { q: `Do you require advance payment for ${loc}?`,       a: `No. We never ask for advance payments, tokens, or deposits. You pay only in cash when the escort arrives at your ${loc} location. This is our firm zero-advance commitment.` },
    { q: `Can I see photos before booking in ${loc}?`,       a: `Yes. Our team shares verified profile photos on WhatsApp before confirming your ${loc} booking. All photos are taken by our in-house team — 100% authentic, recent, and accurate.` },
    { q: `Is your escort service legal in ${loc}?`,          a: `Hot Natasha provides adult companionship services based on mutual consent between adults. All operations in ${loc} comply with applicable Indian laws concerning adult companionship and privacy.` },
    { q: `How do I contact Hot Natasha for ${loc} escorts?`, a: `Call or WhatsApp us on +91-9038976363 — available 24/7. No account creation required. A real team member responds instantly and arranges your ${loc} escort directly.` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <HeroBanner
        title={`Escorts in ${loc}`}
        subtitle="Premium Escort Service"
        highlightedWord={loc}
        description={`Experience the finest escorts in ${loc} with Hot Natasha — verified, discreet & luxurious. Available 24/7. Rated 4.9/5 by 7,000+ clients.`}
        backgroundImage="/images/banner/escorts-in-pune.webp"
      />

      {/* ── TRUST BAR ── */}
      <div className="trust-bar" role="complementary" aria-label="Trust signals">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item"><i className="fa fa-star" aria-hidden="true"></i><strong>4.9/5</strong>&nbsp;Rated — 7,000+ Reviews</div>
            <div className="trust-item"><i className="fa fa-phone" aria-hidden="true"></i><a href={`tel:${siteConfig.phone.replace(/-/g,'')}`}>{siteConfig.phone}</a></div>
            <div className="trust-item"><i className="fa fa-whatsapp" aria-hidden="true"></i>WhatsApp 24/7</div>
            <div className="trust-item"><i className="fa fa-check-circle" aria-hidden="true"></i>100% Verified Escorts</div>
            <div className="trust-item"><i className="fa fa-lock" aria-hidden="true"></i>100% Confidential</div>
            <div className="trust-item"><i className="fa fa-calendar" aria-hidden="true"></i>Serving Since 2014</div>
          </div>
        </div>
      </div>

      {/* ── ANSWER BLOCK ── */}
      <section className="answer-block-section" aria-labelledby="answer-heading">
        <div className="container">
          <div className="answer-block">
            <div className="answer-block-content vso-speakable">
              <div className="answer-block-label">
                <i className="fa fa-info-circle" aria-hidden="true"></i> About Escorts in {loc}
              </div>
              <h1>What Are Escorts in {loc}?</h1>
              <p>
                <strong>Escorts in {loc}</strong> are premium professional companions who provide discreet, high-quality
                companionship tailored to individual preferences. <strong>Hot Natasha</strong> is {loc}&apos;s most trusted
                escort service — offering personally verified <strong>VIP escorts, Russian escorts, model escorts</strong>,
                and independent escorts available <strong>24/7 across {loc}</strong>.
                Rated <strong>4.9/5 by 7,000+ satisfied clients</strong> since 2014.
              </p>
              <div className="answer-tags">
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> Available 24/7 in {loc}</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> 100% Verified Escorts</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> Fully Confidential</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> In-Call &amp; Out-Call</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> No Advance Payment</span>
              </div>
              <div className="answer-block-cta">
                <a href={`tel:${siteConfig.phone.replace(/-/g,'')}`} className="btn btn-primary">
                  <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call Now
                </a>
                <Link href="/booknow" className="btn btn-outline-dark">
                  Book Now &nbsp;<i className="fa fa-calendar" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            <div className="answer-block-image">
              <Image
                src={locationImageSrc}
                alt={`Premium Escorts in ${loc} — Hot Natasha`}
                fill loading="lazy"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="answer-image-badge">
                <i className="fa fa-star" aria-hidden="true"></i> 4.9/5 &nbsp;&bull;&nbsp; 7,000+ Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS BAR ── */}
      <section className="credentials-section" aria-label="Our credentials">
        <div className="cred-bg-overlay" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cred-intro">
            <span className="cred-intro-line" aria-hidden="true"></span>
            <p className="cred-intro-text">Trusted by thousands across {loc}</p>
            <span className="cred-intro-line" aria-hidden="true"></span>
          </div>
          <div className="credentials-grid">
            {credentials.map((cred, index) => (
              <div key={index} className="credential-item">
                <div className="cred-icon-badge"><i className={`fa ${cred.icon}`} aria-hidden="true"></i></div>
                <strong className="cred-value">{cred.value}</strong>
                <span className="cred-label">{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="featured-services-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="services-heading" className="title">
              Escort Services In <span className="text-highlight">{loc}</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description vso-speakable">
              Browse our verified escort categories available in {loc} — personally verified, professional companions
              offering a discreet and luxurious experience tailored to your preferences.
            </p>
          </div>
          <div className="all-services-grid">
            {allServices.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="service-portrait-card" aria-label={`Book ${service.name} in ${loc}`}>
                <div className="service-portrait-img">
                  <Image
                    src={service.image}
                    alt={`${service.name} in ${loc} — Hot Natasha`}
                    fill loading="lazy"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                  <div className="service-portrait-overlay" aria-hidden="true">
                    <span className="btn btn-primary">View Profiles</span>
                  </div>
                </div>
                <div className="service-portrait-info">
                  <h3>{service.name}</h3>
                  <span className="service-portrait-loc">
                    <i className="fa fa-map-marker" aria-hidden="true"></i> {loc}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA title={`Looking for premium escorts in ${loc}? Call us now!`} buttonText="Book Now" buttonHref="/booknow" />

      {/* ── HOW TO BOOK ── */}
      <section className="how-it-works-section" aria-labelledby="how-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="how-heading" className="title">
              How to Book an Escort in <span className="text-highlight">{loc}</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description">
              Booking a premium escort in {loc} through Hot Natasha is simple, fast, and completely discreet — done in under 5 minutes.
            </p>
          </div>
          <div className="steps-grid">
            {bookingSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number" aria-hidden="true">{step.step}</div>
                <div className="step-icon" aria-hidden="true"><i className={`fa ${step.icon}`}></i></div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {index < bookingSteps.length - 1 && <div className="step-arrow" aria-hidden="true"><i className="fa fa-angle-right"></i></div>}
              </div>
            ))}
          </div>
          <div className="steps-cta">
            <a href={`tel:${siteConfig.phone.replace(/-/g,'')}`} className="btn btn-primary">
              <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call Now: {siteConfig.phone}
            </a>
            <a href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g,'')}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>&nbsp; WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-choose-section" aria-labelledby="why-heading">
        <div className="why-choose-bg-pattern" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title text-center" style={{ marginBottom: '52px' }}>
            <span className="why-choose-label">Why We&apos;re #1</span>
            <h2 id="why-heading" className="title" style={{ color: '#fff', marginTop: '14px' }}>
              Why Choose Hot Natasha in <span className="text-highlight">{loc}</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
          </div>
          <div className="features-grid">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="feature-box">
                <span className="feature-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="feature-icon-wrap">
                  <div className="feature-icon" aria-hidden="true">
                    <i className={`fa ${feature.icon}`}></i>
                  </div>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT + BOOKING FORM ── */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="about-bg-overlay" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-grid">
            <div className="about-text-col">
              <span className="about-label">Since 2014 &middot; {loc}&apos;s #1</span>
              <h2 id="about-heading" className="about-heading">
                Pune&apos;s Most Trusted Agency — Now in <span className="text-highlight">{loc}</span>
              </h2>
              <div className="about-quick-stats">
                <div className="about-stat-item"><strong>7,000+</strong><span>Happy Clients</span></div>
                <div className="about-stat-item"><strong>4.9★</strong><span>Avg Rating</span></div>
                <div className="about-stat-item"><strong>12+ Yrs</strong><span>In Business</span></div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.8', marginBottom: '24px' }}>
                Hot Natasha has been Pune&apos;s most trusted escort agency since 2014. We now serve clients in {loc}
                with the same uncompromising standards of quality, privacy, and professionalism that have earned us
                over 7,000 five-star reviews. Every escort is personally verified, health-screened, and interviewed by our team.
              </p>
              <ul className="about-features-list">
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> Government ID verified escorts</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> 100% authentic profile photos</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> Zero advance payment policy</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> In-call &amp; out-call in {loc}</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> 24/7 customer support team</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> NDAs signed by all staff</li>
              </ul>
            </div>
            <div className="about-form-col">
              <div className="about-form-card">
                <div className="about-form-card-header">
                  <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                  <span>Book an Escort in {loc}</span>
                </div>
                <div className="about-form-body">
                  <BookingForm variant="sidebar" />
                </div>
                <div className="about-form-trust">
                  <span><i className="fa fa-lock" aria-hidden="true"></i> 100% Private</span>
                  <span><i className="fa fa-check" aria-hidden="true"></i> No Advance</span>
                  <span><i className="fa fa-clock-o" aria-hidden="true"></i> 24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ — 6 + 6 two-column ── */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="faq-bg-pattern" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="faq-header">
            <span className="faq-label">FAQ</span>
            <h2 id="faq-heading" className="faq-heading">
              Escorts in {loc} — <span className="text-highlight">Frequently Asked Questions</span>
            </h2>
            <p className="faq-subhead">Everything you need to know about booking an escort in {loc} — answered directly.</p>
          </div>
          <div className="faq-layout">
            <div className="faq-accordion" role="list">
              {faqItems.slice(0, 6).map((item, index) => (
                <details key={index} className="faq-item" role="listitem">
                  <summary className="faq-question">
                    <span className="faq-q-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.q}</h3>
                    <span className="faq-toggle-icon" aria-hidden="true"><i className="fa fa-plus"></i></span>
                  </summary>
                  <div className="faq-answer"><p>{item.a}</p></div>
                </details>
              ))}
            </div>
            <div className="faq-accordion" role="list">
              {faqItems.slice(6, 12).map((item, index) => (
                <details key={index + 6} className="faq-item" role="listitem">
                  <summary className="faq-question">
                    <span className="faq-q-number" aria-hidden="true">{String(index + 7).padStart(2, '0')}</span>
                    <h3>{item.q}</h3>
                    <span className="faq-toggle-icon" aria-hidden="true"><i className="fa fa-plus"></i></span>
                  </summary>
                  <div className="faq-answer"><p>{item.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EEAT CONTENT ARTICLE ── */}
      <section className="eeat-article-section" aria-label={`Expert guide to escorts in ${loc}`}>
        <div className="container">
          <div className="eeat-article-header">
            <span className="eeat-article-label">Expert Guide</span>
            <h2 className="eeat-article-title">
              The Complete Guide to <span className="text-highlight">Escorts in {loc}</span>
            </h2>
            <div className="eeat-article-meta">
              <span><i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp; By Natasha — Founder, Hotnatasha.in</span>
              <span><i className="fa fa-calendar" aria-hidden="true"></i>&nbsp; Updated March 2026</span>
              <span><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp; 8 min read</span>
            </div>
          </div>

          <p className="eeat-lead">
            {loc} is one of India&rsquo;s most vibrant urban hubs — attracting professionals, business travellers,
            students, and long-term residents who all seek genuine, high-quality adult companionship. At Hotnatasha.in,
            we have been serving clients across Pune and {loc} since 2014 with the highest standards of privacy,
            professionalism, and personal care. This guide answers every question you might have about booking
            escorts in {loc}.
          </p>

          <div className="eeat-sections-grid">
            <article className="eeat-content-block">
              <h3><i className="fa fa-map-marker" aria-hidden="true"></i> Premium Escort Services in {loc}</h3>
              <p>
                {loc} has a growing population of educated, high-earning professionals who value their leisure time and
                personal experiences. Whether you are visiting {loc} on a business trip, relocating temporarily, or are
                a long-term resident looking for discreet companionship — Hot Natasha provides a curated selection of
                escorts who match your expectations perfectly.
              </p>
              <p>
                Our {loc} escort roster includes independent professionals, VIP companions, Russian and international
                models, college graduates, housewife escorts, air hostess companions, and hi-fi escorts — each personally
                verified and available for in-call sessions or out-call visits to your hotel or private address in {loc}.
              </p>
              <p>
                All our {loc} escorts are briefed on professionalism, time management, personal presentation, and
                client confidentiality. We maintain the same quality standards whether you are booking in {loc},
                central Pune, or any of the 18 cities we serve across India.
              </p>
            </article>

            <article className="eeat-content-block">
              <h3><i className="fa fa-shield" aria-hidden="true"></i> Safety &amp; Privacy When Booking in {loc}</h3>
              <p>
                Privacy is the most important concern for clients booking escort services in {loc}. We have designed
                every aspect of our operations around protecting your identity, your data, and your reputation.
              </p>
              <p>
                Our website uses 256-bit SSL encryption. Our team operates under individually signed non-disclosure
                agreements. We do not store payment card details beyond transaction completion and never sell, rent,
                or disclose client information to any third party.
              </p>
              <p>
                All our escorts arrive at your {loc} hotel or residence dressed appropriately with no identifying agency
                branding — ensuring complete privacy. Cash payment on arrival means there is no digital trail linked
                to your {loc} booking.
              </p>
            </article>
          </div>

          <div className="eeat-callout-box">
            <div className="eeat-callout-icon" aria-hidden="true"><i className="fa fa-trophy"></i></div>
            <div className="eeat-callout-content">
              <h4>Why Hot Natasha Is {loc}&apos;s Most Trusted Escort Agency</h4>
              <ul className="eeat-callout-list">
                <li><i className="fa fa-check-circle" aria-hidden="true"></i><strong>12+ Years Operating</strong> — Founded in 2014, over a decade of expertise, trust, and satisfaction brought to every {loc} booking.</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i><strong>4-Stage Verification</strong> — Government ID, authentic photos, health screening, and personal interview — every escort, every time.</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i><strong>Zero Advance Policy</strong> — We never ask for deposits or tokens. You pay only cash when the escort arrives. No exceptions.</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i><strong>7,000+ Verified Reviews</strong> — Real feedback from real clients across Pune and {loc} — a track record no competitor can match.</li>
              </ul>
            </div>
          </div>

          <div className="eeat-sections-grid">
            <article className="eeat-content-block">
              <h3><i className="fa fa-diamond" aria-hidden="true"></i> Types of Escort Services in {loc}</h3>
              <ul className="eeat-inline-list">
                <li><strong>Independent Escorts</strong> — Freelance professionals selected for personality, education, and presentation in {loc}.</li>
                <li><strong>VIP &amp; Hi-Fi Escorts</strong> — Premium companions for corporate events, private dinners, and exclusive engagements in {loc}.</li>
                <li><strong>Russian &amp; International Models</strong> — Exotic companions available in {loc} for high-profile occasions.</li>
                <li><strong>College Escorts</strong> — Young, educated graduates — fluent, engaging, and genuinely fun companions in {loc}.</li>
                <li><strong>Housewife Escorts</strong> — Mature, warm, attentive companions offering real emotional connection in {loc}.</li>
                <li><strong>Air Hostess Escorts</strong> — Poised, well-travelled companions ideal for business dinners and travel from {loc}.</li>
                <li><strong>Girlfriend Experience (GFE)</strong> — Extended companionship for overnight stays or longer engagements in {loc}.</li>
              </ul>
            </article>

            <article className="eeat-content-block">
              <h3><i className="fa fa-lock" aria-hidden="true"></i> Our 4-Stage Verification for {loc} Escorts</h3>
              <div className="eeat-process-steps">
                <div className="eeat-process-step">
                  <span className="eeat-step-num">01</span>
                  <div><strong>Identity Verification</strong> — Government-issued ID collected and checked before any escort joins our {loc} roster.</div>
                </div>
                <div className="eeat-process-step">
                  <span className="eeat-step-num">02</span>
                  <div><strong>Authentic Photography</strong> — All profile photos taken by our in-house team. No edited or AI-generated images. Ever.</div>
                </div>
                <div className="eeat-process-step">
                  <span className="eeat-step-num">03</span>
                  <div><strong>Health Screening</strong> — Regular health certifications required and maintained in strict confidence as a condition of membership.</div>
                </div>
                <div className="eeat-process-step">
                  <span className="eeat-step-num">04</span>
                  <div><strong>Personal Interview</strong> — Our team personally meets every {loc} escort, evaluating professionalism, communication, and consent standards.</div>
                </div>
              </div>
            </article>
          </div>

          <div className="eeat-booking-process">
            <h3 className="eeat-bp-heading">Book an Escort in {loc} — 4 Easy Steps</h3>
            <p className="eeat-bp-sub">Fast, discreet, confirmed in minutes. No account needed. No advance payment. Just call or WhatsApp.</p>
            <div className="eeat-bp-steps">
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                <h4>Step 1 — Call or WhatsApp</h4>
                <p>Call <strong>+91-9038976363</strong> — available 24/7 in {loc}. A real team member answers immediately.</p>
              </div>
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-comments" aria-hidden="true"></i></div>
                <h4>Step 2 — Share Preferences</h4>
                <p>Tell us your {loc} location, escort type, service, and time window. Profiles shared instantly on WhatsApp.</p>
              </div>
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                <h4>Step 3 — Confirmed in Minutes</h4>
                <p>Booking confirmed fast. Escort contacts you 30 min before arrival in {loc}. Cash payment on arrival only.</p>
              </div>
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-star" aria-hidden="true"></i></div>
                <h4>Step 4 — Enjoy &amp; Review</h4>
                <p>Experience {loc}&apos;s highest-rated escort service and keep our 4.9/5 standard alive with your feedback.</p>
              </div>
            </div>
            <div className="eeat-bp-cta">
              <a href={`tel:${siteConfig.phone.replace(/-/g,'')}`} className="btn btn-primary">
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call +91-9038976363
              </a>
              <a href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g,'')}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>&nbsp; WhatsApp Us Now
              </a>
            </div>
          </div>

        </div>
      </section>

      <CTA title={`Ready to book your premium escort in ${loc}?`} buttonText="Book Now" buttonHref="/booknow" />
    </>
  );
}
