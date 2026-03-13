import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | NeuralGuru — Flexible Plans for Every Student",
  description:
    "Compare NeuralGuru plans: Free, Premium (RM 29/mo), and Tutor+ (RM 59/mo). Get AI-powered KBAT analysis, adaptive practice, and personal tutoring for Malaysian students.",
};

export default function Pricing() {
  return <PricingPage />;
}
