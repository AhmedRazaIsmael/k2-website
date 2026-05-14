import type { Metadata } from "next";

import AutoHero from "@/components/AutoHero";
import AutoPartsSection from "@/components/AutoParts";
import DismantlingSection from "@/components/DismantlingSection";
import QuotationInfoSection from "@/components/QuotationInfoSection";
import GetInTouch from "@/components/GetInTouch";
import ShippingSection from "@/components/ShippingSection";

export const metadata: Metadata = {
  title: "Auto Parts",
  description:
    "",
};

export default function AutoPage() {
  return (
    <div>
      <AutoHero />
      <AutoPartsSection />
      <DismantlingSection />
      <QuotationInfoSection />
      <ShippingSection />
      <GetInTouch />
    </div>
  );
}