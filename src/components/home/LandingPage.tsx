"use client";

import { motion } from "motion/react";
import {
  Brain,
  ArrowRight,
  CheckCircle,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../fallback-image/ImageWithFallback";
import { NeuralNetworkBg } from "../NeuralNetworkBackground";
import { useRouter } from "next/navigation";
import {
  BuiltForEveryoneSection,
  CtaSection,
  FeaturesSection,
  HowItWorksSection,
  StatsSection,
  TestimonySection,
} from "./sections";

export function LandingPage() {
  const navigateToAnotherDomain = () => {
    window.location.href = "http://google.com";
  };

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Neural network background */}
        <NeuralNetworkBg variant="light" />

        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#3B82F6]/8 via-[#1E3A8A]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#3B82F6]/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full text-[#1E3A8A] text-sm mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Malaysia's First AI-Powered KBAT Predictor
              </motion.div>

              <h1
                className="text-[#0B2545] mb-6 text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight"
                style={{ lineHeight: "1.15" }}
              >
                Learn Smarter.{" "}
                <span className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent">
                  Score Higher.
                </span>
              </h1>

              <p className="text-gray-600 mb-10 text-lg max-w-lg">
                AI that thinks like your examiner — predicts your weaknesses,
                adapts to your pace, and guides you to exam success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#0B2545] hover:to-[#1E3A8A] text-white h-13 px-8 shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
                  onClick={() => navigateToAnotherDomain()}
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-[#0B2545] hover:bg-[#0B2545] hover:text-white hover:border-[#0B2545] h-13 px-8 transition-all"
                  onClick={() => router.push("/pricing")}
                >
                  View Pricing
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>MOE-aligned content</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#1E3A8A]/20 to-[#3B82F6]/20 rounded-[2rem] blur-2xl" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZGlnaXRhbCUyMGxlYXJuaW5nJTIwZGF0YWxldCUyMGZ1dHR1cmlzdGljJTIwY29udGVudCUyMGZvciUyMHR1dG9ycyxlbnwxfHx8fDE3NzMwNjA0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Student learning with AI"
                  className="relative w-full h-[400px] lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 lg:-left-8 bottom-16 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Avg. Improvement</p>
                    <p className="text-lg text-[#0B2545]">+32%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -right-4 lg:-right-8 top-16 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">AI Questions</p>
                    <p className="text-lg text-[#0B2545]">50K+</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By / Stats Strip */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Who It's For Section */}
      <BuiltForEveryoneSection
        navigateToAnotherDomain={navigateToAnotherDomain}
      />

      {/* Testimonials Section */}
      <TestimonySection />

      {/* Final CTA Section */}
      <CtaSection navigateToAnotherDomain={navigateToAnotherDomain} />
    </div>
  );
}
