import { Logo } from "@/components/Logo";
import { NeuralNetworkBg } from "@/components/NeuralNetworkBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

type navigateProps = {
  navigateToAnotherDomain: () => void;
};

export function CtaSection(props: navigateProps) {
  return (
    <div>
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <NeuralNetworkBg variant="light" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1E3A8A]/10 to-[#3B82F6]/10 rounded-full blur-xl" />
              <Logo size="lg" className="relative mx-auto" />
            </div>
            <h2 className="text-[#0B2545] mb-4 text-3xl md:text-4xl">
              Ready to Learn Smarter?
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-xl mx-auto">
              Join thousands of Malaysian students who are already excelling
              with AI-powered learning. Start free — no credit card needed.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#0B2545] hover:to-[#1E3A8A] text-white h-14 px-12 shadow-xl shadow-blue-500/25 transition-all hover:shadow-2xl hover:shadow-blue-500/30"
              onClick={props.navigateToAnotherDomain}
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-xs text-gray-400 mt-4">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
