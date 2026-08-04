import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all financial dashboard, accounts, payments, and card management routes
  if (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/accounts') ||
    pathname.startsWith('/payments') ||
    pathname.startsWith('/cards') ||
    pathname.startsWith('/investments')
  ) {
    const token = request.cookies.get('next-auth.session-token') || request.cookies.get('finexa-auth-token');
    if (!token) {
      const loginUrl = new URL('/pricing', request.url);
      loginUrl.searchParams.set('callbackUrl', encodeURIComponent(pathname));
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/accounts/:path*', '/payments/:path*', '/cards/:path*', '/investments/:path*'],
};
