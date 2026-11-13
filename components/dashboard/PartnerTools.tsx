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
    name: "TechSoup",
    category: "Software Discounts",
    description:
      "Discounted nonprofit software licenses, hardware, and operational tools.",
    url: "https://techsoup.org",
    cta: "Claim Discounts",
  },
];

interface PartnerToolsProps {
  onConnectClaude?: () => void;
  claudeAuthUrl?: string;
}

export function PartnerTools({
  onConnectClaude,
  claudeAuthUrl = "https://claude.ai/login",
}: PartnerToolsProps) {
  return (
    <div className="space-y-8">
      {/* Existing Partner Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md hover:border-[#1C5945]/40 transition-all duration-300">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3036411A] rounded mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1C5945]" />
            <span className="font-semibold text-[#002c19] text-xs">
              AI Operations &amp; Agent Setup
            </span>
          </div>
          <h4 className="text-xl font-bold text-[#002c19] mb-2">
            Claude AI Agent for Nonprofits
          </h4>
          <p className="text-sm text-[#002c19]/80 leading-relaxed">
            Configure Anthropic&apos;s Claude as your dedicated nonprofit
            operations agent—built to help draft grant proposals, synthesize
            impact reports, and automate daily workflows.
          </p>
        </div>

        <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row items-center gap-3">
          {onConnectClaude ? (
            <button
              type="button"
              onClick={onConnectClaude}
              className="w-full sm:w-auto h-[40px] px-6 rounded-sm bg-[#1C5945] text-white hover:bg-[#002c19] transition-colors font-medium text-xs inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Sign in to Anthropic Claude
            </button>
          ) : (
            <a
              href={claudeAuthUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-[40px] px-6 rounded-sm bg-[#1C5945] text-white hover:bg-[#002c19] transition-colors font-medium text-xs inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Sign in to Anthropic Claude
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
