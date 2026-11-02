import type { Metadata } from "next";
import SpeakerBriefClient from "./SpeakerBriefClient";

export const metadata: Metadata = {
  title: "Preparing for your TRIIBE Talk | TRIIBE Talk",
  description:
    "What to expect, how to prepare, and how to share your story.",
  alternates: {
    canonical: "https://www.triibe.org/talk/speakerbrief",
  },
};

interface PageProps {
  searchParams: Promise<{
    submission?: string;
  }>;
}

export default async function SpeakerBriefPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  return (
    <SpeakerBriefClient
      isSubmissionSuccess={params.submission === "success"}
    />
  );
}