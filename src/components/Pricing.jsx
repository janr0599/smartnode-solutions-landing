"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Up to 3 team members",
      "5GB storage",
      "Basic analytics",
      "Email support",
      "10 automation rules",
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    name: "Professional",
    price: "$29",
    period: "per user/month",
    description: "Everything you need for growing teams and businesses.",
    features: [
      "Up to 50 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Unlimited automation",
      "Custom integrations",
      "Team collaboration tools",
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per user/month",
    description: "Advanced features for large organizations and enterprises.",
    features: [
      "Unlimited team members",
      "1TB storage",
      "Custom analytics",
      "Dedicated support",
      "Advanced security",
      "SSO integration",
      "Custom onboarding",
      "SLA guarantee",
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose the Perfect{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Plan for You
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Start free and scale as you grow. All plans include our core
            features with advanced options available for growing teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-2xl scale-105"
                  : "border border-gray-200 shadow-lg"
              } bg-white hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              <CardHeader
                className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}
              >
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  )}
                </div>
                <CardDescription className="text-gray-600 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      : ""
                  }`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money-back guarantee</span>
            <span>✓ 24/7 customer support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
