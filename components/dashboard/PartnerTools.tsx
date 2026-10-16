const tools = [
  {
    name: "Purposefy",
    category: "Nonprofit Hiring & Teams",
    description: "Connect with mission-driven talent, volunteers, and purpose-led operators.",
    url: "https://purposefy.ai/",
    cta: "Explore Roles",
  },
  {
    name: "Terra.do",
    category: "Climate & Impact",
    description: "Workshops, fellowships, and education pathways to launch climate initiatives.",
    url: "https://terra.do",
    cta: "Join Fellowship",
  },
  {
    name: "TechSoup",
    category: "Software Discounts",
    description: "Discounted nonprofit software licenses, hardware, and operational tools.",
    url: "https://techsoup.org",
    cta: "Claim Discounts",
  },
];

export function PartnerTools() {
  return (
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
  );
}