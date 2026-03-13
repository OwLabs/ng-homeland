import { ImageWithFallback } from "@/components/fallback-image/ImageWithFallback";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";

interface BecomeTutorPageProps {
  navigateToPricingPage: () => void;
}

export function TutorCommunitySection({
  navigateToPricingPage,
}: BecomeTutorPageProps) {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white px-4 py-1.5 mb-6">
            Join Our Tutor Community
          </Badge>
          <h1 className="text-[#0B2545] mb-4 text-3xl sm:text-4xl lg:text-5xl">
            Empower Malaysian Students with AI-Enhanced Teaching
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Whether you're a freelance educator or part of a tuition centre,
            NeuralGuru gives you the AI tools to detect KBAT weaknesses and help
            students excel in MOE-format exams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white hover:opacity-90"
              onClick={() => {
                const el = document.getElementById("choose-path");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#0B2545] text-[#0B2545]"
              onClick={navigateToPricingPage}
            >
              View Pricing
            </Button>
          </div>

          {/* Quick stats */}
          <div className="flex gap-8 mt-10">
            {[
              { value: "2,500+", label: "Active Tutors" },
              { value: "150+", label: "Organisations" },
              { value: "4.8/5", label: "Avg Rating" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="text-2xl text-[#0B2545]">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758685848174-e061c6486651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXRvciUyMHRlYWNoZXIlMjBvbmxpbmUlMjBlZHVjYXRpb258ZW58MXx8fHwxNzcwNjM3MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tutor teaching online"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/40 to-transparent" />
          </div>
          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-[#0B2545]">Top Rated Tutors</div>
              <div className="text-xs text-gray-500">
                Earn up to RM5,000+/month
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
