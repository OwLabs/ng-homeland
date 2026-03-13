import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import { benefits } from "../tutor-data";

export function WhyTeachSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#0B2545] mb-4 text-2xl sm:text-3xl">
            Why Teach with NeuralGuru?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access cutting-edge AI tools, reach more students, and grow your
            tutoring career on Malaysia's leading education platform.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-[#3B82F6]/20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A]/10 to-[#3B82F6]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <h3 className="text-[#0B2545] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
