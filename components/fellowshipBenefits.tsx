"use client";

import Image from "next/image";

const benefits = [
  /* {
    number: "01",
    icon: "/images/home/container-3.svg",
    title: "Direct Funding",
    description:
      "Financial grants to support nonprofit operations, programming, and organizational growth",
  }, */
  {
    number: "01",
    icon: "/images/home/container-2.svg",
    title: "Mentorship",
    description:
      "One-on-one guidance from experienced executives and philentrepreneurs",
  },
  {
    number: "02",
    icon: "/images/home/container.svg",
    title: "Community",
    description:
      "An ecosystem of fellow next-gen nonprofit founders",
  },
  /* {
    number: "04",
    icon: "/images/home/container-7.svg",
    title: "Programming",
    description:
      "Personalized documentaries and TRIIBE Talks covering governance, fundraising, and organizational development",
  }, */
  {
    number: "03",
    icon: "/images/home/container-4.svg",
    title: "Resources",
    description:
      "Access to operational tools such as TRIIBE Grants, legal support, and sector-specific expertise",
  },
  {
    number: "04",
    icon: "/images/home/visibility-icon-container.svg",
    title: "Visibility",
    description:
      "Digital reach, Summits, and TRIIBE Talks in front of funders",
  },
  {
    number: "05",
    icon: "/images/home/credibility-icon-container.svg",
    title: "Credibility",
    description:
      "Vetted proof of impact to assure potential funders",
  },
  {
    number: "06",
    icon: "/images/home/software-icon-container.svg",
    title: "Software",
    description:
      "Enterprise accounts for outreach, operations, and AI",
  },
];

export default function FellowshipBenefits() {
  return (
    <section className="flex flex-col items-center gap-12 px-4 sm:px-6 md:px-12 lg:px-20 pt-10 pb-20 w-full max-w-[1300px] mx-auto bg-white">
      <div className="flex flex-col items-center text-center gap-4 w-full">
        <h2 className="font-bold text-[#002c19] text-4xl tracking-[-0.90px] leading-10">
          What fellows receive
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
        <div className="border border-[#002c19] px-6 py-8 md:px-7 md:py-10 flex flex-col justify-start rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
          <h4 className="text-2xl font-bold mb-4 min-h-[56px] flex items-center justify-center text-center text-[#002c19]">
            Funding
          </h4>
          <p className="text-[#002c19]/90 text-center font-medium leading-relaxed">
            We raise funds, distributed quarterly, to directly support our fellows
          </p>
        </div>

        <div className="border border-[#002c19] px-6 py-8 md:px-7 md:py-10 flex flex-col justify-start rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
          <h4 className="text-2xl font-bold mb-4 min-h-[56px] flex items-center justify-center text-center text-[#002c19]">
            Operational support
          </h4>
          <p className="text-[#002c19]/90 text-center font-medium leading-relaxed">
            Software, operating assistance, mental health support, and AI upskilling
          </p>
        </div>

        <div className="border border-[#002c19] px-6 py-8 md:px-7 md:py-10 flex flex-col justify-start rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
          <h4 className="text-2xl font-bold mb-4 min-h-[56px] flex items-center justify-center text-center text-[#002c19]">
            Visibility
          </h4>
          <p className="text-[#002c19]/90 text-center font-medium leading-relaxed">
            Featured by TRIIBE, connected to founders and funders, and on stage at the annual Next-Gen Summit
          </p>
        </div>
      </div>
    </section>
  );
}