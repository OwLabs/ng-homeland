export default function SectionC() {
  return (
    <div>
      <section className="w-full py-24 px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="mb-4 font-md text-gray-900">How NeuralGuru Works</p>
            <h2 className="text-xl font-md text-gray-600">
              Four simple steps to smarter learning
            </h2>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-4">
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-blue-800 to-indigo-500 text-2xl font-semibold text-white shadow-md">
                1
              </div>
              <div className="absolute top-10 left-1/8 hidden h-0.5 w-full translate-x-1/2 bg-linear-to-r from-blue-800 to-transparent md:block" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Upload Test Results</h3>
              <p className="mt-2 max-w-xs text-gray-600">Tutor add your Test 1, Test 2, Mid-Year, or Final exam scores</p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-blue-800 to-indigo-500 text-2xl font-semibold text-white shadow-md">
                2
              </div>
              <div className="absolute top-10 left-1/8 hidden h-0.5 w-full translate-x-1/2 bg-linear-to-r from-blue-800 to-white-400 md:block" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">AI Analyzes Patterns</h3>
              <p className="mt-2 max-w-xs text-gray-600">Our AI detects KBAT weaknesses and learning patterns</p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-blue-800 to-indigo-500 text-2xl font-semibold text-white shadow-md">
                3
              </div>
              <div className="absolute top-10 left-1/8 hidden h-0.5 w-full translate-x-1/2 bg-linear-to-r from-blue-800 to-white-400 md:block" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Practice Smart Questions</h3>
              <p className="mt-2 max-w-xs text-gray-600">Get adaptive KBAT questions with different contexts</p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-blue-800 to-indigo-500 text-2xl font-semibold text-white shadow-md">
                4
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Track & Improve</h3>
              <p className="mt-2 max-w-xs text-gray-600">Monitor progress and book tutors when needed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
