import type { Metadata } from "next";
import TriibeTalkClient from "./TriibeTalkClient";

export const metadata: Metadata = {
  title: "Intergenerational talks featuring next-gen voices | TRIIBE",
  description:
    "Developed with the founder of TEDx on TRIIBE’s Legacy Board, TRIIBE Talks highlight the next generation of philentrepreneurs.",
  alternates: {
    canonical: "https://www.triibe.org/talk",
  },
};

export default function Page() {
  return <TriibeTalkClient />;
}
