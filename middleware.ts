import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/index" || pathname.startsWith("/index/")) {
    const url = request.nextUrl.clone();
    url.pathname = "/100";
    return NextResponse.redirect(url, 308);
  }

  if (pathname.startsWith("/mytriibe")) {
    const sessionToken = request.cookies.get("triibe_session")?.value;

    if (!sessionToken) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/index", "/index/:path*", "/mytriibe/:path*"],
};
