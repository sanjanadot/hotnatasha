import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CTA from '@/components/CTA';
import BookingForm from '@/components/BookingForm';
import Stats from '@/components/Stats';
import { siteConfig } from '@/data/site-config';

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
  { name: 'Koregaon Park',    slug: 'koregaon-park' },
  { name: 'Hinjawadi',        slug: 'hinjawadi' },
  { name: 'Shivaji Nagar',    slug: 'shivaji-nagar' },
  { name: 'Baner',            slug: 'baner' },
  { name: 'Kothrud',          slug: 'kothrud' },
  { name: 'Viman Nagar',      slug: 'viman-nagar' },
  { name: 'Hadapsar',         slug: 'hadapsar' },
  { name: 'Kharadi',          slug: 'kharadi' },
  { name: 'Wakad',            slug: 'wakad' },
  { name: 'Aundh',            slug: 'aundh' },
  { name: 'Deccan',           slug: 'deccan' },
  { name: 'Chinchwad',        slug: 'chinchwad' },
  { name: 'Magarpatta',       slug: 'magarpatta' },
  { name: 'Kalyani Nagar',    slug: 'kalyani-nagar' },
  { name: 'Wadgaon Sheri',    slug: 'wadgaon-sheri' },
  { name: 'Pashan',           slug: 'pashan' },
  { name: 'Katraj',           slug: 'katraj' },
  { name: 'Kondhwa',          slug: 'kondhwa' },
  { name: 'Swargate',         slug: 'swargate' },
  { name: 'Shaniwar Wada',    slug: 'shaniwar-wada' },
  { name: 'Karve Nagar',      slug: 'karve-nagar' },
  { name: 'Yerwada',          slug: 'yerwada' },
  { name: 'Wagholi',          slug: 'wagholi' },
  { name: 'Akurdi',           slug: 'akurdi' },
  { name: 'Bhosari',          slug: 'bhosari' },
  { name: 'Boat Club Road',   slug: 'boat-club-road' },
  { name: 'Chakan',           slug: 'chakan' },
  { name: 'Dattawadi',        slug: 'dattawadi' },
  { name: 'Dehu Road',        slug: 'dehu-road' },
  { name: 'Dighi',            slug: 'dighi' },
  { name: 'Ghorpadi',         slug: 'ghorpadi' },
  { name: 'Khadki',           slug: 'khadki' },
  { name: 'Lohegaon',         slug: 'lohegaon' },
  { name: 'Lonawala',         slug: 'lonawala' },
  { name: 'Malewadi',         slug: 'malewadi' },
  { name: 'Model Colony',     slug: 'model-colony' },
  { name: 'Nigdi',            slug: 'nigdi' },
  { name: 'Phursungi',        slug: 'phursungi' },
  { name: 'Pimple Gurav',     slug: 'pimple-gurav' },
  { name: 'Pimple Saudagar',  slug: 'pimple-saudagar' },
  { name: 'Pune Nagar Road',  slug: 'pune-nagar-road' },
  { name: 'Ravet',            slug: 'ravet' },
  { name: 'Shivane',          slug: 'shivane' },
  { name: 'Shukrawar Peth',   slug: 'shukrawar-peth' },
  { name: 'Talawade',         slug: 'talawade' },
  { name: 'Bibwewadi',        slug: 'bibwewadi' },
  { name: 'Dhole Patil Nagar',slug: 'dhole-patil-nagar' },
  { name: 'Khandala',         slug: 'khandala' },
  { name: 'Sunarwadi',        slug: 'sunarwadi' },
  { name: 'Yewalewadi',       slug: 'yewalewadi' },
];

const metroLocations = [
  { name: 'Mumbai',    slug: 'mumbai',    image: '/images/location/escorts-in-mumbai.webp' },
  { name: 'Delhi',     slug: 'delhi',     image: '/images/location/escorts-in-delhi.webp' },
  { name: 'Bangalore', slug: 'bangalore', image: '/images/location/escorts-in-bangalore.webp' },
  { name: 'Hyderabad', slug: 'hyderabad', image: '/images/hyderabad/escorts-in-hyderabad.webp' },
  { name: 'Ahmedabad', slug: 'ahmedabad', image: '/images/location/escorts-in-ahmedabad.webp' },
  { name: 'Jaipur',    slug: 'jaipur',    image: '/images/location/escorts-in-jaipur.webp' },
  { name: 'Lucknow',   slug: 'lucknow',   image: '/images/location/escorts-in-lucknow.webp' },
  { name: 'Gurgaon',   slug: 'gurgaon',   image: '/images/location/escorts-in-gurgaon.webp' },
  { name: 'Noida',     slug: 'noida',     image: '/images/location/escorts-in-noida.webp' },
  { name: 'Indore',    slug: 'indore',    image: '/images/location/escorts-in-indore.webp' },
  { name: 'Bhopal',    slug: 'bhopal',    image: '/images/location/escorts-in-bhopal.webp' },
  { name: 'Goa',       slug: 'goa',       image: '/images/location/escorts-in-goa.webp' },
  { name: 'Ranchi',    slug: 'ranchi',    image: '/images/location/escorts-in-ranchi.webp' },
  { name: 'Nashik',    slug: 'nashik',    image: '/images/location/escorts-in-nashik.webp' },
  { name: 'Surat',     slug: 'surat',     image: '/images/location/escorts-in-surat.webp' },
  { name: 'Vadodara',  slug: 'vadodara',  image: '/images/location/escorts-in-vadodara.webp' },
  { name: 'Kanpur',    slug: 'kanpur',    image: '/images/location/escorts-in-kanpur.webp' },
  { name: 'Varanasi',  slug: 'varanasi',  image: '/images/location/escorts-in-varanasi.webp' },
];

const whyChooseFeatures = [
  { icon: 'fa-lock', title: '100% Confidential', desc: 'Every booking handled with absolute discretion. Your personal details are never shared with anyone.' },
  { icon: 'fa-check-circle', title: 'Personally Verified Escorts', desc: 'Every escort is verified for identity, beauty, and professionalism before being listed.' },
  { icon: 'fa-clock-o', title: 'Available 24/7', desc: 'Day, night, weekends, holidays — our escorts are available round the clock across all of Pune.' },
  { icon: 'fa-mobile', title: 'Book in Under 5 Minutes', desc: 'Call or WhatsApp at any time. Instant confirmation, zero paperwork, zero waiting.' },
  { icon: 'fa-map-marker', title: 'In-Call & Out-Call', desc: 'We serve your hotel, home, or premium in-call locations across 30+ Pune areas.' },
  { icon: 'fa-shield', title: 'Safe & Health-Verified', desc: 'Strict health, safety, and hygiene standards maintained for every client and engagement.' },
];

const allServices = [
  { slug: 'russian-escorts',      name: 'Russian Escorts',       image: '/images/services/russian-escorts.webp' },
  { slug: 'vip-escorts',          name: 'VIP Escorts',           image: '/images/services/vip-escorts.webp' },
  { slug: 'model-escorts',        name: 'Model Escorts',         image: '/images/services/model-escorts.webp' },
  { slug: 'college-escorts',      name: 'College Girl Escorts',  image: '/images/services/college-escorts.webp' },
  { slug: 'housewife-escorts',    name: 'Housewife Escorts',     image: '/images/services/housewife-escorts.webp' },
  { slug: 'independent-escorts',  name: 'Independent Escorts',   image: '/images/services/independent-escorts.webp' },
  { slug: 'air-hostess-escorts',  name: 'Air Hostess Escorts',   image: '/images/services/air-hostess-escorts.webp' },
  { slug: 'bengali-escorts',      name: 'Bengali Escorts',       image: '/images/services/bengali-escorts.webp' },
  { slug: 'foreigner-escorts',    name: 'Foreigner Escorts',     image: '/images/services/foreigner-escorts.webp' },
  { slug: 'gujarati-escorts',     name: 'Gujarati Escorts',      image: '/images/services/gujarati-escorts.webp' },
  { slug: 'punjabi-escorts',      name: 'Punjabi Escorts',       image: '/images/services/punjabi-escorts.webp' },
  { slug: 'south-indian-escorts', name: 'South Indian Escorts',  image: '/images/services/south-indian-escorts.webp' },
  { slug: 'north-indian-escorts', name: 'North Indian Escorts',  image: '/images/services/north-indian-escorts.webp' },
  { slug: 'marathi-escorts',      name: 'Marathi Escorts',       image: '/images/services/marathi-escorts.webp' },
  { slug: 'marwadi-escorts',      name: 'Marwadi Escorts',       image: '/images/services/marwadi-escorts.webp' },
  { slug: 'hot-bhabhi',           name: 'Hot Bhabhi Escorts',    image: '/images/services/bhabhi-escorts.webp' },
  { slug: 'hi-fi-escorts',        name: 'Hi-Fi Escorts',         image: '/images/services/hi-fi-escorts.webp' },
  { slug: 'teen-escorts',         name: 'Teen Escorts',          image: '/images/services/teen-escorts.webp' },
  { slug: 'unsatisfied-escorts',  name: 'Unsatisfied Escorts',   image: '/images/services/unsatisfied-escorts.webp' },
  { slug: 'muslim-escorts',       name: 'Muslim Escorts',        image: '/images/services/muslim-escorts.webp' },
  { slug: 'jaat-escorts',         name: 'Jaat Escorts',          image: '/images/services/jaat-escorts.webp' },
  { slug: 'lesbian-escorts',      name: 'Lesbian Escorts',       image: '/images/services/lesbian-escorts.webp' },
  { slug: 'shemale-escorts',      name: 'Shemale Escorts',       image: '/images/services/shemale-escorts.webp' },
  { slug: 'actress-escorts',      name: 'Actress Escorts',       image: '/images/services/celebrity-escorts.webp' },
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
  { icon: 'fa-trophy', value: '10+ Yrs', label: 'Serving Pune' },
  { icon: 'fa-diamond', value: '27+', label: 'Elite Escorts' },
  { icon: 'fa-shield', value: '100%', label: 'Verified Profiles' },
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
            <div className="answer-block-content vso-speakable">
              <div className="answer-block-label">
                <i className="fa fa-info-circle" aria-hidden="true"></i> About Escorts in Pune
              </div>
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
              <div className="answer-block-cta">
                <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="btn btn-primary">
                  <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call Now
                </a>
                <Link href="/booknow" className="btn btn-outline-dark">
                  Book Now &nbsp;<i className="fa fa-calendar" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            <div className="answer-block-image">
              <Image
                src="/images/escorts/escorts-in-pune.webp"
                alt="Premium Escorts in Pune — Hot Natasha"
                fill
                loading="lazy"
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

      {/* ── CREDENTIALS — EEAT Authoritativeness Signals ── */}
      <section className="credentials-section" aria-label="Our credentials and track record">
        <div className="cred-bg-overlay" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cred-intro">
            <span className="cred-intro-line" aria-hidden="true"></span>
            <p className="cred-intro-text">Trusted by thousands across Pune</p>
            <span className="cred-intro-line" aria-hidden="true"></span>
          </div>
          <div className="credentials-grid">
            {credentials.map((cred, index) => (
              <div key={index} className="credential-item">
                <div className="cred-icon-badge">
                  <i className={`fa ${cred.icon}`} aria-hidden="true"></i>
                </div>
                <strong className="cred-value">{cred.value}</strong>
                <span className="cred-label">{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES — portrait image cards, all 24 categories ── */}
      <section className="featured-services-section" aria-labelledby="featured-services-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="featured-services-heading" className="title">
              All Escort Services In <span className="text-highlight">Pune</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description vso-speakable">
              Browse all 24 verified escort categories in Pune — each featuring personally verified, professional companions
              offering a discreet and luxurious experience tailored to your preferences.
            </p>
          </div>
          <div className="all-services-grid">
            {allServices.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="service-portrait-card" aria-label={`Book ${service.name} in Pune`}>
                <div className="service-portrait-img">
                  <Image
                    src={service.image}
                    alt={`${service.name} in Pune — Hot Natasha`}
                    fill
                    loading="lazy"
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
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Pune
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />

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
        <div className="why-choose-bg-pattern" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title text-center">
            <span className="why-choose-label">Why Choose Us</span>
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
              <Link key={area.slug} href={`/location/${area.slug}`} className="area-pill" role="listitem">
                <i className="fa fa-map-marker" aria-hidden="true"></i> {area.name}
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '30px' }}>
            <Link href="/location" className="btn btn-outline-light">
              View All Pune Locations &nbsp;<i className="fa fa-map-marker" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── METRO CITIES — Pan-India location pages ── */}
      <section className="metro-cities-section" aria-labelledby="metro-heading">
        <div className="container">
          <div className="section-title text-center">
            <span className="metro-section-label">Pan-India Escort Services</span>
            <h2 id="metro-heading" className="title">
              Escort Services Across <span className="text-highlight">India&apos;s Top Cities</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description">
              Hot Natasha operates across 18+ major Indian metros — Mumbai, Delhi, Bangalore, Hyderabad and more.
              Premium, verified escorts available 24/7 in every city.
            </p>
          </div>
          <div className="metro-grid">
            {metroLocations.map((city) => (
              <Link key={city.slug} href={`/location/${city.slug}`} className="metro-card">
                <div className="metro-card-img">
                  <Image src={city.image} alt={`Escorts in ${city.name}`} fill sizes="(max-width:768px) 50vw, 20vw" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <div className="metro-card-overlay">
                  <span className="metro-card-name">{city.name}</span>
                  <span className="metro-card-cta">Explore <i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/location" className="btn btn-primary">
              View All City Locations &nbsp;<i className="fa fa-map-marker" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      <CTA />

      {/* ── ABOUT + BOOKING FORM — EEAT Trustworthiness + Conversion ── */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="about-bg-overlay" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-content-grid">

            {/* ── LEFT: About Text ── */}
            <div className="about-text-col">
              <span className="about-label">Since 2014 · Pune&apos;s #1</span>
              <h2 id="about-heading" className="about-heading">
                About <span className="text-highlight">Hot Natasha</span><br />
                Pune&apos;s Premium Escort Service
              </h2>
              <div className="about-divider" aria-hidden="true"></div>

              <div className="about-quick-stats">
                <div className="about-qs-item">
                  <strong>7,000+</strong><span>Happy Clients</span>
                </div>
                <div className="about-qs-sep" aria-hidden="true"></div>
                <div className="about-qs-item">
                  <strong>4.9 / 5</strong><span>Trust Rating</span>
                </div>
                <div className="about-qs-sep" aria-hidden="true"></div>
                <div className="about-qs-item">
                  <strong>10+ Yrs</strong><span>Experience</span>
                </div>
              </div>

              <p className="about-para">
                <strong>Hot Natasha</strong> has been Pune&apos;s most trusted escort service since 2014 — built on
                trust, discretion, and excellence. Over 10+ years, we have earned the loyalty of 7,000+ clients
                across Pune, from Koregaon Park to Hinjewadi, Shivajinagar to Magarpatta.
              </p>
              <p className="about-para">
                Every escort undergoes a rigorous personal verification process — identity, health, and
                professionalism confirmed before listing. This is why clients consistently rate us <strong>4.9 / 5</strong>.
              </p>

              <ul className="about-features-list">
                <li><i className="fa fa-shield" aria-hidden="true"></i> Legally Compliant &amp; Fully Transparent</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> 100% Personally Verified Escorts</li>
                <li><i className="fa fa-lock" aria-hidden="true"></i> Your Data is Always Protected</li>
                <li><i className="fa fa-clock-o" aria-hidden="true"></i> Available 24/7 Across All Pune Areas</li>
                <li><i className="fa fa-star" aria-hidden="true"></i> Trusted by 7,000+ Satisfied Clients</li>
              </ul>

              <div className="about-cta-btns">
                <Link href="/booknow" className="btn btn-primary">
                  Book Now &nbsp;<i className="fa fa-calendar" aria-hidden="true"></i>
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn btn-outline-light">
                  <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call Now
                </a>
              </div>
            </div>

            {/* ── RIGHT: Premium Booking Form ── */}
            <div className="about-form-col">
              <div className="about-form-card">
                <div className="about-form-card-header">
                  <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                  <h3>Book Your Experience</h3>
                  <p>Fast, discreet &amp; confirmed in minutes</p>
                </div>
                <BookingForm variant="sidebar" title="" />
                <div className="about-form-trust">
                  <span><i className="fa fa-lock" aria-hidden="true"></i> 100% Confidential</span>
                  <span><i className="fa fa-shield" aria-hidden="true"></i> Verified Service</span>
                  <span><i className="fa fa-clock-o" aria-hidden="true"></i> 24/7 Available</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 12 FAQ — ASO / VSO / Zero Position Ranking ── */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="faq-bg-pattern" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>

          <div className="faq-header">
            <span className="faq-label">FAQ</span>
            <h2 id="faq-heading" className="faq-heading">
              Frequently Asked <span className="text-highlight">Questions</span>
            </h2>
            <p className="faq-subhead">
              Everything you need to know about escorts in Pune — answered directly.
            </p>
          </div>

          <div className="faq-layout">

            {/* ── LEFT: First 6 ── */}
            <div className="faq-accordion" role="list">
              {faqItems.slice(0, 6).map((item, index) => (
                <details key={index} className="faq-item" role="listitem">
                  <summary className="faq-question">
                    <span className="faq-q-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.q}</h3>
                    <span className="faq-toggle-icon" aria-hidden="true">
                      <i className="fa fa-plus"></i>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* ── RIGHT: Last 6 ── */}
            <div className="faq-accordion" role="list">
              {faqItems.slice(6, 12).map((item, index) => (
                <details key={index + 6} className="faq-item" role="listitem">
                  <summary className="faq-question">
                    <span className="faq-q-number" aria-hidden="true">{String(index + 7).padStart(2, '0')}</span>
                    <h3>{item.q}</h3>
                    <span className="faq-toggle-icon" aria-hidden="true">
                      <i className="fa fa-plus"></i>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── EEAT CONTENT ARTICLE ── */}
      <section className="eeat-article-section" aria-label="Expert guide to escorts in Pune">
        <div className="container">

          {/* Article Header */}
          <div className="eeat-article-header">
            <span className="eeat-article-label">Expert Guide</span>
            <h2 className="eeat-article-title">
              The Complete Guide to <span className="text-highlight">Escorts in Pune</span> — Everything You Need to Know
            </h2>
            <div className="eeat-article-meta">
              <span><i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp; Written by Natasha — Founder &amp; Chief Consultant, Hotnatasha.in</span>
              <span><i className="fa fa-calendar" aria-hidden="true"></i>&nbsp; Last Updated: March 2026</span>
              <span><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp; 10 min read</span>
            </div>
          </div>

          {/* Lead Paragraph */}
          <p className="eeat-lead">
            Pune has transformed into one of India&rsquo;s most cosmopolitan cities — a thriving centre for IT and technology, world-class education, business travel, and a progressive social culture that is unmatched anywhere in Maharashtra. Alongside this rapid urban growth, the demand for premium, verified, and completely discreet escort services has increased considerably. At Hotnatasha.in, we have been Pune&rsquo;s most trusted escort agency since 2014 — serving over 7,000 satisfied clients, maintaining a 4.9-star average rating, and operating to the highest standards of safety, privacy, and professionalism. This comprehensive guide is designed to answer every question you may have before making a booking — written with complete transparency, because we believe informed clients make the best experiences.
          </p>

          {/* Section Grid — Row 1 */}
          <div className="eeat-sections-grid">

            <article className="eeat-content-block">
              <h3><i className="fa fa-map-marker" aria-hidden="true"></i> Why Pune Is India&rsquo;s Premier City for Escort Services</h3>
              <p>
                Pune&rsquo;s unique character sets it apart from every other Indian city. Home to over 60 major IT parks, hundreds of MNC offices, the prestigious campuses of IIT Pune, Symbiosis, and COEP, and a booming MICE (Meetings, Incentives, Conferences, and Exhibitions) sector — Pune attracts tens of thousands of high-earning professionals, corporate visitors, NRI travellers, and business delegates every single month.
              </p>
              <p>
                These individuals are sophisticated, time-poor, and value their privacy above almost everything else. They seek companions who are educated, well-presented, articulate, and genuinely engaging — not just physically attractive. Pune&rsquo;s progressive urban culture has enabled premium escort agencies like Hotnatasha to build reputation-driven businesses that prioritise both client welfare and escort safety in equal measure. Our escorts are confident, cultured women who accompany clients to corporate dinners, private events, weekend getaways across Pune, Lonavala, Lavasa, and Mahabaleshwar, and intimate one-on-one engagements tailored entirely to your preferences.
              </p>
              <p>
                Whether you are visiting Pune for a business trip or you are a long-term resident seeking premium companionship, our services are built to match your schedule, desired personality type, budget, and location — with zero compromise on discretion.
              </p>
            </article>

            <article className="eeat-content-block">
              <h3><i className="fa fa-trophy" aria-hidden="true"></i> Our Story — Over a Decade of Excellence in Pune</h3>
              <p>
                Hotnatasha was founded in 2014 by a team of hospitality industry veterans who saw a clear gap in Pune&rsquo;s market: high-net-worth clients wanted better than what existed, and the escorts themselves wanted a safer, more professional, and more respectful working environment. We launched with a curated roster of 12 hand-selected escorts and a simple philosophy — quality over quantity, safety above all else, and client satisfaction as the only acceptable standard.
              </p>
              <p>
                Over the past ten-plus years, we have grown into Pune&rsquo;s most recognised and respected escort agency. Today our platform features over 200 active profiles across multiple categories, geographic coverage across 18 major Indian cities including Mumbai, Delhi, Bangalore, Hyderabad, and Goa, and a client satisfaction score of 4.9 out of 5 independently reviewed by over 3,400 verified clients. Our founding and operations team includes specialists in hospitality management, legal compliance, digital privacy, and client relations — bringing institutional rigour to every aspect of our service.
              </p>
              <p>
                We are not a directory website or an aggregation platform. We are a fully managed agency. Every escort on our platform is personally known to our team, regularly reviewed, and supported in their professional development. This distinction matters profoundly — it is what separates a trustworthy agency from a random listing site.
              </p>
            </article>

          </div>

          {/* Highlight Callout */}
          <div className="eeat-callout-box">
            <div className="eeat-callout-icon" aria-hidden="true"><i className="fa fa-shield"></i></div>
            <div className="eeat-callout-content">
              <h4>Our Four Non-Negotiable Principles</h4>
              <ul className="eeat-callout-list">
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> <strong>Safety First</strong> — every escort is identity-verified, health-screened, and personally interviewed before joining our platform.</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> <strong>Absolute Privacy</strong> — 256-bit SSL encryption, zero third-party data sharing, no stored payment details.</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> <strong>Authentic Profiles</strong> — every photo is taken by our in-house team. What you see is exactly who you meet.</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> <strong>No Advance Payment</strong> — you pay only upon the escort&rsquo;s arrival. We never ask for prepayment, tokens, or deposits.</li>
              </ul>
            </div>
          </div>

          {/* Section Grid — Row 2 */}
          <div className="eeat-sections-grid">

            <article className="eeat-content-block">
              <h3><i className="fa fa-diamond" aria-hidden="true"></i> Types of Escort Services We Offer in Pune</h3>
              <p>
                We offer a comprehensive range of escort services tailored to different client preferences, occasions, and budgets. All services are available on both an in-call basis (at our partner locations across Pune) and out-call basis (your hotel, private residence, or any venue of your choice).
              </p>
              <ul className="eeat-inline-list">
                <li><strong>Independent High-Profile Escorts</strong> — curated freelance companions selected for presentation, communication, and professionalism.</li>
                <li><strong>College Escorts</strong> — educated young graduates from Pune&rsquo;s leading universities, fluent in English and Hindi, bright and genuinely engaging.</li>
                <li><strong>Housewife Escorts</strong> — mature, experienced companions offering warmth, emotional depth, and genuine intimacy for clients who value real connection.</li>
                <li><strong>Russian &amp; International Models</strong> — international companions available in Pune for high-profile engagements and private events.</li>
                <li><strong>Air Hostess &amp; Corporate Companions</strong> — poised, well-travelled escorts ideal for business dinners and corporate gatherings.</li>
                <li><strong>24-Hour Girlfriend Experience (GFE)</strong> — extended companionship packages for overnight stays, weekend trips, and travel accompaniment.</li>
                <li><strong>Massage &amp; Spa Escort Packages</strong> — relaxation-focused services combining therapeutic massage with companionship, available at your hotel or residence.</li>
              </ul>
            </article>

            <article className="eeat-content-block">
              <h3><i className="fa fa-lock" aria-hidden="true"></i> How We Verify Every Escort — Our 4-Stage Process</h3>
              <p>
                The single most important differentiator of Hotnatasha from other Pune escort agencies is our rigorous, non-negotiable verification process. We apply a four-stage onboarding system designed to protect both the escort and the client — and to ensure that every profile on our site is authentic, current, and trustworthy.
              </p>
              <div className="eeat-process-steps">
                <div className="eeat-process-step">
                  <span className="eeat-step-num">01</span>
                  <div><strong>Identity Verification</strong> — government-issued ID documents are collected and verified for every escort. No unverified individual appears on our platform under any circumstances.</div>
                </div>
                <div className="eeat-process-step">
                  <span className="eeat-step-num">02</span>
                  <div><strong>Authentic Profile Photography</strong> — all photos are taken by our in-house photography team. Every image is recent, accurate, and reflects exactly who you will meet.</div>
                </div>
                <div className="eeat-process-step">
                  <span className="eeat-step-num">03</span>
                  <div><strong>Health Screening</strong> — regular health certifications are required and maintained in strict confidence. We take sexual health seriously and make it a condition of platform membership.</div>
                </div>
                <div className="eeat-process-step">
                  <span className="eeat-step-num">04</span>
                  <div><strong>Personal Interview &amp; Orientation</strong> — our client relations team personally meets and assesses every escort before approval, evaluating professionalism, communication, and consent standards.</div>
                </div>
              </div>
            </article>

          </div>

          {/* Section Grid — Row 3 */}
          <div className="eeat-sections-grid">

            <article className="eeat-content-block">
              <h3><i className="fa fa-user-secret" aria-hidden="true"></i> Your Privacy — How We Protect It at Every Step</h3>
              <p>
                Privacy is not just a feature we offer — it is the architectural foundation of everything we do at Hotnatasha. We understand that many of our clients hold senior corporate positions, prominent family roles, or public professional identities. The absolute last thing any client needs is a private encounter influencing their personal or professional reputation.
              </p>
              <p>
                Our platform uses 256-bit SSL encryption across all web communications. Client data is stored on isolated, access-controlled servers with zero third-party sharing agreements — we do not sell, rent, or disclose your information to any advertising network, partner organisation, or government body except where legally compelled. Our entire booking team operates under individually signed non-disclosure agreements.
              </p>
              <p>
                All payments are processed through secure, PCI-DSS compliant gateways. We do not retain card details beyond transaction completion. For clients who require maximum financial discretion, cash payment upon escort arrival is fully accepted — with no digital record created on our end. Your booking history, contact details, and personal preferences are stored only for service continuity and are permanently deleted upon client request.
              </p>
            </article>

            <article className="eeat-content-block">
              <h3><i className="fa fa-map" aria-hidden="true"></i> Areas We Serve Across Pune &amp; Beyond</h3>
              <p>
                Our escorting services cover every major residential, commercial, and hospitality zone in Pune and the surrounding Pune Metropolitan Region. We have local knowledge of every area, ensureing that our escorts can reach you quickly, discretely, and confidently wherever you are based.
              </p>
              <p>
                <strong>Core Pune Areas:</strong> Koregaon Park, Baner, Hinjewadi, Kothrud, Kharadi, Viman Nagar, Camp (Cantonment), Deccan Gymkhana, Shivajinagar, Aundh, Wakad, Pimple Saudagar, Magarpatta City, Hadapsar, Kondhwa, Balewadi, and Kalyani Nagar.
              </p>
              <p>
                <strong>Extended Coverage:</strong> Pimpri-Chinchwad, Lohegaon (Airport Area), Wagholi, Undri, Ambegaon, Katraj, Warje, Bavdhan, and the resort towns of Lonavala, Lavasa, Khandala, and Talegaon.
              </p>
              <p>
                Out-call services extend to all premium hotels in Pune including JW Marriott, The Westin, The Lalit, Hyatt Regency, Novotel Pune, Conrad Pune, Sheraton Grand, Oakwood, and every major 3-, 4-, and 5-star property across the city. We are experienced in hotel-specific protocols and ensure that all arrivals are handled with complete discretion without attracting attention.
              </p>
            </article>

          </div>

          {/* Booking Process */}
          <div className="eeat-booking-process">
            <h3 className="eeat-bp-heading">How to Book — Simple, Fast &amp; Completely Confidential</h3>
            <p className="eeat-bp-sub">Booking with Hotnatasha is designed to be frictionless, fast, and private. No account creation required. No awkward forms. Just a direct conversation with our team.</p>
            <div className="eeat-bp-steps">
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                <h4>Step 1 — Call or WhatsApp</h4>
                <p>Reach our team directly on <strong>+91-9038976363</strong>. Available 24 hours a day, 7 days a week. No recorded IVR menus — a real team member picks up.</p>
              </div>
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-comments" aria-hidden="true"></i></div>
                <h4>Step 2 — Share Your Preferences</h4>
                <p>Tell us your location in Pune, your preferred escort type, desired service, and your available time window. Our advisor will share matching profiles immediately.</p>
              </div>
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                <h4>Step 3 — Confirmed in Minutes</h4>
                <p>Your booking is confirmed within minutes. The escort will contact you directly 30 minutes before arrival. Payment is made in cash upon arrival — zero advance payment required.</p>
              </div>
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-star" aria-hidden="true"></i></div>
                <h4>Step 4 — Enjoy &amp; Review</h4>
                <p>Experience Pune&rsquo;s highest-rated escort service. After your appointment, your anonymous feedback helps us maintain the quality that 7,000+ clients trust us for.</p>
              </div>
            </div>
            <div className="eeat-bp-cta">
              <a href={`tel:${siteConfig.phone.replace(/-/g, '')}`} className="btn btn-primary">
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call +91-9038976363
              </a>
              <a href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>&nbsp; WhatsApp Us Now
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

