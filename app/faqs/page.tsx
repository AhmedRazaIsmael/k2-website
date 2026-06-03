import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | The K2",
  description:
    "Find answers to common questions about buying vehicles, payments, shipping, delivery, and more at The K2.",
};

export default function Page() {
  return <FAQPageClient />;
}