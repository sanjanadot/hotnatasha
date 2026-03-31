import { NextRequest, NextResponse } from 'next/server'

// Static PHP pages → Next.js routes (301 permanent)
const STATIC_REDIRECTS: Record<string, string> = {
  '/index.php':                '/index',
  '/services.php':             '/services',
  '/about-us.php':             '/about-us',
  '/booknow.php':              '/booknow',
  '/contact.php':              '/contact',
  '/gallery.php':              '/gallery',
  '/faq.php':                  '/',           // FAQ is on the home page
  // Escort type pages
  '/actress-escorts.php':       '/actress-escorts',
  '/air-hostess-escorts.php':   '/air-hostess-escorts',
  '/bengali-escorts.php':       '/bengali-escorts',
  '/foreigner-escorts.php':     '/foreigner-escorts',
  '/gujarati-escorts.php':      '/gujarati-escorts',
  '/hi-fi-escorts.php':         '/hi-fi-escorts',
  '/marwadi-escorts.php':       '/marwadi-escorts',
  '/model-escorts.php':         '/model-escorts',
  '/punjabi-escorts.php':       '/punjabi-escorts',
  '/russian-escorts.php':       '/russian-escorts',
  '/unsatisfied-escorts.php':   '/unsatisfied-escorts',
  '/shemale-escorts.php':       '/shemale-escorts',
  '/south-indian-escorts.php':  '/south-indian-escorts',
  '/hot-bhabhi.php':            '/hot-bhabhi',
  '/housewife-escorts.php':     '/housewife-escorts',
  '/independent-escorts.php':   '/independent-escorts',
  '/vip-escorts.php':           '/vip-escorts',
  '/jaat-escorts.php':          '/jaat-escorts',
  '/lesbian-escorts.php':       '/lesbian-escorts',
  '/marathi-escorts.php':       '/marathi-escorts',
  '/muslim-escorts.php':        '/muslim-escorts',
  '/north-indian-escorts.php':  '/north-indian-escorts',
  '/college-escorts.php':       '/college-escorts',
  '/bhabhi-escorts.php':        '/bhabhi-escorts',
  '/celebrity-escorts.php':     '/celebrity-escorts',
  '/erotic-escorts.php':        '/erotic-escorts',
  '/horny-escorts.php':         '/horny-escorts',
  '/male-escorts.php':          '/male-escorts',
  '/threesome-escorts.php':     '/threesome-escorts',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only process .php URLs
  if (!pathname.endsWith('.php')) return NextResponse.next()

  // 1. Check explicit static/type-page redirects first
  if (STATIC_REDIRECTS[pathname]) {
    return NextResponse.redirect(
      new URL(STATIC_REDIRECTS[pathname], request.url),
      { status: 301 }
    )
  }

  // 2. Location pages: /escorts-in-{slug}.php → /location/{slug}
  const locationMatch = pathname.match(/^\/escorts-in-(.+)\.php$/)
  if (locationMatch) {
    return NextResponse.redirect(
      new URL(`/location/${locationMatch[1]}`, request.url),
      { status: 301 }
    )
  }

  // 3. Generic fallback: strip .php and redirect
  const cleanPath = pathname.slice(0, -4) // remove '.php'
  if (cleanPath && cleanPath !== '/') {
    return NextResponse.redirect(
      new URL(cleanPath, request.url),
      { status: 301 }
    )
  }
}

export const config = {
  // Only run middleware on .php URLs – skips API, static assets, _next
  matcher: ['/((?!_next/static|_next/image|favicon.ico).+\\.php)'],
}
