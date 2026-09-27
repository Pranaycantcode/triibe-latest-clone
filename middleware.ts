import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/100";
  return NextResponse.redirect(url, 308); // 308 permanent redirect
}

export const config = {
  matcher: ["/index", "/index/:path*"],
};