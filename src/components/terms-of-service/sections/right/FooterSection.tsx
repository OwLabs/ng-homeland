import { Gavel } from "lucide-react";
import { motion } from "motion/react";

export function FooterSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.65 }}
      className="bg-[#FAF7F2] border border-gray-200 rounded-2xl p-6 text-center"
    >
      <Gavel className="w-8 h-8 text-[#3B82F6] mx-auto mb-3" />
      <p className="text-gray-700 text-sm mb-1">
        These Terms of Service are governed by the laws of Malaysia.
      </p>
      <p className="text-gray-500 text-xs">
        For legal inquiries, contact us at{" "}
        <a
          href="mailto:legal@neuralguru.my"
          className="text-[#3B82F6] hover:underline"
        >
          legal@neuralguru.my
        </a>
      </p>
    </motion.div>
  );
}
