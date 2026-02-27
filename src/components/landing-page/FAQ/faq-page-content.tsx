"use client"

import { useState, useMemo } from "react"
import { SectionA } from "./faq-section-a"
import { SectionB } from "./faq-section-b"
import { SectionC } from "./faq-section-c"
import { faqs } from "./faq-data"

export function FAQPageContent() {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredFaqs = useMemo(
        () =>
            faqs.filter((faq) => {
                const matchesSearch =
                    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
                const matchesCategory =
                    activeCategory === "all" || faq.category === activeCategory
                return matchesSearch && matchesCategory
            }),
        [searchQuery, activeCategory]
    )

    return (
        <div className="min-h-screen bg-[#FAF7F2]">
            <SectionA searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <SectionB
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filteredFaqs={filteredFaqs}
            />
            <SectionC />
        </div>
    )
}
