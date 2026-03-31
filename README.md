# Hot Natasha - Next.js Version

A modern Next.js 14 website converted from PHP, featuring escort services with location-based pages and SEO optimization.

## Tech Stack

- **Framework**: Next.js 14.2.0 with App Router
- **Language**: TypeScript 5.0
- **Styling**: CSS (custom styles in `/styles/globals.css`)
- **React**: 18.2.0

## Project Structure

```
nextjs-version/
├── app/                        # Next.js App Router pages
│   ├── api/                    # API routes
│   │   └── booking/            # Booking form submission
│   ├── [type]/                 # Dynamic escort type pages (29 types)
│   ├── escorts-in-[location]/  # Dynamic location pages (1,245 locations)
│   ├── about-us/
│   ├── booknow/
│   ├── contact/
│   ├── gallery/
│   ├── location/
│   ├── services/
│   ├── thankyou/
│   ├── layout.tsx
│   ├── page.tsx                # Home page
│   └── not-found.tsx           # 404 page
├── components/                 # Reusable React components
│   ├── BookingForm.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroBanner.tsx
│   ├── ServiceCard.tsx
│   └── Stats.tsx
├── data/                       # Static data files
│   ├── escort-types.ts         # 29 escort types
│   ├── locations.ts            # 1,245 locations
│   └── site-config.ts          # Site configuration
├── public/                     # Static assets
│   ├── fonts/
│   └── images/
├── styles/
│   └── globals.css             # Global styles
├── package.json
├── tsconfig.json
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd nextjs-version
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy static assets from the PHP site (if not already done):
   ```bash
   # Images
   cp -r ../images ./public/
   
   # Fonts
   cp -r ../fonts ./public/
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Features

- **Static Site Generation (SSG)**: All 1,245+ location pages are pre-rendered at build time
- **SEO Optimized**: 
  - JSON-LD schemas (LocalBusiness, BreadcrumbList, FAQPage)
  - Meta tags for each page
  - OpenGraph and Twitter cards
- **Responsive Design**: Mobile-first approach with responsive CSS
- **Dark Mode Ready**: CSS variables for easy theme customization
- **Performance**: Image optimization with `next/image`
- **Type Safety**: Full TypeScript support

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/about-us` | About us page |
| `/contact` | Contact information and form |
| `/booknow` | Booking form |
| `/services` | Services listing |
| `/gallery` | Photo gallery |
| `/location` | Major cities |
| `/[type]` | Escort type pages (e.g., `/college-escorts`) |
| `/escorts-in-[location]` | Location pages (e.g., `/escorts-in-mumbai`) |

## API Routes

### POST `/api/booking`

Submit a booking request.

**Request Body:**
```json
{
  "person_name": "string",
  "person_email": "string",
  "person_phone": "string",
  "escort_services": "string",
  "form_message": "string"
}
```

## Configuration

### Site Configuration

Edit `data/site-config.ts` to update:
- Site name and tagline
- Phone number and email
- Address
- Social media links
- Google Tag Manager ID
- Navigation items

### Adding New Locations

Add location slugs to `data/locations.ts`:
```typescript
export const locationSlugs = [
  // ... existing locations
  'new-location',
];
```

### Adding New Escort Types

Add types to `data/escort-types.ts`:
```typescript
export const escortTypes = [
  // ... existing types
  {
    slug: 'new-type',
    name: 'New Type Escorts',
    description: 'Description here',
  },
];
```

## Environment Variables (Optional)

Create a `.env.local` file for email notifications:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
FROM_EMAIL=noreply@example.com
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with PM2

## Migration Notes

This Next.js version was converted from the original PHP site with the following changes:

1. PHP includes → React components
2. PHP dynamic pages → Next.js dynamic routes with `generateStaticParams()`
3. jQuery → React state management
4. Bootstrap grid → CSS Grid/Flexbox
5. Form submission → API route

## License

Private - All rights reserved.
