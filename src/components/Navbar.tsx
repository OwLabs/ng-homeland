"use client";

import { useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Smooth-scroll to a section element, accounting for sticky navbar height.
   */
  const smoothScrollTo = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navbarHeight = 80;
      const top =
        el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  /**
   * Navigate to a section on the home page.
   * - If already on "/", smooth-scroll directly.
   * - If on another route, navigate to "/" first, wait for the
   *   target element to appear in the DOM, then smooth-scroll to it.
   */
  const navigateToSection = useCallback(
    (sectionId: string) => {
      setMobileMenuOpen(false);

      if (pathname === "/") {
        smoothScrollTo(sectionId);
      } else {
        // Navigate to home first (without hash — so we control the scroll)
        router.push("/");

        // Poll until the target section exists in the DOM, then scroll
        const poll = setInterval(() => {
          if (document.getElementById(sectionId)) {
            clearInterval(poll);
            // Brief delay so the page finishes layout, then animate
            setTimeout(() => smoothScrollTo(sectionId), 250);
          }
        }, 50);

        // Safety: stop polling after 3 seconds
        setTimeout(() => clearInterval(poll), 3000);
      }
    },
    [pathname, router, smoothScrollTo],
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigateToSection("features")}
              className="text-[#0B2545] hover:text-[#3B82F6] transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => navigateToSection("how-it-works")}
              className="text-[#0B2545] hover:text-[#3B82F6] transition-colors cursor-pointer"
            >
              How It Works
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0B2545]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 space-y-1">
            <button
              onClick={() => navigateToSection("features")}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-[#0B2545] hover:bg-gray-50 hover:text-[#3B82F6] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => navigateToSection("how-it-works")}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-[#0B2545] hover:bg-gray-50 hover:text-[#3B82F6] transition-colors"
            >
              How It Works
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
