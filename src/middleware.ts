import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/views/1', request.url), 301)
}
 
export const config = {
  matcher: '/',
}