import AutoHero from "@/components/AutoHero";
import AutoPartsSection from "@/components/AutoParts";
import DismantlingSection from "@/components/DismantlingSection";


export default function AutoPage() {
  return (
    <div className="mb-10">
      <AutoHero />
      <AutoPartsSection />
      <DismantlingSection />
    </div>
  );
}