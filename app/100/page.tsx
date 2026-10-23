import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/triibe100/Hero";
import WorldMapSection from "@/components/triibe100/WorldMapSection";
import ZoneSection from "@/components/triibe100/ZoneSection";
import { zones } from "@/lib/triibe100/zones";
import { founders } from "@/lib/triibe100/founders";
import HowWePick from "@/components/triibe100/HowWePick";
import FellowshipBenefits from "@/components/fellowshipBenefits";
import MeetTheTribe100 from "@/components/triibe100/MeetTheTribe100";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata = {
  title: "The 100 Nonprofit Founders Under 30 to Watch | TRIIBE 100",
  description:
    "The annual index of 100 leading nonprofit founders under 30, TRIIBE measuring their social return on investment with Purposefy.",
  alternates: {
    canonical: "https://www.triibe.org/100",
  },
};

export default function Triibe100Page() {
  return (
    <div style={{ background: "#002C19" }}>
      <Header />
      <Hero />
      <WorldMapSection />
      <HowWePick />
      {zones.map((zone, i) => {
        const zoneFounders = founders.slice(i * 10, i * 10 + 10);

        if (zoneFounders.length === 0) return null;

        return (
          <ZoneSection
            key={zone.id}
            zone={zone}
            founders={zoneFounders}
            isFirst={i === 0}
          />
        );
      })}
      

      <TestimonialCarousel />

      <FellowshipBenefits />

      <MeetTheTribe100 />

      {/* <section className="py-20 px-4 md:px-25 lg:px-50 bg-gray-50">
        <div className="max-w-260 mx-auto">
          <div className="bg-white border-2 border-black rounded-lg p-8 md:p-10">
            <blockquote className="text-[#002c19] text-xl font-normal leading-relaxed italic">
              "TRIIBE's Mentorship program is nothing short of astounding. With
              a busy schedule, I wasn't sure how much time I could give, but the
              ease of entry, flexible commitment, and thoughtful organization
              made it possible to truly support my mentee in a way that was both
              meaningful and deeply rewarding."
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-[#002c19] font-semibold">
                — Jonny Imerman, Co-founder Imerman Angels
              </span>
              <a
                href="https://www.linkedin.com/in/imermanangels/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5] hover:opacity-80 transition-opacity"
                aria-label="Jonny Imerman LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
