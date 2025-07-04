import { NextResponse, NextRequest } from 'next/server'

// Protect /about and its subroutes
export function middleware(request: NextRequest) {
  const userId = request.cookies.get("userId")?.value
  const { pathname } = request.nextUrl

    // If accessing /dashboard and not authenticated, redirect to /
  if (pathname.startsWith('/checkout') && !userId) {
    return NextResponse.redirect(new URL('/login', request.url))


  }


   if (pathname.startsWith('/dashboard') && !userId) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  
  // If not authenticated, redirect to /home
  if (!userId) {
    return NextResponse.redirect(new URL('/', request.url))
  }


  // If authenticated, allow access
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/checkout' ],
}