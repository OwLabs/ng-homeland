import { useState } from "react";
import { motion } from "motion/react";
import { pricingPlans } from "../pricing-data";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PricingCardsSection() {
  const [activePlan, setActivePlan] = useState<string>(
    pricingPlans.find((p) => p.highlighted)?.name || pricingPlans[0].name,
  );

  return (
    <div>
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <Card
                  onClick={() => setActivePlan(plan.name)}
                  className={`p-8 h-full flex flex-col cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                    activePlan === plan.name
                      ? "border-2 border-[#3B82F6] shadow-xl scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.iconColor} flex items-center justify-center mb-6`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-[#0B2545] mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-[#0B2545]">
                        RM{plan.price}
                      </span>
                      <span className="text-gray-600">/ {plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={
                            feature.included ? "text-gray-700" : "text-gray-400"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      activePlan === plan.name
                        ? plan.buttonGradient
                          ? `bg-gradient-to-r ${plan.buttonGradient} text-white hover:opacity-90`
                          : "bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white"
                        : ""
                    }`}
                    variant={
                      activePlan === plan.name ? plan.buttonVariant : "outline"
                    }
                    size="lg"
                    onClick={() => {}}
                  >
                    {plan.buttonText}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
