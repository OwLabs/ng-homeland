import {
  CreditCard,
  FileText,
  GraduationCap,
  HelpCircle,
  LucideIcon,
  Settings,
  Users,
} from "lucide-react";

interface CategoryProps {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const categories: CategoryProps[] = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "general", name: "General", icon: FileText },
  { id: "students", name: "For Students", icon: GraduationCap },
  { id: "tutors", name: "For Tutors", icon: Users },
  { id: "billing", name: "Billing & Plans", icon: CreditCard },
  { id: "technical", name: "Technical Support", icon: Settings },
];
