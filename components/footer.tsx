"use client";

import CTASection from "@/components/cta";

const footerColumns = [
  /* {
    title: "For applicants",
    links: [
      { label: "Apply Now", href: "/apply" },
      { label: "Fellowship Details", href: "/fellowship" },
      { label: "FAQ", href: "/fellowship#faqFellowship" },
    ],
  }, */
  {
    title: "About",
    links: [
      { label: "Team", href: "/about" },
      { label: "Fellows", href: "/cohort" },
      /* { label: "Privacy policy", href: "/index/privacy" }, */
    ],
  },
  {
    title: "Partner",
    links: [
      {
        label: "Donate",
        href: "https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz",
        target: "_blank",
      },

      { label: "Contact", href: "mailto:partnerships@triibe.org" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <CTASection />

      <footer className="flex flex-col items-start pt-16 pb-0 px-4 md:px-25 lg:px-[200px] relative w-full bg-white border-t border-gray-200">
        <div className="flex flex-col items-start gap-12 relative w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-normal text-[#002c19] text-xl tracking-[0.50px] leading-7">
                TRIIBE
              </h2>
              <p className="font-normal text-[#002c19]/80 text-sm tracking-[0] leading-[22.8px]">
                Maximizing return on impact and income for nonprofits
              </p>
            </div>

            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                <h3 className="font-semibold text-[#002c19] text-sm tracking-[0] leading-5">
                  {column.title}
                </h3>
                <nav className="flex flex-col items-start gap-2">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      {...(link.target && {
                        target: link.target,
                        rel: "noopener noreferrer",
                      })}
                      className="font-normal text-[#002c19]/80 text-sm tracking-[0] leading-5 hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
            <div className="flex flex-col items-start gap-4">
              <h3 className="font-semibold text-[#002c19] text-sm tracking-[0] leading-5">
                Transparency
              </h3>

              <a
                aria-label="Triibe"
                href="https://app.candid.org/profile/16039436/triibe-33-2683719/?pkId=c105f719-74b7-416c-a32c-8f844267934d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Candid Platinum Transparency Seal"
                  src="/images/candid.svg"
                  className="w-24 h-auto"
                />
              </a>
            </div>
          </div>

          <div className="w-full">
            <p className="font-normal text-[#002c19]/80 text-xs md:text-sm tracking-[0] leading-5">
              United World Leaders exercises no operational control over and
              assumes no responsibility for the activities of TRIIBE. TRIIBE is
              not authorized to legally bind United World Leaders or any of its
              representatives.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-gray-200 pt-4 pb-4 gap-4">
            <p className="font-normal text-[#002c19]/80 text-sm tracking-[0] leading-5">
              © 2026 TRIIBE 501(c)(3). All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:partnerships@triibe.org"
                className="text-[#697282] hover:text-black transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/thetriibe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#697282] hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 3h15A1.5 1.5 0 0121 4.5v15a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3zM8 11v6M8 8v.01M12 16v-5M16 16v-3a2 2 0 00-4 0"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@TRIIBEorg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#697282] hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.582 7.198a2.5 2.5 0 00-1.768-1.768C18.25 5 12 5 12 5s-6.25 0-7.814.43A2.5 2.5 0 002.418 7.2 26.4 26.4 0 002 12a26.4 26.4 0 00.418 4.802 2.5 2.5 0 001.768 1.768C5.75 19 12 19 12 19s6.25 0 7.814-.43a2.5 2.5 0 001.768-1.768A26.4 26.4 0 0022 12a26.4 26.4 0 00-.418-4.802z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 15l5-3-5-3v6z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/triibe__talk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#697282] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 3h9A4.5 4.5 0 0121 7.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11.37a4 4 0 11-7.914 1.174A4 4 0 0116 11.37zM17.5 6.75h.01"
                  />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@triibetalk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#697282] hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3v3.75a4.5 4.5 0 004.5 4.5M16.5 3h-3v12.75a3.75 3.75 0 11-3.75-3.75"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
