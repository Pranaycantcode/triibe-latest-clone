import { headers } from "next/headers";

export async function getBaseUrl(): Promise<string> {
  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const proto = headersList.get("x-forwarded-proto") || "https";

    if (host) {
      const isLocal = host.includes("localhost") || host.includes("127.0.0.1");
      return `${isLocal ? "http" : proto}://${host}`;
    }
  } catch {}

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
}
