import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { escortTypes } from '@/data/escort-types';
import { siteConfig } from '@/data/site-config';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our premium escort services in Pune. From Russian escorts to VIP companions, discover the perfect match for your desires.',
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Inner Header */}
      <section 
        className="inner-header"
        style={{ backgroundImage: 'url(/images/bg/about-our-company.webp)' }}
      >
        <div className="container">
          <div className="header-content">
            <h1>Our <span className="text-highlight">Services</span></h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="active">Services</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-listing">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Premium <span className="text-highlight">Escort Services</span> in Pune
            </h2>
            <div className="diamond-line"></div>
            <p className="section-description">
              Discover our wide range of premium escort services tailored to meet
              your every desire. Each category offers unique experiences with
              professional, discreet, and elegant companions.
            </p>
          </div>

          <div className="services-grid-full">
            {escortTypes.map((type) => (
              <div key={type.slug} className="service-item">
                <div className="service-image">
                  <Image
                    src={`/images/${type.slug.replace('-escorts', '')}-escorts.webp`}
                    alt={type.name}
                    width={400}
                    height={300}
                    className="img-fullwidth"
                    loading="lazy"
                  />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href={`/${type.slug}`}>{type.name}</Link>
                  </h3>
                  <p>{type.description}</p>
                  <Link href={`/${type.slug}`} className="btn btn-outline">
                    Learn More
                  </Link>
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
