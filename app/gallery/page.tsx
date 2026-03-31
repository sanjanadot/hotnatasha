import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site-config';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our gallery of premium escorts in Pune. View profiles of our beautiful and professional companions.',
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
};

// Sample gallery images - these would come from your actual image files
const galleryImages = [
  { src: '/images/russian-escorts.webp', alt: 'Russian Escorts' },
  { src: '/images/vip-escorts.webp', alt: 'VIP Escorts' },
  { src: '/images/model-escorts.webp', alt: 'Model Escorts' },
  { src: '/images/college-escorts.webp', alt: 'College Escorts' },
  { src: '/images/housewife-escorts.webp', alt: 'Housewife Escorts' },
  { src: '/images/independent-escorts.webp', alt: 'Independent Escorts' },
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
