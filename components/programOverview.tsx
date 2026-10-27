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
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
              <h2 className="text-2xl sm:text-4xl md:text-[52px] lg:text-[54px] font-bold tracking-tight mb-2 md:whitespace-nowrap text-center">
                The next gen will inherit the world's problems.
              </h2>
              <h2 className="text-2xl sm:text-4xl md:text-[52px] lg:text-[54px] font-bold tracking-tight mb-10 md:whitespace-nowrap text-center">
                We back the leaders already solving them.
              </h2>
            </div>

            <div className="flex flex-col gap-3 max-w-4xl mx-auto">
              <h3 className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                TRIIBE is the pipeline philanthropy has been missing, backing
                nonprofit founders under 30.
              </h3>
            </div>
          </div>
        </section>

        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-4 transition-all duration-300 hover:scale-[1.02]">
          <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xl md:text-xl font-medium text-[#002c19] text-center md:text-left">
              Learn more about the nonprofit startup ecosystem
            </p>

            <Link
              href="/the-missing-layer"
              className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105"
            >
              Read our report
            </Link>
          </div>
        </div>

        <section className="pt-16 pb-12 px-4 md:px-12 lg:px-24 bg-white w-full">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19] flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight sm:whitespace-nowrap text-center">
                The next generation is already here
              </h2>
            </div>

            <div className="w-full max-w-[900px] mx-auto mb-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/home/cohorts-triibe.jpeg"
                  alt="TRIIBE Founders Group"
                  width={400}
                  height={260}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-medium mb-6 max-w-3xl mx-auto md:mx-0">
                  The TRIIBE I00 Index represents 23 countries, 653 years of
                  nonprofit leadership, and $15.5M raised last year.
                </h3>
              </div>
            </div>

            <div className="text-base md:text-xl font-medium flex flex-col gap-2 mb-8 text-center">
              <p>Measured by Purposefy, every dollar donated to these</p>
              <p>next-gen philentrepreneurs yields $3.60 in social return.</p>
            </div>

            <div className="w-full my-4 bg-[#002C19] rounded-2xl p-6 sm:p-10 flex flex-col items-center">
              <WorldMapSection />

              <div className="w-full max-w-[600px] mx-auto mt-6 transition-all duration-300 hover:scale-[1.01]">
                <div className="bg-white rounded-[24px] px-6 py-5 sm:px-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                  <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#002c19] text-center sm:text-left whitespace-nowrap">
                    Meet the founders
                  </p>

                  <Link
                    href="/100"
                    className="inline-flex items-center justify-center h-[52px] w-full sm:w-auto px-6 rounded-xl font-semibold text-lg sm:text-xl text-white bg-[#002c19] hover:bg-[#1C5945] whitespace-nowrap transition-colors shrink-0"
                  >
                    TRIIBE 100
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-4 md:pt-6 pb-16 px-4 md:px-25 lg:px-[200px] bg-white w-full">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19]">
            {/* <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Beyond the 100
            </h2> */}

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

                <div className="flex-1 flex flex-col items-center justify-center text-center gap-1">
                  <p className="text-lg leading-7">
                    Intergenerational conversations,
                  </p>
                  <p className="text-lg leading-7">featuring next-gen voices</p>
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
