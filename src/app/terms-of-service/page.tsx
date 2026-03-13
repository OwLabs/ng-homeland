import type { Metadata } from "next";
import { TermsOfServicePage } from "@/components/terms-of-service/TermsOfServicePage";

export const metadata: Metadata = {
  title: "Terms of Service | NeuralGuru - Guidelines for AI-Powered Learning",
  description: "Read the terms and conditions for using NeuralGuru's platform. Understand your rights and responsibilities as a user of our AI-powered educational services.",
};

export default function TermsOfService() {
  return <TermsOfServicePage />;
}
