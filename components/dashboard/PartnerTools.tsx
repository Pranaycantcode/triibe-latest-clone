const tools = [
  {
    name: 'Purposefy',
    category: 'Nonprofit Hiring & Teams',
    description: 'Find mission-driven talent and volunteer teams.',
    url: 'https://purposefy.ai/',
  },
  {
    name: 'Terra.do',
    category: 'Climate & Impact',
    description: 'Fellowships and education to launch climate initiatives.',
    url: 'https://terra.do',
  },
  {
    name: 'TechSoup',
    category: 'Software Discounts',
    description: 'Discounted software, SaaS tools, and hardware for nonprofits.',
    url: 'https://techsoup.org',
  },
];

export function PartnerTools() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tools.map((tool) => (
        <a
          key={tool.name}
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border border-neutral-200 rounded-xl bg-white hover:border-neutral-300 hover:shadow-xs transition block group"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-neutral-900 group-hover:underline text-sm">
              {tool.name}
            </h4>
            <span className="text-[10px] font-medium uppercase px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
              {tool.category}
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-2">{tool.description}</p>
        </a>
      ))}
    </div>
  );
}