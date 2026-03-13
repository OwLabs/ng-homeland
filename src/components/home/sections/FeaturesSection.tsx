import { Card } from "../../ui/card";
import { motion } from "motion/react";
import { features } from "../home-data";

export function FeaturesSection() {
  return (
    <div>
      <section id="features" className="py-20 md:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#1E3A8A] rounded-full text-sm mb-4">
                Platform Features
              </span>
              <h2 className="text-[#0B2545] mb-4 text-3xl md:text-4xl">
                Everything You Need to{" "}
                <span className="text-[#3B82F6]">Excel</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Powered by advanced AI specifically trained on Malaysian exam
                patterns
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] mx-auto rounded-full mt-6" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="p-7 h-full hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#3B82F6]/20 group bg-white">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#0B2545] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
