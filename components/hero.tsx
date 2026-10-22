// "use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="pt-16 ">
      <section className="relative w-full min-h-screen bg-[#101828] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden bg-[#101828]">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 scale-110 pointer-events-none"
          >
            <source src="/videos/Hero_Background.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="relative z-0 w-full h-full object-contain pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]"
          >
            <source
              src="/videos/Hero_Background_adjusted.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 w-full h-full bg-black/45 pointer-events-none z-[1]" />
        </div>

        <div className="relative z-10 flex flex-col items-center  px-6   max-w-225 mx-auto ">
          <div className="flex flex-col items-center mt-40 md:mt-14 pb-3">
            <h1 className="font-['DM_Sans',Helvetica] font-bold text-white text-3xl md:text-3xl lg:text-[56px] text-center tracking-tight leading-tight max-w-200">
              Maximizing return on impact
              <br />
              and investment for nonprofits
            </h1>
          </div>

          <div className=" mt-7 flex flex-col md:flex-row items-center justify-center  gap-6 md:gap-12   ">
            {/* <Link
              href="/fellowship"
              className="px-6 py-3 font-bold bg-white text-[#002c19]
 hover:bg-gray-100 font-['DM_Sans',Helvetica] font-normal text-sm h-11 inline-flex items-center justify-center transition-colors rounded-sm h-[44px]"
            >
              Explore our Program
            </Link> */}

            {/* <Link
              href="/apply"
              className="px-6 py-3  font-bold bg-[#002c19] text-white rounded-sm h-[44px] hover:bg-[#003d24] font-['DM_Sans',Helvetica] font-normal text-sm  inline-flex items-center justify-center transition-colors "
            >
              Apply to Fellowship
            </Link> */}
          </div>
          <div className="mt-2">
            <Image
              src="/images/TRIIBELOGOS/TRIIBE NAME WHITE.png"
              alt="TRIIBE"
              width={320}
              height={40}
              priority
            />
          </div>

          <div className="mt-15 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <p className="leading-relaxed text-lg text-white tracking-wide md:text-2xl text-center">
              Independent member of the United World Leaders
            </p>
            <Image
              src="/UWL Raster File.png"
              alt="United World Leaders"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
