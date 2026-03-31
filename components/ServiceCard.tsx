import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  location?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  href,
  location = 'Pune',
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-image">
        <Image
          src={image}
          alt={`${title} in ${location}`}
          width={1000}
          height={600}
          className="img-fullwidth"
          loading="lazy"
        />
      </div>
      <h2 className="service-title">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="service-description">{description}</p>
      <Link href={href} className="service-link">
        {title}
      </Link>
    </div>
  );
}
