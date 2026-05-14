import type { Metadata } from "next";

import BankingInfo from "@/components/BankingInfo";
import BankHero from "@/components/BankHero";
import GetInTouch from "@/components/GetInTouch";

export const metadata: Metadata = {
  title: "Bank Details",
  description:
    "",
};

export default function Page() {
  return (
    <div className="">
        {/* <div className="h-28 md:h-22 bg-[#000]"></div> */}
        <BankHero />
        <BankingInfo />
        <GetInTouch />
    </div>
  );
}