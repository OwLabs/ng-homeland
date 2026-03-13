import type { Metadata } from "next";
import { BecomeTutorPage } from "@/components/become-a-tutor/BecomeTutorPage";

export const metadata: Metadata = {
  title: "Join NeuralGuru as an AI-Empowered Tutor | Empowering Malaysian Educators",
  description: "Become a tutor on NeuralGuru. Leverage our AI-powered KBAT analysis tools to help Malaysian students excel in their learning journey and master higher order thinking skills.",
};

export default function BecomeTutor() {
  return <BecomeTutorPage />;
}
