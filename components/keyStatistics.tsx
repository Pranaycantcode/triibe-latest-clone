"use client";

import Link from "next/link";
import Image from "next/image";

const statistics = [
  {
    value: "150+",
    label: "FOUNDERS SUPPORTED",
  },
  {
    value: "45",
    label: "UNIVERSITIES REPRESENTED",
  },
  {
    value: "92%",
    label: "COHORT RETENTION",
  },
  {
    value: "$2.1M",
    label: "IN GRANTS AWARDED",
  },
];

const supportedByLogos = [
  // {
  //   src: "/images/home/image-127.png",
  //   alt: "Supported by partner 1",
  //   className: "w-64 h-[59px]",
  // },
  // {
  //   src: "/images/home/streamr1.png",
  //   alt: "Supported by partner 3",
  //   className: "w-64 h-[58px] object-contain",
  // },
];

const partneredWithLogos = [
  {
    src: "/images/home/image-131.png",
    alt: "ESG News",
    url: "https://esgnews.com",
    className: "w-full h-12 object-contain scale-100",
  },
  {
    src: "/images/home/image-132.png",
    alt: "Cloz Talk",
    url: "https://cloztalk.com/",
    className: "w-full h-12 object-contain scale-95",
  },
  {
    src: "/images/home/image-133.png",
    alt: "Brooklyn Law School",
    url: "https://www.brooklaw.edu/",
    className: "w-full h-12 object-contain scale-110",
  },
  {
    src: "/images/home/womensOrg1.png",
    alt: "WEDO",
    url: "https://www.joinwedo.org/",
    className: "w-full h-12 object-contain scale-100",
  },
  {
    src: "/images/home/illuminen1.png",
    alt: "illuminem",
    url: "https://illuminem.com/",
    className: "w-full h-12 object-contain scale-105",
  },
  {
    src: "/images/home/unitedPlanet.png",
    alt: "United Planet",
    url: "https://www.up.game/",
    className: "w-full h-12 object-contain scale-95",
  },
  {
    src: "/images/home/inspireYouthJournal.png",
    alt: "Inspire Youth Journal",
    url: "http://inspireyouthjournal.org/",
    className: "w-full h-12 object-contain scale-110",
  },
  {
    src: "/images/home/learningplanet.png",
    alt: "Learning Planet Institute",
    url: "https://www.learningplanetinstitute.org/en/",
    className: "w-full h-12 object-contain scale-105",
  },
  /* {
    src: "/images/home/climatecafe.png",
    alt: "Climate Cafe",
    url: "https://www.climatecafe.eco/",
    className: "w-full h-12 object-contain scale-100",
  }, */
  {
    src: "/images/home/we.png",
    alt: "WE7",
    url: "https://we7.ai/",
    className: "w-full h-12 object-contain scale-100",
  },
  {
    src: "/images/home/touchalife1.png",
    alt: "Touch-A-Life",
    url: "https://touchalife.org/",
    className: "w-full h-12 object-contain scale-115",
  },
  /* {
    src: "/images/home/Kids-Rights2.png",
    alt: "Kids Rights",
    url: "https://www.kidsrights.org/",
    className: "w-full h-12 object-contain scale-100",
  }, */
  /* {
    src: "/images/home/billionDollar2.png",
    alt: "The Billion Dollar Impact",
    url: "https://www.thebilliondollarimpact.com/",
    className: "w-full h-12 object-contain scale-100",
  }, */
  {
    src: "/images/home/onePercentBack.png",
    alt: "One Percent Back",
    url: "https://1pb.org/",
    className: "w-full h-12 object-contain scale-135",
  },
  {
    src: "/images/home/finpublica1.png",
    alt: "Finpublica",
    url: "https://www.finpublica.org/",
    className: "w-full h-12 object-contain scale-110",
  },
  {
    src: "/images/home/silc1.png",
    alt: "SILC",
    url: "https://silcus.org/",
    className: "w-full h-12 object-contain scale-105",
  },
  {
    src: "/images/home/fwe.png",
    alt: "FWE Forum",
    url: "https://www.fweforum.org/",
    className: "w-full h-12 object-contain scale-100",
  },
  {
    src: "/images/home/zenithLogo.png",
    alt: "Zenith",
    url: "https://app.zenithproject.co/",
    className: "w-full h-12 object-contain scale-140",
  },
  {
    src: "/images/home/bluePlanetAlliance2.png",
    alt: "Blue Planet Alliance",
    url: "https://blueplanetalliance.org/",
    className: "w-full h-12 object-contain scale-100",
  },
  {
    src: "/images/home/image-128.png",
    alt: "Steve Madden",
    url: "https://www.stevemadden.com/",
    className: "w-full h-12 object-contain scale-100",
  },
  {
    src: "/images/home/image-129.png",
    alt: "Allegiance Partners",
    url: "https://www.allegiance-partners.com/",
    className: "w-full h-12 object-contain scale-140",
  },
  {
    src: "/images/home/image-130.png",
    alt: "Rayze",
    url: "https://www.rayzeapp.com/",
    className: "w-full h-12 object-contain scale-90",
  },
  /* {
    src: "/images/home/dothething.png",
    alt: "Do The Thing",
    url: "https://dothething.org/",
    className: "w-full h-12 object-contain scale-100",
  }, */
  {
    src: "/images/home/vice_city_district2.png",
    alt: "Vice City District",
    url: "https://www.supercarrooms.com/vicecitydistrict",
    className: "w-full h-12 object-contain scale-130",
  },
  /* {
    src: "/images/summit/Alethos2.png",
    alt: "Alethos Initiative",
    url: "https://alethosinitiative.org/",
    className: "w-full h-12 object-contain scale-100",
  }, */
  {
    src: "/images/home/logictry1.png",
    alt: "Logictry",
    url: "https://logictry.com/",
    className: "w-full h-12 object-contain scale-110",
  },
  {
    src: "/images/home/BronsterLLP.png",
    alt: "Bronster LLP",
    url: "https://www.bronsterllp.com/",
    className: "w-full h-12 object-contain scale-110",
  },
  {
    src: "/images/home/axiom_pathways.png",
    alt: "Axiom Pathways",
    url: "https://www.axiompathways.org/",
    className: "w-full h-12 object-contain scale-135",
  },
  {
    src: "/images/home/360onefirm.png",
    alt: "361 Firm",
    url: "https://361firm.com/",
    className: "w-full h-12 object-contain scale-100",
  },
  {
    src: "/images/home/Berkana_Logo.png",
    alt: "Berkana Capital",
    url: "https://berkanacapital.com/",
    className: "w-full h-12 object-contain scale-110",
  },
  /* {
    src: "/images/home/unitedyouthcouncil.png",
    alt: "United Youth Council",
    url: "https://www.unitedyc.org/",
    className: "w-full h-12 object-contain scale-100",
  }, */
];

export default function KeyStatistics() {
  return (
    <section className="flex flex-col items-center px-4 md:px-20 lg:px-50 py-4 w-full bg-[#3036411A] border-t border-b border-gray-200 pt-4">
      <div className="flex flex-col items-center gap-20 w-full max-w-260">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="h-12 flex items-center justify-center">
                <h3 className=" font-normal text-[#000000] text-5xl text-center tracking-[-1.20px] leading-12 whitespace-nowrap">
                  {stat.value}
                </h3>
              </div>
              <p className=" font-normal text-[#697282] text-xs text-center tracking-[0.60px] leading-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}

        <div className="flex flex-col items-center gap-8 w-full">
          {/* <p className="font-normal text-[#697282] text-xl text-center tracking-[0.60px] leading-5">
            Sponsored by
          </p> */}

          <div className="flex flex-wrap justify-center gap-12 md:gap-8">
            {/* {supportedByLogos.map((logo, index) => (
              <Image
                key={index}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
                width={256}
                height={100}
              />
            ))} */}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
          <p
            className=" font-normal text-[#002c19]
 text-xl text-center tracking-[0.60px] leading-4"
          >
            Partnered with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-8 place-items-center auto-rows-[100px]">
            {partneredWithLogos.map((logo, index) => (
              <Link
                key={index}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-full transition-transform hover:scale-105"
              >
                <Image
                  className={`max-h-[60px] w-auto object-contain ${logo.className}`}
                  alt={logo.alt}
                  src={logo.src}
                  width={200}
                  height={100}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
