import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import GrantsHeroGlobeWrapper from "@/components/grants/grants-hero-globe-wrapper";
import LiveGrantMetrics from "@/components/grants/live-grant-metrics";
import GrantsPricing from "@/components/grants/grants-pricing";
import GrantsBanner from "@/components/grants/GrantsBanner";
import Footer from "@/components/footer";

// TRIIBE owns this landing page. GrantAuthority receives only the outbound
// referral and handles the secure account, search, application, and billing flow.
const PRODUCTION_REFERRAL_URL = "https://www.grantauthority.org/r/triibe";
const TRIIBE_GRANTS_SIGN_IN_URL =
  "https://www.grantauthority.org/signin?next=%2Ftriibe%2Fworkspace";

function resolveReferralUrl() {
  const configuredUrl = process.env.GRANTAUTHORITY_REFERRAL_URL?.trim();
  if (!configuredUrl) return PRODUCTION_REFERRAL_URL;

  try {
    const url = new URL(configuredUrl);
    const isProductionHost =
      url.hostname === "grantauthority.org" ||
      url.hostname === "www.grantauthority.org";
    const isBrightsteadPreview =
      url.hostname.startsWith("grantai-") &&
      url.hostname.endsWith("-brightstead-technologies.vercel.app");

    if (
      url.protocol === "https:" &&
      url.pathname === "/r/triibe" &&
      !url.search &&
      !url.hash &&
      (isProductionHost || isBrightsteadPreview)
    ) {
      return url.toString();
    }
  } catch {
    // Invalid or unapproved destinations fail closed to production.
  }

  return PRODUCTION_REFERRAL_URL;
}

const TRIIBE_GRANTS_PORTAL_URL = resolveReferralUrl();

export const metadata: Metadata = {
  title: "Largest Grant Database, For Free | TRIIBE Grants",
  description:
    "The only grants platform built for next-gen founders. Find, qualify, and apply to grants across the globe for free, using our AI-powered grants engine.",
  alternates: { canonical: "https://www.triibe.org/grants" },
  openGraph: {
    title: "Largest Grant Database, For Free | TRIIBE Grants",
    description:
      "The only grants platform built for next-gen founders. Find, qualify, and apply to grants across the globe for free, using our AI-powered grants engine.",
    url: "https://www.triibe.org/grants",
  },
};

const steps = [
  {
    number: "01",
    title: "Find",
    description:
      "Use our AI search to describe your mission and what you’re looking for, so we can narrow down the funding best for you.",
  },
  {
    number: "02",
    title: "Qualify",
    description:
      "Review fit, deadlines, requirements, and the original source of funds before pursuing.",
  },
  {
    number: "03",
    title: "Apply",
    description:
      "Turn a qualified opportunity into an organized, stronger submission, for free.",
  },
];

export default function GrantsPage() {
  return (
    <main className="min-h-screen bg-white text-[#002c19]">
      <Header />

      <section className="relative overflow-hidden bg-[#002c19] px-4 pb-10 pt-28 text-white md:pb-12 md:pt-32">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_18%_10%,#ffffff_0,transparent_23%),radial-gradient(circle_at_80%_52%,#6ea687_0,transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[690px] max-w-[1200px] items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 py-8 lg:py-12">
            <Image
              src="/images/home/TRIIBEGrants.png"
              alt="TRIIBE Grants"
              width={5388}
              height={647}
              priority
              className="h-auto w-full max-w-[390px] brightness-0 invert"
            />
            <h1 className="mt-9 max-w-[640px] text-5xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-[68px]">
              The grant platform built for next-gen founders
            </h1>
            <p className="mt-7 max-w-[650px] text-lg leading-8 text-white/80 md:text-xl">
              Most grants are not publicly posted. TRIIBE Grants helps you find
              them anyway, enriched daily, matched to your mission, drafted in
              minutes.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="https://www.grantauthority.org/triibe/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-base font-bold text-[#002c19] transition-colors hover:bg-[#edf4f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Find your grants
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.grantauthority.org/triibe/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/50 px-8 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Sign in
              </a>
            </div>
            <p className="mt-4 text-sm text-white/65">Searching is free.</p>
          </div>

          <div className="relative z-0 flex min-w-0 items-center justify-center overflow-hidden lg:justify-end">
            <GrantsHeroGlobeWrapper />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[1200px] items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
          Powered by <span className="text-white/70">GrantAuthority</span>
        </div>
      </section>

      <LiveGrantMetrics />

      <section
        className="px-4 pt-20 md:pt-28 pb-4 md:pb-6"
        aria-labelledby="mission-fundable-heading"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="mission-fundable-heading"
            className="w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight whitespace-nowrap"
          >
            Make your mission fundable
          </h2>
          <div className="mt-5 max-w-[980px] mx-auto text-center text-base leading-8 text-[#496157] md:text-lg flex flex-col gap-2">
            <p>
              TRIIBE Grants is our free infrastructure supporting credible
              opportunities, clear eligibility,
            </p>
            <p>
              primary-source evidence, and the tools to move from search to
              submission.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#002c19]/15 bg-white p-7 shadow-sm md:p-8"
              >
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#547064]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#496157]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <GrantsBanner />

      {/* <div className="bg-[#f4f6f5]">
        <GrantsPricing referralUrl={TRIIBE_GRANTS_PORTAL_URL} />
      </div> */}

      <Footer />
    </main>
  );
}
