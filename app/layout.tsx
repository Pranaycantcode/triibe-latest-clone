import { GoogleTagManager } from "@next/third-parties/google";
import type React from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"], // normal, medium, semibold, bold
  variable: "--font-dm-sans",
  preload: true,
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.triibe.org"),
  title: {
    default: "TRIIBE - Funding next-gen nonprofit founders",
    template: "%s",
  },
  description: `Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE. Next-gen for next-gen, a foundation made up of incredible changemakers under the age of 30, ensuring next-gen nonprofit founders don't burn out when transitioning from a "youth" nonprofit to an established nonprofit.

  Whether through our College Fellowship, TRIIBE Talks, or the TRIIBE I00, we are building out the nonprofit startup ecosystem, providing stability, visibility, and credibility to next-gen nonprofit founders taking root today to advance tomorrow.`,
  keywords: [
    "nonprofit",
    "changemakers",
    "mentorship",
    "social impact",
    "young leaders",
    "food security",
    "water access",
    "shelter",
    "health",
    "education",
  ],
  authors: [{ name: "TRIIBE" }],
  creator: "TRIIBE",
  publisher: "TRIIBE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.triibe.org",
    siteName: "TRIIBE",
    title: "TRIIBE - Funding next-gen nonprofit founders",
    description: `Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE. Next-gen for next-gen, a foundation made up of incredible changemakers under the age of 30, ensuring next-gen nonprofit founders don't burn out when transitioning from a "youth" nonprofit to an established nonprofit.

    Whether through our College Fellowship, TRIIBE Talks, or the TRIIBE I00, we are building out the nonprofit startup ecosystem, providing stability, visibility, and credibility to next-gen nonprofit founders taking root today to advance tomorrow.`,
    images: [
      {
        url: "https://www.triibe.org/triibe-logo-51.png",
        width: 512,
        height: 512,
        alt: "TRIIBE - Supporting Change Makers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRIIBE - Funding next-gen nonprofit founders",
    description: `Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE. Next-gen for next-gen, a foundation made up of incredible changemakers under the age of 30, ensuring next-gen nonprofit founders don't burn out when transitioning from a "youth" nonprofit to an established nonprofit.

    Whether through our College Fellowship, TRIIBE Talks, or the TRIIBE I00, we are building out the nonprofit startup ecosystem, providing stability, visibility, and credibility to next-gen nonprofit founders taking root today to advance tomorrow.`,
    images: ["https://www.triibe.org/triibe-logo-51.png"],
    creator: "@triibe_us",
  },
  // verification: {
  //   google: "google-site-verification-code",
  //   yandex: "yandex-verification-code",
  // },
  // alternates: {
  //   canonical: "https://www.triibe.org",
  // },

  icons: {
    icon: [
      // Fallback for browsers that don't support media queries

      // For users in Light Mode (Shows the dark 'T' logo)
      {
        url: "/favicon-light.ico",
        media: "(prefers-color-scheme: light)",
        type: "image/x-icon",
      },

      // For users in Dark Mode (Shows the white 'T' logo)
      {
        url: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
        type: "image/x-icon",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "TRIIBE",
    alternateName: "TRIIBE Organization",
    url: "https://www.triibe.org",
    logo: "https://www.triibe.org/images/headerlogo.png",
    description: `Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE. Next-gen for next-gen, a foundation made up of incredible changemakers under the age of 30, ensuring next-gen nonprofit founders don't burn out when transitioning from a "youth" nonprofit to an established nonprofit.

    Whether through our College Fellowship, TRIIBE Talks, or the TRIIBE I00, we are building out the nonprofit startup ecosystem, providing stability, visibility, and credibility to next-gen nonprofit founders taking root today to advance tomorrow.`,
    foundingDate: "2023",
    areaServed: "Worldwide",
    founder: [
      {
        "@type": "Person",
        name: "Kyle Matthys",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "456 W 47th St",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10036",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/thetriibe/",
      "https://www.instagram.com/triibe__talk",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiries",
      url: "https://www.triibe.org/contact",
    },
    knowsAbout: [
      "Social Impact",
      "Mentorship",
      "Nonprofit Leadership",
      "Youth Development",
      "Sustainable Development",
    ],
    seeks: {
      "@type": "Demand",
      name: "Young Change Makers",
      description:
        "We seek passionate young individuals working on solutions for food, water, shelter, health, education, or energy challenges.",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Head Section */}
        {/* <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5ZXPJQVB');`}
        </Script> */}
        {/* <Script
          src="https://widgets.givebutter.com/latest.umd.cjs?acct=xLAdgtMt2xZoh67c&p=other"
          strategy="afterInteractive"
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* <script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js"></script> */}
      </head>
      <body className={`${dmSans.className}  antialiased `}>
        {/* Google Tag Manager (noscript) - Body Section */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZXPJQVB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}
        {children}
        <Analytics />
        <GoogleTagManager gtmId="GTM-5ZXPJQVB" />
      </body>
    </html>
  );
}
