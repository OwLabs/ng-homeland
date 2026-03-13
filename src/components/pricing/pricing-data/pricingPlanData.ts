import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { Sparkles, Users, Crown, LucideIcon } from "lucide-react";

interface PricingPlansProps {
  name: string;
  price: number;
  period: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  badge?: string;
  features: { text: string; included: boolean }[];
  buttonText: string;
  buttonVariant: VariantProps<typeof buttonVariants>["variant"];
  highlighted: boolean;
  buttonGradient?: string;
}

export const pricingPlans: PricingPlansProps[] = [
  {
    name: "Free Plan",
    price: 0,
    period: "month",
    description: "Perfect for trying out NeuralGuru",
    icon: Sparkles,
    iconColor: "from-blue-500 to-cyan-500",
    features: [
      { text: "Access to basic materials", included: true },
      { text: "3 AI-generated KBAT questions/month", included: true },
      { text: "Limited diagnostic insights", included: true },
      { text: "Community support", included: true },
      { text: "Unlimited AI practice", included: false },
      { text: "Full KBAT diagnostics", included: false },
      { text: "Tutor recommendations", included: false },
      { text: "1-on-1 tutor booking", included: false },
    ],
    buttonText: "Start for Free",
    buttonVariant: "outline" as const,
    highlighted: false,
    buttonGradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Premium Plan",
    price: 29,
    period: "month",
    description: "Full AI-powered learning experience",
    icon: Users,
    iconColor: "from-[#1E3A8A] to-[#3B82F6]",
    badge: "Most Popular",
    features: [
      { text: "Access to basic materials", included: true },
      { text: "Unlimited AI practice", included: true },
      { text: "Full KBAT diagnostics", included: true },
      { text: "Personalized Weakness Report", included: true },
      { text: "Tutor recommendations", included: true },
      { text: "Email support", included: true },
      { text: "1-on-1 tutor booking", included: false },
      { text: "Priority AI analysis", included: false },
    ],
    buttonText: "Upgrade to Premium",
    buttonVariant: "default" as const,
    highlighted: true,
    buttonGradient: "from-[#1E3A8A] to-[#3B82F6]",
  },
  {
    name: "Tutor+ Plan",
    price: 59,
    period: "month",
    description: "Complete learning with personal tutoring",
    icon: Crown,
    iconColor: "from-orange-500 to-red-500",
    features: [
      { text: "Everything in Premium", included: true },
      { text: "1-on-1 tutor booking integration", included: true },
      { text: "Session scheduling calendar", included: true },
      { text: "Priority AI analysis updates", included: true },
      { text: "Parent performance reports", included: true },
      { text: "Direct tutor messaging", included: true },
      { text: "Unlimited practice sessions", included: true },
      { text: "Priority support", included: true },
    ],
    buttonText: "Join Tutor+",
    buttonVariant: "default" as const,
    highlighted: false,
    buttonGradient: "from-orange-500 to-red-500",
  },
];
