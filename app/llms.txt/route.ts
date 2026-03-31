import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site-config';

export const dynamic = 'force-static';

const content = `# Hot Natasha — Premium Escort Service

> India's most trusted premium escort agency. Verified, discreet, available 24/7 across 18+ metro cities.

## About

Hot Natasha is a premium escort service operating across India since 2014. We offer verified VIP escorts, Russian escorts, model escorts, and more — all 100% discreet, confidential, and professional.

- **Phone**: ${siteConfig.phone}
- **Email**: ${siteConfig.email}
- **Website**: ${siteConfig.url}
- **Address**: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postalCode}

## Services

- VIP Escorts
- Russian Escorts
- Model Escorts
- Independent Escorts
- College Escorts
- Housewife Escorts
- Air Hostess Escorts
- Celebrity Escorts
- Foreigner Escorts
- Hi-Fi Escorts
- South Indian Escorts
- North Indian Escorts
- Punjabi Escorts
- Bengali Escorts
- Gujarati Escorts
- Marathi Escorts
- Marwadi Escorts
- Muslim Escorts
- Teen Escorts
- Shemale Escorts
- Male Escorts
- Bhabhi Escorts
- Threesome Escorts
- Lesbian Escorts
- Unsatisfied Escorts
- Erotic Escorts
- Jaat Escorts
- Horny Escorts

## Cities Covered

Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Pune, Jaipur, Gurgaon, Noida, Lucknow, Kanpur, Goa, Surat, Vadodara, Nashik, Indore, Bhopal, Ranchi, Varanasi, Rajkot — plus 1200+ sub-area locations across India.

## Key Pages

- [Home](${siteConfig.url})
- [Services](${siteConfig.url}/services)
- [All Locations](${siteConfig.url}/location)
- [Gallery](${siteConfig.url}/gallery)
- [About Us](${siteConfig.url}/about-us)
- [Contact](${siteConfig.url}/contact)
- [Book Now](${siteConfig.url}/booknow)
- [Sitemap](${siteConfig.url}/sitemap.xml)

## Why Choose Hot Natasha

- 10+ years of trusted service (est. 2014)
- 500+ verified escorts
- 98% client satisfaction
- 100% privacy guaranteed
- Available 24/7 in-call and out-call
- Premium screening — every escort personally verified
`;

export function GET() {
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
