import type { NextConfig } from "next";

const securityHeaders = [
  {
    // Prevent DNS prefetch (minor privacy/security benefit)
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    // Enforce HTTPS for 2 years (only sent over HTTPS in production)
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Prevent clickjacking by disallowing iframes from other origins
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Prevent MIME-type sniffing
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Send origin only when navigating to the same site
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Disable unnecessary browser features
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // Content Security Policy — allows Turnstile widget from Cloudflare
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires 'unsafe-inline' for its inline scripts in development;
      // 'unsafe-eval' is needed for some Next.js features.
      // Tighten this further with nonces in a future iteration.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' challenges.cloudflare.com",
      "frame-src challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "font-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  typedRoutes: true,
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
