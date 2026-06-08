import { NextRequest, NextResponse } from 'next/server';

// Canonicalize the host so Google only ever sees one domain:
//   www.goldenview.rs        -> goldenview.rs
//   goldenview-next.vercel.app -> goldenview.rs
// Everything 301s to the bare apex on https. Prevents duplicate-content
// dilution between the marketing domain, the www subdomain, and the
// vercel.app preview/production URL.
const CANONICAL_HOST = 'goldenview.rs';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';

  // Leave Vercel preview deployments (hash-*.vercel.app) alone so previews
  // remain testable; only redirect the known production vercel.app alias
  // and the www subdomain.
  const shouldRedirect =
    host === `www.${CANONICAL_HOST}` ||
    host === 'goldenview-next.vercel.app';

  if (!shouldRedirect) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.host = CANONICAL_HOST;
  url.protocol = 'https:';
  url.port = '';
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip static assets and Next internals; run on everything else.
  matcher: ['/((?!_next/|apt-videos/|apt-images/|rest-images/|spa-images/|favicon|icon|apple-icon|opengraph|robots.txt|sitemap.xml|manifest).*)'],
};
