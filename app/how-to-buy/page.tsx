import type { Metadata } from "next";
import HowToHero from "@/components/HowToHero";
import GetInTouch from "@/components/GetInTouch";
import StepsSection from "@/components/Steps";

export const metadata: Metadata = {
  title: "How To Buy",
  description:
    "",
};

export default function HowToPage() {
  return (
    <div className="">
        {/* <div className="h-28 md:h-22 bg-[#000]"></div> */}
        <HowToHero />
        <StepsSection />
       
        <GetInTouch />
    </div>
  );
}