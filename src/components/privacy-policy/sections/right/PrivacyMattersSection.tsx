import { Shield } from "lucide-react";

export function PrivacyMattersSection() {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
        <Shield className="w-5 h-5 text-[#38BDF8]" />
      </div>
      <div>
        <h2 className="text-white mb-1 text-base">
          Your Privacy Matters to Us
        </h2>
        <p className="text-blue-200 text-sm leading-relaxed">
          NeuralGuru is committed to protecting your personal data in accordance
          with the Personal Data Protection Act 2010 (PDPA) of Malaysia. This
          policy outlines what data we collect, why we collect it, and how it is
          safeguarded.
        </p>
      </div>
    </div>
  );
}
