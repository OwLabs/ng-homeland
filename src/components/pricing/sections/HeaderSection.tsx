import { motion } from "motion/react";

export function HeaderSection() {
  return (
    <div>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#1E3A8A] rounded-full text-sm mb-4">
              Pricing Plans
            </span>
            <h1 className="text-[#0B2545] mb-4">
              Flexible Plans for Every Student
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Start free, then unlock full AI analysis and personalized tutor
              access
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
