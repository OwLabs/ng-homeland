import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function PricingCtaSection() {
  return (
    <div>
      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-white mb-4">
              Start your AI-powered learning journey today
            </h2>
            <p className="text-blue-100 text-xl mb-8">
              Join thousands of Malaysian students improving their KBAT scores
              with NeuralGuru
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/60 text-white bg-transparent hover:bg-white/10"
                onClick={() => {}}
              >
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
