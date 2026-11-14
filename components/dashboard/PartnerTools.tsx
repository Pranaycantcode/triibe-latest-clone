import React from "react";

const tools = [
  {
    name: "Purposefy",
    category: "Nonprofit Hiring & Teams",
    description:
      "Connect with mission-driven talent, volunteers, and purpose-led operators.",
    url: "https://purposefy.ai/",
    cta: "Explore Roles",
  },
  {
    name: "Terra.do",
    category: "Climate & Impact",
    description:
      "Workshops, fellowships, and education pathways to launch climate initiatives.",
    url: "https://terra.do",
    cta: "Join Fellowship",
  },
  {
    name: "Glia",
    category: "Open-Source & Impact",
    description:
      "Open-source, low-cost humanitarian medical hardware and collaborative engineering initiatives.",
    url: "https://glia.org",
    cta: "Explore Projects",
  },
  {
    name: "TechSoup",
    category: "Software Discounts",
    description:
      "Discounted nonprofit software licenses, hardware, and operational tools.",
    url: "https://techsoup.org",
    cta: "Claim Discounts",
  },
];

interface PartnerToolsProps {
  claudeNonprofitUrl?: string;
}

export function PartnerTools({
  claudeNonprofitUrl = "https://claude.com/solutions/nonprofits",
}: PartnerToolsProps) {
  return (
    <div className="space-y-8">
      
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md hover:border-[#1C5945]/40 transition-all duration-300">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3036411A] rounded mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1C5945]" />
            <span className="font-semibold text-[#002c19] text-xs">
              AI for Nonprofits Program
            </span>
          </div>
          <h4 className="text-xl font-bold text-[#002c19] mb-2">
            Anthropic Claude for Nonprofits
          </h4>
          <p className="text-sm text-[#002c19]/80 leading-relaxed">
            Access Anthropic&apos;s dedicated nonprofit program for discounted
            Claude plans and AI tooling.
          </p>
        </div>

        <div className="w-full md:w-auto shrink-0">
          <a
            href={claudeNonprofitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-[40px] px-6 rounded-sm bg-[#1C5945] text-white hover:bg-[#002c19] transition-colors font-medium text-xs inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            Claim Nonprofit Access
          </a>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-[#1C5945]/40 transition-all duration-300"
          >
            <div>
              <div className="inline-block px-3 py-1 bg-[#3036411A] rounded mb-3">
                <span className="font-semibold text-[#002c19] text-xs">
                  {tool.category}
                </span>
              </div>
              <h4 className="text-xl font-bold text-[#002c19] mb-2">
                {tool.name}
              </h4>
              <p className="text-sm text-[#002c19]/80 leading-relaxed mb-6">
                {tool.description}
              </p>
            </div>

            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[40px] px-6 rounded-sm bg-[#1C5945] text-white hover:bg-[#002c19] transition-colors font-medium text-xs inline-flex items-center justify-center cursor-pointer"
            >
              {tool.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}