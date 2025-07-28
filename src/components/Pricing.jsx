// src/components/Pricing.jsx
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

// Redefine plans to be service offerings or engagement models
const plans = [
    {
        name: "Free Consultation",
        // price: "No Cost",
        period: "1-on-1 Session",
        description:
            "Discover how AI can transform your small business. No obligation.",
        features: [
            "Initial business process assessment",
            "Identify key automation opportunities",
            "High-level strategy discussion",
            "Understand potential ROI",
            "Pathway to tailored solutions",
        ],
        popular: false, // You can make this popular if you want to highlight it
        buttonText: "Schedule Now",
        buttonVariant: "default", // Make this a primary button
    },
    {
        name: "Custom Automation Solutions",
        // price: "Tailored Quote",
        period: "Per Project",
        description:
            "Receive a bespoke solution crafted to your exact business needs and goals.",
        features: [
            "In-depth workflow analysis",
            "Custom low-code/no-code/full code development",
            "Integration with existing systems (CRM, ERP, Marketing Tools)",
            "Comprehensive implementation & testing",
            "Full documentation & training",
            "Dedicated project management",
        ],
        popular: true, // This is your core offering, make it popular
        buttonText: "Get Your Custom Quote",
        buttonVariant: "default",
    },
    {
        name: "Ongoing Optimization & Support",
        // price: "Retainer",
        period: "Monthly",
        description:
            "Continuous improvement and expert support for your AI-driven workflows.",
        features: [
            "Proactive monitoring & maintenance",
            "Performance optimization",
            "Feature enhancements & upgrades",
            "Priority technical support",
            "Regular performance reports",
            "Strategic consulting & new use cases",
        ],
        popular: false,
        buttonText: "Discuss Support Needs",
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
                        Invest in Your Business's{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Automated Future
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Our services are designed to deliver measurable results,
                        optimizing operations, enhancing efficiency, and driving
                        growth. Start with a free consultation to explore the
                        possibilities.
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
                                    Our Core Offering
                                </div>
                            )}

                            <CardHeader
                                className={`text-center ${
                                    plan.popular ? "pt-12" : "pt-6"
                                }`}
                            >
                                <CardTitle className="text-2xl font-bold text-gray-900">
                                    {plan.name}
                                </CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-gray-500 ml-2">
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                                <CardDescription className="text-gray-600 mt-2">
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="px-6 pb-6">
                                <Button
                                    className={`w-full mb-6 ${
                                        plan.name === "Free Consultation" ||
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
                                    {plan.features.map(
                                        (feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center"
                                            >
                                                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    {feature}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">
                        Every solution is uniquely tailored to maximize your
                        business's efficiency and growth.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                        <span>✓ Transparent pricing model</span>
                        <span>✓ Focus on measurable ROI</span>
                        <span>✓ Expert support & guidance</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
