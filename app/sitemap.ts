import { MetadataRoute } from 'next';
import { locationSlugs } from '@/data/locations';
import { siteConfig } from '@/data/site-config';

const BASE = siteConfig.url;

const escortTypeSlugs = [
  'actress-escorts',
  'air-hostess-escorts',
  'bengali-escorts',
  'bhabhi-escorts',
  'celebrity-escorts',
  'college-escorts',
  'erotic-escorts',
  'foreigner-escorts',
  'gujarati-escorts',
  'hi-fi-escorts',
  'horny-escorts',
  'housewife-escorts',
  'independent-escorts',
  'jaat-escorts',
  'lesbian-escorts',
  'male-escorts',
  'marathi-escorts',
  'marwadi-escorts',
  'model-escorts',
  'muslim-escorts',
  'north-indian-escorts',
  'punjabi-escorts',
  'russian-escorts',
  'shemale-escorts',
  'south-indian-escorts',
  'teen-escorts',
  'threesome-escorts',
  'unsatisfied-escorts',
  'vip-escorts',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static pages ──
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                  lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE}/services`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/location`,    lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE}/about-us`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gallery`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/contact`,     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/booknow`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // ── Escort type pages (/[type]/...) ──
  const typePages: MetadataRoute.Sitemap = escortTypeSlugs.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // ── Location pages (/location/[slug]) ──
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE}/location/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...typePages, ...locationPages];
}
