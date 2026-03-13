import type { Metadata } from "next";
import { FaqPage } from "@/components/faq/FaqPage";

export const metadata: Metadata = {
  title: "FAQ | NeuralGuru — Frequently Asked Questions",
  description:
    "Find answers to common questions about NeuralGuru, our AI-powered KBAT learning platform, subscription plans, tutor services, and technical support.",
};

export default function FAQ() {
  return <FaqPage />;
}
