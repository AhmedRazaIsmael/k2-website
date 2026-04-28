import AutoHero from "@/components/AutoHero";
import AutoPartsSection from "@/components/AutoParts";
import DismantlingSection from "@/components/DismantlingSection";
import QuotationInfoSection from "@/components/QuotationInfoSection";
import GetInTouch from "@/components/GetInTouch";
import ShippingSection from "@/components/ShippingSection";


export default function AutoPage() {
  return (
    <div className="">
      <AutoHero />
      <AutoPartsSection />
      <DismantlingSection />
      <QuotationInfoSection />
      <ShippingSection />
      <GetInTouch />
    </div>
  );
}