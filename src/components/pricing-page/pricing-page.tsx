"use client";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Crown,
  Stars,
  Users,
  X,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { motion } from "motion/react";

export default function PricingPage() {
  const [showComparison, setShowComparison] = useState(false);

  const card1Checked = [
    "Access to basic materials",
    "3 AI-generated KBAT questions/month",
    "Limited diagnostic insights",
    "Community Support",
  ];
  const card1GreyedOut = [
    "Unlimited AI practice",
    "Full KBAT diagnostics",
    "Tutor recommendations",
    "1-on-1 tutor booking",
  ];
  const card2Checked = [
    "Unlimited AI practice",
    "Full KBAT diagnostics",
    "Personalized Weakness Report",
    "Tutor recommendations",
    "Email support",
  ];
  const card2GreyedOut = ["1-on-1 tutor booking", "Priority AI analysis"];
  const card3Checked = [
    "Everything in Premium",
    "1-on-1 tutor booking integration",
    "Session scheduling calendar",
    "Priority AI analysis updates",
    "Parent performance reports",
    "Direct tutor messaging",
    "Unlimited practice sessions",
    "Priority support",
  ];

  return (
    <div>
      <section className="bg-[#FAF7F2] w-full">
        <div className="pt-20 pb-16 text-center max-w-full px-8">
          <p className="text-md text-gray-700 font-md mb-6">
            Flexible Plans for Every Student
          </p>
          <h2 className="text-xl font-md text-gray-900 mb-8">
            Start free, then unlock full AI analysis and personalized tutor
            access
          </h2>
          <div className="w-32 h-1 bg-linear-to-r from-[#1E3A8A] to-[#3B82F6] mx-auto rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
            <Card className="hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out ">
              <CardHeader>
                <CardTitle>
                  <div className="text-left grid grid-cols-1 gap-6">
                    <Stars
                      color="white"
                      className="h-16 w-16 bg-linear-to-r from-blue-500 to-cyan-500 p-4 rounded-xl mb-8"
                    />
                    <p className="text-lg text-black mb-6">Free Plan</p>
                    <p className="text-md font-md text-gray-600">
                      Perfect for trying out NeuralGuru
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-[#0B2545]">RM 0</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 mb-8 flex-1">
                <div className="flex flex-col w-full mt-8 gap-4">
                  {card1Checked.map((card) => (
                    <div key={card} className="flex items-start gap-6">
                      <div className="w-6 flex justify-center">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-lg font-md text-gray-600">{card}</p>
                    </div>
                  ))}
                  {card1GreyedOut.map((card) => (
                    <div key={card} className="flex items-start gap-6">
                      <div className="w-6 flex justify-center">
                        <X className="h-6 w-6 text-gray-400" />
                      </div>
                      <p className="text-lg font-md text-gray-400">{card}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant={"outline"} className="w-full border h-12"><p className="font-semibold">Start For Free</p></Button>
              </CardFooter>
            </Card>

            <Card className="scale-110 border-blue-300 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle>
                  <div className="text-left grid grid-cols-1 gap-6">
                    <Users
                      color="white"
                      className="h-16 w-16 bg-linear-to-r from-[#1E3A8A] to-[#3B82F6] p-4 rounded-xl mb-8"
                    />
                    <p className="text-lg text-black mb-6">Premium Plan</p>
                    <p className="text-md font-md text-gray-600">
                      Full AI-powered learning experience
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-[#0B2545]">RM 29</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  </div>
                </CardTitle>{" "}
              </CardHeader>
              <CardContent className="space-y-4 mb-8 flex-1">
                <div className="flex flex-col w-full mt-8 gap-4">
                  {card2Checked.map((card) => (
                    <div key={card} className="flex items-start gap-6">
                      <div className="w-6 flex justify-center">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-lg font-md text-gray-600">{card}</p>
                    </div>
                  ))}
                  {card2GreyedOut.map((card) => (
                    <div key={card} className="flex items-start gap-6">
                      <div className="w-6 flex justify-center">
                        <X className="h-6 w-6 text-gray-400" />
                      </div>
                      <p className="text-lg font-md text-gray-400">{card}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant={"default"} className="w-full border h-12 bg-linear-to-r from-[#1E3A8A] to-[#3B82F6] text-white"><p className="font-semibold">Upgrade to Premium</p></Button>
              </CardFooter>
            </Card>
            <Card className="hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out ">
              <CardHeader>
                <CardTitle>
                  <div className="text-left grid grid-cols-1 gap-6">
                    <Crown
                      color="white"
                      className="h-16 w-16 bg-linear-to-r from-orange-500 to-red-500 p-4 rounded-xl mb-8"
                    />
                    <p className="text-lg text-black mb-6">Tutor+ Plan</p>
                    <p className="text-md font-md text-gray-600">
                      Complete learning with personal tutoring
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-[#0B2545]">RM 59</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 mb-8 flex-1">
                <div className="flex flex-col w-full mt-8 gap-4">
                  {card3Checked.map((card) => (
                    <div key={card} className="flex items-start gap-6">
                      <div className="w-6 flex justify-center">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-lg font-md text-gray-600">{card}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant={"default"} className="w-full border h-12 bg-linear-to-r from-orange-500 to-red-500 text-white"><p className="font-semibold">Join Tutor+</p></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="px-16 py-8">
          <div className="flex items-center justify-center gap-2 mt-8">
            <h2 className="text-xl text-gray-700 font-semibold">
              Compare Plans
            </h2>
            {!showComparison && (
              <a
                className="cursor-pointer group"
                onClick={() => setShowComparison(true)}
              >
                <ChevronDown className="h-6 w-6 text-gray-800 transition-colors duration-200 group-hover:text-[#1E3A8A]" />
              </a>
            )}

            {showComparison && (
              <a
                className="cursor-pointer group"
                onClick={() => setShowComparison(false)}
              >
                <ChevronUp className="h-6 w-6 text-[#1E3A8A] transition-colors duration-200 group-hover:text-gray-800" />
              </a>
            )}
          </div>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="w-full py-4 mt-4 overflow-x-auto "
            >
              <Table className="w-full">
                <TableHeader className="border-b bg-gray-50 h-16 px-6">
                  <TableRow>
                    <TableHead className="col-span-2 text-lg font-semibold">
                      Features
                    </TableHead>
                    <TableHead className="text-lg font-semibold">
                      Free
                    </TableHead>
                    <TableHead className="text-lg font-semibold">
                      Premium
                    </TableHead>
                    <TableHead className="text-lg font-semibold">
                      Tutor+
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-200">
                  <TableRow className="h-16">
                    <TableCell className="font-md text-lg">
                      AI-Generated KBAT Questions
                    </TableCell>
                    <TableCell className="font-md text-lg">3/month</TableCell>
                    <TableCell className="font-md text-lg">Unlimited</TableCell>
                    <TableCell className="font-md text-lg">Unlimited</TableCell>
                  </TableRow>
                  <TableRow className="h-16">
                    <TableCell className="font-md text-lg">
                      KBAT Diagnostic Reports
                    </TableCell>
                    <TableCell className="font-md text-lg">Basic</TableCell>
                    <TableCell className="font-md text-lg">
                      Full Analysis
                    </TableCell>
                    <TableCell className="font-md text-lg">
                      Full + Priority
                    </TableCell>
                  </TableRow>
                  <TableRow className="h-16">
                    <TableCell className="font-md text-lg">
                      Learning Materials Access
                    </TableCell>
                    <TableCell className="font-md text-lg">Limited</TableCell>
                    <TableCell className="font-md text-lg">
                      Full Library
                    </TableCell>
                    <TableCell className="font-md text-lg">
                      Full Library
                    </TableCell>
                  </TableRow>
                  <TableRow className="h-16">
                    <TableCell className="font-md text-lg">
                      Tutor Recommendations
                    </TableCell>
                    <TableCell className="font-md text-lg">✗</TableCell>
                    <TableCell className="font-md text-lg">
                      AI-Powered
                    </TableCell>
                    <TableCell className="font-md text-lg">
                      AI-Powered
                    </TableCell>
                  </TableRow>
                  <TableRow className="h-16">
                    <TableCell className="font-md text-lg">
                      1-on-1 Tutor Booking
                    </TableCell>
                    <TableCell className="font-md text-lg">✗</TableCell>
                    <TableCell className="font-md text-lg">✗</TableCell>
                    <TableCell className="font-md text-lg">✓</TableCell>
                  </TableRow>
                  <TableRow className="h-16">
                    <TableCell className="font-md text-lg">
                      Parent Reports
                    </TableCell>
                    <TableCell className="font-md text-lg">✗</TableCell>
                    <TableCell className="font-md text-lg">✗</TableCell>
                    <TableCell className="font-md text-lg">Weekly</TableCell>
                  </TableRow>
                  <TableRow className="h-16">
                    <TableCell className="font-md text-lg">
                      Support Level
                    </TableCell>
                    <TableCell className="font-md text-lg">Community</TableCell>
                    <TableCell className="font-md text-lg">Email</TableCell>
                    <TableCell className="font-md text-lg">Priority</TableCell>
                  </TableRow>
                  <TableRow className="h-16">
                    <TableCell className="font-md text-lg">
                      AI Analysis Speed
                    </TableCell>
                    <TableCell className="font-md text-lg">Standard</TableCell>
                    <TableCell className="font-md text-lg">Fast</TableCell>
                    <TableCell className="font-md text-lg">Instant</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </motion.div>
          )}
        </div>
      </section>

      <section className="w-full bg-linear-to-r from-[#1E3A8A] to-[#3B82F6]">
        <div className="flex items-center justify-center px-8 py-20">
          <div className="grid grid-cols-1 text-center gap-6">
            <p className="text-md text-white font-semibold">
              Start your AI-powered learning journey today
            </p>
            <h2 className="text-xl font-md text-gray-200">
              Join thousands of Malaysian students improving their KBAT scores
              with NeuralGuru
            </h2>

            <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:justify-center">
              <Button
                size={"lg"}
                variant={"outline"}
                className="w-full sm:w-auto border text-[#1E3A8A] hover:bg-gray-100"
              >
                Try For Free
              </Button>
              <Button
                size={"lg"}
                variant={"outline"}
                className="w-full sm:w-auto border text-gray-900"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
