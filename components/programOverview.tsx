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
        {/* Hero Headline Section */}
        <section className="pt-14 pb-12 px-4 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19]">
            <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
              <h2 className="text-2xl sm:text-4xl md:text-[52px] lg:text-[54px] font-bold tracking-[0.015em] mb-0 md:whitespace-nowrap text-center leading-tight">
                The next gen will inherit the world's problems.
              </h2>
              <h2 className="text-2xl sm:text-4xl md:text-[52px] lg:text-[54px] font-bold tracking-[0.015em] mb-6 md:whitespace-nowrap text-center leading-tight">
                We back the leaders already solving them.
              </h2>
            </div>

            {/* <div className="flex flex-col gap-3 max-w-4xl mx-auto"> */}
            {/* <h3 className="text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-[0.01em]">
                TRIIBE is the pipeline philanthropy has been missing.
              </h3> */}
            {/* </div> */}
          </div>
        </section>

        {/* Report Callout Banner */}
        <div className="w-full max-w-[9Host your own TRIIBE Tal00px] mx-auto px-4 md:px-8 py-5 transition-all duration-300 hover:scale-[1.02]">
          <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-7 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xl md:text-xl font-medium text-[#002c19] text-center md:text-left">
              The pipeline philanthropy has been missing
            </p>

            <Link
              href="/the-missing-layer"
              className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105"
            >
              Read our report
            </Link>
          </div>
        </div>

        {/* Next Generation / TRIIBE 100 Map Section */}
        <section className="pt-24 pb-20 px-4 md:px-12 lg:px-24 bg-white w-full">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19] flex flex-col items-center">
            {/* Section Header */}
            {/* <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.015em] sm:whitespace-nowrap text-center">
                The next generation is already here
              </h2>
            </div> */}

            {/* Split Details: Cohort Photo + Index Stats */}
            <div className="w-full max-w-[1050px] mx-auto mb-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
              <div className="w-full max-w-[420px] sm:max-w-[480px] shrink-0 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/home/cohorts-triibe.jpeg"
                  alt="TRIIBE Founders Group"
                  width={600}
                  height={390}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col justify-center w-full px-4 sm:px-0">
                <h3 className="text-sm sm:text-[17px] md:text-lg font-medium mb-4 max-w-xl mx-auto md:mx-0 leading-relaxed tracking-[0.01em]">
                  The TRIIBE 100 Index represents 23 countries,{" "}
                  <br className="hidden sm:inline" />
                  653 years of nonprofit leadership, and $15.5M raised last
                  year.
                </h3>

                <div className="text-sm sm:text-[17px] md:text-lg font-medium flex flex-col gap-1 tracking-[0.01em] max-w-xl mx-auto md:mx-0">
                  <p className="sm:whitespace-nowrap">
                    Measured by Purposefy, every dollar donated to these
                  </p>
                  <p className="sm:whitespace-nowrap">
                    next-gen philentrepreneurs yields $3.60 in social return.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive World Map Block */}
            <div className="w-full my-4 bg-[#002C19] rounded-2xl p-6 sm:p-10 flex flex-col items-center">
              <p className="text-xs sm:text-lg font-medium text-white/75 mb-3 text-center tracking-[0.015em]">
                Click on a dot to meet the fellows in that region
              </p>

              <WorldMapSection />

              <div className="w-full max-w-[450px] mx-auto mt-6 transition-all duration-300 hover:scale-[1.01]">
                <div className="bg-white rounded-[24px] px-6 py-5 sm:px-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                  <p className="text-xl sm:text-xl md:text-2xl font-medium text-[#002c19] text-center sm:text-left md:whitespace-nowrap">
                    Learn more
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

        {/* Beyond the 100 / Additional Resource Cards */}
        <section className="pt-6 md:pt-8 pb-16 px-4 md:px-25 lg:px-[200px] bg-white w-full">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19]">
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
