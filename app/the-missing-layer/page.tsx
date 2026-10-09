import React from "react";
import Header from "@/components/header";
import CTASection from "@/components/cta";

const Cite = ({ children }: { children: React.ReactNode }) => (
  <sup className="text-[10px] text-zinc-400 font-normal ml-0.5 select-none align-super">
    {children}
  </sup>
);

export default function TheMissingLayerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Header />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12 border-b border-zinc-200 pb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mb-4"></span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              TRIIBE and the Missing Philanthropic Layer
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 text-sm text-zinc-600 font-medium">
              <span>Written by Kyle Matthys</span>
              <span aria-hidden="true">&bull;</span>
              <time dateTime="2026-09-10">October 9, 2026</time>
            </div>
          </header>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
            <p className="text-xl font-normal text-zinc-900 leading-relaxed">
              In 2025, Americans gave $617.2 billion to charity, the largest
              total giving in the 70-year history of measurement.
              <Cite>1,2</Cite> By every headline figure available, it was the
              best year of American philanthropy on record. And yet, it was also
              the year the majority of nonprofit leaders said funding became
              harder to reach. This paper is about how both these facts are
              true. It&apos;s also why we built TRIIBE, the startup engine for
              the nonprofit sector.
            </p>

            <section className="pt-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
                The Top Layer
              </h2>
              <p className="mb-6">
                From the private sector, all sources of giving increased.
                <Cite>2</Cite>
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="font-bold text-zinc-950">
                      <th scope="col" className="py-2.5 pr-8 pl-0">
                        Source
                      </th>
                      <th scope="col" className="py-2.5 px-8">
                        2025 giving
                      </th>
                      <th scope="col" className="py-2.5 pl-8 pr-0">
                        Change
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-600">
                    <tr>
                      <td className="py-2 pr-8 pl-0">Corporations</td>
                      <td className="py-2 px-8 font-normal text-zinc-600">
                        $43.67B
                      </td>
                      <td className="py-2 pl-8 pr-0 font-normal text-zinc-600">
                        +3.1% current, +0.4% real
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-8 pl-0">Bequests</td>
                      <td className="py-2 px-8 font-normal text-zinc-600">
                        $62.19B
                      </td>
                      <td className="py-2 pl-8 pr-0 font-normal text-zinc-600">
                        +19.7% current, +16.6% real
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-8 pl-0">Foundations</td>
                      <td className="py-2 px-8 font-normal text-zinc-600">
                        $117.15B
                      </td>
                      <td className="py-2 pl-8 pr-0 font-normal text-zinc-600">
                        +5.7% current, +3.0% real
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-8 pl-0">Individuals</td>
                      <td className="py-2 px-8 font-normal text-zinc-600">
                        $394.20B
                      </td>
                      <td className="py-2 pl-8 pr-0 font-normal text-zinc-600">
                        +4.1% current, +1.4% real
                      </td>
                    </tr>
                    <tr className="font-bold text-zinc-950">
                      <td className="pt-4 pb-2 pr-8 pl-0">Total</td>
                      <td className="pt-4 pb-2 px-8">$617.21B</td>
                      <td className="pt-4 pb-2 pl-8 pr-0">
                        +5.7% current, +3.0% real
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                <strong>Corporations (7.1% total giving).</strong> This includes
                direct and in-kind giving from companies and corporate
                foundations, including matching gift programs, disaster
                response, and product donations. As a surprise to many, it is
                the smallest segment, and tied directly to business conditions,
                subject to change with adjusting profits.
              </p>
              <p className="mt-4">
                <strong>Bequests (10.1% total giving).</strong> This includes
                assets directed to charity through a will or trust, which means
                funds are pledged years before they move. This segment also
                covers estate and more complicated vehicles, including
                charitable trusts and estates that take years to settle.
              </p>
              <p className="mt-4">
                <strong>Foundations (19.0% total giving).</strong> This is
                primarily grantmaking by large foundations such as those of
                Gates, Ford, and MacArthur, along with community foundations.
                Private foundations held about $1.64 trillion in assets in 2024
                and are legally required to distribute at least 5 percent
                annually, although they have typically averaged 7 percent.
                <Cite>4</Cite>
              </p>
              <p className="mt-4">
                <strong>Individuals (63.9% total giving).</strong> This includes
                everything individuals give directly to nonprofits, and
                contributions to donor-advised funds, which as of the latest
                report for 2024 totaled $90.57 billion.<Cite>5</Cite>
              </p>
              <p className="mt-4">
                A donor-advised fund (DAF) is a charitable bank account. The
                donor puts money in, takes the full deduction, and decides later
                where it goes, similar to a foundation but without the 5 percent
                minimum. The balance can sit invested in the market, and larger
                accounts can even hold private equity, venture capital, hedge
                funds, and real estate stakes, growing tax-free until the money
                is granted out.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
                The Middle Layer
              </h2>
              <p>
                In this way, foundations and donor-advised funds are not
                destinations, but intermediaries. Money enters them, sits, and
                leaves on the schedule a donor or board controls.
              </p>
              <p className="mt-4">
                For the above table, Giving USA reported $117.15 billion
                foundations granted out to nonprofits, not the $79.05 billion
                that they received. That distinction matters, because
                contributions to foundations fell 16.2 percent in 2025, with
                foundations granting out $38.1 billion more than they took in.
                <Cite>2</Cite>
              </p>
              <p className="mt-4">
                Donor-advised funds are counted the other way. The deduction
                happens the year the money enters the account, not the year it
                eventually reaches a nonprofit. Once deposited, nothing requires
                the money to move: There is no minimum, no deadline, and no
                account-level reporting. For example, in 2024, $90.57 billion
                entered DAF accounts while $64.60 billion was granted out of
                them, a difference of roughly $26 billion counted as given but
                not yet delivered.<Cite>5</Cite> Measured the way foundations
                are, by what left rather than what arrived, total philanthropic
                donations would be roughly 4 percent smaller.
              </p>
              <p className="mt-4">
                Now, although nothing compels this money to move, it moves
                anyway. DAF accounts held $327.87 billion across 3.59 million
                accounts by the end of 2024, and granted out 25.2 percent of
                what they started with, compared to foundations operating under
                a legal floor, which granted roughly 7 percent.<Cite>4,5</Cite>
              </p>
              <p className="mt-4">
                A possible explanation for this difference is not discipline but
                lifespan: A foundation is built to exist in perpetuity, and the
                5 percent is calibrated to preserve the principal, which makes
                it a spending limit as much as a spending requirement. A DAF has
                no institution to sustain and no obligation to exist in 50
                years, so it prioritizes the present.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
                Government Funding
              </h2>
              <p>
                While Giving USA measures private funding, demonstrating a
                strong increase in 2025, government funding moved the other way,
                first and most sharply abroad.
              </p>
              <p className="mt-4">
                The Organization for Economic Co-operation and Development, a
                body of 38 mostly wealthy member countries, tracks official
                development assistance, or ODA. Every donor government reports
                to the same definition, which makes it the only series for
                international aid comparable across countries and years.
              </p>
              <p className="mt-4">
                In 2025, ODA fell 23.1 percent to $174.3 billion, the largest
                annual contraction ever recorded, with U.S. ODA falling 56.9
                percent to $29.0 billion.<Cite>6</Cite>
              </p>
              <p className="mt-4">
                An executive order paused U.S. foreign development assistance in
                January 2025.<Cite>7</Cite> In March, the State Department
                announced that 83 percent of USAID-managed programs would be
                terminated, and by July 1, USAID had stopped implementing
                foreign assistance entirely.<Cite>8,9</Cite> It had managed more
                than $35 billion in FY2024. The largest single funder of global
                development exited in under 6 months.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
                The Shrinking Pool
              </h2>
              <p>
                The retreat was not only foreign. In the first 4 to 6 months of
                2025, a third of American nonprofits reported at least one
                government funding disruption. 21 percent lost at least some
                government funding, 27 percent had funding delayed, paused, or
                frozen, and 6 percent received a full stop work order.
                <Cite>10</Cite>
              </p>
              <p className="mt-4">
                The exposure is larger than it looks. Nonprofits draw about 28
                percent of revenue from government on average, but for the
                organizations disrupted, government funding supported 42
                percent. Hiring plans fell from 52 to 38 percent by mid-2025,
                and the share of nonprofits planning layoffs more than doubled.
                <Cite>10</Cite>
              </p>
              <p className="mt-4">
                Private philanthropy did not make up for this loss. Bridge
                funding came in at roughly $125 million against a contraction
                measured in tens of billions.<Cite>11</Cite> Even as foundations
                granted out more than they received, in CEP&apos;s 2026 survey,
                57 percent of nonprofit leaders said foundation grants had
                become harder to secure since January 2025, 44 percent reported
                reduced foundation funding, 39 percent ran a deficit in 2025, up
                from 22 percent in 2022, and 67 percent reported concerns about
                their financial stability.<Cite>3</Cite>
              </p>
              <p className="mt-4">
                For individual donors, the share of American households giving
                to charity fell from 66.2 percent in 2000 to 49.6 percent in
                2018 and 46.9 percent in 2020.<Cite>12,13</Cite> No figure has
                been published since.<Cite>13</Cite> The Fundraising
                Effectiveness Project tracks donor records at more than 15,000
                participating nonprofits. Its counts have fallen every year
                since 2021, with new donor counts further falling in the first
                quarter of 2026.<Cite>14,15</Cite>
              </p>

              <div className="flex justify-center my-6">
                <table className="text-left text-sm border-collapse">
                  <thead>
                    <tr className="font-bold text-zinc-950">
                      <th scope="col" className="py-2.5 pr-14 pl-0">
                        Year
                      </th>
                      <th scope="col" className="py-2.5 pl-0 pr-0">
                        Donor count
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-600">
                    <tr>
                      <td className="py-2 pr-14 pl-0">2021</td>
                      <td className="py-2 pl-0 pr-0">-6.3%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-14 pl-0">2022</td>
                      <td className="py-2 pl-0 pr-0">-10.7%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-14 pl-0">2023</td>
                      <td className="py-2 pl-0 pr-0">-3.4%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-14 pl-0">2024</td>
                      <td className="py-2 pl-0 pr-0">-4.5%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-14 pl-0">2025</td>
                      <td className="py-2 pl-0 pr-0">-3.6%</td>
                    </tr>
                    <tr className="font-bold text-zinc-950">
                      <td className="pt-4 pb-2 pr-14 pl-0">Compounded</td>
                      <td className="pt-4 pb-2 pl-0 pr-0">-25.6%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                Even as 2025 donor counts fell 3.6 percent, dollars raised grew
                about 5.0 percent, the strongest growth in 5 years.
                <Cite>14</Cite> Simply put, fewer people gave more money. In
                fact, roughly $19.2 billion came from gifts larger than $600
                million, or about 5 percent of all individual giving.
                <Cite>2</Cite>
              </p>
              <p className="mt-4">
                That is how both facts (the best year of American philanthropy
                and the spike in financial troubles) hold at once. The total
                grew through instruments that concentrate funds while the pool
                anyone can reach shrank, pointing to a problem with distribution
                rather than a capital shortage.
              </p>
            </section>

            {/* Section: The Burden of Proof */}
            <section className="pt-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
                The Burden of Proof
              </h2>
              <p>
                The burden of proof required to reach philanthropic dollars
                keeps rising. Effective altruism pushed cost-per-outcome
                reasoning into mainstream giving. To standardize metrics, the
                Global Impact Investing Network built a global catalog, giving
                funders a common vocabulary for comparing performance across
                organizations.<Cite>16</Cite> A whole industry was born to help
                nonprofits demonstrate return on impact, because funders
                increasingly expect it before committing.
              </p>
              <p className="mt-4">
                But that proof depends on public data, and that public data is
                contracting. All 13 principal federal statistical agencies lost
                staff beginning in early 2025. 6 of them lost at least a third
                of their workforce and 2 more than two thirds, which the
                American Statistical Association ties directly to halted
                reports, falling response rates, and reduced data production.
                <Cite>17</Cite> For example, the Department of Agriculture
                defunded the annual household food security survey entirely.
                <Cite>18</Cite>
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
                The Missing Layer
              </h2>
              <p>
                Every funding source in this paper moves on trust. A foundation
                or company funds organizations its staff already know (71
                percent of private foundations tell the IRS they fund only
                preselected organizations), and the ones with open applications
                ask for years of financial proof a new organization can&apos;t
                have.<Cite>19</Cite> A donor-advised fund grants to causes its
                donor has already chosen. A bequest is written years before it
                arrives. Trust takes time, and startups have none.
              </p>
              <p className="mt-4">
                The incentives that push the for-profit sector to find new
                startups (commissions, returns, and equity) also don&apos;t
                exist for nonprofits. The youngest founders are the ones where
                the gap is easiest to see, but nobody is paid to look.
              </p>
              <p className="mt-4">
                We looked, because we are that generation, and found the ones
                who started anyway. In 2014, the IRS introduced Form 1023-EZ,
                replacing its 26-page application with a short form, approving
                new nonprofits in weeks, not months.<Cite>20</Cite> Social media
                put the world&apos;s problems in front of teenagers, and free
                tools let them register an organization, build an audience, and
                run programs online before anyone cuts them a check.
              </p>
              <p className="mt-4">
                From the outside, it looks like the money followed. Young
                founders win awards, land press, and share impact reports that
                read like success. Yet for TRIIBE 100, our global index of the
                100 leading nonprofit founders under 30, measuring what each
                organization discloses publicly, they raised $15.5 million, or
                an average of $155,000 each. This, while carrying 653 years of
                leadership, leading their nonprofits for an average of 6.5
                years, highlights that even the best of the nonprofit startup
                sector are underfunded.
              </p>
              <p className="mt-4">
                The common belief is that teenagers start nonprofits to get into
                college. The reality is these founders turn 18, look for a way
                to fund the work with a salary, and find out there isn&apos;t
                one. Many keep the organization running through 4 years of
                college anyway, waiting for a door that, until now, nobody had
                built.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
                What Comes Next
              </h2>
              <p>
                The nonprofit sector has never stopped inventing. England wrote
                the first legal definition of charity in 1601,<Cite>22</Cite>{" "}
                and every innovation since has been built on it: The first
                foundation in 1867,<Cite>23</Cite> the U.S. charitable deduction
                in 1917,<Cite>24</Cite> the first donor-advised fund in 1931,
                <Cite>25</Cite> impact investing in 1969,<Cite>26</Cite> and
                crowdfunding in 2010.<Cite>27</Cite> Every one of them made it
                easier to give. None of them rewarded anyone for looking.
              </p>
              <p className="mt-4">
                The next innovation has to work the other way. In 2025 the money
                was there. The connection to founders was not. The for-profit
                world solves this with portfolios: Back many, expect most to
                fail, measure the return on investment on the whole.
              </p>
              <p className="mt-4">
                The nonprofit sector should do the same: Back many, expect some
                to fail, measure the social return on investment on the whole.
                Not because established organizations can&apos;t innovate, but
                because they can&apos;t afford to. An organization with staff,
                programs, and donors to protect cannot bet on an idea that might
                not work. A founder with nothing yet to protect can, which is
                why every sector that innovates has a startup engine, and why
                the nonprofit sector needs its own.
              </p>

              <p className="my-8 leading-relaxed">
                So we built TRIIBE, maximizing return on impact and income for
                philentrepreneurs. We back the TRIIBE 100 with funding,
                mentorship, and measurement of their social return on
                investment. TRIIBE Talks give visibility: Intergenerational
                conversations featuring next-gen voices. TRIIBE Grants gives the
                rest of the sector the largest grant database in the world, free
                for anyone to search.
              </p>

              <p className="mt-4 font-normal text-zinc-700">
                Whether these philentrepreneurs succeed with innovations the
                sector hasn&apos;t imagined yet, become the bench of future
                executive directors, or fail, the sector will finally have a way
                to try.
              </p>
            </section>
          </div>

          <footer className="mt-16 pt-10 border-t border-zinc-200">
            <h3 className="text-lg font-bold text-zinc-900 mb-6">Sources</h3>
            <ol className="list-decimal list-outside pl-5 space-y-3 text-xs leading-normal text-zinc-500">
              <li>
                Giving figures are Giving USA 2026 estimates for calendar 2025
                unless noted. Donor-advised fund figures are FY2024, the latest
                available. Aid figures are OECD preliminary data.
              </li>
              <li>
                Giving USA Foundation.{" "}
                <em>
                  Giving USA 2026: The Annual Report on Philanthropy for the
                  Year 2025
                </em>
                . Researched and written by the Indiana University Lilly Family
                School of Philanthropy, June 2026,{" "}
                <a
                  href="https://givingusa.org"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  givingusa.org
                </a>
                .
              </li>
              <li>
                Center for Effective Philanthropy.{" "}
                <em>State of Nonprofits 2026: What Funders Need to Know</em>.
                Center for Effective Philanthropy, May 2026,{" "}
                <a
                  href="https://cep.org/wp-content/uploads/2026/05/CEP_State_of_Nonprofits_2026_FNL.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  cep.org
                </a>
                .
              </li>
              <li>
                Foundation Mark. Foundation asset and giving estimates for 2024,
                reported in &ldquo;Foundation Assets Jumped Estimated $170
                Billion.&rdquo; <em>The NonProfit Times</em>, 4 Feb. 2025,{" "}
                <a
                  href="https://thenonprofittimes.com/npt_articles/foundation-assets-jumped-estimated-170-billion/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  thenonprofittimes.com
                </a>
                .
              </li>
              <li>
                Heist, H. Daniel, Danielle Vance-McMullen, Jeff Williams,
                Genevieve G. Shaker, and Rachel M. Sumsion.{" "}
                <em>The Annual DAF Report 2025: Updated Analysis Memo</em>.
                Donor Advised Fund Research Collaborative, 2026,{" "}
                <a
                  href="https://www.dafresearchcollaborative.org/s/Annual-DAF-Report-2025-Updated-Analysis.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  dafresearchcollaborative.org
                </a>
                .
              </li>
              <li>
                Organisation for Economic Co-operation and Development.
                &ldquo;International Aid Fell Sharply in 2025, Says OECD.&rdquo;
                Press release, 9 Apr. 2026,{" "}
                <a
                  href="https://www.oecd.org/en/about/news/press-releases/2026/04/international-aid-fell-sharply-in-2025-says-oecd.html"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  oecd.org
                </a>
                .
              </li>
              <li>
                Executive Office of the President. Executive Order 14169,
                &ldquo;Reevaluating and Realigning United States Foreign
                Aid.&rdquo; <em>Federal Register</em>, vol. 90, no. 19, 30 Jan.
                2025, p. 8619,{" "}
                <a
                  href="https://www.govinfo.gov/content/pkg/FR-2025-01-30/pdf/2025-02091.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  govinfo.gov
                </a>
                .
              </li>
              <li>
                Rubio, Marco (@marcorubio). &ldquo;After a 6 week review we are
                officially cancelling 83% of the programs at USAID.&rdquo; X, 10
                Mar. 2025,{" "}
                <a
                  href="https://x.com/marcorubio/status/1899021361797816325"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  x.com
                </a>
                .
              </li>
              <li>
                Congressional Research Service.{" "}
                <em>U.S. Agency for International Development: An Overview</em>.
                IF10261, updated 5 Sept. 2025,{" "}
                <a
                  href="https://www.congress.gov/crs_external_products/IF/PDF/IF10261/IF10261.20.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  congress.gov
                </a>
                .
              </li>
              <li>
                Tomasko, Laura, et al.{" "}
                <em>
                  How Government Funding Disruptions Affected Nonprofits in
                  Early 2025: Nationally Representative Findings from the
                  Nonprofit Trends and Impacts Study
                </em>
                . Urban Institute, 7 Oct. 2025,{" "}
                <a
                  href="https://www.urban.org/research/publication/how-government-funding-disruptions-affected-nonprofits-early-2025"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  urban.org
                </a>
                .
              </li>
              <li>
                Associated Press. &ldquo;Private Donors Raise More Than $125M to
                Fund Aid Programs After U.S. Cuts.&rdquo; <em>PBS NewsHour</em>,
                Oct. 2025,{" "}
                <a
                  href="https://www.pbs.org/newshour/nation/private-donors-raise-more-than-125m-to-fund-aid-programs-after-u-s-cuts"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  pbs.org
                </a>
                .
              </li>
              <li>
                Indiana University Lilly Family School of Philanthropy.{" "}
                <em>
                  The Giving Environment: Understanding Pre-Pandemic Trends in
                  Charitable Giving
                </em>
                . July 2021,{" "}
                <a
                  href="https://scholarworks.indianapolis.iu.edu/bitstream/handle/1805/26290/giving-environment210727.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  scholarworks.indianapolis.iu.edu
                </a>
                .
              </li>
              <li>
                Indiana University Lilly Family School of Philanthropy.{" "}
                <em>Overall Household Charitable Giving: 2021 Overview</em>. 23
                Oct. 2024,{" "}
                <a
                  href="https://doi.org/10.7912/JQDJ-4007"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  doi.org
                </a>
                .
              </li>
              <li>
                Fundraising Effectiveness Project.{" "}
                <em>
                  Quarterly Fundraising Report, Fourth Quarter 2025 and First
                  Quarter 2026
                </em>
                . AFP Foundation for Philanthropy and Giving Tuesday, 2026,{" "}
                <a
                  href="https://afpglobal.org/fep"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  afpglobal.org
                </a>
                .
              </li>
              <li>
                Fundraising Effectiveness Project.{" "}
                <em>
                  Quarterly Fundraising Report, Fourth Quarter 2021 through
                  Fourth Quarter 2024
                </em>
                . AFP Foundation for Philanthropy and Giving Tuesday,{" "}
                <a
                  href="https://afpglobal.org/fep"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  afpglobal.org
                </a>
                .
              </li>
              <li>
                Global Impact Investing Network. <em>IRIS+ System</em>. GIIN,{" "}
                <a
                  href="https://iris.thegiin.org"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  iris.thegiin.org
                </a>
                .
              </li>
              <li>
                American Statistical Association.{" "}
                <em>The Nation&apos;s Data at Risk: 2025 Report</em>. American
                Statistical Association, 10 Dec. 2025,{" "}
                <a
                  href="https://www.amstat.org/docs/default-source/amstat-documents/the-nations-data-at-risk-2025/The-Nations-Data-at-Risk-2025-Report.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  amstat.org
                </a>
                .
              </li>
              <li>
                United States Department of Agriculture. &ldquo;USDA Terminates
                Redundant Food Insecurity Survey.&rdquo; Press release, 20 Sept.
                2025,{" "}
                <a
                  href="https://www.usda.gov/about-usda/news/press-releases/2025/09/20/usda-terminates-redundant-food-insecurity-survey"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  usda.gov
                </a>
                .
              </li>
              <li>
                Candid. &ldquo;How Often Do Foundations Accept Unsolicited
                Requests for Funds?&rdquo; Candid, 1 Oct. 2025,{" "}
                <a
                  href="https://candid.org/blogs/do-foundations-accept-unsolicited-requests-for-funds-from-nonprofits/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  candid.org
                </a>
                .
              </li>
              <li>
                Internal Revenue Service. &ldquo;New 1023-EZ Form Makes Applying
                for 501(c)(3) Tax-Exempt Status Easier; Most Charities
                Qualify.&rdquo; IR-2014-77, 1 July 2014,{" "}
                <a
                  href="https://www.irs.gov/newsroom/new-1023-ez-form-makes-applying-for-501c3tax-exempt-status-easier-most-charities-qualify"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  irs.gov
                </a>
                .
              </li>
              {/* <li>
                RIVET. <em>Impact Report</em>. RIVET,{" "}
                <a
                  href="https://rivet.org"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  rivet.org
                </a>
                . Estimate covers global philanthropic giving.
              </li> */}
              <li>
                Parliament of England.{" "}
                <em>
                  An Act to Redress the Misemployment of Lands, Goods and Stocks
                  of Money Heretofore Given to Charitable Uses (Statute of
                  Charitable Uses)
                </em>
                . 43 Eliz. I, c. 4, 1601.
              </li>
              <li>
                Peabody Education Fund.{" "}
                <em>
                  Proceedings of the Trustees of the Peabody Education Fund,
                  1867-1914
                </em>
                . Cambridge, J. Wilson and Son, 1875-1916,{" "}
                <a
                  href="https://catalog.hathitrust.org/Record/001735899"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  catalog.hathitrust.org
                </a>
                .
              </li>
              <li>
                United States Congress. <em>War Revenue Act of 1917</em>, Pub.
                L. 65-50, 3 Oct. 1917.
              </li>
              <li>
                New York Community Trust. &ldquo;History.&rdquo;{" "}
                <a
                  href="https://thenytrust.org/about/history"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  thenytrust.org
                </a>
                .
              </li>
              <li>
                United States Congress. <em>Tax Reform Act of 1969</em>, Pub. L.
                91-172, 3 Dec. 1969.
              </li>
              <li>
                Harvard Business School Digital Initiative. &ldquo;GoFundMe:
                Leveraging Crowds for Good.&rdquo;{" "}
                <a
                  href="https://d3.harvard.edu/platform-digit/?p=7484"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-700"
                >
                  d3.harvard.edu
                </a>
                .
              </li>
            </ol>
          </footer>
        </article>
      </main>

      <CTASection />
    </div>
  );
}
