import { motion } from "motion/react";
import { categories, FaqItemProps } from "../../faq-data";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CategoryProps = {
  activeCategory: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredFaqs: FaqItemProps[];
};

export function QuestionListSection({
  activeCategory,
  searchQuery,
  setSearchQuery,
  filteredFaqs,
}: CategoryProps) {
  return (
    <div className="lg:col-span-3">
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#0B2545] mb-6">
            {categories.find((c) => c.id === activeCategory)?.name}
          </h2>

          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, idx) => (
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
            <div className="text-center py-12">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-500">
                We couldn't find any questions matching "{searchQuery}". Try
                searching with different keywords.
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
  );
}
