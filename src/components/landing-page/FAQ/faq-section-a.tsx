"use client"

import { motion } from "motion/react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SectionAProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
}

export function SectionA({ searchQuery, setSearchQuery }: SectionAProps) {
    return (
        <section className="relative overflow-hidden bg-[#0B2545] text-white py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545] via-[#1E3A8A] to-[#3B82F6] opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        How can we help you?
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                        Find answers to common questions about NeuralGuru, our AI
                        technology, and subscription plans.
                    </p>

                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <Input
                            type="text"
                            placeholder="Search for answers..."
                            className="w-full pl-12 py-6 text-lg bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus-visible:ring-offset-0 focus-visible:ring-[#3B82F6] rounded-xl backdrop-blur-sm shadow-lg transition-all focus:bg-white/20"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}