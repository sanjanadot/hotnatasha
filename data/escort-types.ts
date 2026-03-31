// Escort type categories
export interface EscortType {
  slug: string;
  name: string;
  description: string;
}

export const escortTypes: EscortType[] = [
  { slug: 'actress-escorts', name: 'Actress Escorts', description: 'Experience the glamour and charm of actress escorts.' },
  { slug: 'air-hostess-escorts', name: 'Air Hostess Escorts', description: 'Elegant and sophisticated air hostess companions.' },
  { slug: 'bengali-escorts', name: 'Bengali Escorts', description: 'Beautiful and cultured Bengali escorts.' },
  { slug: 'bhabhi-escorts', name: 'Bhabhi Escorts', description: 'Mature and experienced bhabhi companions.' },
  { slug: 'celebrity-escorts', name: 'Celebrity Escorts', description: 'High-profile celebrity escort services.' },
  { slug: 'college-escorts', name: 'College Escorts', description: 'Young and energetic college girl escorts.' },
  { slug: 'erotic-escorts', name: 'Erotic Escorts', description: 'Passionate and sensual erotic companions.' },
  { slug: 'foreigner-escorts', name: 'Foreigner Escorts', description: 'International and diverse foreigner escorts.' },
  { slug: 'gujarati-escorts', name: 'Gujarati Escorts', description: 'Traditional and beautiful Gujarati escorts.' },
  { slug: 'hi-fi-escorts', name: 'Hi-Fi Escorts', description: 'Premium Hi-Fi escort services.' },
  { slug: 'horny-escorts', name: 'Horny Escorts', description: 'Passionate and eager companions.' },
  { slug: 'housewife-escorts', name: 'Housewife Escorts', description: 'Mature and caring housewife escorts.' },
  { slug: 'independent-escorts', name: 'Independent Escorts', description: 'Self-reliant and professional independent escorts.' },
  { slug: 'jaat-escorts', name: 'Jaat Escorts', description: 'Bold and beautiful Jaat escorts.' },
  { slug: 'lesbian-escorts', name: 'Lesbian Escorts', description: 'Lesbian escort companionship services.' },
  { slug: 'male-escorts', name: 'Male Escorts', description: 'Professional male escort services.' },
  { slug: 'marathi-escorts', name: 'Marathi Escorts', description: 'Charming and elegant Marathi escorts.' },
  { slug: 'marwadi-escorts', name: 'Marwadi Escorts', description: 'Traditional Marwadi escort services.' },
  { slug: 'model-escorts', name: 'Model Escorts', description: 'Stunning professional model escorts.' },
  { slug: 'muslim-escorts', name: 'Muslim Escorts', description: 'Beautiful Muslim escort companions.' },
  { slug: 'north-indian-escorts', name: 'North Indian Escorts', description: 'Fair and beautiful North Indian escorts.' },
  { slug: 'punjabi-escorts', name: 'Punjabi Escorts', description: 'Vibrant and lively Punjabi escorts.' },
  { slug: 'russian-escorts', name: 'Russian Escorts', description: 'Exotic and stunning Russian escorts.' },
  { slug: 'shemale-escorts', name: 'Shemale Escorts', description: 'Diverse shemale escort services.' },
  { slug: 'south-indian-escorts', name: 'South Indian Escorts', description: 'Beautiful South Indian escorts.' },
  { slug: 'teen-escorts', name: 'Teen Escorts', description: 'Young and fresh teen escorts.' },
  { slug: 'threesome-escorts', name: 'Threesome Escorts', description: 'Exciting threesome escort services.' },
  { slug: 'unsatisfied-escorts', name: 'Unsatisfied Escorts', description: 'Passionate unsatisfied escorts.' },
  { slug: 'vip-escorts', name: 'VIP Escorts', description: 'Exclusive VIP escort services.' },
];

export function getEscortTypeBySlug(slug: string): EscortType | undefined {
  return escortTypes.find(type => type.slug === slug);
}

export function formatEscortTypeName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
