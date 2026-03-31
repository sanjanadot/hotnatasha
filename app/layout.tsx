import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site-config';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/banner/escorts-in-pune.webp',
        width: 1240,
        height: 600,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@HotNatashaPune',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: [
      { url: '/images/apple-touch-icon.png' },
      { url: '/images/apple-touch-icon-72x72.png', sizes: '72x72' },
      { url: '/images/apple-touch-icon-114x114.png', sizes: '114x114' },
      { url: '/images/apple-touch-icon-144x144.png', sizes: '144x144' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-in">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${siteConfig.gtmId}');
            `,
          }}
        />
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://static.getbutton.io" />
        {/* Font Awesome 4.7 — icons used site-wide */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <div id="wrapper" className="clearfix">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
