import { redirect } from "next/navigation";

export const metadata = {
  title: "Back nonprofit founders under 30 | TRIIBE",
  description:
    "Measured by Purposefy, every dollar donated yields $3.60 in social return.",
  openGraph: {
    title: "Back nonprofit founders under 30 | TRIIBE",
    description:
      "Measured by Purposefy, every dollar donated yields $3.60 in social return.",
    url: "https://www.triibe.org/donate",
  },
  alternates: {
    canonical: "https://www.triibe.org/donate",
  },
};

export default function page() {
  redirect("https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz");
}
