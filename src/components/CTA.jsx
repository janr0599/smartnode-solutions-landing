"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Zap } from "lucide-react";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to Transform Your Workflow?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Discover how tailored AI automation and workflow
                        solutions can save you time, cut costs, and boost
                        productivity. Let's build the future of your small
                        business, together.
                    </p>

                    <div className="justify-center items-center mb-12">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 h-auto text-lg font-semibold group shadow-xl"
                            >
                                Schedule Your Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                For Small Businesses
                            </h3>
                            <p className="text-blue-100">
                                Solutions designed for your growth
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Secure & Reliable
                            </h3>
                            <p className="text-blue-100">
                                Robust implementations you can trust
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Drive Efficiency
                            </h3>
                            <p className="text-blue-100">
                                Automate for maximum impact
                            </p>
                        </div>
                    </div>

                    {/* Removed the "No credit card required" line as it implies a product trial, not a service consultation. */}
                    <div className="mt-12 text-center">
                        <p className="text-blue-100 text-sm">
                            Your custom AI journey starts here.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
