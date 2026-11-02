import GuideClient from "./GuideClient";

export const metadata = {
  title: "How to host your own TRIIBE Talk | TRIIBE",
  description:
    "A step-by-step guide to hosting your own intergenerational TRIIBE Talk.",
  alternates: {
    canonical: "https://www.triibe.org/talk/guide",
  },
};

export default function GuidePage() {
  return <GuideClient />;
}
