import { redirect } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { logoutAction } from "@/app/actions/auth";
import { UpcomingSchedule } from "@/components/dashboard/UpcomingSchedule";
import { PartnerTools } from "@/components/dashboard/PartnerTools";

export const dynamic = "force-dynamic";

export default async function MyTriibePage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const scheduleItems = await prisma.scheduleItem.findMany({
    where: {
      startDate: {
        gte: new Date(),
      },
    },
    orderBy: {
      startDate: "asc",
    },
    take: 8,
  });

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-12 px-4 md:px-25 lg:px-50 bg-[#3036411A]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-white rounded mb-3 border border-gray-200">
              <span className="font-semibold text-[#002c19] text-xs tracking-wide uppercase">
                Member Hub
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#002c19] tracking-tight">
              Welcome back{session.name ? `, ${session.name}` : ""}
            </h1>
            <p className="text-[#002c19]/80 text-base md:text-lg mt-2 font-normal">
              Signed in as{" "}
              <span className="font-semibold text-[#002c19]">
                {session.email}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="h-[44px] min-w-[130px] px-6 rounded-sm border border-[#002c19] text-[#002c19] hover:bg-white transition-colors text-sm font-medium whitespace-nowrap inline-flex items-center justify-center text-center"
            >
              Back to Home
            </Link>
            <form action={logoutAction} className="m-0">
              <button
                type="submit"
                className="h-[44px] min-w-[130px] px-6 rounded-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-colors text-sm font-medium whitespace-nowrap inline-flex items-center justify-center text-center cursor-pointer"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="w-full px-4 md:px-25 lg:px-50 py-12 space-y-16">
        <div className="w-full max-w-[1200px] mx-auto space-y-16">
          <section className="transition-all duration-300 hover:scale-[1.01]">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-2xl md:text-3xl font-medium text-[#002c19]">
                  TRIIBE Grants & Impact Opportunities
                </p>
                <p className="text-sm md:text-base text-[#002c19]/80 mt-2 max-w-xl">
                  Explore current funding cycles, track your application
                  milestones, and access official grant guidelines.
                </p>
              </div>

              <Link
                href="/grants"
                className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-sm md:text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 cursor-pointer"
              >
                Explore Grants
              </Link>
            </div>
          </section>

          <section className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002c19]">
                Upcoming Dates & Grant Deadlines
              </h2>
              <p className="text-[#002c19]/80 text-sm md:text-base mt-1">
                Sync critical cutoff dates, gathering sessions, and TRIIBE talks
                directly to your schedule.
              </p>
            </div>

            <UpcomingSchedule events={scheduleItems} />
          </section>

          <section className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002c19]">
                Partner Ecosystem & Resources
              </h2>
              <p className="text-[#002c19]/80 text-sm md:text-base mt-1">
                Vetted platforms, hiring networks, and fellowship access curated
                for the TRIIBE community.
              </p>
            </div>

            <PartnerTools />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
