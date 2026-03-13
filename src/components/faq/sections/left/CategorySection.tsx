import { ChevronRight } from "lucide-react";
import { categories } from "../../faq-data";

type CategoryProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export function CategorySection({
  activeCategory,
  setActiveCategory,
}: CategoryProps) {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-2">
        <h3 className="font-semibold text-[#0B2545] mb-4 px-4">Categories</h3>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-white text-[#3B82F6] shadow-md border border-blue-100"
                : "text-gray-600 hover:bg-white/50 hover:text-[#0B2545]"
            }`}
          >
            <cat.icon
              className={`w-5 h-5 ${activeCategory === cat.id ? "text-[#3B82F6]" : "text-gray-400"}`}
            />
            {cat.name}
            {activeCategory === cat.id && (
              <ChevronRight className="w-4 h-4 ml-auto" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
