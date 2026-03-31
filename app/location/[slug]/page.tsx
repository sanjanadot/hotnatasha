import { Metadata } from 'next';
import { existsSync } from 'fs';
import { join } from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import HeroBanner from '@/components/HeroBanner';
import CTA from '@/components/CTA';
import BookingForm from '@/components/BookingForm';
import { locationSlugs, formatLocationName } from '@/data/locations';
import { siteConfig } from '@/data/site-config';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params?.slug;
  if (!slug) return { title: 'Location Not Found' };
  const loc = formatLocationName(slug);
  return {
    title: `Escorts in ${loc} | #1 Premium VIP Escort Service | Hot Natasha`,
    description: `Book premium escorts in ${loc} ✓ VIP, Russian & Model escorts ✓ 100% verified & confidential ✓ Available 24/7. Call +91-9038976363 for exclusive companionship in ${loc}.`,
    keywords: `escorts in ${loc}, ${loc} escorts, VIP escorts ${loc}, Russian escorts ${loc}, model escorts ${loc}, escort service ${loc}`,
    authors: [{ name: 'Hot Natasha', url: siteConfig.url }],
    openGraph: {
      title: `Escorts in ${loc} | Premium VIP Escort Service | Hot Natasha`,
      description: `Premium verified escorts in ${loc} — VIP, Russian, model & more. 100% confidential. Available 24/7. Call +91-9038976363`,
      url: `${siteConfig.url}/location/${slug}`,
      siteName: 'Hot Natasha',
      images: [{ url: `${siteConfig.url}/images/banner/escorts-in-pune.webp`, width: 1200, height: 630, alt: `Escorts in ${loc} — Hot Natasha` }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Escorts in ${loc} | Hot Natasha`,
      description: `Premium verified escorts in ${loc} — 24/7 available. Call +91-9038976363`,
      images: [`${siteConfig.url}/images/banner/escorts-in-pune.webp`],
    },
    alternates: { canonical: `${siteConfig.url}/location/${slug}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
  };
}

const credentials = [
  { icon: 'fa-users',   value: '7,000+',  label: 'Happy Clients' },
  { icon: 'fa-star',    value: '4.9/5',   label: 'Avg Rating' },
  { icon: 'fa-trophy',  value: '12+ Yrs', label: 'In Business' },
  { icon: 'fa-diamond', value: '200+',    label: 'Active Profiles' },
  { icon: 'fa-shield',  value: '100%',    label: 'Verified Escorts' },
  { icon: 'fa-lock',    value: '24/7',    label: 'Availability' },
];

const bookingSteps = [
  { step: '01', icon: 'fa-phone',        title: 'Call or WhatsApp',       desc: 'Reach our team on +91-9038976363. We answer 24 hours a day, 7 days a week — no voice menus, a real person picks up.' },
  { step: '02', icon: 'fa-comments',     title: 'Share Your Preferences',  desc: 'Tell us your location, preferred escort type, service, and available time. We share matching profiles instantly.' },
  { step: '03', icon: 'fa-check-circle', title: 'Booking Confirmed',       desc: 'Confirmed in minutes. Escort contacts you 30 minutes before arrival. Cash payment on arrival — zero advance required.' },
  { step: '04', icon: 'fa-star',         title: 'Enjoy Your Experience',   desc: 'Experience premium companionship. Your anonymous feedback helps us maintain our 4.9/5 standard.' },
];

const whyChooseFeatures = [
  { icon: 'fa-lock',         title: 'Absolute Privacy',       desc: '256-bit SSL encryption, NDAs for all staff, zero third-party data sharing. Your identity stays completely private.' },
  { icon: 'fa-check-circle', title: 'Verified Profiles Only', desc: 'Every escort is government-ID verified, personally interviewed, and health-screened before appearing on our platform.' },
  { icon: 'fa-clock-o',      title: '24/7 Availability',      desc: 'Our team and escorts are available round the clock — day, night, weekends, and public holidays without exception.' },
  { icon: 'fa-mobile',       title: 'Instant Confirmation',   desc: 'Fast bookings confirmed within minutes. Our team responds immediately via call or WhatsApp with zero delays.' },
  { icon: 'fa-map-marker',   title: 'Citywide Coverage',      desc: 'We cover hotels, residences, and private venues across the entire city and surrounding areas — in-call and out-call.' },
  { icon: 'fa-shield',       title: 'No Advance Payment',     desc: 'You pay only when the escort arrives — in cash. We never ask for tokens, deposits, or advance payments of any kind.' },
];

const allServices = [
  { slug: 'russian-escorts',      name: 'Russian Escorts',       image: '/images/services/russian-escorts.webp' },
  { slug: 'vip-escorts',          name: 'VIP Escorts',           image: '/images/services/vip-escorts.webp' },
  { slug: 'model-escorts',        name: 'Model Escorts',         image: '/images/services/model-escorts.webp' },
  { slug: 'college-escorts',      name: 'College Girl Escorts',  image: '/images/services/college-escorts.webp' },
  { slug: 'housewife-escorts',    name: 'Housewife Escorts',     image: '/images/services/housewife-escorts.webp' },
  { slug: 'independent-escorts',  name: 'Independent Escorts',   image: '/images/services/independent-escorts.webp' },
  { slug: 'air-hostess-escorts',  name: 'Air Hostess Escorts',   image: '/images/services/air-hostess-escorts.webp' },
  { slug: 'bengali-escorts',      name: 'Bengali Escorts',       image: '/images/services/bengali-escorts.webp' },
  { slug: 'foreigner-escorts',    name: 'Foreigner Escorts',     image: '/images/services/foreigner-escorts.webp' },
  { slug: 'gujarati-escorts',     name: 'Gujarati Escorts',      image: '/images/services/gujarati-escorts.webp' },
  { slug: 'punjabi-escorts',      name: 'Punjabi Escorts',       image: '/images/services/punjabi-escorts.webp' },
  { slug: 'south-indian-escorts', name: 'South Indian Escorts',  image: '/images/services/south-indian-escorts.webp' },
  { slug: 'north-indian-escorts', name: 'North Indian Escorts',  image: '/images/services/north-indian-escorts.webp' },
  { slug: 'marathi-escorts',      name: 'Marathi Escorts',       image: '/images/services/marathi-escorts.webp' },
  { slug: 'marwadi-escorts',      name: 'Marwadi Escorts',       image: '/images/services/marwadi-escorts.webp' },
  { slug: 'hot-bhabhi',           name: 'Hot Bhabhi Escorts',    image: '/images/services/bhabhi-escorts.webp' },
  { slug: 'hi-fi-escorts',        name: 'Hi-Fi Escorts',         image: '/images/services/hi-fi-escorts.webp' },
  { slug: 'teen-escorts',         name: 'Teen Escorts',          image: '/images/services/teen-escorts.webp' },
  { slug: 'unsatisfied-escorts',  name: 'Unsatisfied Escorts',   image: '/images/services/unsatisfied-escorts.webp' },
  { slug: 'muslim-escorts',       name: 'Muslim Escorts',        image: '/images/services/muslim-escorts.webp' },
  { slug: 'jaat-escorts',         name: 'Jaat Escorts',          image: '/images/services/jaat-escorts.webp' },
  { slug: 'lesbian-escorts',      name: 'Lesbian Escorts',       image: '/images/services/lesbian-escorts.webp' },
  { slug: 'shemale-escorts',      name: 'Shemale Escorts',       image: '/images/services/shemale-escorts.webp' },
  { slug: 'actress-escorts',      name: 'Actress Escorts',       image: '/images/services/celebrity-escorts.webp' },
];

const metroLocations = [
  { name: 'Pune',      slug: 'pune',      image: '/images/location/escorts-in-pune.webp' },
  { name: 'Mumbai',    slug: 'mumbai',    image: '/images/location/escorts-in-mumbai.webp' },
  { name: 'Delhi',     slug: 'delhi',     image: '/images/location/escorts-in-delhi.webp' },
  { name: 'Bangalore', slug: 'bangalore', image: '/images/location/escorts-in-bangalore.webp' },
  { name: 'Hyderabad', slug: 'hyderabad', image: '/images/hyderabad/escorts-in-hyderabad.webp' },
  { name: 'Ahmedabad', slug: 'ahmedabad', image: '/images/location/escorts-in-ahmedabad.webp' },
  { name: 'Jaipur',    slug: 'jaipur',    image: '/images/location/escorts-in-jaipur.webp' },
  { name: 'Lucknow',   slug: 'lucknow',   image: '/images/location/escorts-in-lucknow.webp' },
  { name: 'Gurgaon',   slug: 'gurgaon',   image: '/images/location/escorts-in-gurgaon.webp' },
  { name: 'Noida',     slug: 'noida',     image: '/images/location/escorts-in-noida.webp' },
  { name: 'Indore',    slug: 'indore',    image: '/images/location/escorts-in-indore.webp' },
  { name: 'Bhopal',    slug: 'bhopal',    image: '/images/location/escorts-in-bhopal.webp' },
  { name: 'Goa',       slug: 'goa',       image: '/images/location/escorts-in-goa.webp' },
  { name: 'Ranchi',    slug: 'ranchi',    image: '/images/location/escorts-in-ranchi.webp' },
  { name: 'Nashik',    slug: 'nashik',    image: '/images/location/escorts-in-nashik.webp' },
  { name: 'Surat',     slug: 'surat',     image: '/images/location/escorts-in-surat.webp' },
  { name: 'Vadodara',  slug: 'vadodara',  image: '/images/location/escorts-in-vadodara.webp' },
  { name: 'Kanpur',    slug: 'kanpur',    image: '/images/location/escorts-in-kanpur.webp' },
  { name: 'Varanasi',  slug: 'varanasi',  image: '/images/location/escorts-in-varanasi.webp' },
  { name: 'Rajkot',    slug: 'rajkot',    image: '/images/rajkot/escorts-in-rajkot.webp' },
];

// Maps each metro city slug → its sub-area slugs/names
const cityAreasMap: Record<string, { name: string; slug: string }[]> = {
  pune: [
    { name: 'Koregaon Park',    slug: 'koregaon-park' },    { name: 'Hinjawadi',        slug: 'hinjawadi' },
    { name: 'Shivaji Nagar',    slug: 'shivaji-nagar' },    { name: 'Baner',            slug: 'baner' },
    { name: 'Kothrud',          slug: 'kothrud' },           { name: 'Viman Nagar',      slug: 'viman-nagar' },
    { name: 'Hadapsar',         slug: 'hadapsar' },          { name: 'Kharadi',          slug: 'kharadi' },
    { name: 'Wakad',            slug: 'wakad' },             { name: 'Aundh',            slug: 'aundh' },
    { name: 'Deccan',           slug: 'deccan' },            { name: 'Chinchwad',        slug: 'chinchwad' },
    { name: 'Magarpatta',       slug: 'magarpatta' },        { name: 'Kalyani Nagar',    slug: 'kalyani-nagar' },
    { name: 'Wadgaon Sheri',    slug: 'wadgaon-sheri' },    { name: 'Pashan',           slug: 'pashan' },
    { name: 'Katraj',           slug: 'katraj' },            { name: 'Kondhwa',          slug: 'kondhwa' },
    { name: 'Swargate',         slug: 'swargate' },          { name: 'Shaniwar Wada',    slug: 'shaniwar-wada' },
    { name: 'Karve Nagar',      slug: 'karve-nagar' },      { name: 'Yerwada',          slug: 'yerwada' },
    { name: 'Wagholi',          slug: 'wagholi' },           { name: 'Akurdi',           slug: 'akurdi' },
    { name: 'Bhosari',          slug: 'bhosari' },           { name: 'Boat Club Road',   slug: 'boat-club-road' },
    { name: 'Chakan',           slug: 'chakan' },            { name: 'Dattawadi',        slug: 'dattawadi' },
    { name: 'Dehu Road',        slug: 'dehu-road' },         { name: 'Dighi',            slug: 'dighi' },
    { name: 'Ghorpadi',         slug: 'ghorpadi' },          { name: 'Khadki',           slug: 'khadki' },
    { name: 'Lohegaon',         slug: 'lohegaon' },          { name: 'Lonawala',         slug: 'lonawala' },
    { name: 'Malewadi',         slug: 'malewadi' },          { name: 'Model Colony',     slug: 'model-colony' },
    { name: 'Nigdi',            slug: 'nigdi' },             { name: 'Phursungi',        slug: 'phursungi' },
    { name: 'Pimple Gurav',     slug: 'pimple-gurav' },     { name: 'Pimple Saudagar',  slug: 'pimple-saudagar' },
    { name: 'Pune Nagar Road',  slug: 'pune-nagar-road' },  { name: 'Ravet',            slug: 'ravet' },
    { name: 'Shivane',          slug: 'shivane' },           { name: 'Shukrawar Peth',   slug: 'shukrawar-peth' },
    { name: 'Talawade',         slug: 'talawade' },          { name: 'Bibwewadi',        slug: 'bibwewadi' },
    { name: 'Dhole Patil Nagar',slug: 'dhole-patil-nagar' },{ name: 'Khandala',         slug: 'khandala' },
    { name: 'Yewalewadi',       slug: 'yewalewadi' },
  ],
  mumbai: [
    { name: 'Andheri',       slug: 'andheri' },       { name: 'Bandra',          slug: 'bandra' },
    { name: 'Juhu',          slug: 'juhu' },          { name: 'Worli',           slug: 'worli' },
    { name: 'Powai',         slug: 'powai' },         { name: 'Dadar',           slug: 'dadar' },
    { name: 'Malad',         slug: 'malad' },         { name: 'Borivali',        slug: 'borivali' },
    { name: 'Thane',         slug: 'thane' },         { name: 'Navi Mumbai',     slug: 'navi-mumbai' },
    { name: 'Mumbai Central',slug: 'mumbai-central' },{ name: 'Mumbai Airport',  slug: 'mumbai-airport' },
    { name: 'Ghatkopar',     slug: 'ghatkopar' },     { name: 'Goregaon',        slug: 'goregaon' },
    { name: 'Kurla',         slug: 'kurla' },         { name: 'Dombivli',        slug: 'dombivli' },
    { name: 'Ghansoli',      slug: 'ghansoli' },      { name: 'Govandi',         slug: 'govandi' },
    { name: 'Grant Road',    slug: 'grant-road' },    { name: 'CST',             slug: 'cst' },
    { name: 'Fort',          slug: 'fort' },          { name: 'Charni Road',     slug: 'charni-road' },
    { name: 'Airoli',        slug: 'airoli' },        { name: 'Ambernath',       slug: 'ambernath' },
    { name: 'Bhayandar',     slug: 'bhayandar' },     { name: 'Bhiwandi',        slug: 'bhiwandi' },
    { name: 'Byculla',       slug: 'byculla' },       { name: 'Chembur',         slug: 'chembur' },
    { name: 'Chinchpokli',   slug: 'chinchpokli' },   { name: 'Churchgate',      slug: 'churchgate' },
    { name: 'Jogeshwari',    slug: 'jogeshwari' },    { name: 'Kandivali',       slug: 'kandivali' },
    { name: 'Kanjurmarg',    slug: 'kanjurmarg' },    { name: 'Khar',            slug: 'khar' },
    { name: 'Kharghar',      slug: 'kharghar' },      { name: 'Kalyan',          slug: 'kalyan' },
    { name: 'Kopar Khairane',slug: 'kopar-khairane' },{ name: 'Lower Parel',     slug: 'lower-parel' },
    { name: 'Mahim',         slug: 'mahim' },         { name: 'Marine Lines',    slug: 'marine-lines' },
    { name: 'Masjid Bandar', slug: 'masjid-bandar' }, { name: 'Matunga',         slug: 'matunga' },
    { name: 'Mira Road',     slug: 'mira-road' },     { name: 'Mulund',          slug: 'mulund' },
    { name: 'Mumbra',        slug: 'mumbra' },        { name: 'Naigaon',         slug: 'naigaon' },
    { name: 'Nalasopara',    slug: 'nalasopara' },    { name: 'Bhandup',         slug: 'bhandup' },
    { name: 'Lokhandwala',   slug: 'lokhandwala' },   { name: 'Vasai',           slug: 'vasai' },
    { name: 'Versova',       slug: 'versova' },       { name: 'Vikhroli',        slug: 'vikhroli' },
    { name: 'Vile Parle',    slug: 'vile-parle' },    { name: 'Wadala',          slug: 'wadala' },
    { name: 'Sion',          slug: 'sion' },          { name: 'Parel',           slug: 'parel' },
    { name: 'Santacruz',     slug: 'santacruz' },     { name: 'Juinagar',        slug: 'juinagar' },
    { name: 'Belapur',       slug: 'belapur' },       { name: 'Kalamboli',       slug: 'kalamboli' },
    { name: 'Kalwa',         slug: 'kalwa' },         { name: 'Ambivali',        slug: 'ambivali' },
  ],
  delhi: [
    { name: 'Connaught Place',  slug: 'connaught-place' },   { name: 'Lajpat Nagar',    slug: 'lajpat-nagar' },
    { name: 'Saket',            slug: 'saket' },             { name: 'Dwarka',           slug: 'dwarka' },
    { name: 'Rohini',           slug: 'rohini' },            { name: 'Pitampura',        slug: 'pitampura' },
    { name: 'New Delhi',        slug: 'new-delhi' },         { name: 'Delhi Civil Lines',slug: 'delhi-civil-lines' },
    { name: 'Vaishali',         slug: 'vaishali' },          { name: 'Vasundhara',       slug: 'vasundhara' },
    { name: 'Indirapuram',      slug: 'indirapuram' },       { name: 'Delhi Chakla',     slug: 'delhi-chakla' },
    { name: 'Hauz Khas',        slug: 'hauz-khas' },         { name: 'Greater Kailash',  slug: 'greater-kailash' },
    { name: 'Green Park',       slug: 'green-park' },        { name: 'Janakpuri',        slug: 'janakpuri' },
    { name: 'Jangpura',         slug: 'jangpura' },          { name: 'Jasola',           slug: 'jasola' },
    { name: 'Daryaganj',        slug: 'daryaganj' },         { name: 'Dilshad Garden',   slug: 'dilshad-garden' },
    { name: 'East Patel Nagar', slug: 'east-patel-nagar' },  { name: 'Gagan Vihar',      slug: 'gagan-vihar' },
    { name: 'Govindpuri',       slug: 'govindpuri' },        { name: 'Adarsh Nagar',     slug: 'adarsh-nagar' },
    { name: 'Aerocity',         slug: 'aerocity' },          { name: 'Anand Vihar',      slug: 'anand-vihar' },
    { name: 'Ashok Vihar',      slug: 'ashok-vihar' },       { name: 'Barakhamba Road',  slug: 'barakhamba-road' },
    { name: 'Chanakyapuri',     slug: 'chanakyapuri' },      { name: 'Chattarpur',       slug: 'chattarpur' },
    { name: 'CR Park',          slug: 'chittaranjan-park' }, { name: 'Defence Colony',   slug: 'defence-colony' },
    { name: 'East of Kailash',  slug: 'east-of-kailash' },   { name: 'Gulmohar Park',    slug: 'gulmohar-park' },
    { name: 'Hari Nagar',       slug: 'hari-nagar' },        { name: 'Jor Bagh',         slug: 'jor-bagh' },
    { name: 'Kalkaji',          slug: 'kalkaji' },           { name: 'Kamla Nagar',      slug: 'kamla-nagar' },
    { name: 'Kapashera',        slug: 'kapashera' },         { name: 'Karol Bagh',       slug: 'karol-bagh' },
    { name: 'Kirti Nagar',      slug: 'kirti-nagar' },       { name: 'Laxmi Nagar',      slug: 'laxmi-nagar-delhi' },
    { name: 'Lodhi Road',       slug: 'lodhi-road' },        { name: 'Malviya Nagar',    slug: 'malviya-nagar-delhi' },
    { name: 'Mandi House',      slug: 'mandi-house' },       { name: 'Mayur Vihar',      slug: 'mayur-vihar' },
    { name: 'Mayur Vihar Ph1',  slug: 'mayur-vihar-phase-1' },{ name: 'Model Town',      slug: 'model-town-delhi' },
    { name: 'Moti Bagh',        slug: 'moti-bagh-delhi' },   { name: 'Moti Nagar',       slug: 'moti-nagar-delhi' },
    { name: 'Mukherjee Nagar',  slug: 'mukherjee-nagar' },   { name: 'Anand Lok',        slug: 'anand-lok' },
    { name: 'Bawana',           slug: 'bawana-industrial-area' },
    { name: 'Ashram',             slug: 'ashram' },               { name: 'Mahipalpur',       slug: 'mahipalpur' },
    { name: 'Naraina Ind Area',   slug: 'naraina-industrial-area' },{ name: 'Naraina Vihar',  slug: 'naraina-vihar' },
    { name: 'Netaji Subhash Pl',  slug: 'netaji-subhash-place' },  { name: 'New Friends Col', slug: 'new-friends-colony' },
    { name: 'Nizamuddin West',    slug: 'nizamuddin-west' },        { name: 'Okhla Phase 1',   slug: 'okhla-phase-1' },
    { name: 'Okhla Phase 2',      slug: 'okhla-phase-2' },         { name: 'Okhla Phase 3',   slug: 'okhla-phase-3' },
    { name: 'Paharganj',          slug: 'paharganj' },              { name: 'Panchsheel Park', slug: 'panchsheel-park' },
    { name: 'Paschim Puri',       slug: 'paschim-puri' },          { name: 'Paschim Vihar',   slug: 'paschim-vihar' },
    { name: 'Patparganj',         slug: 'patparganj' },             { name: 'Preet Vihar',     slug: 'preet-vihar' },
    { name: 'Punjabi Bagh',       slug: 'punjabi-bagh' },           { name: 'RK Puram',        slug: 'r-k-puram' },
    { name: 'Rajouri Garden',     slug: 'rajouri-garden' },         { name: 'Ranjit Nagar',    slug: 'ranjit-nagar' },
    { name: 'Safdarjung',         slug: 'safdarjung' },             { name: 'Sarita Vihar',    slug: 'sarita-vihar' },
    { name: 'Sarvodaya Enclave',  slug: 'sarvodaya-enclave' },      { name: 'Shalimar Bagh',   slug: 'shalimar-bagh' },
    { name: 'South Extension',    slug: 'south-extension' },        { name: 'Uday Park',       slug: 'uday-park' },
    { name: 'Uttam Nagar',        slug: 'uttam-nagar' },            { name: 'Vasant Kunj',     slug: 'vasant-kunj' },
    { name: 'Vasant Vihar',       slug: 'vasant-vihar-delhi' },     { name: 'Vikaspuri',       slug: 'vikaspuri' },
    { name: 'Vivek Vihar',        slug: 'vivek-vihar' },            { name: 'Yamuna Vihar',    slug: 'yamuna-vihar' },
  ],
  bangalore: [
    { name: 'Koramangala',   slug: 'koramangala' },   { name: 'Indiranagar',    slug: 'indiranagar' },
    { name: 'Whitefield',    slug: 'whitefield' },    { name: 'Jayanagar',      slug: 'jayanagar' },
    { name: 'Marathahalli',  slug: 'marathahalli' },  { name: 'Electronic City',slug: 'electronic-city' },
    { name: 'HSR Layout',    slug: 'hsr-layout' },    { name: 'Hebbal',         slug: 'hebbal' },
    { name: 'Frazer Town',   slug: 'frazer-town' },   { name: 'Cooke Town',     slug: 'cooke-town' },
    { name: 'Cunningham Rd', slug: 'cunningham-road' },{ name: 'ITPL',           slug: 'itpl' },
    { name: 'Jakkur',        slug: 'jakkur' },        { name: 'Ecospace',       slug: 'ecospace' },
    { name: 'Hebbal Kempapura',slug:'hebbal-kempapura'},{ name: 'Banashankari',   slug: 'banashankari' },
    { name: 'Banaswadi',     slug: 'banaswadi' },     { name: 'Basavanagudi',   slug: 'basavanagudi' },
    { name: 'Bellandur',     slug: 'bellandur' },     { name: 'Benson Town',    slug: 'benson-town' },
    { name: 'Bommanahalli',  slug: 'bommanahalli' },  { name: 'JP Nagar',       slug: 'jp-nagar' },
    { name: 'Kalyan Nagar',  slug: 'kalyan-nagar' },  { name: 'Kammanahalli',   slug: 'kammanahalli' },
    { name: 'Kengeri',       slug: 'kengeri' },       { name: 'KR Puram',       slug: 'kr-puram' },
    { name: 'Kudlu Gate',    slug: 'kudlu-gate' },    { name: 'Majestic',       slug: 'majestic' },
    { name: 'Mallathahalli', slug: 'mallathahalli' }, { name: 'Malleshwaram',   slug: 'malleshwaram' },
    { name: 'Nagasandra',    slug: 'nagasandra' },    { name: 'Vijayanagar',    slug: 'vijayanagar' },
    { name: 'Yelahanka',     slug: 'yelahanka' },     { name: 'Kondapur',       slug: 'kondapur' },
    { name: 'Chandapura',       slug: 'chandapura' },      { name: 'Haralur Road',     slug: 'haralur-road' },
    { name: 'Old Airport Rd',   slug: 'old-airport-road' },{ name: 'Richmond Town',    slug: 'richmond-town' },
    { name: 'Sarjapur Road',    slug: 'sarjapur-road' },   { name: 'Ulsoor',           slug: 'ulsoor' },
    { name: 'Varthur',          slug: 'varthur' },         { name: 'Wilson Garden',    slug: 'wilson-garden' },
    { name: 'Yeshwanthpur',     slug: 'yeshwanthpur' },
  ],
  jaipur: [
    { name: 'Ashok Nagar',   slug: 'ashok-nagar-jaipur' },   { name: 'Civil Lines',    slug: 'civil-lines-jaipur' },
    { name: 'Malviya Nagar', slug: 'malviya-nagar-jaipur' },  { name: 'Subhash Nagar',  slug: 'subhash-nagar-jaipur' },
    { name: 'Tilak Nagar',   slug: 'tilak-nagar-jaipur' },   { name: 'Vaishali Nagar', slug: 'vaishali-nagar-jaipur' },
    { name: 'Gopalpura',     slug: 'gopalpura' },             { name: 'Jagatpura',      slug: 'jagatpura' },
    { name: 'Mansarovar',    slug: 'mansarovar' },            { name: 'Durgapura',      slug: 'durgapura' },
    { name: 'Raja Park',     slug: 'raja-park' },             { name: 'Sanganer',       slug: 'sanganer' },
    { name: 'Tonk Road',     slug: 'tonk-road' },             { name: 'Goner Road',     slug: 'goner-road' },
    { name: 'Vidhyadhar Nagar',slug:'vidhyadhar-nagar'},       { name: 'Jalupura',       slug: 'jalupura' },
    { name: 'Ajmer Road',       slug: 'ajmer-road' },      { name: 'Amer Road',        slug: 'amer-road' },
    { name: 'Bani Park',        slug: 'bani-park' },       { name: 'Banipark Extn',    slug: 'banipark-extension' },
    { name: 'C Scheme',         slug: 'c-scheme' },        { name: 'Chitrakoot',       slug: 'chitrakoot' },
    { name: 'Chokhi Dhani',     slug: 'chokhi-dhani' },    { name: 'Jhotwara',         slug: 'jhotwara' },
    { name: 'Kalwar Road',      slug: 'kalwar-road' },     { name: 'Murlipura',        slug: 'murlipura' },
    { name: 'Narayan Singh Cir',slug: 'narayan-singh-circle' },{ name: 'New Market',   slug: 'new-market' },
    { name: 'Nirala Nagar',     slug: 'nirala-nagar' },    { name: 'Nirman Nagar',     slug: 'nirman-nagar' },
    { name: 'Sikar Road',       slug: 'sikar-road' },      { name: 'Sodala',           slug: 'sodala' },
  ],
  gurgaon: [
    { name: 'Cyber City',      slug: 'cyber-city' },      { name: 'DLF Phase 1',    slug: 'dlf-phase-1' },
    { name: 'DLF Phase 2',     slug: 'dlf-phase-2' },     { name: 'DLF Phase 3',    slug: 'dlf-phase-3' },
    { name: 'DLF Phase 4',     slug: 'dlf-phase-4' },     { name: 'DLF Phase 5',    slug: 'dlf-phase-5' },
    { name: 'Golf Course Road',slug: 'golf-course-road' },{ name: 'Sohna Road',     slug: 'sohna-road' },
    { name: 'Sector 14',       slug: 'sector-14' },       { name: 'Sector 15',      slug: 'sector-15' },
    { name: 'Sector 17',       slug: 'sector-17' },       { name: 'Sector 22',      slug: 'sector-22' },
    { name: 'Sector 23',       slug: 'sector-23' },       { name: 'Sector 24',      slug: 'sector-24' },
    { name: 'Sector 29',       slug: 'sector-29' },       { name: 'Sector 31',      slug: 'sector-31' },
    { name: 'Sector 40',       slug: 'sector-40' },       { name: 'Sector 43',      slug: 'sector-43' },
    { name: 'Sector 45',       slug: 'sector-45' },       { name: 'Sector 46',      slug: 'sector-46' },
    { name: 'Sector 49',       slug: 'sector-49' },       { name: 'Sector 50',      slug: 'sector-50' },
    { name: 'Sector 52',       slug: 'sector-52' },       { name: 'Sector 53',      slug: 'sector-53' },
    { name: 'Sector 54',       slug: 'sector-54' },       { name: 'Sector 55',      slug: 'sector-55' },
    { name: 'Sector 56',       slug: 'sector-56' },       { name: 'Sector 57',      slug: 'sector-57' },
    { name: 'Sector 82',       slug: 'sector-82' },     { name: 'Gurugram',       slug: 'gurugram' },
    { name: 'Ardee City',       slug: 'ardee-city' },      { name: 'Badshahpur',       slug: 'badshahpur' },
    { name: 'Malibu Towne',     slug: 'malibu-towne' },    { name: 'Maruti Kunj',      slug: 'maruti-kunj' },
    { name: 'New Palam Vihar',  slug: 'new-palam-vihar' }, { name: 'Nirvana Country',  slug: 'nirvana-country' },
    { name: 'Palam Vihar',      slug: 'palam-vihar' },     { name: 'Sikanderpur',      slug: 'sikanderpur' },
    { name: 'South City 1',     slug: 'south-city-1' },    { name: 'South City 2',     slug: 'south-city-2' },
    { name: 'Sushant Golf City',slug: 'sushant-golf-city' },{ name: 'Sushant Lok',     slug: 'sushant-lok' },
    { name: 'Sushant Lok 1',    slug: 'sushant-lok-phase-1' },{ name: 'Sushant Lok 2', slug: 'sushant-lok-phase-2' },
    { name: 'Sushant Lok 3',    slug: 'sushant-lok-phase-3' },{ name: 'Udyog Vihar',   slug: 'udyog-vihar' },
    { name: 'Vatika City',      slug: 'vatika-city' },     { name: 'Yamuna Expressway',slug: 'yamuna-expressway' },
  ],
  noida: [
    { name: 'Phase 2',   slug: 'noida-phase-2' },   { name: 'Sector 12',  slug: 'noida-sector-12' },
    { name: 'Sector 15', slug: 'noida-sector-15' },  { name: 'Sector 16',  slug: 'noida-sector-16' },
    { name: 'Sector 17', slug: 'noida-sector-17' },  { name: 'Sector 18',  slug: 'noida-sector-18' },
    { name: 'Sector 19', slug: 'noida-sector-19' },  { name: 'Sector 22',  slug: 'noida-sector-22' },
    { name: 'Sector 25', slug: 'noida-sector-25' },  { name: 'Sector 26',  slug: 'noida-sector-26' },
    { name: 'Sector 27', slug: 'noida-sector-27' },  { name: 'Sector 28',  slug: 'noida-sector-28' },
    { name: 'Sector 31', slug: 'noida-sector-31' },  { name: 'Sector 32',  slug: 'noida-sector-32' },
    { name: 'Sector 34', slug: 'noida-sector-34' },  { name: 'Sector 39',  slug: 'noida-sector-39' },
    { name: 'Sector 43', slug: 'noida-sector-43' },  { name: 'Sector 44',  slug: 'noida-sector-44' },
    { name: 'Sector 45', slug: 'noida-sector-45' },  { name: 'Sector 46',  slug: 'noida-sector-46' },
    { name: 'Sector 47', slug: 'noida-sector-47' },  { name: 'Sector 48',  slug: 'noida-sector-48' },
    { name: 'Sector 49', slug: 'noida-sector-49' },  { name: 'Sector 50',  slug: 'noida-sector-50' },
    { name: 'Sector 51', slug: 'noida-sector-51' },  { name: 'Sector 52',  slug: 'noida-sector-52' },
    { name: 'Sector 53', slug: 'noida-sector-53' },  { name: 'Sector 55',  slug: 'noida-sector-55' },
    { name: 'Sector 56', slug: 'noida-sector-56' },  { name: 'Sector 61',  slug: 'noida-sector-61' },
    { name: 'Sector 62', slug: 'noida-sector-62' },  { name: 'Sector 63',  slug: 'noida-sector-63' },
    { name: 'Sector 70', slug: 'noida-sector-70' },  { name: 'Sector 72',  slug: 'noida-sector-72' },
    { name: 'Sector 73', slug: 'noida-sector-73' },  { name: 'Sector 74',  slug: 'noida-sector-74' },
    { name: 'Sector 75', slug: 'noida-sector-75' },  { name: 'Sector 76',  slug: 'noida-sector-76' },
    { name: 'Sector 77', slug: 'noida-sector-77' },  { name: 'Sector 78',  slug: 'noida-sector-78' },
    { name: 'Sector 79', slug: 'noida-sector-79' },  { name: 'Sector 80',  slug: 'noida-sector-80' },
    { name: 'Sector 81', slug: 'noida-sector-81' },  { name: 'Sector 82',  slug: 'noida-sector-82' },
    { name: 'Sector 86', slug: 'noida-sector-86' },  { name: 'Sector 88',  slug: 'noida-sector-88' },
    { name: 'Sector 89', slug: 'noida-sector-89' },  { name: 'Sector 90',  slug: 'noida-sector-90' },
    { name: 'Sector 92', slug: 'noida-sector-92' },  { name: 'Sector 93',  slug: 'noida-sector-93' },
    { name: 'Sector 94', slug: 'noida-sector-94' },  { name: 'Sector 96',  slug: 'noida-sector-96' },
    { name: 'Sector 97', slug: 'noida-sector-97' },  { name: 'Sector 98',  slug: 'noida-sector-98' },
    { name: 'Sector 100',slug: 'noida-sector-100' }, { name: 'Sector 101', slug: 'noida-sector-101' },
    { name: 'Sector 102',slug: 'noida-sector-102' }, { name: 'Sector 104', slug: 'noida-sector-104' },
    { name: 'Sector 107',slug: 'noida-sector-107' }, { name: 'Sector 108', slug: 'noida-sector-108' },
    { name: 'Sector 110',slug: 'noida-sector-110' }, { name: 'Sector 113', slug: 'noida-sector-113' },
    { name: 'Sector 115',slug: 'noida-sector-115' }, { name: 'Sector 117', slug: 'noida-sector-117' },
    { name: 'Sector 118',slug: 'noida-sector-118' }, { name: 'Sector 119', slug: 'noida-sector-119' },
    { name: 'Sector 120',slug: 'noida-sector-120' }, { name: 'Sector 121', slug: 'noida-sector-121' },
    { name: 'Sector 122',slug: 'noida-sector-122' }, { name: 'Sector 123', slug: 'noida-sector-123' },
    { name: 'Sector 126',slug: 'noida-sector-126' }, { name: 'Sector 128', slug: 'noida-sector-128' },
    { name: 'Sector 129',slug: 'noida-sector-129' }, { name: 'Sector 131', slug: 'noida-sector-131' },
    { name: 'Sector 132',slug: 'noida-sector-132' }, { name: 'Sector 133', slug: 'noida-sector-133' },
    { name: 'Sector 134',slug: 'noida-sector-134' }, { name: 'Sector 135', slug: 'noida-sector-135' },
    { name: 'Sector 137',slug: 'noida-sector-137' }, { name: 'Sector 138', slug: 'noida-sector-138' },
    { name: 'Sector 140',slug: 'noida-sector-140' }, { name: 'Sector 143', slug: 'noida-sector-143' },
    { name: 'Sector 144',slug: 'noida-sector-144' }, { name: 'Sector 146', slug: 'noida-sector-146' },
    { name: 'Sector 150',slug: 'noida-sector-150' }, { name: 'Sector 151', slug: 'noida-sector-151' },
    { name: 'Sector 152',slug: 'noida-sector-152' }, { name: 'Sector 153', slug: 'noida-sector-153' },
    { name: 'Sector 158',slug: 'noida-sector-158' }, { name: 'Sector 161', slug: 'noida-sector-161' },
    { name: 'Sector 162',slug: 'noida-sector-162' }, { name: 'Sector 163', slug: 'noida-sector-163' },
    { name: 'Sector 166',slug: 'noida-sector-166' }, { name: 'Sector 167', slug: 'noida-sector-167' },
  ],
  lucknow: [
    { name: 'Indira Nagar',     slug: 'indira-nagar-lucknow' },  { name: 'Krishna Nagar',   slug: 'krishna-nagar-lucknow' },
    { name: 'Lucknow Chowk',    slug: 'lucknow-chowk' },         { name: 'Rajendra Nagar',  slug: 'rajendra-nagar-lucknow' },
    { name: 'Sarojini Nagar',   slug: 'sarojini-nagar-lucknow' },{ name: 'Vikas Nagar',     slug: 'vikas-nagar-lucknow' },
    { name: 'Hazratganj',       slug: 'hazratganj' },            { name: 'Gomti Nagar',     slug: 'gomti-nagar' },
    { name: 'Hussainganj',      slug: 'hussainganj' },           { name: 'Daliganj',        slug: 'daliganj' },
    { name: 'Faizabad Road',    slug: 'faizabad-road' },         { name: 'Jankipuram',      slug: 'jankipuram' },
    { name: 'Gosainganj',       slug: 'gosainganj' },            { name: 'Dubagga',         slug: 'dubagga' },
    { name: 'Hind Nagar',       slug: 'hind-nagar' },            { name: 'Harhua',          slug: 'harhua' },
    { name: 'Colonelganj',      slug: 'colonelganj' },           { name: 'Alambagh',        slug: 'alambagh' },
    { name: 'Aliganj',          slug: 'aliganj' },               { name: 'Aminabad',        slug: 'aminabad' },
    { name: 'Aashiyana',        slug: 'ashiyana' },              { name: 'Banthra',         slug: 'banthra' },
    { name: 'Charbagh',         slug: 'charbagh' },              { name: 'Chinhat',         slug: 'chinhat' },
    { name: 'Gomtipur',         slug: 'gomtipur' },              { name: 'Kidwai Nagar',    slug: 'kidwai-nagar' },
    { name: 'Krishnanagar',     slug: 'krishnanagar' },          { name: 'Kursi Road',      slug: 'kursi-road' },
    { name: 'Mahanagar',        slug: 'mahanagar' },             { name: 'Mall Avenue',     slug: 'mall-avenue' },
    { name: 'Mall Road',        slug: 'mall-road' },             { name: 'Mohaan Road',     slug: 'mohaan-road' },
    { name: 'Rajajipuram',      slug: 'rajajipuram' },           { name: 'Transport Nagar', slug: 'transport-nagar' },
    { name: 'Aashiyana Extn',   slug: 'aashiyana-extension' },   { name: 'Nishatganj',      slug: 'nishatganj' },
    { name: 'Yahiyaganj',       slug: 'yahiyaganj' },            { name: 'Vrindavan Yojna', slug: 'vrindavan-yojna' },
  ],
  indore: [
    { name: 'Airport Road',     slug: 'airport-road-indore' },   { name: 'Chandan Nagar',   slug: 'chandan-nagar-indore' },
    { name: 'Gandhi Nagar',     slug: 'gandhi-nagar-indore' },   { name: 'Lalbagh',         slug: 'lalbagh-indore' },
    { name: 'Mahalaxmi Nagar',  slug: 'mahalaxmi-nagar-indore' },{ name: 'MG Road',         slug: 'mg-road-indore' },
    { name: 'Rajendra Nagar',   slug: 'rajendra-nagar-indore' }, { name: 'Ring Road',       slug: 'ring-road-indore' },
    { name: 'Saket Nagar',      slug: 'saket-nagar-indore' },    { name: 'Tilak Nagar',     slug: 'tilak-nagar-indore' },
    { name: 'Vaishali Nagar',   slug: 'vaishali-nagar-indore' }, { name: 'Vijay Nagar',     slug: 'vijay-nagar-indore' },
    { name: 'IIM Road',         slug: 'iim-road' },              { name: 'Gulab Bagh',      slug: 'gulab-bagh' },
    { name: 'Dwarkapuri',       slug: 'dwarkapuri' },            { name: 'Itwara',          slug: 'itwara' },
    { name: 'Janta Nagar',      slug: 'janta-nagar' },          { name: 'AB Road',         slug: 'ab-road' },
    { name: 'Annapurna',        slug: 'annapurna' },             { name: 'Bengali Square',  slug: 'bengali-square' },
    { name: 'Bhawarkua',        slug: 'bhawarkua' },             { name: 'Kanadia Road',    slug: 'kanadia-road' },
    { name: 'Khandwa Road',     slug: 'khandwa-road' },          { name: 'Khajrana',        slug: 'khajrana' },
    { name: 'Malwa Mill',       slug: 'malwa-mill' },            { name: 'Mhow',            slug: 'mhow' },
    { name: 'Palasia',          slug: 'palasia' },
    { name: 'Bicholi Mardana',  slug: 'bicholi-mardana' },   { name: 'Mayakhedi',       slug: 'mayakhedi' },
    { name: 'Nipania',          slug: 'nipania' },
  ],
  bhopal: [
    { name: 'Bhopal Airport',   slug: 'bhopal-airport' },        { name: 'Bhopal Station',  slug: 'bhopal-station' },
    { name: 'Chuna Bhatti',     slug: 'chuna-bhatti-bhopal' },   { name: 'Gandhi Nagar',    slug: 'gandhi-nagar-bhopal' },
    { name: 'Jail Road',        slug: 'jail-road-bhopal' },      { name: 'Saket Nagar',     slug: 'saket-nagar-bhopal' },
    { name: 'Shivaji Nagar',    slug: 'shivaji-nagar-bhopal' },  { name: 'Vasant Kunj',     slug: 'vasant-kunj-bhopal' },
    { name: 'Vijay Nagar',      slug: 'vijay-nagar-bhopal' },    { name: 'Habibganj',       slug: 'habibganj' },
    { name: 'Hoshangabad Road', slug: 'hoshangabad-road' },       { name: 'Indrapuri Colony',slug: 'indrapuri-colony' },
    { name: 'Jatkhedi',         slug: 'jatkhedi' },              { name: 'Arera Colony',    slug: 'arera-colony' },
    { name: 'Bhabha Nagar',     slug: 'bhabha-nagar' },          { name: 'BHEL Township',   slug: 'bhel-township' },
    { name: 'Chhola Road',      slug: 'chhola-road' },           { name: 'Govindpura',      slug: 'govindpura' },
    { name: 'Karond',           slug: 'karond' },                { name: 'Lalghati',        slug: 'lalghati' },
    { name: 'MP Nagar',         slug: 'mp-nagar' },              { name: 'MP Nagar Zone 1', slug: 'mp-nagar-zone-1' },
    { name: 'Musakhedi',        slug: 'musakhedi' },
    { name: 'Awadhpuri',        slug: 'awadhpuri' },          { name: 'Bairagarh',       slug: 'bairagarh' },
    { name: 'Bairagarh Chichali',slug: 'bairagarh-chichali' }, { name: 'Bairagarh Kalan', slug: 'bairagarh-kalan' },
    { name: 'Barkheda',         slug: 'barkheda' },           { name: 'Berasia Road',    slug: 'berasia-road' },
    { name: 'Chandragupta Ngr', slug: 'chandragupta-nagar' }, { name: 'Nishatpura',      slug: 'nishatpura' },
    { name: 'Phanda',           slug: 'phanda' },             { name: 'Rachna Nagar',    slug: 'rachna-nagar' },
    { name: 'Shahpura',         slug: 'shahpura' },           { name: 'TT Nagar',        slug: 'tt-nagar' },
  ],
  goa: [
    { name: 'North Goa',       slug: 'north-goa' },       { name: 'South Goa',       slug: 'south-goa' },
    { name: 'Panjim',          slug: 'panjim' },          { name: 'Calangute Beach', slug: 'calangute-beach' },
    { name: 'Candolim Beach',  slug: 'candolim-beach' },  { name: 'Anjuna Beach',    slug: 'anjuna-beach' },
    { name: 'Vagator Beach',   slug: 'vagator-beach' },   { name: 'Colva Beach',     slug: 'colva-beach' },
    { name: 'Fort Aguada',     slug: 'fort-aguada' },     { name: 'Club Cubana',     slug: 'club-cubana' },
    { name: 'Hollant Beach',   slug: 'hollant-beach' },   { name: 'Galgibaga Beach', slug: 'galgibaga-beach' },
    { name: 'Agonda Beach',    slug: 'agonda-beach' },    { name: 'Aguada Beach',    slug: 'aguada-beach' },
    { name: 'Arambol Beach',   slug: 'arambol-beach' },   { name: 'Ashwem Beach',    slug: 'ashwem-beach' },
    { name: 'Baga Beach',      slug: 'baga-beach' },      { name: 'Benaulim Beach',  slug: 'benaulim-beach' },
    { name: 'Betalbatim Beach',slug: 'betalbatim-beach' },{ name: 'Betul Beach',     slug: 'betul-beach' },
    { name: 'Butterfly Beach', slug: 'butterfly-beach' }, { name: 'Cabo de Rama',    slug: 'cabo-de-rama-beach' },
    { name: 'Cavelossim Beach',slug: 'cavelossim-beach' },{ name: 'Chapora Beach',   slug: 'chapora-beach' },
    { name: 'Chapora Fort',    slug: 'chapora-fort' },    { name: 'Mobor Beach',     slug: 'mobor-beach' },
    { name: 'Morjim Beach',    slug: 'morjim-beach' },
    { name: 'Bogmalo Beach',   slug: 'bogmalo-beach' },   { name: 'Casino Pride',    slug: 'casino-pride' },
    { name: 'Grand Island',    slug: 'grand-island' },    { name: 'Grande Island',   slug: 'grande-island' },
    { name: 'Jhiri',           slug: 'jhiri' },           { name: 'Kakolem Beach',   slug: 'kakolem-beach' },
    { name: 'Madgaon',         slug: 'madgaon' },         { name: 'Mapusa Market',   slug: 'mapusa-market' },
    { name: 'Palolem Beach',   slug: 'palolem-beach' },   { name: 'Patnem Beach',    slug: 'patnem-beach' },
    { name: 'Querim Beach',    slug: 'querim-beach' },    { name: 'Sinquerim Beach', slug: 'sinquerim-beach' },
    { name: 'Siridao Beach',   slug: 'siridao-beach' },   { name: 'Varca Beach',     slug: 'varca-beach' },
    { name: 'Vasco da Gama',   slug: 'vasco-da-gama-beach' },
  ],
  ranchi: [
    { name: 'Ashok Nagar',      slug: 'ashok-nagar-ranchi' },    { name: 'Gulmohar Colony', slug: 'gulmohar-colony-ranchi' },
    { name: 'Khel Gaon',        slug: 'khel-gaon-ranchi' },      { name: 'Lalpur',          slug: 'lalpur-ranchi' },
    { name: 'Main Road',        slug: 'main-road-ranchi' },      { name: 'Patel Nagar',     slug: 'patel-nagar-ranchi' },
    { name: 'Sadar Bazar',      slug: 'sadar-bazar-ranchi' },    { name: 'Saket Nagar',     slug: 'saket-nagar-ranchi' },
    { name: 'Saraswati Nagar',  slug: 'saraswati-nagar-ranchi' },{ name: 'Sunder Nagar',    slug: 'sunder-nagar-ranchi' },
    { name: 'Vikash Nagar',     slug: 'vikash-nagar-ranchi' },   { name: 'College Road',    slug: 'ranchi-college-road' },
    { name: 'University Road',  slug: 'ranchi-university-road' }, { name: 'Hatia',           slug: 'hatia' },
    { name: 'Doranda',          slug: 'doranda' },               { name: 'Harmu',           slug: 'harmu' },
    { name: 'Hinoo',            slug: 'hinoo' },                 { name: 'Chutia',          slug: 'chutia' },
    { name: 'Argora',           slug: 'argora' },                { name: 'Bariatu',         slug: 'bariatu' },
    { name: 'Morabadi',         slug: 'morabadi' },              { name: 'Jagannathpur',    slug: 'jagannathpur' },
    { name: 'Lalpur',           slug: 'lalpur' },                { name: 'Dahin Nagar',     slug: 'dahin-nagar' },
    { name: 'Itki Road',        slug: 'itki-road' },             { name: 'Argora Hills',    slug: 'argora-hills' },
    { name: 'Bariatu Hills',    slug: 'bariatu-hills' },         { name: 'Bariatu Hill Top',slug: 'bariatu-hill-top' },
    { name: 'Angara',           slug: 'angara' },             { name: 'Booti',           slug: 'booti' },
    { name: 'Brahmapuri',       slug: 'brahmapuri' },         { name: 'Bundu',           slug: 'bundu' },
    { name: 'Kadru',            slug: 'kadru' },              { name: 'Karamtoli',       slug: 'karamtoli' },
    { name: 'Khijri',           slug: 'khijri' },             { name: 'Kuchai',          slug: 'kuchai' },
    { name: 'Lapung',           slug: 'lapung' },             { name: 'Pundag',          slug: 'pundag' },
  ],
  nashik: [
    { name: 'Ashok Nagar',   slug: 'ashok-nagar-nashik' },   { name: 'College Road',  slug: 'college-road-nashik' },
    { name: 'Dwarka',        slug: 'dwarka-nashik' },         { name: 'Ganesh Nagar',  slug: 'ganesh-nagar-nashik' },
    { name: 'Govind Nagar',  slug: 'govind-nagar-nashik' },  { name: 'Indira Nagar',  slug: 'indira-nagar-nashik' },
    { name: 'Jail Road',     slug: 'jail-road-nashik' },     { name: 'Nashik Road',   slug: 'nashik-road' },
    { name: 'Panchavati',    slug: 'panchavati-nashik' },    { name: 'Shalimar',      slug: 'shalimar-nashik' },
    { name: 'Deolali Camp',  slug: 'deolali-camp' },         { name: 'Dindori Road',  slug: 'dindori-road' },
    { name: 'Gangapur Road', slug: 'gangapur-road' },        { name: 'Gurudev Palace',slug: 'gurudev-palace' },
    { name: 'Adgaon',        slug: 'adgaon' },               { name: 'Ambad',         slug: 'ambad' },
    { name: 'Anandwalli',    slug: 'anandwalli' },           { name: 'Mhasrul',       slug: 'mhasrul' },
    { name: 'Old Adgaon Naka', slug: 'old-adgaon-naka' },   { name: 'Old Gangapur Naka',slug: 'old-gangapur-naka' },
    { name: 'Pandav Leni',     slug: 'pandav-leni' },        { name: 'Satpur',          slug: 'satpur' },
    { name: 'Satpur Colony',   slug: 'satpur-colony' },      { name: 'Tidke Colony',    slug: 'tidke-colony' },
    { name: 'Trimbak Road',    slug: 'trimbak-road' },
  ],
  surat: [
    { name: 'Palanpur',     slug: 'palanpur-surat' },    { name: 'Vishal Nagar', slug: 'vishal-nagar-surat' },
    { name: 'Adajan',        slug: 'adajan' },            { name: 'Katargam',     slug: 'katargam' },
    { name: 'Vesu',          slug: 'vesu' },              { name: 'Udhna',        slug: 'udhna' },
    { name: 'Rander',        slug: 'rander' },            { name: 'Dindoli',      slug: 'dindoli' },
    { name: 'Ichchhapor',    slug: 'ichchhapor' },        { name: 'Magdalla',     slug: 'magdalla' },
    { name: 'Dumas',         slug: 'dumas' },             { name: 'Rundh Magdalla',slug:'rundh-magdalla' },
    { name: 'Althan',        slug: 'althan' },            { name: 'Ampad',        slug: 'ampad' },
    { name: 'Amroli',        slug: 'amroli' },            { name: 'Bhesan',       slug: 'bhesan' },
    { name: 'Bhestan',       slug: 'bhestan' },           { name: 'Chalthan',     slug: 'chalthan' },
    { name: 'Choryasi',      slug: 'choryasi' },          { name: 'Godadara',     slug: 'godadara' },
    { name: 'Kosad',         slug: 'kosad' },             { name: 'Laskana',      slug: 'laskana' },
    { name: 'Athwa',            slug: 'athwa' },              { name: 'Limbayat',        slug: 'limbayat' },
    { name: 'Punagam',          slug: 'punagam' },
  ],
  vadodara: [
    { name: 'Hari Nagar',  slug: 'hari-nagar-vadodara' }, { name: 'Khanpur',     slug: 'khanpur-vadodara' },
    { name: 'Mandvi',      slug: 'mandvi-vadodara' },     { name: 'Alkapuri',    slug: 'alkapuri' },
    { name: 'Fatehgunj',   slug: 'fatehgunj' },           { name: 'Gorwa',       slug: 'gorwa' },
    { name: 'Haripura',    slug: 'haripura' },            { name: 'Harni',       slug: 'harni' },
    { name: 'Jetalpur',    slug: 'jetalpur' },            { name: 'Diwalipura',  slug: 'diwalipura' },
    { name: 'Dabhoi',      slug: 'dabhoi' },              { name: 'Dabholi',     slug: 'dabholi' },
    { name: 'Baroda',           slug: 'baroda' },             { name: 'Gotri',           slug: 'gotri' },
    { name: 'Gotri Road',       slug: 'gotri-road' },         { name: 'Halol',           slug: 'halol' },
    { name: 'Koyali',           slug: 'koyali' },             { name: 'Navapura',        slug: 'navapura' },
    { name: 'Sama',             slug: 'sama' },               { name: 'Tandalja',        slug: 'tandalja' },
    { name: 'Waghodia',         slug: 'waghodia' },
  ],
  kanpur: [
    { name: 'Ashok Nagar',      slug: 'ashok-nagar-kanpur' },    { name: 'Civil Lines',     slug: 'civil-lines-kanpur' },
    { name: 'Geeta Nagar',      slug: 'geeta-nagar-kanpur' },    { name: 'Indira Nagar',    slug: 'indira-nagar-kanpur' },
    { name: 'Kanpur Cantonment',slug: 'kanpur-cantonment' },     { name: 'Kanpur Road',     slug: 'kanpur-road' },
    { name: 'Saket Nagar',      slug: 'saket-nagar-kanpur' },    { name: 'Shastri Nagar',   slug: 'shastri-nagar-kanpur' },
    { name: 'Shyam Nagar',      slug: 'shyam-nagar-kanpur' },   { name: 'Tilak Nagar',     slug: 'tilak-nagar-kanpur' },
    { name: 'Transport Nagar',  slug: 'transport-nagar-kanpur' },{ name: 'Vishnupuri',      slug: 'vishnupuri-kanpur' },
    { name: 'Jajmau',           slug: 'jajmau' },                { name: 'Govind Nagar',    slug: 'govind-nagar' },
    { name: 'Harsh Nagar',      slug: 'harsh-nagar' },           { name: 'Ganga Vihar',     slug: 'ganga-vihar' },
    { name: 'Darshan Purwa',    slug: 'darshan-purwa' },         { name: 'Juhi',            slug: 'juhi' },
    { name: 'Juhi Kalan',       slug: 'juhi-kalan' },            { name: 'Anwarganj',       slug: 'anwarganj' },
    { name: 'Barra',            slug: 'barra' },                 { name: 'Chakeri',         slug: 'chakeri' },
    { name: 'Chunni Ganj',      slug: 'chunni-ganj' },           { name: 'Lal Bangla',      slug: 'lal-bangla' },
    { name: 'Moolganj',         slug: 'moolganj' },              { name: 'Swaroop Nagar',   slug: 'swaroop-nagar' },
    { name: 'Kidwai Nagar',     slug: 'kidwai-nagar' },
    { name: 'Appa Bhuvan',      slug: 'appa-bhuvan' },        { name: 'Arya Nagar',      slug: 'arya-nagar' },
    { name: 'Bithoor',          slug: 'bithoor' },            { name: 'Harris Ganj',     slug: 'harris-ganj' },
    { name: 'Kakadeo',          slug: 'kakadeo' },            { name: 'Naubasta',        slug: 'naubasta' },
    { name: 'Panki',            slug: 'panki' },              { name: 'Ratanlal Nagar',  slug: 'ratanlal-nagar' },
    { name: 'Rawatpur',         slug: 'rawatpur' },           { name: 'Sisamau',         slug: 'sisamau' },
  ],
  varanasi: [
    { name: 'Varanasi Cantt', slug: 'varanasi-cantt' }, { name: 'Godowlia',   slug: 'godowlia' },
    { name: 'Lanka',          slug: 'lanka' },          { name: 'Sarnath',    slug: 'sarnath' },
    { name: 'Sigra',          slug: 'sigra' },          { name: 'Nadesar',    slug: 'nadesar' },
    { name: 'Bhelupur',       slug: 'bhelupur' },
    { name: 'BHU',              slug: 'banaras-hindu-university-bhu' },{ name: 'Bajardiha',  slug: 'bajardiha' },
    { name: 'Barf Khana',       slug: 'barf-khana' },         { name: 'Chunar',          slug: 'chunar' },
    { name: 'Kamachha',         slug: 'kamachha' },           { name: 'Maheshwari Mohal',slug: 'maheshwari-mohal' },
    { name: 'Maidagin',         slug: 'maidagin' },           { name: 'Mughal Sarai',    slug: 'mughal-sarai' },
    { name: 'Ramganj',          slug: 'ramganj' },            { name: 'Ramnagar',        slug: 'ramnagar' },
    { name: 'Shivala',          slug: 'shivala' },
  ],
  hyderabad: [
    { name: 'Rajendra Nagar', slug: 'rajendra-nagar-hyderabad' }, { name: 'Hitech City',  slug: 'hitech-city' },
    { name: 'Gachibowli',     slug: 'gachibowli' },               { name: 'Himayatnagar', slug: 'himayatnagar' },
    { name: 'Dilsukhnagar',   slug: 'dilsukhnagar' },             { name: 'Erragadda',    slug: 'erragadda' },
    { name: 'ECIL',           slug: 'ecil' },                     { name: 'Falaknuma',    slug: 'falaknuma' },
    { name: 'Abids',          slug: 'abids' },                    { name: 'Alwal',        slug: 'alwal' },
    { name: 'Amberpet',       slug: 'amberpet' },                 { name: 'Ameerpet',     slug: 'ameerpet' },
    { name: 'Attapur',        slug: 'attapur' },                  { name: 'Banjara Hills',slug: 'banjara-hills' },
    { name: 'Basheerbagh',    slug: 'basheerbagh' },              { name: 'Begumpet',     slug: 'begumpet' },
    { name: 'Boduppal',       slug: 'boduppal' },                 { name: 'Chanda Nagar', slug: 'chanda-nagar' },
    { name: 'Jubilee Hills',  slug: 'jubilee-hills' },            { name: 'Kukatpally',   slug: 'kukatpally' },
    { name: 'LB Nagar',       slug: 'lb-nagar' },                 { name: 'Madhapur',     slug: 'madhapur' },
    { name: 'Malkajgiri',     slug: 'malkajgiri' },               { name: 'Marredpally',  slug: 'marredpally' },
    { name: 'Masab Tank',     slug: 'masab-tank' },               { name: 'Miyapur',      slug: 'miyapur' },
    { name: 'Nagole',         slug: 'nagole' },                   { name: 'Lakdikapul',   slug: 'lakdikapul' },
    { name: 'Uppal',          slug: 'uppal' },
    { name: 'Charminar',        slug: 'charminar' },          { name: 'Manikonda',       slug: 'manikonda' },
    { name: 'Mehdipatnam',      slug: 'mehdipatnam' },        { name: 'Narayanaguda',    slug: 'narayanaguda' },
    { name: 'Nizampet',         slug: 'nizampet' },           { name: 'Padmarao Nagar',  slug: 'padmarao-nagar' },
    { name: 'Panjagutta',       slug: 'panjagutta' },         { name: 'Secunderabad',    slug: 'secunderabad' },
    { name: 'Serilingampally',  slug: 'serilingampally' },    { name: 'Somajiguda',      slug: 'somajiguda' },
    { name: 'SR Nagar',         slug: 'sr-nagar' },           { name: 'Tarnaka',         slug: 'tarnaka' },
    { name: 'Tellapur',         slug: 'tellapur' },           { name: 'Tolichowki',      slug: 'tolichowki' },
    { name: 'Vanastalipuram',   slug: 'vanastalipuram' },     { name: 'Malakpet',        slug: 'malakpet' },
  ],
  ahmedabad: [
    { name: 'Satellite Road',  slug: 'satellite-road' },  { name: 'SG Highway',     slug: 'sg-highway' },
    { name: 'Navrangpura',     slug: 'navrangpura-gam' }, { name: 'Ambawadi',       slug: 'ambawadi' },
    { name: 'Ashram Road',     slug: 'ashram-road' },     { name: 'Maninagar',      slug: 'maninagar' },
    { name: 'CTM',             slug: 'ctm' },             { name: 'Naroda Road',    slug: 'naroda-road' },
    { name: 'Naroda GIDC',     slug: 'naroda-gidc' },     { name: 'Bapunagar',      slug: 'bapunagar' },
    { name: 'Bodakdev',        slug: 'bodakdev' },        { name: 'Ghatlodia',      slug: 'ghatlodia' },
    { name: 'Gota',            slug: 'gota' },            { name: 'Isanpur',        slug: 'isanpur' },
    { name: 'Nikol',           slug: 'nikol' },           { name: 'Narol',          slug: 'narol' },
    { name: 'Odhav Road',      slug: 'odhav-road' },     { name: 'Rakhial',        slug: 'rakhial' },
    { name: 'South Bopal',     slug: 'south-bopal' },    { name: 'Thaltej',        slug: 'thaltej' },
    { name: 'Vastral',         slug: 'vastral' },         { name: 'CTM Char Rasta', slug: 'ctm-char-rasta' },
    { name: 'Ambli',           slug: 'ambli' },           { name: 'Asarwa',         slug: 'asarwa' },
    { name: 'Aslali',          slug: 'aslali' },          { name: 'Astodia',        slug: 'astodia' },
    { name: 'Atladara',        slug: 'atladara' },        { name: 'Behrampura',     slug: 'behrampura' },
    { name: 'Chandkheda',      slug: 'chandkheda' },      { name: 'Chandlodia',     slug: 'chandlodia' },
    { name: 'Changodar',       slug: 'changodar' },       { name: 'Chhani',         slug: 'chhani' },
    { name: 'Chhani Jakat',    slug: 'chhani-jakat-naka' },{ name: 'Dariapur',      slug: 'dariapur' },
    { name: 'Delhi Darwaja',   slug: 'delhi-darwaja' },   { name: 'Drive-in Road',  slug: 'drive-in-road' },
    { name: 'Dudheshwar Road', slug: 'dudheshwar-road' }, { name: 'Ellis Bridge',    slug: 'ellis-bridge' },
    { name: 'Gandhi Road',     slug: 'gandhi-road' },     { name: 'Gheekanta Road', slug: 'gheekanta-road' },
    { name: 'Ghodasar',        slug: 'ghodasar' },        { name: 'Gomtipur',       slug: 'gomtipur' },
    { name: 'Gulbai Tekra',    slug: 'gulbai-tekra' },    { name: 'Gurukul',        slug: 'gurukul' },
    { name: 'Jamalpur',        slug: 'jamalpur' },
    { name: 'Anand Rao Circle', slug: 'anand-rao-circle' },   { name: 'Bhadra',          slug: 'bhadra' },
    { name: 'Jesangpura',       slug: 'jesangpura' },         { name: 'Jivraj Park',     slug: 'jivraj-park' },
    { name: 'Juhapura',         slug: 'juhapura' },           { name: 'Juna Wadaj',      slug: 'juna-wadaj' },
    { name: 'Kalupur',          slug: 'kalupur' },            { name: 'Kankaria Road',   slug: 'kankaria-road' },
    { name: 'Kathwada',         slug: 'kathwada' },           { name: 'Khokhara',        slug: 'khokhara' },
    { name: 'Laxmipura',        slug: 'laxmipura' },          { name: 'Manek Chowk',     slug: 'manek-chowk' },
    { name: 'Memnagar',         slug: 'memnagar' },           { name: 'Naranpura',       slug: 'naranpura' },
    { name: 'Nava Wadaj',       slug: 'nava-wadaj' },         { name: 'Odhav GIDC',      slug: 'odhav-gidc' },
    { name: 'Paldi',            slug: 'paldi' },              { name: 'Ranip',           slug: 'ranip' },
    { name: 'Ratan Pole',       slug: 'ratan-pole' },         { name: 'Sabarmati',       slug: 'sabarmati' },
    { name: 'Sagrampura',       slug: 'sagrampura' },         { name: 'Saraspur',        slug: 'saraspur' },
    { name: 'Sarkhej',          slug: 'sarkhej' },            { name: 'Shahpur',         slug: 'shahpur' },
    { name: 'Sola',             slug: 'sola' },               { name: 'Usmanpura',       slug: 'usmanpura' },
    { name: 'Vasna',            slug: 'vasna' },              { name: 'Vasna Road',      slug: 'vasna-road' },
  ],
  rajkot: [
    { name: 'Mavdi',           slug: 'mavdi' },           { name: 'Kothariya',      slug: 'kothariya' },
    { name: 'Kuvadva Road',    slug: 'kuvadva-road' },    { name: 'Jagnath Plot',   slug: 'jagnath-plot' },
    { name: 'Raiya',           slug: 'raiya' },           { name: 'Raiya Road',     slug: 'raiya-road' },
    { name: 'Jamnagar Road',   slug: 'jamnagar-road' },   { name: 'Madhapar',       slug: 'madhapar' },
    { name: 'Morbi Road',      slug: 'morbi-road' },      { name: 'Vasant Vihar',   slug: 'vasant-vihar-rajkot' },
    { name: 'Vijay Nagar',     slug: 'vijay-nagar-rajkot' },{ name: 'Rajkot Industrial',slug: 'rajkot-industrial-area' },
  ],
};

// Derive parent city for any slug
function getParentCity(slug: string): string | null {
  if (cityAreasMap[slug]) return slug; // slug IS the city
  for (const citySlug of Object.keys(cityAreasMap)) {
    if (cityAreasMap[citySlug].some((a) => a.slug === slug)) return citySlug;
  }
  return null;
}

export default function LocationPage({ params }: PageProps) {
  const slug = params?.slug;
  if (!slug || !locationSlugs.includes(slug)) notFound();

  const loc = formatLocationName(slug);

  const locationImagePath = `/images/escorts/escorts-in-${slug}.webp`;
  const locationImageSrc = existsSync(join(process.cwd(), 'public', locationImagePath))
    ? locationImagePath
    : '/images/escorts/bg-escorts.webp';

  const parentCitySlug = getParentCity(slug);
  const localAreas = parentCitySlug
    ? cityAreasMap[parentCitySlug].filter((a) => a.slug !== slug)
    : [];
  const parentCityName = parentCitySlug ? formatLocationName(parentCitySlug) : loc;
  const otherMetros = metroLocations.filter((c) => c.slug !== (parentCitySlug ?? slug));

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Hot Natasha Escorts in ${loc}`,
    description: `Hot Natasha is the most trusted premium escort service in ${loc} — verified VIP escorts, Russian escorts, model escorts and more, available 24/7.`,
    image: `${siteConfig.url}/images/banner/escorts-in-pune.webp`,
    '@id': `${siteConfig.url}/location/${slug}`,
    url: `${siteConfig.url}/location/${slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: '2014',
    address: { '@type': 'PostalAddress', addressLocality: loc, addressRegion: 'IN', addressCountry: 'IN' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '7000', bestRating: '5', worstRating: '1' },
    priceRange: '$$$',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Location', item: `${siteConfig.url}/location` },
      { '@type': 'ListItem', position: 3, name: `Escorts in ${loc}`, item: `${siteConfig.url}/location/${slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `How do I book an escort in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Call or WhatsApp Hot Natasha on +91-9038976363. Share your ${loc} location, preferred escort type, and available time. Confirmed in minutes. Cash payment on arrival — zero advance.` } },
      { '@type': 'Question', name: `Are escorts available 24/7 in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Yes. Hot Natasha operates 24 hours a day, 7 days a week in ${loc} including weekends and public holidays.` } },
      { '@type': 'Question', name: `Is booking an escort in ${loc} discreet?`, acceptedAnswer: { '@type': 'Answer', text: `100% discreet. 256-bit SSL encryption, staff NDAs, zero third-party data sharing. Your ${loc} booking remains completely private.` } },
      { '@type': 'Question', name: `What escort types are available in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Independent, VIP, Russian, model, college, housewife, air hostess, hi-fi escorts and more — all in ${loc} for in-call and out-call.` } },
      { '@type': 'Question', name: `Do you offer out-call services in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Yes. Our escorts travel to your hotel, residence, or any discreet venue in ${loc} with full discretion.` } },
      { '@type': 'Question', name: `How quickly can an escort arrive in ${loc}?`, acceptedAnswer: { '@type': 'Answer', text: `Typically within 30–60 minutes of confirmation in ${loc}. The escort contacts you directly 30 minutes before arrival.` } },
    ],
  };

  const faqItems = [
    { q: `How do I book an escort in ${loc}?`,               a: `Call or WhatsApp Hot Natasha on +91-9038976363 anytime. Share your ${loc} location, preferred escort type, and time window. Booking confirmed in minutes with zero advance payment.` },
    { q: `Are escorts available 24/7 in ${loc}?`,            a: `Yes — Hot Natasha operates round the clock in ${loc}, including weekends and public holidays. Our team answers immediately and arranges a companion at any hour.` },
    { q: `Is booking an escort in ${loc} discreet?`,         a: `100% discreet. We use 256-bit SSL encryption, staff NDAs, and zero third-party data sharing. Your details and booking history in ${loc} are completely private.` },
    { q: `What escort types are available in ${loc}?`,       a: `Independent, VIP, Russian, model, college, housewife, air hostess, and hi-fi escorts — all available in ${loc} for both in-call and out-call bookings.` },
    { q: `Do you offer out-call services in ${loc}?`,        a: `Yes. Our escorts travel to your hotel, private residence, or any discreet venue in ${loc}. We are experienced with hotel discretion protocols for all major properties.` },
    { q: `How quickly can an escort arrive in ${loc}?`,      a: `Typically within 30–60 minutes of booking confirmation in ${loc}. The escort contacts you directly 30 minutes before arrival depending on your exact location in ${loc}.` },
    { q: `Are all escorts in ${loc} verified?`,              a: `Yes. Every escort undergoes our 4-stage verification: government ID check, authentic photo session, health screening, and a personal interview with our team. No unverified escort appears on our platform.` },
    { q: `How much do escort services cost in ${loc}?`,      a: `Pricing varies by escort type, duration, and in-call vs. out-call in ${loc}. Contact us on WhatsApp or call for a transparent, no-obligation quote. No hidden charges ever.` },
    { q: `Do you require advance payment for ${loc}?`,       a: `No. We never ask for advance payments, tokens, or deposits. You pay only in cash when the escort arrives at your ${loc} location. This is our firm zero-advance commitment.` },
    { q: `Can I see photos before booking in ${loc}?`,       a: `Yes. Our team shares verified profile photos on WhatsApp before confirming your ${loc} booking. All photos are taken by our in-house team — 100% authentic, recent, and accurate.` },
    { q: `Is your escort service legal in ${loc}?`,          a: `Hot Natasha provides adult companionship services based on mutual consent between adults. All operations in ${loc} comply with applicable Indian laws concerning adult companionship and privacy.` },
    { q: `How do I contact Hot Natasha for ${loc} escorts?`, a: `Call or WhatsApp us on +91-9038976363 — available 24/7. No account creation required. A real team member responds instantly and arranges your ${loc} escort directly.` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <HeroBanner
        title={`Escorts in ${loc}`}
        subtitle="Premium Escort Service"
        highlightedWord={loc}
        description={`Experience the finest escorts in ${loc} with Hot Natasha — verified, discreet & luxurious. Available 24/7. Rated 4.9/5 by 7,000+ clients.`}
        backgroundImage="/images/banner/escorts-in-pune.webp"
      />

      {/* ── TRUST BAR ── */}
      <div className="trust-bar" role="complementary" aria-label="Trust signals">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item"><i className="fa fa-star" aria-hidden="true"></i><strong>4.9/5</strong>&nbsp;Rated — 7,000+ Reviews</div>
            <div className="trust-item"><i className="fa fa-phone" aria-hidden="true"></i><a href={`tel:${siteConfig.phone.replace(/-/g,'')}`}>{siteConfig.phone}</a></div>
            <div className="trust-item"><i className="fa fa-whatsapp" aria-hidden="true"></i>WhatsApp 24/7</div>
            <div className="trust-item"><i className="fa fa-check-circle" aria-hidden="true"></i>100% Verified Escorts</div>
            <div className="trust-item"><i className="fa fa-lock" aria-hidden="true"></i>100% Confidential</div>
            <div className="trust-item"><i className="fa fa-calendar" aria-hidden="true"></i>Serving Since 2014</div>
          </div>
        </div>
      </div>

      {/* ── ANSWER BLOCK ── */}
      <section className="answer-block-section" aria-labelledby="answer-heading">
        <div className="container">
          <div className="answer-block">
            <div className="answer-block-content vso-speakable">
              <div className="answer-block-label">
                <i className="fa fa-info-circle" aria-hidden="true"></i> About Escorts in {loc}
              </div>
              <h1>What Are Escorts in {loc}?</h1>
              <p>
                <strong>Escorts in {loc}</strong> are premium professional companions who provide discreet, high-quality
                companionship tailored to individual preferences. <strong>Hot Natasha</strong> is {loc}&apos;s most trusted
                escort service — offering personally verified <strong>VIP escorts, Russian escorts, model escorts</strong>,
                and independent escorts available <strong>24/7 across {loc}</strong>.
                Rated <strong>4.9/5 by 7,000+ satisfied clients</strong> since 2014.
              </p>
              <div className="answer-tags">
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> Available 24/7 in {loc}</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> 100% Verified Escorts</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> Fully Confidential</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> In-Call &amp; Out-Call</span>
                <span className="answer-tag"><i className="fa fa-check" aria-hidden="true"></i> No Advance Payment</span>
              </div>
              <div className="answer-block-cta">
                <a href={`tel:${siteConfig.phone.replace(/-/g,'')}`} className="btn btn-primary">
                  <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call Now
                </a>
                <Link href="/booknow" className="btn btn-outline-dark">
                  Book Now &nbsp;<i className="fa fa-calendar" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            <div className="answer-block-image">
              <Image
                src={locationImageSrc}
                alt={`Premium Escorts in ${loc} — Hot Natasha`}
                fill loading="lazy"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="answer-image-badge">
                <i className="fa fa-star" aria-hidden="true"></i> 4.9/5 &nbsp;&bull;&nbsp; 7,000+ Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS BAR ── */}
      <section className="credentials-section" aria-label="Our credentials">
        <div className="cred-bg-overlay" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cred-intro">
            <span className="cred-intro-line" aria-hidden="true"></span>
            <p className="cred-intro-text">Trusted by thousands across {loc}</p>
            <span className="cred-intro-line" aria-hidden="true"></span>
          </div>
          <div className="credentials-grid">
            {credentials.map((cred, index) => (
              <div key={index} className="credential-item">
                <div className="cred-icon-badge"><i className={`fa ${cred.icon}`} aria-hidden="true"></i></div>
                <strong className="cred-value">{cred.value}</strong>
                <span className="cred-label">{cred.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="featured-services-section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="services-heading" className="title">
              All Escort Services In <span className="text-highlight">{loc}</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description vso-speakable">
              Browse all 24 verified escort categories in {loc} — personally verified, professional companions
              offering a discreet and luxurious experience tailored to your preferences.
            </p>
          </div>
          <div className="all-services-grid">
            {allServices.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="service-portrait-card" aria-label={`Book ${service.name} in ${loc}`}>
                <div className="service-portrait-img">
                  <Image
                    src={service.image}
                    alt={`${service.name} in ${loc} — Hot Natasha`}
                    fill loading="lazy"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                  <div className="service-portrait-overlay" aria-hidden="true">
                    <span className="btn btn-primary">View Profiles</span>
                  </div>
                </div>
                <div className="service-portrait-info">
                  <h3>{service.name}</h3>
                  <span className="service-portrait-loc">
                    <i className="fa fa-map-marker" aria-hidden="true"></i> {loc}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA title={`Looking for premium escorts in ${loc}? Call us now!`} buttonText="Book Now" buttonHref="/booknow" />

      {/* ── HOW TO BOOK ── */}
      <section className="how-it-works-section" aria-labelledby="how-heading">
        <div className="container">
          <div className="section-title text-center">
            <h2 id="how-heading" className="title">
              How to Book an Escort in <span className="text-highlight">{loc}</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description">
              Booking a premium escort in {loc} through Hot Natasha is simple, fast, and completely discreet — done in under 5 minutes.
            </p>
          </div>
          <div className="steps-grid">
            {bookingSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number" aria-hidden="true">{step.step}</div>
                <div className="step-icon" aria-hidden="true"><i className={`fa ${step.icon}`}></i></div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {index < bookingSteps.length - 1 && <div className="step-arrow" aria-hidden="true"><i className="fa fa-angle-right"></i></div>}
              </div>
            ))}
          </div>
          <div className="steps-cta">
            <a href={`tel:${siteConfig.phone.replace(/-/g,'')}`} className="btn btn-primary">
              <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call Now: {siteConfig.phone}
            </a>
            <a href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g,'')}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>&nbsp; WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-choose-section" aria-labelledby="why-heading">
        <div className="why-choose-bg-pattern" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title text-center" style={{ marginBottom: '52px' }}>
            <span className="why-choose-label">Why We&apos;re #1</span>
            <h2 id="why-heading" className="title" style={{ color: '#fff', marginTop: '14px' }}>
              Why Choose Hot Natasha in <span className="text-highlight">{loc}</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
          </div>
          <div className="features-grid">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="feature-box">
                <span className="feature-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="feature-icon-wrap">
                  <div className="feature-icon" aria-hidden="true">
                    <i className={`fa ${feature.icon}`}></i>
                  </div>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT + BOOKING FORM ── */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="about-bg-overlay" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-grid">
            <div className="about-text-col">
              <span className="about-label">Since 2014 &middot; {loc}&apos;s #1</span>
              <h2 id="about-heading" className="about-heading">
                Pune&apos;s Most Trusted Agency — Now in <span className="text-highlight">{loc}</span>
              </h2>
              <div className="about-quick-stats">
                <div className="about-stat-item"><strong>7,000+</strong><span>Happy Clients</span></div>
                <div className="about-stat-item"><strong>4.9★</strong><span>Avg Rating</span></div>
                <div className="about-stat-item"><strong>12+ Yrs</strong><span>In Business</span></div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.8', marginBottom: '24px' }}>
                Hot Natasha has been Pune&apos;s most trusted escort agency since 2014. We now serve clients in {loc}
                with the same uncompromising standards of quality, privacy, and professionalism that have earned us
                over 7,000 five-star reviews. Every escort is personally verified, health-screened, and interviewed by our team.
              </p>
              <ul className="about-features-list">
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> Government ID verified escorts</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> 100% authentic profile photos</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> Zero advance payment policy</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> In-call &amp; out-call in {loc}</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> 24/7 customer support team</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i> NDAs signed by all staff</li>
              </ul>
            </div>
            <div className="about-form-col">
              <div className="about-form-card">
                <div className="about-form-card-header">
                  <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                  <span>Book an Escort in {loc}</span>
                </div>
                <div className="about-form-body">
                  <BookingForm variant="sidebar" />
                </div>
                <div className="about-form-trust">
                  <span><i className="fa fa-lock" aria-hidden="true"></i> 100% Private</span>
                  <span><i className="fa fa-check" aria-hidden="true"></i> No Advance</span>
                  <span><i className="fa fa-clock-o" aria-hidden="true"></i> 24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ — 6 + 6 two-column ── */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="faq-bg-pattern" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="faq-header">
            <span className="faq-label">FAQ</span>
            <h2 id="faq-heading" className="faq-heading">
              Escorts in {loc} — <span className="text-highlight">Frequently Asked Questions</span>
            </h2>
            <p className="faq-subhead">Everything you need to know about booking an escort in {loc} — answered directly.</p>
          </div>
          <div className="faq-layout">
            <div className="faq-accordion" role="list">
              {faqItems.slice(0, 6).map((item, index) => (
                <details key={index} className="faq-item" role="listitem">
                  <summary className="faq-question">
                    <span className="faq-q-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.q}</h3>
                    <span className="faq-toggle-icon" aria-hidden="true"><i className="fa fa-plus"></i></span>
                  </summary>
                  <div className="faq-answer"><p>{item.a}</p></div>
                </details>
              ))}
            </div>
            <div className="faq-accordion" role="list">
              {faqItems.slice(6, 12).map((item, index) => (
                <details key={index + 6} className="faq-item" role="listitem">
                  <summary className="faq-question">
                    <span className="faq-q-number" aria-hidden="true">{String(index + 7).padStart(2, '0')}</span>
                    <h3>{item.q}</h3>
                    <span className="faq-toggle-icon" aria-hidden="true"><i className="fa fa-plus"></i></span>
                  </summary>
                  <div className="faq-answer"><p>{item.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CITY SUB-AREAS ── */}
      {localAreas.length > 0 && (
        <section className="pune-areas-section" aria-labelledby="areas-heading">
          <div className="container">
            <div className="section-title text-center">
              <h2 id="areas-heading" className="title">
                Popular Areas in <span className="text-highlight">{parentCityName}</span>
              </h2>
              <div className="diamond-line" aria-hidden="true"></div>
              <p className="section-description vso-speakable">
                Hot Natasha covers every major area in {parentCityName}. Find premium verified escorts near you — available 24/7, in-call and out-call.
              </p>
            </div>
            <div className="areas-cloud" role="list" aria-label={`${parentCityName} areas covered`}>
              {localAreas.map((area) => (
                <Link key={area.slug} href={`/location/${area.slug}`} className="area-pill" role="listitem">
                  <i className="fa fa-map-marker" aria-hidden="true"></i> {area.name}
                </Link>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: '30px' }}>
              <Link href="/location" className="btn btn-outline-light">
                View All Locations &nbsp;<i className="fa fa-map-marker" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── OTHER METRO CITIES ── */}
      <section className="metro-cities-section" aria-labelledby="metro-heading">
        <div className="container">
          <div className="section-title text-center">
            <span className="metro-section-label">Pan-India Escort Services</span>
            <h2 id="metro-heading" className="title">
              Escort Services Across <span className="text-highlight">India&apos;s Top Cities</span>
            </h2>
            <div className="diamond-line" aria-hidden="true"></div>
            <p className="section-description">
              Hot Natasha operates across 18+ major Indian metros — Mumbai, Delhi, Bangalore, Hyderabad and more.
              Premium, verified escorts available 24/7 in every city.
            </p>
          </div>
          <div className="metro-grid">
            {otherMetros.map((city) => (
              <Link key={city.slug} href={`/location/${city.slug}`} className="metro-card">
                <div className="metro-card-img">
                  <Image src={city.image} alt={`Escorts in ${city.name}`} fill sizes="(max-width:768px) 50vw, 20vw" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <div className="metro-card-overlay">
                  <span className="metro-card-name">{city.name}</span>
                  <span className="metro-card-cta">Explore <i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/location" className="btn btn-primary">
              View All City Locations &nbsp;<i className="fa fa-map-marker" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── EEAT CONTENT ARTICLE ── */}
      <section className="eeat-article-section" aria-label={`Expert guide to escorts in ${loc}`}>
        <div className="container">
          <div className="eeat-article-header">
            <span className="eeat-article-label">Expert Guide</span>
            <h2 className="eeat-article-title">
              The Complete Guide to <span className="text-highlight">Escorts in {loc}</span>
            </h2>
            <div className="eeat-article-meta">
              <span><i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp; By Natasha — Founder, Hotnatasha.in</span>
              <span><i className="fa fa-calendar" aria-hidden="true"></i>&nbsp; Updated March 2026</span>
              <span><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp; 8 min read</span>
            </div>
          </div>

          <p className="eeat-lead">
            {loc} is one of India&rsquo;s most vibrant urban hubs — attracting professionals, business travellers,
            students, and long-term residents who all seek genuine, high-quality adult companionship. At Hotnatasha.in,
            we have been serving clients across Pune and {loc} since 2014 with the highest standards of privacy,
            professionalism, and personal care. This guide answers every question you might have about booking
            escorts in {loc}.
          </p>

          <div className="eeat-sections-grid">
            <article className="eeat-content-block">
              <h3><i className="fa fa-map-marker" aria-hidden="true"></i> Premium Escort Services in {loc}</h3>
              <p>
                {loc} has a growing population of educated, high-earning professionals who value their leisure time and
                personal experiences. Whether you are visiting {loc} on a business trip, relocating temporarily, or are
                a long-term resident looking for discreet companionship — Hot Natasha provides a curated selection of
                escorts who match your expectations perfectly.
              </p>
              <p>
                Our {loc} escort roster includes independent professionals, VIP companions, Russian and international
                models, college graduates, housewife escorts, air hostess companions, and hi-fi escorts — each personally
                verified and available for in-call sessions or out-call visits to your hotel or private address in {loc}.
              </p>
              <p>
                All our {loc} escorts are briefed on professionalism, time management, personal presentation, and
                client confidentiality. We maintain the same quality standards whether you are booking in {loc},
                central Pune, or any of the 18 cities we serve across India.
              </p>
            </article>

            <article className="eeat-content-block">
              <h3><i className="fa fa-shield" aria-hidden="true"></i> Safety &amp; Privacy When Booking in {loc}</h3>
              <p>
                Privacy is the most important concern for clients booking escort services in {loc}. We have designed
                every aspect of our operations around protecting your identity, your data, and your reputation.
              </p>
              <p>
                Our website uses 256-bit SSL encryption. Our team operates under individually signed non-disclosure
                agreements. We do not store payment card details beyond transaction completion and never sell, rent,
                or disclose client information to any third party.
              </p>
              <p>
                All our escorts arrive at your {loc} hotel or residence dressed appropriately with no identifying agency
                branding — ensuring complete privacy. Cash payment on arrival means there is no digital trail linked
                to your {loc} booking.
              </p>
            </article>
          </div>

          <div className="eeat-callout-box">
            <div className="eeat-callout-icon" aria-hidden="true"><i className="fa fa-trophy"></i></div>
            <div className="eeat-callout-content">
              <h4>Why Hot Natasha Is {loc}&apos;s Most Trusted Escort Agency</h4>
              <ul className="eeat-callout-list">
                <li><i className="fa fa-check-circle" aria-hidden="true"></i><strong>12+ Years Operating</strong> — Founded in 2014, over a decade of expertise, trust, and satisfaction brought to every {loc} booking.</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i><strong>4-Stage Verification</strong> — Government ID, authentic photos, health screening, and personal interview — every escort, every time.</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i><strong>Zero Advance Policy</strong> — We never ask for deposits or tokens. You pay only cash when the escort arrives. No exceptions.</li>
                <li><i className="fa fa-check-circle" aria-hidden="true"></i><strong>7,000+ Verified Reviews</strong> — Real feedback from real clients across Pune and {loc} — a track record no competitor can match.</li>
              </ul>
            </div>
          </div>

          <div className="eeat-sections-grid">
            <article className="eeat-content-block">
              <h3><i className="fa fa-diamond" aria-hidden="true"></i> Types of Escort Services in {loc}</h3>
              <ul className="eeat-inline-list">
                <li><strong>Independent Escorts</strong> — Freelance professionals selected for personality, education, and presentation in {loc}.</li>
                <li><strong>VIP &amp; Hi-Fi Escorts</strong> — Premium companions for corporate events, private dinners, and exclusive engagements in {loc}.</li>
                <li><strong>Russian &amp; International Models</strong> — Exotic companions available in {loc} for high-profile occasions.</li>
                <li><strong>College Escorts</strong> — Young, educated graduates — fluent, engaging, and genuinely fun companions in {loc}.</li>
                <li><strong>Housewife Escorts</strong> — Mature, warm, attentive companions offering real emotional connection in {loc}.</li>
                <li><strong>Air Hostess Escorts</strong> — Poised, well-travelled companions ideal for business dinners and travel from {loc}.</li>
                <li><strong>Girlfriend Experience (GFE)</strong> — Extended companionship for overnight stays or longer engagements in {loc}.</li>
              </ul>
            </article>

            <article className="eeat-content-block">
              <h3><i className="fa fa-lock" aria-hidden="true"></i> Our 4-Stage Verification for {loc} Escorts</h3>
              <div className="eeat-process-steps">
                <div className="eeat-process-step">
                  <span className="eeat-step-num">01</span>
                  <div><strong>Identity Verification</strong> — Government-issued ID collected and checked before any escort joins our {loc} roster.</div>
                </div>
                <div className="eeat-process-step">
                  <span className="eeat-step-num">02</span>
                  <div><strong>Authentic Photography</strong> — All profile photos taken by our in-house team. No edited or AI-generated images. Ever.</div>
                </div>
                <div className="eeat-process-step">
                  <span className="eeat-step-num">03</span>
                  <div><strong>Health Screening</strong> — Regular health certifications required and maintained in strict confidence as a condition of membership.</div>
                </div>
                <div className="eeat-process-step">
                  <span className="eeat-step-num">04</span>
                  <div><strong>Personal Interview</strong> — Our team personally meets every {loc} escort, evaluating professionalism, communication, and consent standards.</div>
                </div>
              </div>
            </article>
          </div>

          <div className="eeat-booking-process">
            <h3 className="eeat-bp-heading">Book an Escort in {loc} — 4 Easy Steps</h3>
            <p className="eeat-bp-sub">Fast, discreet, confirmed in minutes. No account needed. No advance payment. Just call or WhatsApp.</p>
            <div className="eeat-bp-steps">
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                <h4>Step 1 — Call or WhatsApp</h4>
                <p>Call <strong>+91-9038976363</strong> — available 24/7 in {loc}. A real team member answers immediately.</p>
              </div>
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-comments" aria-hidden="true"></i></div>
                <h4>Step 2 — Share Preferences</h4>
                <p>Tell us your {loc} location, escort type, service, and time window. Profiles shared instantly on WhatsApp.</p>
              </div>
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                <h4>Step 3 — Confirmed in Minutes</h4>
                <p>Booking confirmed fast. Escort contacts you 30 min before arrival in {loc}. Cash payment on arrival only.</p>
              </div>
              <div className="eeat-bp-step">
                <div className="eeat-bp-icon"><i className="fa fa-star" aria-hidden="true"></i></div>
                <h4>Step 4 — Enjoy &amp; Review</h4>
                <p>Experience {loc}&apos;s highest-rated escort service and keep our 4.9/5 standard alive with your feedback.</p>
              </div>
            </div>
            <div className="eeat-bp-cta">
              <a href={`tel:${siteConfig.phone.replace(/-/g,'')}`} className="btn btn-primary">
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Call +91-9038976363
              </a>
              <a href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g,'')}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>&nbsp; WhatsApp Us Now
              </a>
            </div>
          </div>

        </div>
      </section>

      <CTA title={`Ready to book your premium escort in ${loc}?`} buttonText="Book Now" buttonHref="/booknow" />
    </>
  );
}
