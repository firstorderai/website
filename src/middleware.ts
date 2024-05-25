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
    url.hostname = slug + '.' + url.hostname?.split('.')?.slice(-2).join('.');
    url.pathname = url.pathname.substring('/authenticator'.length);
    // console.log('redirect');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
