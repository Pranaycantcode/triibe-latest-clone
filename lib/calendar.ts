interface CalendarItemParams {
  title: string;
  description?: string | null;
  location?: string | null;
  startDate: Date;
  endDate?: Date | null;
}

export function getGoogleCalendarUrl(item: CalendarItemParams): string {
  const start = new Date(item.startDate).toISOString().replace(/-|:|\.\d\d\d/g, '');
  const end = (item.endDate ? new Date(item.endDate) : new Date(new Date(item.startDate).getTime() + 60 * 60 * 1000))
    .toISOString()
    .replace(/-|:|\.\d\d\d/g, '');

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: item.title,
    dates: `${start}/${end}`,
    details: item.description || '',
    location: item.location || '',
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function getICSDataUrl(item: CalendarItemParams): string {
  const start = new Date(item.startDate).toISOString().replace(/-|:|\.\d\d\d/g, '');
  const end = (item.endDate ? new Date(item.endDate) : new Date(new Date(item.startDate).getTime() + 60 * 60 * 1000))
    .toISOString()
    .replace(/-|:|\.\d\d\d/g, '');

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//TRIIBE//Schedule//EN',
    'BEGIN:VEVENT',
    `SUMMARY:${item.title}`,
    `DESCRIPTION:${(item.description || '').replace(/\n/g, '\\n')}`,
    `LOCATION:${item.location || ''}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsLines)}`;
}