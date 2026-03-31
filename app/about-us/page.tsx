import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Hot Natasha, your premier destination for premium escorts in Pune. Professional, discreet, and luxurious companionship services.',
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
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
                <Link href="/" className="text-link">Elite Pune Escorts</Link> is a
                premier escort service provider in Pune, offering high-quality
                companionship. Our team of escorts is professional, discreet, and
                dedicated to ensuring customer satisfaction.
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
                Why Choose <span className="text-highlight">Elite Pune Escorts</span>
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
