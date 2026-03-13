import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { comparisonFeatures } from "../pricing-data";

type StateProps = {
  showComparison: boolean;
  setShowComparison: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ComparisonTableSection({
  showComparison,
  setShowComparison,
}: StateProps) {
  return (
    <div>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <button
              className="inline-flex items-center gap-2 text-[#0B2545] hover:text-[#3B82F6] transition-colors"
              onClick={() => setShowComparison((prev) => !prev)}
            >
              <h2 className="text-[#0B2545]">Compare Plans</h2>
              {showComparison ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>
          </motion.div>

          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-[#0B2545]">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-[#0B2545]">
                      Free
                    </th>
                    <th className="px-6 py-4 text-center text-[#0B2545]">
                      Premium
                    </th>
                    <th className="px-6 py-4 text-center text-[#0B2545]">
                      Tutor+
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-gray-700">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.free}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.premium}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">
                        {row.tutorPlus}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
