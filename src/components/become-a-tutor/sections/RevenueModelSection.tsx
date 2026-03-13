import { Card } from "@/components/ui/card";
import { Badge, DollarSign, Handshake, Clock } from "lucide-react";
import { motion } from "motion/react";

export function RevenueModelSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#1E3A8A]/10 text-[#1E3A8A] mb-4">
              Freelancer Revenue Model
            </Badge>
            <h2 className="text-[#0B2545] mb-6 text-2xl sm:text-3xl">
              Transparent Earnings, Fair Profit-Share
            </h2>
            <p className="text-gray-600 mb-8">
              We believe in transparency. As a freelancer tutor, you earn
              directly from student bookings. The organisation you register
              under receives a small, mutually agreed percentage — covering
              platform access, admin support, and compliance costs.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: DollarSign,
                  title: "You Set Your Rate",
                  desc: "Charge what you're worth. Set hourly rates based on your experience, subject expertise, and demand.",
                },
                {
                  icon: Handshake,
                  title: "Negotiate Your Share",
                  desc: "The profit-share percentage (typically 5–15%) is agreed between you and your registered organisation before onboarding. No hidden fees.",
                },
                {
                  icon: Clock,
                  title: "Get Paid Promptly",
                  desc: "Earnings are processed and disbursed on a regular schedule. Track everything transparently from your tutor dashboard.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A]/10 to-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <h4 className="text-[#0B2545] mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Visual earnings breakdown */}
            <Card className="p-6">
              <h3 className="text-[#0B2545] mb-6 text-center">
                Example Earnings Breakdown
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">
                      Hourly Rate (set by you)
                    </span>
                    <span className="text-[#0B2545]">RM80/hr</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">Sessions/week</span>
                    <span className="text-[#0B2545]">15 sessions</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">Monthly Gross</span>
                    <span className="text-[#0B2545]">RM4,800</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">
                        Organisation Share (10%)
                      </span>
                      <span className="text-sm text-gray-500">- RM480</span>
                    </div>
                  </div>
                  <div className="border-t-2 border-[#1E3A8A] pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[#0B2545]">Your Take-Home</span>
                      <span className="text-xl text-[#1E3A8A]">RM4,320/mo</span>
                    </div>
                  </div>
                </div>

                {/* Visual bar */}
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Your Earnings (90%)</span>
                    <span>Org Share (10%)</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-200 overflow-hidden flex">
                    <div className="w-[90%] bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-l-full" />
                    <div className="w-[10%] bg-orange-400 rounded-r-full" />
                  </div>
                </div>

                <p className="text-xs text-gray-400 text-center mt-4">
                  * This is an illustrative example. Actual rates, sessions, and
                  profit-share percentages vary based on individual agreements.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
