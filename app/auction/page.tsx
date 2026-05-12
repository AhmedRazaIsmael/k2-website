import AuctionHero from "@/components/AuctionHero";
import GetInTouch from "@/components/GetInTouch";
import AuctionSection from "@/components/AuctionSection";
import AuctionServiceSection from "@/components/AuctionService";
import WhyChooseAuction from "@/components/LiveAuction";
import AuctionServiceSteps from "@/components/AuctionSteps";
import AuctionCTA from "@/components/AuctionCTA";
import AuctionFAQ from "@/components/AuctionFAQ";

export default function AuctionPage() {
  return (
    <div>
      <AuctionHero />
    <AuctionSection />
    <AuctionServiceSection />
    <WhyChooseAuction />
    <AuctionServiceSteps />
    <AuctionCTA />
    <AuctionFAQ/>
      <GetInTouch />
    </div>
  );
}