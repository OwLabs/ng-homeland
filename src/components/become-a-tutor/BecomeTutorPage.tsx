"use client";

import { useState } from "react";
import {
  ChoosePathSection,
  CtaBannerSection,
  FaqSection,
  HowItWorkSection,
  RevenueModelSection,
  TutorCommunitySection,
  WhyTeachSection,
} from "./sections";
import { useRouter } from "next/navigation";
import { IndividualPath } from "./types";

export function BecomeTutorPage() {
  const router = useRouter();

  const navigateToPricingPage = () => {
    router.push("/pricing");
  };

  const [selectedPath, setSelectedPath] = useState<IndividualPath>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545]/5 via-transparent to-[#3B82F6]/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#3B82F6]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1E3A8A]/10 to-transparent rounded-full blur-3xl" />

        {/* Tutor Community Section */}
        <TutorCommunitySection navigateToPricingPage={navigateToPricingPage} />
      </section>

      {/* Why Teach with NeuralGuru */}
      <WhyTeachSection />

      {/* Choose Your Path */}
      <ChoosePathSection
        selectedPath={selectedPath}
        setSelectedPath={setSelectedPath}
      />

      {/* How It Works */}
      <HowItWorkSection />

      {/* Revenue Model Deep Dive (Freelancer Focus) */}
      <RevenueModelSection />

      {/* FAQ Section */}
      <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />

      {/* CTA Banner */}
      <CtaBannerSection />
    </div>
  );
}
