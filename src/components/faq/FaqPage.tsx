"use client";

import { useState } from "react";
import { faqs } from "./faq-data";
import { FaqHeroSection } from "./FaqHeroSection";
import { CategorySection } from "./sections/left";
import { QuestionListSection } from "./sections/right";
import { FaqContactSection } from "./FaqContactSection";

export function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <FaqHeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar/Section - Categories */}
            <CategorySection
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />

            {/* Right Section - Questions List */}
            <QuestionListSection
              activeCategory={activeCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filteredFaqs={filteredFaqs}
            />
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <FaqContactSection />
    </div>
  );
}
