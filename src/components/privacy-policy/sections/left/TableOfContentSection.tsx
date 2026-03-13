import { FileEdit, Mail, MapPin, Phone } from "lucide-react";
import { tableOfContents } from "../../policy-data";

type TableOfContentProps = {
  scrollToSection: (id: string) => void;
};

export function TableOfContentSection({
  scrollToSection,
}: TableOfContentProps) {
  return (
    <div className="sticky top-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-[#0B2545] mb-4 text-sm flex items-center gap-2">
        <FileEdit className="w-4 h-4 text-[#3B82F6]" />
        Table of Contents
      </h2>
      <nav className="space-y-1">
        {tableOfContents.map((item, i) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="w-full text-left flex items-center gap-2 text-gray-600 hover:text-[#3B82F6] text-xs py-1.5 px-2 rounded-lg hover:bg-blue-50 transition-colors group"
          >
            <span className="w-5 h-5 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center text-gray-400 group-hover:text-[#3B82F6] text-xs flex-shrink-0 transition-colors">
              {i + 1}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Contact block */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-gray-500 text-xs mb-3">Questions? Contact us:</p>
        <div className="space-y-2">
          <a
            href="mailto:privacy@neuralguru.my"
            className="flex items-center gap-2 text-xs text-[#3B82F6] hover:underline"
          >
            <Mail className="w-3.5 h-3.5" />
            privacy@neuralguru.my
          </a>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Phone className="w-3.5 h-3.5" />
            +60 3-1234 5678
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin className="w-3.5 h-3.5" />
            Kuala Lumpur, Malaysia
          </div>
        </div>
      </div>
    </div>
  );
}
