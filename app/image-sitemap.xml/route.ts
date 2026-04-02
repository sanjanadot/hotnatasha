import { NextResponse } from 'next/server';
import { existsSync } from 'fs';
import { join } from 'path';
import { locationSlugs } from '@/data/locations';
import { siteConfig } from '@/data/site-config';

const BASE = siteConfig.url;

// Metro cities with dedicated location images
const metroLocationImages = new Map<string, string>([
  ['pune',      `${BASE}/images/location/escorts-in-pune.webp`],
  ['mumbai',    `${BASE}/images/location/escorts-in-mumbai.webp`],
  ['delhi',     `${BASE}/images/location/escorts-in-delhi.webp`],
  ['bangalore', `${BASE}/images/location/escorts-in-bangalore.webp`],
  ['hyderabad', `${BASE}/images/hyderabad/escorts-in-hyderabad.webp`],
  ['ahmedabad', `${BASE}/images/location/escorts-in-ahmedabad.webp`],
  ['goa',       `${BASE}/images/location/escorts-in-goa.webp`],
  ['jaipur',    `${BASE}/images/location/escorts-in-jaipur.webp`],
  ['lucknow',   `${BASE}/images/location/escorts-in-lucknow.webp`],
  ['kanpur',    `${BASE}/images/location/escorts-in-kanpur.webp`],
  ['noida',     `${BASE}/images/location/escorts-in-noida.webp`],
  ['gurgaon',   `${BASE}/images/location/escorts-in-gurgaon.webp`],
  ['surat',     `${BASE}/images/location/escorts-in-surat.webp`],
  ['vadodara',  `${BASE}/images/location/escorts-in-vadodara.webp`],
  ['nashik',    `${BASE}/images/location/escorts-in-nashik.webp`],
  ['indore',    `${BASE}/images/location/escorts-in-indore.webp`],
  ['bhopal',    `${BASE}/images/location/escorts-in-bhopal.webp`],
  ['ranchi',    `${BASE}/images/location/escorts-in-ranchi.webp`],
  ['varanasi',  `${BASE}/images/location/escorts-in-varanasi.webp`],
]);

// Escort type → service image mapping
const typeImages: Record<string, string> = {
  'actress-escorts':      `${BASE}/images/services/celebrity-escorts.webp`,
  'air-hostess-escorts':  `${BASE}/images/services/air-hostess-escorts.webp`,
  'bengali-escorts':      `${BASE}/images/services/bengali-escorts.webp`,
  'bhabhi-escorts':       `${BASE}/images/services/bhabhi-escorts.webp`,
  'celebrity-escorts':    `${BASE}/images/services/celebrity-escorts.webp`,
  'college-escorts':      `${BASE}/images/services/college-escorts.webp`,
  'erotic-escorts':       `${BASE}/images/services/erotic-escorts.webp`,
  'foreigner-escorts':    `${BASE}/images/services/foreigner-escorts.webp`,
  'gujarati-escorts':     `${BASE}/images/services/gujarati-escorts.webp`,
  'hi-fi-escorts':        `${BASE}/images/services/hi-fi-escorts.webp`,
  'horny-escorts':        `${BASE}/images/services/horny-escorts.webp`,
  'housewife-escorts':    `${BASE}/images/services/housewife-escorts.webp`,
  'independent-escorts':  `${BASE}/images/services/independent-escorts.webp`,
  'jaat-escorts':         `${BASE}/images/services/jaat-escorts.webp`,
  'lesbian-escorts':      `${BASE}/images/services/lesbian-escorts.webp`,
  'male-escorts':         `${BASE}/images/services/male-escorts.webp`,
  'marathi-escorts':      `${BASE}/images/services/marathi-escorts.webp`,
  'marwadi-escorts':      `${BASE}/images/services/marwadi-escorts.webp`,
  'model-escorts':        `${BASE}/images/services/model-escorts.webp`,
  'muslim-escorts':       `${BASE}/images/services/muslim-escorts.webp`,
  'north-indian-escorts': `${BASE}/images/services/north-indian-escorts.webp`,
  'punjabi-escorts':      `${BASE}/images/services/punjabi-escorts.webp`,
  'russian-escorts':      `${BASE}/images/services/russian-escorts.webp`,
  'shemale-escorts':      `${BASE}/images/services/shemale-escorts.webp`,
  'south-indian-escorts': `${BASE}/images/services/south-indian-escorts.webp`,
  'teen-escorts':         `${BASE}/images/services/teen-escorts.webp`,
  'threesome-escorts':    `${BASE}/images/services/threesome-escorts.webp`,
  'unsatisfied-escorts':  `${BASE}/images/services/unsatisfied-escorts.webp`,
  'vip-escorts':          `${BASE}/images/services/vip-escorts.webp`,
};

function getLocationImage(slug: string): string {
  if (metroLocationImages.has(slug)) {
    return metroLocationImages.get(slug)!;
  }
  // Sub-locality images in /images/escorts/
  const escortsPath = join(
    process.cwd(), 'public', 'images', 'escorts', `escorts-in-${slug}.webp`
  );
  if (existsSync(escortsPath)) {
    return `${BASE}/images/escorts/escorts-in-${slug}.webp`;
  }
  return `${BASE}/images/banner/escorts-in-pune.webp`;
}

function xmlEntry(
  url: string,
  images: { loc: string; title: string; caption?: string }[]
): string {
  const imgTags = images
    .map(
      (img) =>
        `    <image:image>\n      <image:loc>${img.loc}</image:loc>\n      <image:title>${img.title}</image:title>${img.caption ? `\n      <image:caption>${img.caption}</image:caption>` : ''}\n    </image:image>`
    )
    .join('\n');
  return `  <url>\n    <loc>${url}</loc>\n${imgTags}\n  </url>`;
}

export async function GET() {
  const entries: string[] = [];

  // ── Home page ──
  entries.push(
    xmlEntry(BASE, [
      { loc: `${BASE}/images/banner/escorts-in-pune.webp`,            title: 'Escorts in Pune - Hot Natasha',                   caption: 'Premium escorts in Pune available 24/7' },
      { loc: `${BASE}/images/banner/russian-escorts-in-pune.webp`,    title: 'Russian Escorts in Pune - Hot Natasha',            caption: 'Exotic Russian escorts in Pune' },
      { loc: `${BASE}/images/banner/independent-escorts-in-pune.webp`,title: 'Independent Escorts in Pune - Hot Natasha',        caption: 'Independent escorts in Pune' },
      { loc: `${BASE}/images/russian-escorts.webp`,                   title: 'Russian Escorts' },
      { loc: `${BASE}/images/vip-escorts.webp`,                       title: 'VIP Escorts in Pune' },
    ])
  );

  // ── Services page ──
  entries.push(
    xmlEntry(`${BASE}/services`, [
      { loc: `${BASE}/images/services/russian-escorts.webp`,      title: 'Russian Escorts in Pune' },
      { loc: `${BASE}/images/services/model-escorts.webp`,        title: 'Model Escorts in Pune' },
      { loc: `${BASE}/images/services/vip-escorts.webp`,          title: 'VIP Escorts in Pune' },
      { loc: `${BASE}/images/services/college-escorts.webp`,      title: 'College Girl Escorts in Pune' },
      { loc: `${BASE}/images/services/housewife-escorts.webp`,    title: 'Housewife Escorts in Pune' },
      { loc: `${BASE}/images/services/independent-escorts.webp`,  title: 'Independent Escorts in Pune' },
      { loc: `${BASE}/images/services/air-hostess-escorts.webp`,  title: 'Air Hostess Escorts in Pune' },
      { loc: `${BASE}/images/services/bengali-escorts.webp`,      title: 'Bengali Escorts in Pune' },
      { loc: `${BASE}/images/services/foreigner-escorts.webp`,    title: 'Foreigner Escorts in Pune' },
      { loc: `${BASE}/images/services/punjabi-escorts.webp`,      title: 'Punjabi Escorts in Pune' },
    ])
  );

  // ── Location listing page ──
  entries.push(
    xmlEntry(`${BASE}/location`, [
      { loc: `${BASE}/images/location/escorts-in-pune.webp`,      title: 'Escorts in Pune' },
      { loc: `${BASE}/images/location/escorts-in-mumbai.webp`,    title: 'Escorts in Mumbai' },
      { loc: `${BASE}/images/location/escorts-in-delhi.webp`,     title: 'Escorts in Delhi' },
      { loc: `${BASE}/images/location/escorts-in-bangalore.webp`, title: 'Escorts in Bangalore' },
      { loc: `${BASE}/images/location/escorts-in-goa.webp`,       title: 'Escorts in Goa' },
      { loc: `${BASE}/images/location/escorts-in-jaipur.webp`,    title: 'Escorts in Jaipur' },
      { loc: `${BASE}/images/location/escorts-in-lucknow.webp`,   title: 'Escorts in Lucknow' },
      { loc: `${BASE}/images/location/escorts-in-surat.webp`,     title: 'Escorts in Surat' },
    ])
  );

  // ── About page ──
  entries.push(
    xmlEntry(`${BASE}/about-us`, [
      { loc: `${BASE}/images/team.webp`,  title: 'Hot Natasha Escorts Team' },
      { loc: `${BASE}/images/logo.webp`,  title: 'Hot Natasha Logo' },
    ])
  );

  // ── Gallery page ──
  entries.push(
    xmlEntry(`${BASE}/gallery`, [
      { loc: `${BASE}/images/services/russian-escorts.webp`,         title: 'Russian Escorts Pictures' },
      { loc: `${BASE}/images/services/vip-escorts.webp`,             title: 'VIP Escorts Pictures' },
      { loc: `${BASE}/images/services/model-escorts.webp`,           title: 'Model Escorts Pictures' },
      { loc: `${BASE}/images/services/college-escorts.webp`,         title: 'College Girl Escorts Pictures' },
      { loc: `${BASE}/images/services/housewife-escorts.webp`,       title: 'Housewife Escorts Pictures' },
      { loc: `${BASE}/images/services/independent-escorts.webp`,     title: 'Independent Escorts Pictures' },
      { loc: `${BASE}/images/escorts/escorts-in-koregaon-park.webp`, title: 'Escorts in Koregaon Park Pune' },
      { loc: `${BASE}/images/escorts/escorts-in-hinjawadi.webp`,     title: 'Escorts in Hinjawadi Pune' },
      { loc: `${BASE}/images/escorts/escorts-in-baner.webp`,         title: 'Escorts in Baner Pune' },
    ])
  );

  // ── Escort type pages ──
  for (const [slug, imgUrl] of Object.entries(typeImages)) {
    const name = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    entries.push(
      xmlEntry(`${BASE}/${slug}`, [
        { loc: imgUrl, title: `${name} in Pune`, caption: `${name} in Pune - Hot Natasha` },
      ])
    );
  }

  // ── Location detail pages ──
  for (const slug of locationSlugs) {
    const imgUrl = getLocationImage(slug);
    const name = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    entries.push(
      xmlEntry(`${BASE}/location/${slug}`, [
        { loc: imgUrl, title: `Escorts in ${name}`, caption: `Premium escorts in ${name}` },
      ])
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${entries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
