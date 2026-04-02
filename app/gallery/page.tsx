import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site-config';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Escorts Gallery | Premium Escort Photos in Pune | Hot Natasha',
  description: 'Browse the Hot Natasha escort gallery — real photos of verified Russian, VIP, Model & independent escorts available in Pune. 100% authentic profiles.',
  authors: [{ name: 'Hot Natasha', url: siteConfig.url }],
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
  openGraph: {
    title: 'Escorts Gallery | Premium Escort Photos Pune | Hot Natasha',
    description: 'Real photos of verified premium escorts in Pune — Russian, VIP, Model & more.',
    url: `${siteConfig.url}/gallery`,
    siteName: 'Hot Natasha',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/services/russian-escorts.webp`,
        width: 1000,
        height: 600,
        alt: 'Escorts Gallery - Hot Natasha Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escorts Gallery | Hot Natasha Pune',
    description: 'Real photos of verified premium escorts in Pune.',
    images: [`${siteConfig.url}/images/services/russian-escorts.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

// Sample gallery images - these would come from your actual image files
const galleryImages = [
  { src: '/images/services/russian-escorts.webp',      alt: 'Russian Escorts in Pune - Hot Natasha' },
  { src: '/images/services/vip-escorts.webp',           alt: 'VIP Escorts in Pune - Hot Natasha' },
  { src: '/images/services/model-escorts.webp',         alt: 'Model Escorts in Pune - Hot Natasha' },
  { src: '/images/services/college-escorts.webp',       alt: 'College Girl Escorts in Pune - Hot Natasha' },
  { src: '/images/services/housewife-escorts.webp',     alt: 'Housewife Escorts in Pune - Hot Natasha' },
  { src: '/images/services/independent-escorts.webp',   alt: 'Independent Escorts in Pune - Hot Natasha' },
  { src: '/images/services/air-hostess-escorts.webp',   alt: 'Air Hostess Escorts in Pune - Hot Natasha' },
  { src: '/images/services/bengali-escorts.webp',       alt: 'Bengali Escorts in Pune - Hot Natasha' },
  { src: '/images/services/foreigner-escorts.webp',     alt: 'Foreigner Escorts in Pune - Hot Natasha' },
  { src: '/images/services/punjabi-escorts.webp',       alt: 'Punjabi Escorts in Pune - Hot Natasha' },
  { src: '/images/services/south-indian-escorts.webp',  alt: 'South Indian Escorts in Pune - Hot Natasha' },
  { src: '/images/services/marathi-escorts.webp',       alt: 'Marathi Escorts in Pune - Hot Natasha' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Inner Header */}
      <section 
        className="inner-header"
        style={{ backgroundImage: 'url(/images/bg/about-our-company.webp)' }}
      >
        <div className="container">
          <div className="header-content">
            <h1><span className="text-highlight">Gallery</span></h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="active">Gallery</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Our <span className="text-highlight">Premium Escorts</span>
            </h2>
            <div className="diamond-line"></div>
            <p className="section-description">
              Browse through our gallery to discover the stunning escorts
              available at Hot Natasha. Each profile showcases the beauty,
              elegance, and charm of our professional companions.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <h4>{image.alt}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
