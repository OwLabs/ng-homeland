import {
  BarChart3,
  Brain,
  LucideIcon,
  MessageSquare,
  Shield,
  Target,
  Users,
} from "lucide-react";

interface FeaturesProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export const features: FeaturesProps[] = [
  {
    icon: Brain,
    title: "AI KBAT Prediction",
    description:
      "Advanced AI analyzes your test patterns to predict KBAT weaknesses before they become problems.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Adaptive Practice",
    description:
      "Practice with AI-generated questions that adapt to your learning pace with real-time feedback.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Smart Tutor Matching",
    description:
      "Get matched with expert tutors specialized in your specific learning needs and subjects.",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: BarChart3,
    title: "Diagnostic Reports",
    description:
      "Get detailed AI-powered diagnostic reports showing your strengths, weaknesses, and improvement areas.",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Tutor",
    description:
      "Ask questions anytime with our AI chat assistant that explains concepts in simple Bahasa or English.",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Shield,
    title: "MOE-Aligned Content",
    description:
      "All content follows the Malaysian MOE curriculum and exam format — PT3, SPM, and more.",
    color: "from-cyan-500 to-sky-600",
    bgColor: "bg-cyan-50",
  },
];
