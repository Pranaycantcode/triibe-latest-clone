"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-[#002c19] text-white pt-16 pb-12 px-4 md:px-25 lg:px-[200px] w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 md:mb-12 flex flex-wrap items-center justify-center gap-4">
          Support the next-gen
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-4xl mx-auto">
          <div className="w-full max-w-[380px] flex justify-center md:justify-end">
            <a
              href="/donate"
              className="w-full rounded-2xl bg-white py-8 px-9 text-center text-[#002c19] text-xl md:text-2xl font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
            >
              Donate here
            </a>
          </div>

          <div className="flex-shrink-0 flex justify-center md:justify-start w-40 md:w-56 lg:w-64">
            <Image
              src="/images/home/heroLogo.png"
              alt="TRIIBE Tree Logo"
              width={300}
              height={300}
              className="w-full h-auto object-contain scale-125 md:scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
