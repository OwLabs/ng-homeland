import { Brain, LineChart, LucideIcon, Target, Zap } from "lucide-react";

interface HowItWorksProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const howItWorksSteps: HowItWorksProps[] = [
  {
    step: "01",
    title: "Upload Test Results",
    description:
      "Your tutor adds Test 1, Test 2, Mid-Year, or Final exam scores to the platform.",
    icon: Zap,
  },
  {
    step: "02",
    title: "AI Analyzes Patterns",
    description:
      "Our AI engine detects KBAT weaknesses, learning gaps, and performance patterns.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Practice Smart Questions",
    description:
      "Get adaptive KBAT questions tailored to your weak areas with different contexts.",
    icon: Target,
  },
  {
    step: "04",
    title: "Track & Improve",
    description:
      "Monitor your progress with diagnostic reports and book tutors when needed.",
    icon: LineChart,
  },
];
