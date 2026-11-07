import type { Metadata } from "next";
import SummitClient from "./SummitClient";

export const metadata: Metadata = {
  title: "Next-gen nonprofit founders summit | TRIIBE",
  description:
    "The annual gathering of the TRIIBE I00, the opening weekend to Climate Week NYC and the UN General Assembly",
  alternates: {
    canonical: "https://www.triibe.org/summit",
  },
};

export default function Page() {
  return <SummitClient />;
}
