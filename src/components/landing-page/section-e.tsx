import { LucideArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function SectionE() {
  return (
    <div>
      <section className="w-full py-20 px-8">
        <div className="grid grid-cols-1 gap-4 text-center">
          <p className="mb-4 font-md text-gray-900">
            Ready to Transform Your Learning?
          </p>
          <h2 className="text-xl font-md text-gray-600">
            Join thousands of Malaysian students who are already learning
            smarter with NeuralGuru
          </h2>
          <div className="mt-6 flex w-full flex-col gap-4 sm:flex-row sm:justify-center items-center">
            <Button
            size={"lg"}
              variant={"default"}
              className="bg-linear-to-r from-[#0B2545] to-[#1E3A8A] text-white w-full sm:w-auto"
            >
              Start As Student
              <LucideArrowRight />
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="w-full sm:w-auto border border-gray-800"
            >
              Start As Tutor
              <LucideArrowRight />
            </Button>
          </div>
          <div>
              <a href="#" className="inline-flex items-center gap-2">
                <p className="text-gray-600 hover:text-gray-900 text-md">Admin Dashboard</p>
                <LucideArrowRight className="h-4 w-4" color="gray" />
              </a>
            </div>
        </div>
      </section>
    </div>
  );
}
