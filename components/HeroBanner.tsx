import Link from 'next/link';
import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  highlightedWord?: string;
  backgroundImage?: string;
  showButtons?: boolean;
}

export default function HeroBanner({
  title,
  subtitle = 'Your Ultimate',
  description = 'Premium escorts offering luxurious and discreet companionship tailored to your desires. Experience elegance and sophistication.',
  highlightedWord,
  backgroundImage = '/images/banner/escorts-in-pune.webp',
  showButtons = true,
}: HeroBannerProps) {
  return (
    <section className="hero-banner">
      <div className="banner-wrapper">
        <Image
          src={backgroundImage}
          alt={title}
          width={1240}
          height={600}
          priority
          className="banner-image"
        />
        <div className="text-overlay">
          {subtitle && (
            <h2 className="hero-subtitle">{subtitle}</h2>
          )}
          <h1 className="hero-title">
            {highlightedWord ? (
              <>
                {title.replace(highlightedWord, '')}
                <span className="text-highlight">{highlightedWord}</span>
              </>
            ) : (
              title
            )}
          </h1>
          {description && (
            <p className="hero-description">{description}</p>
          )}
          {showButtons && (
            <div className="hero-buttons">
              <Link href="/services" className="btn btn-primary">
                Our Service
              </Link>
              <Link href="/booknow" className="btn btn-outline">
                Book Now!
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
