import type { Metadata } from "next";

import AboutHero from "@/components/AboutHero";
import AboutSections from "@/components/AboutSections";
import WhyChooseUs from "@/components/WhyChooseUs";
import HistorySection from "@/components/HistorySection";
import GetInTouch from "@/components/GetInTouch";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about The K2, our history, mission, and commitment to providing quality Japanese vehicles worldwide.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
       <AboutSections />
       <WhyChooseUs />
       <HistorySection />
       <GetInTouch />
    </div>
  );
}