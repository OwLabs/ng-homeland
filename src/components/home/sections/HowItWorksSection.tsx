import { motion } from "motion/react";
import { howItWorksSteps } from "../home-data";

export function HowItWorksSection() {
  return (
    <div>
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm mb-4">
                Simple Process
              </span>
              <h2 className="text-[#0B2545] mb-4 text-3xl md:text-4xl">
                How NeuralGuru <span className="text-[#3B82F6]">Works</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Four simple steps from struggling to excelling
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mt-6" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#1E3A8A]/20 via-[#3B82F6]/30 to-[#1E3A8A]/20" />

            {howItWorksSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/20 rotate-3 hover:rotate-0 transition-transform duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <span className="inline-block text-xs text-[#3B82F6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-3">
                  Step {item.step}
                </span>
                <h3 className="text-[#0B2545] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
