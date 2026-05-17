"use client";

import { useEffect } from "react";

export default function CTASection() {
  // useEffect(() => {
  //   const observer = new MutationObserver(() => {
  //     const zeffyModal = document.querySelector(
  //       'iframe[src*="zeffy.com"]',
  //     ) as HTMLIFrameElement | null;

  //     if (zeffyModal && zeffyModal.offsetParent !== null) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "";
  //     }
  //   });

  //   observer.observe(document.body, {
  //     childList: true,
  //     subtree: true,
  //     attributes: true,
  //     attributeFilter: ["style", "class"],
  //   });

  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") {
  //       document.body.style.overflow = "";
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     observer.disconnect();
  //     window.removeEventListener("keydown", handleKeyDown);
  //     document.body.style.overflow = "";
  //   };
  // }, []);

  return (
    /* Outer padding:
       - Mobile: px-6
       - Tablet: px-16
       - Desktop: px-[200px]
    */
    <section className="py-20 px-6 md:px-16 xl:px-[200px] bg-[#002c19]">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 xl:gap-12 ">
          {/* Be a Cohort */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between w-full">
            <h3 className="font-semibold text-white text-2xl">Join a cohort</h3>
            <p className="font-normal text-[#D1D5DC] text-base leading-relaxed">
              Are you a next-gen nonprofit founder? Apply to become a TRIIBE
              Fellow.
            </p>
            <a
              href="/apply"
              className="w-full px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors font-semibold text-base text-center"
            >
              Apply
            </a>
          </div>

          {/* Contact Us */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between w-full">
            <h3 className="font-semibold text-white text-2xl">Get involved</h3>
            <p className="font-normal text-[#D1D5DC] text-base leading-relaxed">
              Partner with TRIIBE to empower next-gen founders.
            </p>
            <a
              href="mailto:partnerships@triibe.org"
              className="w-full px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors font-semibold text-base text-center"
            >
              Contact us
            </a>
          </div>

          {/* Give */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between w-full">
            <h3 className="font-semibold text-white text-2xl">Fund our work</h3>
            <p className="font-normal text-[#D1D5DC] text-base leading-relaxed">
              Your donation helps next-gen founders take root today to lead
              tomorrow.
            </p>
            <a
              href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors font-semibold text-base text-center cursor-pointer"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
