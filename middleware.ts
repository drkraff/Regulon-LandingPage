import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isAdminPath(pathname: string): boolean {
  return (
    pathname.startsWith("/api/admin") || pathname.startsWith("/admin")
  );
}

function checkBasicAuth(request: NextRequest): boolean {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  if (username === undefined || password === undefined || username === "" || password === "") {
    return false;
  }
  const auth = request.headers.get("authorization");
  if (auth === null || !auth.toLowerCase().startsWith("basic ")) {
    return false;
  }
  const encoded = auth.slice(6).trim();
  let decoded: string;
  try {
    decoded = atob(encoded);
  } catch {
    return false;
  }
  const colon = decoded.indexOf(":");
  if (colon === -1) {
    return false;
  }
  const user = decoded.slice(0, colon);
  const pwd = decoded.slice(colon + 1);
  return user === username && pwd === password;
}

export function middleware(request: NextRequest) {
  if (!isAdminPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  if (checkBasicAuth(request)) {
    return NextResponse.next();
  }
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Regulon Admin"',
    },
  });
}

export const config = {
  matcher: ["/api/admin/:path*", "/admin/:path*"],
};
