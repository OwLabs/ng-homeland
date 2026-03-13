"use client";

import { useState } from "react";

import { HeaderSection, PricingCardsSection } from "./sections";
import ComparisonTableSection from "./sections/ComparisonTableSection";

export function PricingPage() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <HeaderSection />

      {/* Pricing Cards */}
      <PricingCardsSection />

      {/* Compare Plans */}
      <ComparisonTableSection
        showComparison={showComparison}
        setShowComparison={setShowComparison}
      />
    </div>
  );
}
