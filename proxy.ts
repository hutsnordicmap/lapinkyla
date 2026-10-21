import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const gonePrefixes = ["/wp-content", "/wp-includes", "/wp-admin"];
const goneExact = new Set(["/wp-login.php", "/xmlrpc.php"]);

function isGone(pathname: string) {
  if (goneExact.has(pathname)) return true;
  return gonePrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isGone(pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "public, max-age=86400",
      },
    });
  }

  const requestHeaders = new Headers(request.headers);
  const locale =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fi";
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|icon.svg|favicon.ico).*)"],
};
