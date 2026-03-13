import { ImageWithFallback } from "@/components/fallback-image/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Laptop,
  DollarSign,
  CheckCircle,
  ChevronRight,
  Handshake,
} from "lucide-react";
import { motion } from "motion/react";
import { freelancerPerks, staffPerks } from "../tutor-data";
import { IndividualPath } from "../types";

interface ChoosePathProps {
  selectedPath: IndividualPath;
  setSelectedPath: (path: IndividualPath) => void;
}

export function ChoosePathSection({
  selectedPath,
  setSelectedPath,
}: ChoosePathProps) {
  return (
    <section id="choose-path" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-[#0B2545] mb-4 text-2xl sm:text-3xl">
            Choose Your Tutor Path
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            NeuralGuru supports two tutor models — both require registration
            under an organisation to ensure quality, accountability, and
            platform compliance.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Organisation requirement callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-[#1E3A8A]/5 to-[#3B82F6]/5 border border-[#3B82F6]/20 rounded-xl p-5 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-[#0B2545] mb-1">
                Organisation Registration is Required
              </h4>
              <p className="text-gray-600 text-sm">
                Every tutor on NeuralGuru must be registered under an
                organisation. This ensures a structured ecosystem with proper
                accountability, quality assurance, and regulatory compliance.
                Freelancers who don't belong to an existing organisation can
                register under a NeuralGuru partner org or set up a
                sole-proprietor entity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Path Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Freelancer Path */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className={`p-0 overflow-hidden cursor-pointer transition-all duration-300 h-full ${
                selectedPath === "freelancer"
                  ? "ring-2 ring-[#3B82F6] shadow-xl shadow-[#3B82F6]/10"
                  : "hover:shadow-xl"
              }`}
              onClick={() =>
                setSelectedPath(
                  selectedPath === "freelancer" ? null : "freelancer",
                )
              }
            >
              {/* Card Header */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1743796055672-438d6aa0b05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2VyJTIwd29ya2luZyUyMGxhcHRvcCUyMGNvZmZlZXxlbnwxfHx8fDE3NzA2MTI3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Freelancer tutor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-[#0B2545]/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-cyan-400 flex items-center justify-center">
                      <Laptop className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white">Freelancer Tutor</h3>
                      <p className="text-blue-200 text-sm">
                        Independent & Flexible
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-5">
                  Perfect for part-time tutors who want full control over their
                  schedule and rates. You register under an organisation but
                  operate independently — a small, negotiable profit-share goes
                  to the organisation for platform and admin support.
                </p>

                {/* Revenue Model Highlight */}
                <div className="bg-blue-50 rounded-lg p-4 mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-[#1E3A8A]" />
                    <span className="text-[#0B2545] text-sm">
                      Revenue Model
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You keep the{" "}
                    <span className="text-[#1E3A8A]">
                      majority of your earnings
                    </span>
                    . A small percentage (typically 5–15%) is allocated to your
                    registered organisation, negotiated directly between you and
                    the org before onboarding.
                  </p>
                </div>

                {/* Perks List */}
                <ul className="space-y-2.5">
                  {freelancerPerks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        {perk.perkPoint}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full mt-6 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white hover:opacity-90"
                  size="lg"
                  onClick={() => {}}
                >
                  Register as Freelancer
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Staff Path */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className={`p-0 overflow-hidden cursor-pointer transition-all duration-300 h-full ${
                selectedPath === "staff"
                  ? "ring-2 ring-orange-500 shadow-xl shadow-orange-500/10"
                  : "hover:shadow-xl"
              }`}
              onClick={() =>
                setSelectedPath(selectedPath === "staff" ? null : "staff")
              }
            >
              {/* Card Header */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwb2ZmaWNlJTIwY29sbGFib3JhdGlvbiUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzcwNjM3MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Staff tutor organisation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-[#0B2545]/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white">Staff Tutor</h3>
                      <p className="text-orange-200 text-sm">
                        Organisation-Backed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-5">
                  Ideal for tutors employed by a tuition centre, school, or
                  learning organisation. Your organisation handles the
                  NeuralGuru subscription — you focus entirely on teaching with
                  zero platform fees on your end.
                </p>

                {/* Subscription Model Highlight */}
                <div className="bg-orange-50 rounded-lg p-4 mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Handshake className="w-5 h-5 text-orange-600" />
                    <span className="text-[#0B2545] text-sm">
                      Subscription Model
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="text-orange-600">Zero personal fees</span>{" "}
                    — your organisation subscribes to NeuralGuru and covers all
                    platform costs. You get full access to all teaching tools at
                    no cost to you.
                  </p>
                </div>

                {/* Perks List */}
                <ul className="space-y-2.5">
                  {staffPerks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        {perk.perkPoint}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90"
                  size="lg"
                  onClick={() => {}}
                >
                  Register as Staff
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Side-by-side comparison summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-[#0B2545] to-[#1E3A8A] px-6 py-4">
              <h3 className="text-white text-center">Quick Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm text-[#0B2545]">
                      Aspect
                    </th>
                    <th className="px-6 py-3 text-center text-sm text-[#1E3A8A]">
                      <div className="flex items-center justify-center gap-2">
                        <Laptop className="w-4 h-4" />
                        Freelancer
                      </div>
                    </th>
                    <th className="px-6 py-3 text-center text-sm text-orange-600">
                      <div className="flex items-center justify-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Staff
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      aspect: "Organisation Registration",
                      freelancer: "Required (partner org or sole-proprietor)",
                      staff: "Required (employed by org)",
                    },
                    {
                      aspect: "Platform Subscription Fee",
                      freelancer: "Covered by organisation",
                      staff: "Covered by organisation",
                    },
                    {
                      aspect: "Revenue Model",
                      freelancer:
                        "Keep earnings minus negotiable org share (5–15%)",
                      staff: "Salary/compensation set by organisation",
                    },
                    {
                      aspect: "Schedule Flexibility",
                      freelancer: "Full control",
                      staff: "Organisation-managed",
                    },
                    {
                      aspect: "Rate Setting",
                      freelancer: "You set your own rates",
                      staff: "Organisation sets rates",
                    },
                    {
                      aspect: "Student Allocation",
                      freelancer: "Students book you directly",
                      staff: "Organisation assigns students",
                    },
                    {
                      aspect: "AI Tools Access",
                      freelancer: "Full access",
                      staff: "Full access",
                    },
                    {
                      aspect: "Best For",
                      freelancer: "Part-time / independent tutors",
                      staff: "Full-time tutors at tuition centres",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-3 text-sm text-gray-700">
                        {row.aspect}
                      </td>
                      <td className="px-6 py-3 text-sm text-center text-gray-600">
                        {row.freelancer}
                      </td>
                      <td className="px-6 py-3 text-sm text-center text-gray-600">
                        {row.staff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
