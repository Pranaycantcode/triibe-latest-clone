import Image from "next/image";

export default function MeetTheTribe100() {
  return (
    <section className="w-full bg-white pt-6 md:pt-10 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-14">
          <h2 className="font-['DM_Sans',Helvetica] font-bold text-[#002c19] text-3xl sm:text-4xl md:text-[48px] tracking-tight leading-none">
            Meet the
          </h2>
          <div className="relative inline-flex items-center">
            <Image
              src="/images/TRIIBELOGOS/TRIIBE I00 LOGO.png"
              alt="TRIIBE 100"
              width={260}
              height={44}
              priority
              className="h-8 sm:h-10 md:h-[44px] w-auto object-contain"
            />
          </div>
        </div>

        
        <div className="flex flex-col gap-5 md:gap-6 font-['DM_Sans',Helvetica] text-[#002c19]/90 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-[750px] mx-auto">
          <p>
            The relationships that carry a founder for decades often start with a real conversation, not a pitch.
          </p>
          <p>
            Once a month, TRIIBE invites every donor giving $1K or more to meet the TRIIBE I00.
          </p>
          <p>One hour. One-on-one conversations. Four rounds of 15 minutes.</p>
          <p>Sessions run the 4th Monday of every month, 12pm ET.</p>
        </div>
      </div>
    </section>
  );
}
