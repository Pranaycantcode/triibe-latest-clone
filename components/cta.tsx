"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-[#002c19] text-white pt-16 pb-12 px-4 md:px-25 lg:px-[200px] w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 md:mb-12 flex flex-wrap items-center justify-center gap-4">
          Support the Next-gen
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl mx-auto">
          <div className="flex-1 w-full flex justify-center md:justify-start">
            <a
              href="/donate"
              className="w-full max-w-[420px] rounded-2xl bg-white py-6 px-10 text-center text-[#002c19] text-2xl md:text-3xl font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02]"
            >
              Donate here
            </a>
          </div>

          <div className="flex-shrink-0 flex justify-center w-40 md:w-56 lg:w-64">
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