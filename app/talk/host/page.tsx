import type { Metadata } from "next";
import HostClient from "./HostClient";

export const metadata: Metadata = {
  title: "Register your TRIIBE Talk | TRIIBE",
  description:
    "Bring next-gen voices to your community with your own TRIIBE Talk.",
  alternates: {
    canonical: "https://www.triibe.org/talk/host",
  },
};

export default function HostPage() {
  return <HostClient />;
}