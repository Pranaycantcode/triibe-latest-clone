import Link from "next/link";

export default function GrantsBanner() {
  return (
    <section className="pt-6 md:pt-8 pb-12 w-full px-4 md:px-25 lg:px-50">
      <div className="w-full max-w-[800px] mx-auto transition-all duration-300 hover:scale-[1.02]">
        <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-2xl md:text-3xl font-medium text-[#002c19]">
            Find your grants
          </p>

          <Link
            href="https://www.grantauthority.org/triibe/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}