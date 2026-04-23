import AboutHero from "@/components/AboutHero";
import AboutSections from "@/components/AboutSections";
import WhyChooseUs from "@/components/WhyChooseUs";
import HistorySection from "@/components/HistorySection";
import GetInTouch from "@/components/GetInTouch";

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