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
import { Check } from "lucide-react";
import Link from "next/link";

const Plans = () => {
    // We only need the data for the Free Consultation
    const freeConsultationPlan = {
        name: "Schedule Your Free Consultation",
        description:
            "Ready to see how SmartNode Solutions can transform your business? Book a personalized 1-on-1 session with our experts.",
        features: [
            "Understand your current workflows & pain points",
            "Identify tailored AI automation opportunities for your business",
            "Receive high-level strategy and potential ROI insights",
            "Explore a clear pathway to custom solutions",
            "Absolutely no commitment or hidden costs",
        ],
        buttonText: "Book Your Free Consultation",
    };

    return (
        <section
            id="plans" // Keep the ID for navigation
            className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Unlock Your Business's{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Automation Potential
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Every successful automation journey begins with
                        understanding. Let's discuss your unique needs and how
                        our tailored AI solutions can drive efficiency and
                        growth.
                    </p>
                </div>

                {/* Single Card for Free Consultation */}
                <div className="flex justify-center">
                    <Card
                        className="w-full max-w-xl relative border-2 border-blue-500 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 py-8 px-6 md:py-10 md:px-8" // Increased overall card padding
                    >
                        {/* No Obligation Badge: Moved further from the title with more margin */}
                        <div className="absolute top-0 right-0 -mt-4 -mr-3 md:-mt-4 md:-mr-8">
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                                <Check className="w-3 h-3 mr-1" /> No Obligation
                            </span>
                        </div>

                        <CardHeader className="text-center pt-6 pb-4">
                            {" "}
                            {/* pt and pb can be adjusted if needed, but overall card padding helps */}
                            <CardTitle className="text-3xl font-bold text-gray-900 leading-tight">
                                {freeConsultationPlan.name}
                            </CardTitle>
                            <CardDescription className="text-gray-600 mt-2 text-lg">
                                {freeConsultationPlan.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="px-6 pb-6">
                            {" "}
                            <Link
                                href="https://cal.com/smartnode.solutions/30-min-consultation"
                                passHref
                                target="_blank"
                            >
                                <Button
                                    className="w-full mb-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg py-7"
                                    size="lg"
                                >
                                    {freeConsultationPlan.buttonText}
                                </Button>
                            </Link>
                            <div className="space-y-4">
                                {freeConsultationPlan.features.map(
                                    (feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-start"
                                        >
                                            <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700 text-base">
                                                {feature}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4 text-lg">
                        Our approach is always transparent, client-focused, and
                        designed for your success.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-base text-gray-500 font-medium">
                        <span className="flex items-center">
                            <Check className="w-4 h-4 mr-2 text-green-500" />{" "}
                            Transparent process
                        </span>
                        <span className="flex items-center">
                            <Check className="w-4 h-4 mr-2 text-green-500" />{" "}
                            Focus on measurable ROI
                        </span>
                        <span className="flex items-center">
                            <Check className="w-4 h-4 mr-2 text-green-500" />{" "}
                            Expert guidance at every step
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;
