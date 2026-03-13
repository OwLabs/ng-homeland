import {
  LucideIcon,
  UserCheck,
  Building2,
  Shield,
  GraduationCap,
} from "lucide-react";

interface HowItWorkProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const howItWorks: HowItWorkProps[] = [
  {
    step: "01",
    title: "Choose Your Path",
    description:
      "Decide whether you want to register as a Freelancer or Staff tutor under an organisation.",
    icon: UserCheck,
  },
  {
    step: "02",
    title: "Register Under an Organisation",
    description:
      "All tutors register under an organisation. Freelancers can register under a partner org or create a sole-proprietor entity.",
    icon: Building2,
  },
  {
    step: "03",
    title: "Get Verified",
    description:
      "Submit your qualifications, teaching experience, and subject expertise for admin verification.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Start Teaching",
    description:
      "Access your tutor dashboard, upload test results, leverage AI insights, and connect with students.",
    icon: GraduationCap,
  },
];
