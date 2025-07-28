// src/components/Features.jsx
"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Zap,
    Users,
    Shield,
    BarChart,
    Globe,
    Smartphone,
    Clock,
    Settings,
} from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Tailored AI Automation",
        description:
            "Custom-built AI workflows using low-code, no-code, or full code to fit your unique business needs.",
        color: "text-yellow-500",
    },
    {
        icon: Users,
        title: "Boost Productivity",
        description:
            "Empower your team by automating tedious tasks, freeing them to focus on high-value work.",
        color: "text-blue-500",
    },
    {
        icon: Shield,
        title: "Cost & Time Savings",
        description:
            "Reduce operational costs and save countless hours through efficient, automated processes.",
        color: "text-green-500",
    },
    {
        icon: BarChart,
        title: "Enhanced Sales & Marketing",
        description:
            "Implement AI for lead nurturing, campaign management, and personalized customer interactions.",
        color: "text-purple-500",
    },
    {
        icon: Globe,
        title: "Streamlined Intake & Ops",
        description:
            "Automate client onboarding, data entry, and internal workflows for smoother operations.",
        color: "text-cyan-500",
    },
    {
        icon: Smartphone,
        title: "Scalable Solutions",
        description:
            "Our solutions are designed to grow with your business, adapting to evolving demands.",
        color: "text-pink-500",
    },
    {
        icon: Clock,
        title: "Less Hassle, More Control",
        description:
            "Gain clarity and control over your processes with systems that work for you, not against you.",
        color: "text-orange-500",
    },
    {
        icon: Settings,
        title: "Seamless Integration",
        description:
            "We ensure your new AI solutions integrate smoothly with your existing tools and platforms.",
        color: "text-indigo-500",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Solutions Crafted to Transform{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Your Business
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We provide comprehensive AI automation services that
                        tackle your unique business challenges, delivering
                        tangible improvements across all departments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
                        >
                            <CardHeader className="pb-3">
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon
                                        className={`w-6 h-6 ${feature.color}`}
                                    />
                                </div>
                                <CardTitle className="text-xl font-semibold text-gray-900">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                The Future of Your Small Business
                            </h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our AI agency focuses on delivering practical,
                                impactful automation. We help small businesses
                                navigate the complexities of AI to implement
                                solutions that drive real growth and operational
                                excellence.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <span className="text-gray-700">
                                        Custom workflows for sales, marketing &
                                        operations
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <span className="text-gray-700">
                                        Expert guidance on low-code, no-code,
                                        and custom code
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <span className="text-gray-700">
                                        Measurable improvements in time, money,
                                        and productivity
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-500">
                                            Productivity Boost
                                        </span>
                                        <span className="text-2xl font-bold text-green-500">
                                            94%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-[94%]" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pt-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900">
                                                47
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Hours Saved
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900">
                                                23
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Processes Automated
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900">
                                                8
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                New Clients
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
