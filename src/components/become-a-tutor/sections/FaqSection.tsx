import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { faqs } from "../tutor-data";

interface FaqProps {
  openFaq: number | null;
  setOpenFaq: (openFaq: number | null) => void;
}

export function FaqSection({ openFaq, setOpenFaq }: FaqProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#0B2545] mb-4 text-2xl sm:text-3xl">
            Common Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about becoming a tutor on NeuralGuru.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === idx ? "shadow-md ring-1 ring-[#3B82F6]/20" : ""
                }`}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-[#0B2545] pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === idx ? "rotate-90" : ""}`}
                    />
                  </motion.div>
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
