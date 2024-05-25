// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host');
  const slug = url.pathname.split('/')[1];

  // console.log('host: ', host);
  // console.log('url host: ', url.hostname);
  // console.log('url path: ', url.pathname);

  if (slug == 'authenticator' && !host?.startsWith(slug)) {
    req.headers.set('host', slug + '.' + host);
    const hostname = slug + '.' + url.hostname?.split('.')?.slice(-2).join('.');
    const pathname = url.pathname.substring('/authenticator'.length);
    const newUrl = new URL(`https://${hostname}${pathname}`);
    // console.log('redirect');
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}
