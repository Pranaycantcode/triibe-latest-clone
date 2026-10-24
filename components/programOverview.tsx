"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";
import WorldMapSection from "@/components/triibe100/WorldMapSection";

export default function ProgramOverviewTest() {
  return (
    <>
      <main className="w-full flex flex-col">
        <section className="pt-16 pb-16 px-4 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight mb-2 whitespace-nowrap">
              Philanthropy has great leaders.
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight mb-10 whitespace-nowrap">
              It has no pipeline for the next ones.
            </h2>

            <div className="flex flex-col gap-3 max-w-4xl mx-auto">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                TRIIBE backs founders under 30 who are reshaping philanthropy
                itself.
              </h3>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                With nothing yet to protect, they’re free to fail, and that
                freedom is where new ideas take root.
              </h3>
            </div>
          </div>
        </section>

        <section className="bg-[#002c19] text-white py-24 px-4 md:px-25 lg:px-[200px] w-full pt-16">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-5xl mx-auto">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-center md:text-left max-w-2xl">
                Channeling capital to the nonprofit startup ecosystem
              </h3>

              <div className="flex-shrink-0 flex justify-center w-48 md:w-64 -ml-8 overflow-visible">
                <Image
                  src="/images/home/heroLogo.png"
                  alt="TRIIBE Tree Logo"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain scale-125 md:scale-150"
                />
              </div>
            </div>

            <div className="w-full max-w-[1000px] mx-auto mt-10 transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-xl md:text-2xl font-medium text-[#002c19] text-center md:text-left">
                  Learn about the missing nonprofit layer
                </p>

                <Link
                  href="/the-missing-layer"
                  className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105"
                >
                  Read our Report
                </Link>
              </div>
            </div>

            <div className="mt-8 md:mt-10 text-center">
              <p className="text-white/90 text-sm md:text-base font-medium"></p>
            </div>
          </div>
        </section>

        <section className="pt-16 pb-1 px-4 md:px-12 lg:px-24 bg-white w-full">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19] flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
              <Image
                src="/images/TRIIBELOGOS/TRIIBE I00 LOGO.png"
                alt="TRIIBE 100"
                width={260}
                height={48}
                priority
                className="h-9 sm:h-11 md:h-12 w-auto object-contain"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight whitespace-nowrap">
                The next generation is already here
              </h2>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-8 max-w-3xl mx-auto">
              Our index of nonprofit founders under 30
            </h3>

            <div className="w-full my-6 bg-[#002C19] rounded-2xl p-6 sm:p-10 flex flex-col items-center">
              <WorldMapSection />

              <div className="w-full max-w-[600px] mx-auto mt-6 transition-all duration-300 hover:scale-[1.01]">
                <div className="bg-white rounded-[24px] px-8 py-5 shadow-sm flex items-center justify-between gap-6">
                  <p className="text-2xl md:text-3xl font-medium text-[#002c19]">
                    See who they are
                  </p>

                  <Link
                    href="/100"
                    className="inline-flex items-center justify-center h-[52px] px-6 rounded-xl font-semibold text-xl text-white bg-[#002c19] hover:bg-[#1C5945] whitespace-nowrap transition-colors shrink-0"
                  >
                    TRIIBE 100
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 w-full px-4 md:px-25 lg:px-50 bg-white">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19] flex flex-col gap-2">
            <p className="text-base md:text-lg font-medium">
              Collectively, 653 years of nonprofit leadership and $15.5M raised
              last year.
            </p>
            <p className="text-base md:text-lg font-medium text-[#002c19]">
              Measured by Purposefy: $3.60 in social return for every $1
              donated.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-25 lg:px-[200px] bg-white w-full">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19]">
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Beyond the 100
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="border border-[#002c19] rounded-2xl p-8 md:p-10 flex flex-col justify-between items-center h-full">
                <div className="h-[90px] w-full flex items-center justify-center mb-4 shrink-0">
                  <Image
                    src="/images/home/TRIIBEGrants.png"
                    alt="TRIIBE Grants"
                    width={300}
                    height={90}
                    className="h-[60px] w-auto object-contain scale-[0.7]"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center text-center">
                  <p className="text-lg leading-7">
                    Free, AI-powered grant database for search, application, and
                    submission tracking
                  </p>
                </div>

                <div className="w-full flex justify-center mt-8 shrink-0">
                  <Link
                    href="/grants"
                    className="flex items-center justify-center w-[200px] bg-[#002c19] text-white rounded-sm h-[44px] font-bold hover:bg-[#1C5945] transition-colors"
                  >
                    TRIIBE Grants
                  </Link>
                </div>
              </div>

              <div className="border border-[#002c19] rounded-2xl p-8 md:p-10 flex flex-col justify-between items-center h-full">
                <div className="h-[90px] w-full flex items-center justify-center mb-4 shrink-0">
                  <Image
                    src="/images/home/TRIIBETalk.jpeg"
                    alt="TRIIBE TALK"
                    width={300}
                    height={90}
                    className="h-[60px] w-auto object-contain scale-[0.7]"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center text-center">
                  <p className="text-lg leading-7">
                    Intergenerational conversations, featuring next-gen voices
                  </p>
                </div>

                <div className="w-full flex justify-center mt-8 shrink-0">
                  <Link
                    href="/talk"
                    className="flex items-center justify-center w-[200px] bg-[#002c19] text-white rounded-sm h-[44px] font-bold hover:bg-[#1C5945] transition-colors"
                  >
                    TRIIBE Talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
