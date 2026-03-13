"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import Link from "next/link";
import { socials } from "./footer-data";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navbarHeight = 80;
      const top =
        el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B2545] text-white relative overflow-hidden">
      {/* Decorative top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />

      {/* Subtle background orb */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#1E3A8A]/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" size="md" />
            <p className="text-gray-400 text-sm max-w-xs">
              Malaysia&apos;s first AI-powered KBAT predictor. Learn smarter,
              practice better, excel faster with AI that thinks like your
              examiner.
            </p>
          </div>

          {/* Platform links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm text-white tracking-wider uppercase mb-4 opacity-80">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-400 hover:text-[#38BDF8] transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-400 hover:text-[#38BDF8] transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-[#38BDF8] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-[#38BDF8] transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* For Tutors */}
          <div className="lg:col-span-2">
            <h4 className="text-sm text-white tracking-wider uppercase mb-4 opacity-80">
              Tutors
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/become-a-tutor"
                  className="text-gray-400 hover:text-[#38BDF8] transition-colors"
                >
                  Become a Tutor
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="lg:col-span-2">
            <h4 className="text-sm text-white tracking-wider uppercase mb-4 opacity-80">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-[#38BDF8] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-[#38BDF8] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm text-white tracking-wider uppercase mb-4 opacity-80">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-[#38BDF8] flex-shrink-0" />
                <span className="text-gray-400">support@neuralguru.my</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-[#38BDF8] flex-shrink-0" />
                <span className="text-gray-400">+60 3-1234 5678</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#38BDF8] flex-shrink-0" />
                <span className="text-gray-400">Kuala Lumpur, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; NeuralGuru 2026. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <button
                key={social.name}
                onClick={() =>
                  window.open(social.url, "_blank", "noopener,noreferrer")
                }
                className="text-gray-500 hover:text-[#38BDF8] transition-colors text-xs cursor-pointer"
              >
                {social.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
