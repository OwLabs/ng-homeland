"use client";

import { motion } from "motion/react";
import { Shield, RefreshCw } from "lucide-react";
import { sections } from "./policy-data";
import { TableOfContentSection } from "./sections/left";
import { FooterSection, PrivacyMattersSection } from "./sections/right";

export function PrivacyPolicyPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0B2545] via-[#1E3A8A] to-[#3B82F6] py-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-white text-sm">PDPA Compliant</span>
            </div>
            <h1 className="text-white mb-4">Privacy Policy</h1>
            <p className="text-blue-200 text-sm max-w-2xl mx-auto">
              Compliant with the Personal Data Protection Act 2010 ("PDPA")
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-blue-300 text-xs">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Last Updated: 28 February 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Left Side Table of Contents — sticky sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Table of Content */}
            <TableOfContentSection scrollToSection={scrollToSection} />
          </motion.aside>

          {/* Right Side Sections */}
          <div className="lg:col-span-3 space-y-6">
            {/* Intro banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-r from-[#0B2545] to-[#1E3A8A] rounded-2xl p-6 text-white"
            >
              {/* Privacy Matters */}
              <PrivacyMattersSection />
            </motion.div>

            {/* Individual sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-8"
                >
                  {/* Section header */}
                  <div
                    className={`bg-gradient-to-r ${section.color} p-4 flex items-center gap-3`}
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/60 text-xs">
                        0{index + 1}
                      </span>
                      <h3 className="text-white text-sm">{section.title}</h3>
                    </div>
                  </div>
                  {/* Section body */}
                  <div className="p-6">{section.content}</div>
                </motion.div>
              );
            })}

            {/* Footer note */}
            <FooterSection />
          </div>
        </div>
      </section>
    </div>
  );
}
