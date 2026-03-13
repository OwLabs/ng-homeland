import {
  Database,
  ChevronRight,
  Eye,
  UserCheck,
  AlertCircle,
  Globe,
  Shield,
  RefreshCw,
  FileEdit,
  LucideIcon,
  Lock,
} from "lucide-react";

interface SectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  color: string;
  content: React.ReactNode;
}

export const sections: SectionProps[] = [
  {
    id: "data-collected",
    icon: Database,
    title: "Personal Data We Collect",
    color: "from-[#1E3A8A] to-[#3B82F6]",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          We may collect the following categories of personal data:
        </p>
        <ul className="space-y-2">
          {[
            "Full name",
            "IC / Identification number (if required)",
            "Contact details (email address, phone number)",
            "Child information (age, health notes, development progress)",
            "Payment information",
            "IP address & device information",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-700 text-sm"
            >
              <ChevronRight className="w-4 h-4 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "purpose",
    icon: Eye,
    title: "Purpose of Processing",
    color: "from-[#1E3A8A] to-[#3B82F6]",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          Your data is processed for the following purposes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            {
              label: "Account Registration",
              desc: "Creating and managing your NeuralGuru account",
            },
            {
              label: "Tutor-Parent Matching",
              desc: "Connecting students with suitable tutors",
            },
            {
              label: "Progress Monitoring",
              desc: "Tracking child academic development",
            },
            {
              label: "Communication",
              desc: "Facilitating messaging between users",
            },
            {
              label: "Payment Processing",
              desc: "Handling subscription and booking fees",
            },
            {
              label: "Legal Compliance",
              desc: "Meeting regulatory obligations under Malaysian law",
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
      </div>
    ),
  },
  {
    id: "consent",
    icon: UserCheck,
    title: "Consent",
    color: "from-[#1E3A8A] to-[#3B82F6]",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-sm">
          By using NeuralGuru, you consent to the collection and processing of
          your personal data in accordance with the Personal Data Protection Act
          2010 (PDPA).
        </p>
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
          <p className="text-gray-700 text-sm">
            <span className="text-[#1E3A8A]">For minors' data:</span> Consent
            must be provided by a parent or legal guardian. By registering a
            minor's account, the parent or guardian confirms they have the
            authority to provide such consent.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "disclosure",
    icon: Globe,
    title: "Disclosure of Data",
    color: "from-[#1E3A8A] to-[#3B82F6]",
    content: (
      <div className="space-y-3">
        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
          <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-gray-700 text-sm">
            <span className="text-green-700">
              We do not sell your personal data
            </span>{" "}
            to any third party for commercial purposes.
          </p>
        </div>
        <p className="text-gray-600 text-sm">Data may be disclosed only to:</p>
        <ul className="space-y-2">
          {[
            "Tutors or childcare providers (where necessary for service delivery)",
            "Payment gateway providers (for processing transactions securely)",
            "Government authorities (if required by Malaysian law or court order)",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-700 text-sm"
            >
              <ChevronRight className="w-4 h-4 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 text-sm italic">
          All third parties are contractually required to maintain
          confidentiality and handle data responsibly.
        </p>
      </div>
    ),
  },
  {
    id: "security",
    icon: Lock,
    title: "Data Security",
    color: "from-[#1E3A8A] to-[#3B82F6]",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-sm">
          We implement reasonable technical and organisational security measures
          to protect your personal data from unauthorised access, disclosure,
          alteration, or destruction.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              label: "Encryption",
              desc: "Data encrypted in transit and at rest using industry-standard protocols",
            },
            {
              label: "Access Controls",
              desc: "Strict role-based access controls for internal staff",
            },
            {
              label: "Regular Audits",
              desc: "Periodic security reviews and vulnerability assessments",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#FAF7F2] rounded-lg p-3 text-center">
              <p className="text-gray-800 text-sm">{item.label}</p>
              <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-gray-600 text-sm">
            However, no system is completely secure. Users acknowledge the
            inherent risks associated with transmitting data over the internet.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "retention",
    icon: RefreshCw,
    title: "Data Retention",
    color: "from-[#1E3A8A] to-[#3B82F6]",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-sm">
          Personal data will be retained only for as long as necessary to:
        </p>
        <ul className="space-y-2">
          {[
            "Fulfil the purposes for which it was collected and to provide our services",
            "Comply with applicable legal and regulatory requirements",
            "Resolve any disputes or enforce our agreements",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-700 text-sm"
            >
              <ChevronRight className="w-4 h-4 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 text-sm">
          Upon account closure, data will be deleted or anonymised within a
          reasonable timeframe, unless retention is required by law.
        </p>
      </div>
    ),
  },
  {
    id: "rights",
    icon: FileEdit,
    title: "Access & Correction Rights",
    color: "from-[#1E3A8A] to-[#3B82F6]",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 text-sm">
          Under the PDPA, you have the right to:
        </p>
        <div className="space-y-2">
          {[
            {
              right: "Request Access",
              desc: "Obtain a copy of the personal data we hold about you",
            },
            {
              right: "Request Correction",
              desc: "Ask us to correct any inaccurate or incomplete data",
            },
            {
              right: "Withdraw Consent",
              desc: "Opt out of data processing (subject to service limitations)",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border border-gray-200 rounded-lg p-3"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">{i + 1}</span>
              </div>
              <div>
                <p className="text-gray-800 text-sm">{item.right}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm">
          All requests must be submitted in writing to our official contact
          email at{" "}
          <a
            href="mailto:privacy@neuralguru.my"
            className="text-[#3B82F6] hover:underline"
          >
            privacy@neuralguru.my
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: "cross-border",
    icon: Globe,
    title: "Cross-Border Transfer",
    color: "from-[#1E3A8A] to-[#3B82F6]",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-sm">
          If personal data is transferred outside Malaysia (for example, to
          cloud service providers), NeuralGuru will ensure that adequate
          protections are in place, consistent with the requirements of the
          PDPA.
        </p>
        <p className="text-gray-600 text-sm">
          We will take all reasonable steps to ensure that any overseas
          recipients are bound by obligations of confidentiality and data
          protection equivalent to those applicable in Malaysia.
        </p>
      </div>
    ),
  },
  {
    id: "amendments",
    icon: FileEdit,
    title: "Amendments",
    color: "from-[#1E3A8A] to-[#3B82F6]",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-sm">
          NeuralGuru reserves the right to update or amend this Privacy Policy
          at any time. We will notify users of material changes via email or a
          prominent notice on our platform.
        </p>
        <p className="text-gray-700 text-sm">
          Continued use of NeuralGuru following the posting of an updated
          Privacy Policy constitutes your acceptance of the revised terms.
        </p>
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
          <p className="text-gray-600 text-sm">
            We encourage you to review this Privacy Policy periodically to stay
            informed about how we protect your information.
          </p>
        </div>
      </div>
    ),
  },
];
