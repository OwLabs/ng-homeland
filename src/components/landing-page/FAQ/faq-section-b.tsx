"use client"

import { motion } from "motion/react"
import { ChevronRight, Search } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { categories, type FAQItem, type FAQCategory } from "./faq-data"

interface SectionBProps {
    activeCategory: string
    setActiveCategory: (id: string) => void
    searchQuery: string
    setSearchQuery: (query: string) => void
    filteredFaqs: FAQItem[]
}

export function SectionB({
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredFaqs,
}: SectionBProps) {
    const activeCategoryName =
        categories.find((c) => c.id === activeCategory)?.name ?? "All Questions"

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-4 gap-8">

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-2">
                            <h3 className="font-semibold text-[#0B2545] mb-4 px-4">
                                Categories
                            </h3>

                            {categories.map((cat: FAQCategory) => {
                                const isActive = activeCategory === cat.id
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
                                            ? "bg-white text-[#3B82F6] shadow-md border border-blue-100"
                                            : "text-gray-600 hover:bg-white/50 hover:text-[#0B2545]"
                                            }`}
                                    >
                                        <cat.icon
                                            className={`w-5 h-5 ${isActive ? "text-[#3B82F6]" : "text-gray-400"
                                                }`}
                                        />
                                        {cat.name}
                                        {isActive && (
                                            <ChevronRight className="w-4 h-4 ml-auto" />
                                        )}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-[#0B2545] mb-6">
                                    {activeCategoryName}
                                </h2>

                                {filteredFaqs.length > 0 ? (
                                    <Accordion type="single" collapsible className="space-y-4">
                                        {filteredFaqs.map((faq) => (
                                            <AccordionItem
                                                key={faq.id}
                                                value={faq.id}
                                                className="border border-gray-200 rounded-lg px-6 bg-gray-50/50 hover:bg-white transition-colors"
                                            >
                                                <AccordionTrigger className="text-[#0B2545] hover:text-[#3B82F6] hover:no-underline font-medium text-left">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                ) : (
                                    /* ── Empty / No-results state ── */
                                    <div className="text-center py-12">
                                        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Search className="w-8 h-8 text-gray-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            No results found
                                        </h3>
                                        <p className="text-gray-500">
                                            We couldn&apos;t find any questions matching &ldquo;
                                            {searchQuery}&rdquo;. Try searching with different
                                            keywords.
                                        </p>
                                        <Button
                                            variant="link"
                                            onClick={() => setSearchQuery("")}
                                            className="text-[#3B82F6] mt-2"
                                        >
                                            Clear search
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
