"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Hero = () => {
    return (
        <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="absolute inset-0 z-0 hidden md:block">
                <BackgroundBeams
                    className="pointer-events-none"
                    color="#000000"
                    intensity={0.5}
                    speed={0.5}
                    rotation={Math.PI / 4}
                    scale={1.2}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 pointer-events-none">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Join 50,000+ teams already using SmartNode Solutions
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Streamline Your Workflow with{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Smart Automation
                        </span>
                    </h1>

                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Transform your team&apos;s productivity with our
                        AI-powered SaaS platform. Automate tasks, collaborate
                        seamlessly, and scale your business effortlessly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link href="/signup">
                            {/* *** KEY CHANGE: Add 'pointer-events-auto' to interactive elements *** */}
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 h-auto text-lg font-semibold group pointer-events-auto"
                            >
                                Start Free Trial
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        {/* *** KEY CHANGE: Add 'pointer-events-auto' to interactive elements *** */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-4 h-auto text-lg font-semibold border-2 hover:bg-gray-50 pointer-events-auto"
                        >
                            <Play className="mr-2 w-5 h-5" />
                            Watch Demo
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-700">
                        <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2 text-blue-600" />
                            <span>50,000+ users</span>
                        </div>
                        <div className="flex items-center">
                            <Shield className="w-5 h-5 mr-2 text-green-600" />
                            <span>SOC 2 compliant</span>
                        </div>
                        <div className="flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                            <span>99.9% uptime</span>
                        </div>
                    </div>
                </div>

                {/* You might also need to apply pointer-events-auto to specific interactive elements within this 'mt-16 relative' div if they are not directly buttons/links */}
                <div className="mt-16 relative">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-2xl shadow-2xl">
                        <div className="bg-gray-900 rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* These are just display divs, no interactive elements that need pointer-events-auto */}
                                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                                        <div className="w-6 h-6 bg-blue-500 rounded" />
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">
                                        Dashboard
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Real-time analytics and insights
                                    </p>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full" />
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">
                                        Automation
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Smart workflow automation
                                    </p>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                                        <div className="w-6 h-6 bg-green-500 rounded-lg" />
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">
                                        Collaboration
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Team communication tools
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
