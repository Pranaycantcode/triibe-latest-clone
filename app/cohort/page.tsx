import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cohort from "@/components/cohort";
import Changemakers from "@/components/changemakers";
import CTASection from "@/components/cta";

export const metadata = {
  title: "Student Nonprofit Cohort | TRIIBE",
  description:
    "Join our student nonprofit cohort offering funding, mentorship, and community support for next-gen changemakers building impactful organizations.",
  alternates: {
    canonical: "https://www.triibe.org/cohort",
  },
};

const page = () => {
  return (
    <main>
      <Header />
      <section className="pt-16 pb-8 px-4  bg-white">
        <Changemakers />
      </section>

      {/* <CTASection /> */}

      <Footer />
    </main>
  );
};

export default page;
