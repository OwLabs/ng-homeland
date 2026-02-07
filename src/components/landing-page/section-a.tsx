"use client";

import { ImageUpIcon, LucideArrowRight, LucideCheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";

export default function SectionA() {
  return (
    <div>
      <section className="bg-gray-100 ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 py-20 md:grid-cols-2">
          <div className="space-y-6">

            <div className="mt-2 flex flex-col-2 gap-2">
               <ImageUpIcon className="h-8 w-8"/> 
               <ImageUpIcon className="h-8 w-8"/>
            </div>
            
            <p className="text-md font-light">
              Learn Smarter with NeuralGuru — Malaysia&apos;s First AI-Powered KBAT
              Predictor
            </p>
            <p className="text-lg font-md">
              Understand your weaknesses. Practice smarter questions. Learn with
              AI that thinks like your examiner.
            </p>
            <div className=" flex flex-wrap flex-col gap-4 sm:flex-row">
              <Button
                variant={"default"}
                className="bg-linear-to-r from-blue-800 
                        to-indigo-400
                        text-white hover:from-blue-700
                        hover:to-indigo-700 
                         sm:w-auto w-full"
              >
                Start Free Trial (Student) <LucideArrowRight />
              </Button>
              <Button
                variant={"outline"}
                className="border border-gray-800 sm:w-auto w-full"
              >
                Tutor Login
              </Button>
            </div>
            <div>
              <a href="#" className="inline-flex items-center gap-2">
                <p className="text-gray-600 hover:text-gray-900">Admin Access</p>
                <LucideArrowRight className="h-4 w-4" color="gray" />
              </a>
            </div>
            <div className="inline-flex items-center gap-4">
                <div className="inline-flex items-center gap-2">
                    <LucideCheckCircle color="green"/> <p>No Credit Card Required</p>
                </div>
                <div className="inline-flex items-center gap-2">
                    <LucideCheckCircle color="green"/> <p>14 Day Free Trial</p>
                </div>
                
            </div>
          </div>

          <div>
            <AspectRatio ratio={16 / 9}>
              <div className="h-full w-full rounded-3xl bg-black/90 shadow-xl" />
            </AspectRatio>
          </div>
        </div>
      </section>
    </div>
  );
}
