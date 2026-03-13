interface ComparisonFeaturesProps {
  feature: string;
  free: string;
  premium: string;
  tutorPlus: string;
}

export const comparisonFeatures: ComparisonFeaturesProps[] = [
  {
    feature: "AI-Generated KBAT Questions",
    free: "3/month",
    premium: "Unlimited",
    tutorPlus: "Unlimited",
  },
  {
    feature: "KBAT Diagnostic Reports",
    free: "Basic",
    premium: "Full Analysis",
    tutorPlus: "Full + Priority",
  },
  {
    feature: "Learning Materials Access",
    free: "Limited",
    premium: "Full Library",
    tutorPlus: "Full Library",
  },
  {
    feature: "Tutor Recommendations",
    free: "✗",
    premium: "AI-Powered",
    tutorPlus: "AI-Powered",
  },
  {
    feature: "1-on-1 Tutor Booking",
    free: "✗",
    premium: "✗",
    tutorPlus: "✓",
  },
  { feature: "Parent Reports", free: "✗", premium: "✗", tutorPlus: "Weekly" },
  {
    feature: "Support Level",
    free: "Community",
    premium: "Email",
    tutorPlus: "Priority",
  },
  {
    feature: "AI Analysis Speed",
    free: "Standard",
    premium: "Fast",
    tutorPlus: "Instant",
  },
];
