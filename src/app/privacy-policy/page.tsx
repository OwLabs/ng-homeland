import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/components/privacy-policy/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | NeuralGuru - Your Data Security & Privacy Matters",
  description: "Learn how NeuralGuru collects, uses, and protects your personal information. We are committed to ensuring the privacy and security of our Malaysian students and tutors.",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
