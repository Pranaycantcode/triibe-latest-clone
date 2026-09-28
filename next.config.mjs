/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      
      {
        source: "/index",
        destination: "/100",
        permanent: true,
      },
      {
        source: "/index/:path*",
        destination: "/100/:path*",
        permanent: true,
      },

      
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/programs",
        destination: "/fellowship",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/talk",
        permanent: true,
      },
      {
        source: "/program",
        destination: "/fellowship",
        permanent: true,
      },
      {
        source: "/media",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/triibetalk",
        destination: "/talk",
        permanent: true,
      },
      {
        source: "/triibe100",
        destination: "/100",
        permanent: true,
      },
      
      {
        source: "/apply",
        destination: "/talk",
        permanent: true,
      },
      
      {
        source: "/triibeindex",
        destination: "/100",
        permanent: true,
      },
      {
        source: "/triibeindex/:path*",
        destination: "/100/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "images.lumacdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://logictry.com https://www.googletagmanager.com https://www.google-analytics.com https://widgets.givebutter.com https://*.givebutter.com https://va.vercel-scripts.com https://maps.googleapis.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: https://www.googletagmanager.com https://www.google-analytics.com https://maps.gstatic.com https://maps.googleapis.com https://*.doubleclick.net https://*.googleadservices.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://logictry.com https://www.googletagmanager.com https://www.google-analytics.com https://widgets.givebutter.com https://*.givebutter.com https://givebutter.com https://maps.googleapis.com https://script.google.com https://script.googleusercontent.com https://*.googleusercontent.com https://*.googleapis.com https://www.instagram.com https://*.instagram.com https://analytics.google.com https://www.google.com https://ad.doubleclick.net https://*.doubleclick.net https://*.googleadservices.com https://googleads.g.doubleclick.net https://td.doubleclick.net https://stats.g.doubleclick.net; frame-src 'self' https://blog.triibe.org https://logictry.com https://www.googletagmanager.com https://*.givebutter.com https://givebutter.com https://www.youtube.com https://luma.com https://www.google.com https://maps.google.com https://www.instagram.com https://*.instagram.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://formsubmit.co https://*.givebutter.com https://script.google.com; ",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/public/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*).js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*).css",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)(png|jpg|jpeg|svg|webp|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;