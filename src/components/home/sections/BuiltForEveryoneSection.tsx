import { NeuralNetworkBg } from "@/components/NeuralNetworkBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

type navigateProps = {
  navigateToAnotherDomain: () => void;
};

export function BuiltForEveryoneSection(props: navigateProps) {
  return (
    <div>
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0B2545] via-[#0f2d52] to-[#1E3A8A] text-white relative overflow-hidden">
        {/* Neural network background */}
        <NeuralNetworkBg variant="dark" />

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-[#3B82F6] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#38BDF8] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white rounded-full text-sm mb-4">
                Built for Everyone
              </span>
              <h2 className="text-white mb-4 text-3xl md:text-4xl">
                One Platform, Three Experiences
              </h2>
              <p className="text-blue-200 max-w-2xl mx-auto text-lg">
                Whether you're a student, tutor, or administrator — NeuralGuru
                adapts to your needs
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-white/40 to-[#38BDF8] mx-auto rounded-full mt-6" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Students",
                description:
                  "Personalized AI practice, diagnostic reports, KBAT predictions, and smart tutor booking — all in one dashboard.",
                features: [
                  "AI-powered practice mode",
                  "Diagnostic reports",
                  "Tutor booking",
                  "Progress tracking",
                ],
                gradient: "from-[#3B82F6] to-[#60A5FA]",
              },
              {
                icon: BookOpen,
                title: "Tutors",
                description:
                  "Upload test results, get AI insights about your students, manage bookings, and track earnings effortlessly.",
                features: [
                  "Student analytics",
                  "AI insights",
                  "Booking management",
                  "Earnings dashboard",
                ],
                gradient: "from-emerald-500 to-teal-400",
              },
              {
                icon: Shield,
                title: "Administrators",
                description:
                  "Full platform oversight with user management, AI analytics, system reports, and comprehensive monitoring.",
                features: [
                  "User management",
                  "AI analytics",
                  "System reports",
                  "Platform monitoring",
                ],
                gradient: "from-orange-500 to-amber-400",
              },
            ].map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="p-7 h-full bg-white/[0.06] backdrop-blur-sm border-white/10 hover:bg-white/[0.1] transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-5`}
                  >
                    <role.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white mb-2">{role.title}</h3>
                  <p className="text-blue-200 text-sm mb-5">
                    {role.description}
                  </p>
                  <ul className="space-y-2">
                    {role.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-blue-300"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-white text-[#0B2545] hover:bg-gray-100 h-13 px-10 shadow-lg"
              onClick={props.navigateToAnotherDomain}
            >
              Get Started — It's Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
