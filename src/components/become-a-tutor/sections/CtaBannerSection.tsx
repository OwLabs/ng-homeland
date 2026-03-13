import { Button } from "@/components/ui/button";
import { Laptop, Building2 } from "lucide-react";
import { motion } from "motion/react";

export function CtaBannerSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white mb-4 text-2xl sm:text-3xl">
            Ready to Make a Difference?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join NeuralGuru as a tutor and help Malaysian students unlock their
            full KBAT potential with AI-powered learning tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#0B2545] hover:bg-gray-100"
              onClick={() => {}}
            >
              Start as Freelancer
              <Laptop className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-[#0B2545] hover:bg-gray-100"
              onClick={() => {}}
            >
              Register as Staff
              <Building2 className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            Both paths include full AI tools access. Choose what works for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
