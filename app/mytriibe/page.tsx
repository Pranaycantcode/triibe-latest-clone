import { redirect } from "next/navigation";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { logoutAction } from "@/app/actions/auth";
import { UpcomingSchedule } from "@/components/dashboard/UpcomingSchedule";
import { PartnerTools } from "@/components/dashboard/PartnerTools";

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
    <main className="min-h-screen bg-neutral-50/50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header with User Info and Logout */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
              Welcome back{session.name ? `, ${session.name}` : ""}
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              Account: {session.email}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-medium px-3 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-100 transition"
            >
              Back to Home
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-xs font-medium px-3 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition"
              >
                Sign Out
              </button>
            </form>
          </div>
        </header>

        <section className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-neutral-900">
                TRIIBE Grants
              </h2>
              <p className="text-xs text-neutral-500">
                Access your grant applications, review guidelines, or check
                grant authority portals.
              </p>
            </div>
            <Link
              href="/grants"
              className="text-xs font-semibold px-3 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition"
            >
              Open Grants Portal
            </Link>
          </div>
        </section>

        <section className="space-y-3">
          <div>
            <h2 className="text-base font-semibold text-neutral-900">
              Upcoming Schedule & Grant Deadlines
            </h2>
            <p className="text-xs text-neutral-500">
              Sync key application cutoff dates and community events with your
              personal calendar.
            </p>
          </div>
          <UpcomingSchedule items={scheduleItems} />
        </section>

        <section className="space-y-3">
          <div>
            <h2 className="text-base font-semibold text-neutral-900">
              Recommended Nonprofit Toolkit
            </h2>
            <p className="text-xs text-neutral-500">
              Tools and partner platforms to support operations and initiatives.
            </p>
          </div>
          <PartnerTools />
        </section>
      </div>
    </main>
  );
}
