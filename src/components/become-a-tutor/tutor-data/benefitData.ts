import {
  Zap,
  Users,
  TrendingUp,
  BookOpen,
  Globe,
  Shield,
  LucideIcon,
} from "lucide-react";

interface BenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: BenefitProps[] = [
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description:
      "Leverage our AI to identify student KBAT weaknesses and personalise your teaching approach.",
  },
  {
    icon: Users,
    title: "Access to Students",
    description:
      "Connect with thousands of Malaysian students actively seeking quality tutoring.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Reputation",
    description:
      "Build your profile with ratings, reviews, and verified teaching credentials.",
  },
  {
    icon: BookOpen,
    title: "MOE-Aligned Tools",
    description:
      "Upload test results, generate diagnostics, and access materials aligned with the Malaysian syllabus.",
  },
  {
    icon: Globe,
    title: "Teach Anywhere",
    description:
      "Conduct sessions online or in-person with flexible scheduling tools.",
  },
  {
    icon: Shield,
    title: "Verified Platform",
    description:
      "Join a trusted, admin-monitored platform with secure payments and transparent earnings.",
  },
];
