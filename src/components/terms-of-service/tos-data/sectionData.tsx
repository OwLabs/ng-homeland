import {
  AlertCircle,
  Building2,
  ChevronRight,
  CreditCard,
  Gavel,
  Layers,
  LayoutGrid,
  LucideIcon,
  Scale,
  ShieldAlert,
  Umbrella,
  UserCheck,
  XCircle,
} from "lucide-react";

interface SectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

export const sections: SectionProps[] = [
  {
    id: "company-info",
    icon: Building2,
    title: "Company Information",
    content: (
      <div className="space-y-3">
        <div className="bg-[#FAF7F2] rounded-xl p-4 border border-gray-100">
          <p className="text-gray-800 text-sm">
            <span className="text-[#1E3A8A]">Neural Guru</span> is operated by{" "}
            <span className="text-[#1E3A8A]">Neural Guru Sdn. Bhd.</span>, a
            company incorporated in Malaysia.
          </p>
        </div>
        <p className="text-gray-700 text-sm">
          These Terms are governed by the laws of Malaysia.
        </p>
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
          <p className="text-gray-700 text-sm">
            By accessing or using the NeuralGuru platform ("Platform"), you
            agree to be legally bound by these Terms of Service. Please read
            them carefully before proceeding.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "nature-of-platform",
    icon: LayoutGrid,
    title: "Nature of Platform",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          NeuralGuru is a technology platform that facilitates:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            {
              label: "Tutor Matching",
              desc: "Connecting parents and students with qualified tutors",
            },
            {
              label: "Learning Management",
              desc: "AI-powered adaptive study plans and KBAT tracking",
            },
            {
              label: "Child Development Tracking",
              desc: "Monitoring academic progress and milestones",
            },
            {
              label: "Communication Tools",
              desc: "Facilitating messaging between guardians and educators",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 bg-[#FAF7F2] rounded-lg p-3"
            >
              <ChevronRight className="w-4 h-4 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-800 text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-gray-700 text-sm">
              NeuralGuru does <span className="text-amber-700">not</span> act as
              an employer, agent, or guarantor of any tutor or childcare
              provider unless expressly stated.
            </p>
            <p className="text-gray-600 text-sm">
              All service engagements conducted outside the Platform are at
              users' own risk.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "eligibility",
    icon: UserCheck,
    title: "Eligibility",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          To use NeuralGuru, you must meet the following requirements:
        </p>
        <div className="space-y-2">
          {[
            {
              req: "Age Requirement",
              desc: "Be at least 18 years old. Minors must be registered by a parent or legal guardian.",
            },
            {
              req: "Accurate Information",
              desc: "Provide accurate, complete, and current registration information at all times.",
            },
            {
              req: "Account Security",
              desc: "Maintain the confidentiality of your login credentials and not share them with others.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border border-gray-200 rounded-xl p-4"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">{i + 1}</span>
              </div>
              <div>
                <p className="text-gray-800 text-sm">{item.req}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm italic">
          NeuralGuru reserves the right to verify user identity at any time.
        </p>
      </div>
    ),
  },
  {
    id: "account-responsibilities",
    icon: ShieldAlert,
    title: "Account Responsibilities",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          By creating an account, users agree to the following:
        </p>
        <div className="space-y-2">
          {[
            "Not to misuse or abuse the Platform or any of its features",
            "Not to upload unlawful, defamatory, harmful, misleading, or offensive content",
            "Not to attempt system hacking, reverse engineering, or unauthorised data scraping",
            "Not to impersonate other users, tutors, or NeuralGuru staff",
            "Not to use the Platform for any fraudulent or illegal purposes",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-gray-700 text-sm"
            >
              <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-500 text-xs">✕</span>
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-gray-700 text-sm">
            Any breach of these responsibilities may result in{" "}
            <span className="text-red-600">immediate account suspension</span>{" "}
            or termination without prior notice.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payments & Subscription",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              label: "Transparent Pricing",
              desc: "All subscription fees and charges will be clearly displayed before any purchase is confirmed.",
            },
            {
              label: "Non-Refundable",
              desc: "All payments are non-refundable unless otherwise explicitly stated in a specific promotion or policy.",
            },
            {
              label: "Pricing Changes",
              desc: "NeuralGuru reserves the right to revise pricing with reasonable prior notice to users.",
            },
            {
              label: "Service Suspension",
              desc: "Failure to complete payment may result in suspension or downgrade of your account and services.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#FAF7F2] rounded-xl p-4 border border-gray-100"
            >
              <p className="text-[#1E3A8A] text-sm mb-1">{item.label}</p>
              <p className="text-gray-600 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xs italic">
          For billing inquiries, contact us at{" "}
          <a
            href="mailto:billing@neuralguru.my"
            className="text-[#3B82F6] hover:underline"
          >
            billing@neuralguru.my
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    icon: Layers,
    title: "Intellectual Property",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-sm">
          All content, branding, system design, software, database structure,
          and materials on the Platform are the{" "}
          <span className="text-[#1E3A8A]">
            exclusive intellectual property
          </span>{" "}
          of Neural Guru Sdn. Bhd.
        </p>
        <p className="text-gray-600 text-sm">
          Without prior written consent from NeuralGuru, users may not:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            "Copy",
            "Reproduce",
            "Redistribute",
            "Modify",
            "Commercially Exploit",
            "Reverse Engineer",
          ].map((action, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-lg px-3 py-2"
            >
              <span className="text-red-400 text-xs">✕</span>
              <span className="text-gray-700 text-sm">{action}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm">
          any part of the Platform without express written consent from
          NeuralGuru.
        </p>
      </div>
    ),
  },
  {
    id: "liability",
    icon: Scale,
    title: "Limitation of Liability",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          To the maximum extent permitted by applicable Malaysian law,
          NeuralGuru shall not be liable for:
        </p>
        <div className="space-y-2">
          {[
            "Disputes arising between parents and tutors",
            "Injury, loss, or damages arising from offline or in-person sessions",
            "Misconduct or negligence by third-party service providers",
            "Indirect, incidental, special, or consequential damages of any kind",
            "Loss of data, revenue, or business opportunities",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-gray-700 text-sm"
            >
              <ChevronRight className="w-4 h-4 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-3 bg-[#FAF7F2] border border-gray-200 rounded-xl p-4">
          <Scale className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
          <p className="text-gray-600 text-sm">
            The Platform is provided on an{" "}
            <span className="text-[#1E3A8A]">"as-is"</span> and{" "}
            <span className="text-[#1E3A8A]">"as-available"</span> basis without
            warranties of any kind, whether express or implied.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "indemnification",
    icon: Umbrella,
    title: "Indemnification",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-sm">
          By using NeuralGuru, you agree to{" "}
          <span className="text-[#1E3A8A]">indemnify and hold harmless</span>{" "}
          Neural Guru Sdn. Bhd., its directors, employees, and partners against
          any and all claims, losses, damages, liabilities, costs, and legal
          fees arising from:
        </p>
        <div className="space-y-2">
          {[
            {
              label: "Breach of Terms",
              desc: "Your violation of any provision of these Terms of Service",
            },
            {
              label: "Misconduct",
              desc: "Any harmful, illegal, or fraudulent activity conducted via the Platform",
            },
            {
              label: "Legal Violations",
              desc: "Infringement of any applicable Malaysian laws or third-party rights",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border border-gray-200 rounded-xl p-4"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">{i + 1}</span>
              </div>
              <div>
                <p className="text-gray-800 text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "termination",
    icon: XCircle,
    title: "Termination",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          NeuralGuru may suspend or permanently terminate accounts under the
          following circumstances:
        </p>
        <div className="space-y-2">
          {[
            "Violation of any provision of these Terms of Service",
            "Detection of fraudulent, deceptive, or abusive activity",
            "User conduct that harms other users, tutors, or the integrity of the Platform",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-gray-700 text-sm"
            >
              <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-500 text-xs">!</span>
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
          <p className="text-gray-700 text-sm">
            Users may terminate their account at any time by submitting a
            written request to{" "}
            <a
              href="mailto:support@neuralguru.my"
              className="text-[#3B82F6] hover:underline"
            >
              support@neuralguru.my
            </a>
            . Account data will be handled in accordance with our Privacy
            Policy.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "governing-law",
    icon: Gavel,
    title: "Governing Law & Jurisdiction",
    content: (
      <div className="space-y-3">
        <div className="bg-[#FAF7F2] rounded-xl p-4 border border-gray-100">
          <p className="text-gray-700 text-sm">
            These Terms of Service shall be governed by and construed in
            accordance with the{" "}
            <span className="text-[#1E3A8A]">laws of Malaysia</span>, without
            regard to its conflict of law provisions.
          </p>
        </div>
        <p className="text-gray-700 text-sm">
          Any disputes, claims, or controversies arising out of or in connection
          with these Terms shall be subject to the{" "}
          <span className="text-[#1E3A8A]">
            exclusive jurisdiction of the courts of Malaysia
          </span>
          .
        </p>
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <Gavel className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
          <p className="text-gray-600 text-sm">
            If you have a legal concern or dispute, we encourage you to first
            contact our support team at{" "}
            <a
              href="mailto:legal@neuralguru.my"
              className="text-[#3B82F6] hover:underline"
            >
              legal@neuralguru.my
            </a>{" "}
            before initiating formal proceedings.
          </p>
        </div>
      </div>
    ),
  },
];
