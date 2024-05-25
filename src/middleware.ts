// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function subdomain(host: string, subdomain: string): string {
  if (host.startsWith(subdomain + '.')) {
    return host;
  } else {
    return subdomain + '.' + host;
  }
}

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host') || '';
  const slug = url.pathname.split('/')[1];

  // console.log('host: ', host);
  // console.log('url host: ', url.hostname);
  // console.log('url path: ', url.pathname);

  if (slug == 'authenticator') {
    const hostname = subdomain(host, slug);
    const pathname = url.pathname.substring('/authenticator'.length);
    const newUrl = new URL(`https://${hostname}${pathname}`);
    // console.log('redirect');
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}
