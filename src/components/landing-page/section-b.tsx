import { BrainIcon, TargetIcon, UsersIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function SectionB() {
  return (
    <div>
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <p className="mb-4 font-md text-gray-900">Why Choose NeuralGuru?</p>
            <h2 className="text-xl font-md text-gray-600">
              Powered by advanced AI to transform your exam preparation
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-24">
            <Card className="shadow-none border-transparent transition-all duration-300 ease-in-out hover:border-2 hover:border-blue-200 hover:shadow-2xl">
              <CardContent>
                <div className="grid grid-cols-1 gap-8">
                  <BrainIcon
                  className="h-16 w-16 bg-linear-to-l from-blue-800 
                        to-indigo-400 border rounded-lg p-3" color="white"
                />
                <h3 className="font-medium text-semibold text-gray-800">AI KBAT Prediction</h3>
                <p className="font-light text-bold text-gray-600 pr-2">Advanced AI analyzes your test patterns to predict KBAT weaknesses before they become problems.</p>  
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-none border-transparent transition-all duration-300 ease-in-out hover:border-2 hover:border-blue-200 hover:shadow-2xl">
                <CardContent>
                <div className="grid grid-cols-1 gap-8">
                  <TargetIcon
                  className="h-16 w-16 bg-linear-to-l from-blue-800 
                        to-indigo-400 border rounded-lg p-3"
                        color="white"
                />
                <h3 className="font-medium text-semibold text-gray-800">Adaptive Practice & Instant Feedback</h3>
                <p className="font-light text-bold text-gray-600 pr-2">Practice with AI-generated questions that adapt to your learning pace with real-time feedback.</p>  
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-none border-transparent transition-all duration-300 ease-in-out hover:border-2 hover:border-blue-200 hover:shadow-2xl">
                <CardContent>
                <div className="grid grid-cols-1 gap-8">
                  <UsersIcon
                  className="h-16 w-16 bg-linear-to-l from-blue-800 
                        to-indigo-400 border rounded-lg p-3" color="white"
                />
                <h3 className="font-medium text-semibold text-gray-800">Smart Tutor Matching</h3>
                <p className="font-light text-bold text-gray-600 pr-2">Get matched with expert tutors specialized in your specific learning needs.</p>  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
