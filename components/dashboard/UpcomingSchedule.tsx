import { getGoogleCalendarUrl, getICSDataUrl } from "@/lib/calendar";

export interface ScheduleItemData {
  id: string;
  title: string;
  description: string | null;
  type: "GRANT_DEADLINE" | "TRIIBE_EVENT";
  startDate: Date;
  endDate: Date | null;
  location: string | null;
  link: string | null;
}

export function UpcomingSchedule({ items }: { items: ScheduleItemData[] }) {
  if (items.length === 0) {
    return (
      <div className="p-8 text-center border border-dashed border-neutral-300 rounded-xl bg-neutral-50/50">
        <p className="text-sm text-neutral-500">
          No upcoming grant deadlines or events scheduled right now.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isGrant = item.type === "GRANT_DEADLINE";
        const start = new Date(item.startDate);
        const googleUrl = getGoogleCalendarUrl(item);
        const icsUrl = getICSDataUrl(item);

        return (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 transition-colors gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center justify-center min-w-[56px] px-2.5 py-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-900 shrink-0">
                <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">
                  {start.toLocaleString("en-US", { month: "short" })}
                </span>
                <span className="text-lg font-bold leading-none mt-0.5">
                  {start.getDate()}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                      isGrant
                        ? "bg-amber-100 text-amber-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {isGrant ? "Grant Deadline" : "TRIIBE Event"}
                  </span>
                  {item.location && (
                    <span className="text-xs text-neutral-500">
                      {item.location}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-neutral-900 mt-1 text-sm sm:text-base">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-3 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition"
                >
                  View Details
                </a>
              )}
              <a
                href={googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium px-2.5 py-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50 text-neutral-700 transition"
              >
                + Google
              </a>
              <a
                href={icsUrl}
                download={`${item.title.toLowerCase().replace(/\s+/g, "-")}.ics`}
                className="text-xs font-medium px-2.5 py-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50 text-neutral-700 transition"
              >
                .ICS
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
