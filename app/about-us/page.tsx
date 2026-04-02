import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'About Hot Natasha | Premium Escort Service in Pune Since 2014',
  description: 'Learn about Hot Natasha — Pune\'s most trusted premium escort service since 2014. 7,000+ satisfied clients, 200+ verified escorts, 100% confidential. Serving all Pune areas 24/7.',
  authors: [{ name: 'Hot Natasha', url: siteConfig.url }],
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
  openGraph: {
    title: 'About Hot Natasha | Premium Escort Service in Pune Since 2014',
    description: 'Pune\'s most trusted escort service since 2014. 7,000+ clients, 200+ verified escorts, 24/7 availability. Discreet, professional, 100% confidential.',
    url: `${siteConfig.url}/about-us`,
    siteName: 'Hot Natasha',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/banner/escorts-in-pune.webp`,
        width: 1240,
        height: 600,
        alt: 'Hot Natasha — Premium Escort Service in Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Hot Natasha | Premium Escort Service in Pune',
    description: 'Pune\'s most trusted escort service since 2014. 7,000+ clients, 24/7 availability.',
    images: [`${siteConfig.url}/images/banner/escorts-in-pune.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Inner Header */}
      <section 
        className="inner-header"
        style={{ backgroundImage: 'url(/images/bg/about-our-company.webp)' }}
      >
        <div className="container">
          <div className="header-content">
            <h1>Everything About Hot Natasha</h1>
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li className="active">About Us</li>
            </ol>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>
                Escorts Services in <span className="text-highlight">Pune</span>
              </h2>
              <p>
                <Link href="/" className="text-link">Hot Natasha</Link> is
                Pune&rsquo;s most trusted premium escort service, operating since 2014
                with over 7,000 satisfied clients. Our team of verified escorts is
                professional, discreet, and dedicated to ensuring your complete
                satisfaction.
              </p>
              <p>
                Our services extend across Pune and nearby regions, maintaining the
                highest standards of confidentiality and excellence. We specialize
                in customizing our offerings to suit diverse client preferences.
              </p>
              <p>
                We collaborate with reputable service providers to ensure seamless
                and reliable experiences for all our clients. Trust us to redefine
                your perception of premium escort services in Pune.
              </p>
              <div className="mission-vision">
                <div className="mission">
                  <h3>Our Mission</h3>
                  <p>To offer elegant and personalized companionship that exceeds expectations.</p>
                </div>
                <div className="vision">
                  <h3>Our Vision</h3>
                  <p>To be the most trusted and sought-after escort service provider in Pune.</p>
                </div>
              </div>
            </div>

            <div className="why-choose">
              <h2>
                Why Choose <span className="text-highlight">Hot Natasha</span> Escorts
              </h2>
              <div className="accordion">
                <div className="accordion-item">
                  <h4>Professional and Discreet Services</h4>
                  <p>Our escorts are highly trained, professional, and value your privacy above all else.</p>
                </div>
                <div className="accordion-item">
                  <h4>Personalized Experiences</h4>
                  <p>We tailor our services to your unique preferences, ensuring an unforgettable experience.</p>
                </div>
                <div className="accordion-item">
                  <h4>Verified and Trusted</h4>
                  <p>All our escorts are verified to ensure reliability and the highest level of professionalism.</p>
                </div>
                <div className="accordion-item">
                  <h4>Competitive Pricing</h4>
                  <p>We offer premium services at competitive prices, ensuring value for your investment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
