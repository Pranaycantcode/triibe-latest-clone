import { getGoogleCalendarUrl, getICSDataUrl } from "@/lib/calendar";

export interface ScheduleEvent {
  id: string;
  title: string;
  description: string | null;
  type: "GRANT_DEADLINE" | "TRIIBE_EVENT";
  startDate: Date;
  endDate: Date | null;
  location: string | null;
  link: string | null;
}

interface UpcomingScheduleProps {
  events: ScheduleEvent[];
}

export function UpcomingSchedule({ events }: UpcomingScheduleProps) {
  if (events.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 p-12 text-center bg-white">
        <p className="text-base text-[#002c19]/70">
          No upcoming grant deadlines or gathering dates scheduled right now.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => {
        const isGrant = event.type === "GRANT_DEADLINE";
        const start = new Date(event.startDate);
        const googleUrl = getGoogleCalendarUrl(event);
        const icsUrl = getICSDataUrl(event);

        return (
          <div
            key={event.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#1C5945]/40 hover:shadow-md transition-all duration-300 gap-6"
          >
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center justify-center min-w-[64px] h-[64px] rounded-xl bg-[#3036411A] text-[#002c19] shrink-0">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#002c19]/70">
                  {start.toLocaleString("en-US", { month: "short" })}
                </span>
                <span className="text-2xl font-bold leading-none mt-0.5">
                  {start.getDate()}
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                      isGrant
                        ? "bg-amber-100 text-amber-900 border border-amber-200"
                        : "bg-[#002c19]/10 text-[#002c19]"
                    }`}
                  >
                    {isGrant ? "Grant Cutoff" : "Community Event"}
                  </span>
                  {event.location && (
                    <span className="text-xs text-[#002c19]/60 font-medium">
                      • {event.location}
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#002c19]">
                  {event.title}
                </h3>

                {event.description && (
                  <p className="text-sm text-[#002c19]/80 mt-1 line-clamp-2 max-w-2xl leading-relaxed">
                    {event.description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-center">
              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[38px] px-4 rounded-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-colors text-xs font-semibold inline-flex items-center"
                >
                  View Details
                </a>
              )}
              <a
                href={googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[38px] px-3.5 rounded-sm border border-gray-300 hover:border-[#002c19] text-[#002c19] hover:bg-gray-50 transition-colors text-xs font-medium inline-flex items-center"
              >
                + Google
              </a>
              <a
                href={icsUrl}
                download={`${event.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.ics`}
                className="h-[38px] px-3.5 rounded-sm border border-gray-300 hover:border-[#002c19] text-[#002c19] hover:bg-gray-50 transition-colors text-xs font-medium inline-flex items-center"
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
