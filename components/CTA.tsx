import Link from 'next/link';

interface CTAProps {
  title?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTA({
  title = '100% Secure, Safety and Independent Escorts Services',
  buttonText = 'Book Now!',
  buttonHref = '/booknow',
}: CTAProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h3>{title}</h3>
          </div>
          <div className="cta-button">
            <Link href={buttonHref} className="btn btn-primary">
              {buttonText}
              <i className="fa fa-angle-double-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
