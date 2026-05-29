import { NextRequest, NextResponse } from "next/server";

function createNonce() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));

  return btoa(String.fromCharCode(...bytes));
}

function createContentSecurityPolicy(nonce: string, shouldUpgradeInsecureRequests: boolean) {
  const isDevelopment = process.env.NODE_ENV !== "production";
  const scriptSources = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    isDevelopment ? "'unsafe-eval'" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const connectSources = ["'self'", "https:", ...(isDevelopment ? ["ws:", "wss:"] : [])].join(" ");

  return `
    default-src 'self';
    base-uri 'self';
    object-src 'none';
    script-src ${scriptSources};
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob: https://ozlemagdasalonu.com https://www.google.com https://www.gstatic.com;
    font-src 'self' data:;
    connect-src ${connectSources};
    frame-src https://www.google.com;
    frame-ancestors 'none';
    form-action 'self';
    worker-src 'self' blob:;
    manifest-src 'self';
    ${shouldUpgradeInsecureRequests ? "upgrade-insecure-requests;" : ""}
  `
    .replace(/\s{2,}/g, " ")
    .trim();
}

function setSecurityHeaders(response: NextResponse, csp: string, shouldSendSecureOriginHeaders: boolean) {
  response.headers.set("Content-Security-Policy", csp);
  if (shouldSendSecureOriginHeaders) {
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  }
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self)",
  );
}

function isLocalHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname.startsWith("192.168.") ||
    hostname.startsWith("10.") ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)
  );
}

export function middleware(request: NextRequest) {
  const nonce = createNonce();
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const hostname = request.nextUrl.hostname;
  const isLocalOrigin = isLocalHost(hostname);
  const isSecureRequest = request.nextUrl.protocol === "https:" || forwardedProto === "https";
  const shouldUpgradeInsecureRequests = process.env.NODE_ENV === "production" && !isLocalOrigin;
  const shouldSendSecureOriginHeaders = !isLocalOrigin && isSecureRequest;
  const csp = createContentSecurityPolicy(nonce, shouldUpgradeInsecureRequests);

  if (
    process.env.NODE_ENV === "production" &&
    request.nextUrl.protocol === "http:" &&
    forwardedProto !== "https" &&
    !isLocalOrigin
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";

    const response = NextResponse.redirect(url, 308);
    setSecurityHeaders(response, csp, false);

    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  setSecurityHeaders(response, csp, shouldSendSecureOriginHeaders);

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|assets|images).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
