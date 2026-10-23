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
    <section className="flex flex-col items-start gap-12 px-4 md:px-25 lg:px-50 pt-10 pb-20 w-full bg-white">
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="font-bold text-[#002c19] text-4xl tracking-[-0.90px] leading-10">
          What fellows receive
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full">
        <div className="border border-[#002c19] p-8 md:p-10 flex flex-col h-full rounded-lg">
          <h4 className="text-2xl font-bold mb-6 min-h-[64px] flex items-center justify-center text-center text-[#002c19]">
            Funding
          </h4>
          <p className="text-[#002c19]/90 flex-grow text-center font-medium">
            We raise funds, distributed quarterly, to directly support our fellows
          </p>
        </div>

        <div className="border border-[#002c19] p-8 md:p-10 flex flex-col h-full rounded-lg">
          <h4 className="text-2xl font-bold mb-6 min-h-[64px] flex items-center justify-center text-center text-[#002c19]">
            Operational support
          </h4>
          <p className="text-[#002c19]/90 flex-grow text-center font-medium">
            Software, operating assistance, mental health support, and AI upskilling
          </p>
        </div>

        <div className="border border-[#002c19] p-8 md:p-10 flex flex-col h-full rounded-lg">
          <h4 className="text-2xl font-bold mb-6 min-h-[64px] flex items-center justify-center text-center text-[#002c19]">
            Visibility
          </h4>
          <p className="text-[#002c19]/90 flex-grow text-center font-medium">
            Featured by TRIIBE, connected to founders and funders, and on stage at the annual Next-Gen Summit
          </p>
        </div>
      </div>
    </section>
  );
}
