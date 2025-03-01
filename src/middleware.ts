import { type NextRequest, NextResponse } from 'next/server';
import { precomputedFlags } from './app/flags';
import { precompute } from 'flags/next';
 
export const config = { matcher: ['/'] };
 
export async function middleware(request: NextRequest) {
  const code = await precompute(precomputedFlags);
 
  // rewrites the request to include the precomputed code for this flag combination
  const nextUrl = new URL(
    `/${code}${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url,
  );
 
  return NextResponse.rewrite(nextUrl, { request });
}