import type { Metadata } from "next";

import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "",
};

export default function AboutPage() {
  return (
    <div className="mb-10">
      <ContactHero />
      <ContactSection />
    </div>
  );
}