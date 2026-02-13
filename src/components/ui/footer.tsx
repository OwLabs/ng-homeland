'use client'

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import { Button } from './button'
import { Separator } from './separator'

interface FooterProps {
  onNavigate?: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0B2545] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="NeuralGuru" width={120} height={40} className="h-10 w-auto" />
            <p className="text-gray-300 text-sm">
              Malaysia&apos;s first AI-powered KBAT predictor. Learn smarter, practice better, excel faster.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="h-9 w-9 hover:text-[#38BDF8]">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-9 w-9 hover:text-[#38BDF8]">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-9 w-9 hover:text-[#38BDF8]">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-9 w-9 hover:text-[#38BDF8]">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-[#38BDF8] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#38BDF8] transition-colors">How It Works</a></li>
              <li>
                <button
                  onClick={() => onNavigate?.('pricing')}
                  className="hover:text-[#38BDF8] transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('become-tutor')}
                  className="hover:text-[#38BDF8] transition-colors text-left"
                >
                  Become a Tutor
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Help Center</a></li>
              <li>
                <button
                  onClick={() => onNavigate?.('faq')}
                  className="hover:text-[#38BDF8] transition-colors text-left"
                >
                  FAQs
                </button>
              </li>
              <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#38BDF8] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <span>support@neuralguru.my</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <span>+60 3-1234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Kuala Lumpur, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-gray-400 text-sm">
          <Separator className="mb-8 bg-gray-700" />
          <p>© NeuralGuru {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
