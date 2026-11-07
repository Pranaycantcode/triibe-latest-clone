export default function HowWePick() {
  const criteria = [
    "We research every founder’s work before an interview. Then a 30-minute call let's us get to know them as people.",
    "We measure each founder’s social return on investment with Purposefy, so the value of their impact, and of our support, is clear.",
    "We back founders with years of impact already behind them. Fellows average 6.5 years already leading their foundations.",
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto text-center text-[#002c19]">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          How we pick the 100
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="border border-[#002c19] px-6 py-8 md:px-7 md:py-10 flex items-center text-left rounded-2xl bg-white"
            >
              <p className="text-[#002c19] text-sm md:text-base leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}