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
    alt: "Partnered with organization 1",
    url: "https://esgnews.com",
    className: "w-40 h-[100px]",
  },
  {
    src: "/images/home/image-132.png",
    alt: "Partnered with organization 2",
    url: "https://cloztalk.com/",
    className: "w-[129px] h-[60px] md:h-[100px] object-contain",
  },
  {
    src: "/images/home/image-133.png",
    alt: "Partnered with organization 3",
    url: "https://www.brooklaw.edu/",
    className: "w-64 h-[60px] md:h-[70px] object-contain",
  },
  {
    src: "/images/home/womensOrg1.png",
    alt: "Partnered with organization 3",
    url: "https://www.joinwedo.org/",
    className: "w-80 h-[100px] object-contain",
  },
  {
    src: "/images/home/illuminen1.png",
    alt: "Partnered with organization 3",
    url: "https://illuminem.com/",
    className: "w-64 h-[40px] md:h-[70px] object-contain",
  },
  {
    src: "/images/home/unitedPlanet.png",
    alt: "Partnered with organization 4",
    url: "https://www.up.game/",
    className: "w-80 h-[150px] md:h-[100px] object-contain ",
  },
  {
    src: "/images/home/inspireYouthJournal.png",
    alt: "Partnered with organization 4",
    url: "http://inspireyouthjournal.org/",
    className: "w-80 h-[150px] md:h-[100px] object-contain ",
  },
  {
    src: "/images/home/learningplanet.png",
    alt: "Partnered with organization 4",
    url: "https://www.learningplanetinstitute.org/en/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  }, //
  /* {
    src: "/images/home/climatecafe.png",
    alt: "Partnered with organization 4",
    url: "https://www.climatecafe.eco/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  }, */
  {
    src: "/images/home/we.png",
    alt: "Partnered with organization 4",
    url: "https://we7.ai/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  },
  {
    src: "/images/home/touchalife1.png",
    alt: "Partnered with organization 4",
    url: "https://touchalife.org/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  },
  /* {
    src: "/images/home/Kids-Rights2.png",
    alt: "Partnered with organization 4",
    url: "https://www.kidsrights.org/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  }, */
  /* {
    src: "/images/home/billionDollar2.png",
    alt: "Partnered with organization 4",
    url: "https://www.thebilliondollarimpact.com/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  }, */
  {
    src: "/images/home/onePercentBack.png",
    alt: "Partnered with organization 4",
    url: "https://1pb.org/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  },
  {
    src: "/images/home/finpublica1.png",
    alt: "Partnered with organization 4",
    url: "https://www.finpublica.org/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  },
  {
    src: "/images/home/silc1.png",
    alt: "Partnered with organization 4",
    url: "https://silcus.org/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  },
  {
    src: "/images/home/fwe.png",
    alt: "Partnered with organization 4",
    url: "https://www.fweforum.org/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  },
  {
    src: "/images/home/zenithLogo.png",
    alt: "Partnered with organization 4",
    url: "https://app.zenithproject.co/",
    className: "w-80 h-[150px] md:h-[150px] object-contain ",
  },
  {
    src: "/images/home/bluePlanetAlliance2.png",
    alt: "Partnered with organization 3",
    url: "https://blueplanetalliance.org/",
    className: "w-80 h-[100px] object-contain",
  },
  {
    src: "/images/home/image-128.png",
    alt: "Supported by partner 2",
    url: "https://www.stevemadden.com/",
    className: "w-64 h-[59px]",
  },
  {
    src: "/images/home/image-129.png",
    alt: "Supported by partner 3",
    url: "https://www.allegiance-partners.com/",
    className: "w-64 h-[58px] object-contain",
  },
  {
    src: "/images/home/image-130.png",
    alt: "Supported by partner 4",
    url: "https://www.rayzeapp.com/",
    className: "w-[130px] h-[84px]",
  },
  /* {
    src: "/images/home/dothething.png",
    alt: "Supported by partner 4",
    url: "https://dothething.org/",
    className: "w-[130px] h-[84px]",
  }, */
  {
    src: "/images/home/vice_city_district2.png",
    alt: "Partnered with organization 3",
    url: "https://www.supercarrooms.com/vicecitydistrict",
    className: "w-80 h-[100px] object-contain",
  },
  /* {
    src: "/images/summit/Alethos2.png",
    alt: "Partnered with organization 3",
    url: "https://alethosinitiative.org/",
    className: "w-80 h-[100px] object-contain",
  }, */
  {
    src: "/images/home/logictry1.png",
    alt: "Partnered with organization 3",
    url: "https://logictry.com/",
    className: "w-80 h-[100px] object-contain",
  },
  {
    src: "/images/home/BronsterLLP.png",
    alt: "Partnered with organization 3",
    url: "https://www.bronsterllp.com/",
    className: "w-80 h-[100px] object-contain",
  },
  {
    src: "/images/home/axiom_pathways.png",
    alt: "Partnered with organization 3",
    url: "https://www.axiompathways.org/",
    className: "w-80 h-[100px] object-contain",
  },
  {
    src: "/images/home/360onefirm.png",
    alt: "Partnered with organization 3",
    url: "https://361firm.com/",
    className: "w-80 h-[100px] object-contain",
  },
  {
    src: "/images/home/Berkana_Logo.png",
    alt: "Partnered with organization 3",
    url: "https://berkanacapital.com/",
    className: "w-80 h-[100px] object-contain",
  },
  /* {
    src: "/images/home/unitedyouthcouncil.png",
    alt: "Partnered with organization 3",
    url: "https://www.unitedyc.org/",
    className: "w-80 h-[100px] object-contain",
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
