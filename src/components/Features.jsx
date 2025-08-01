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
    Play, // Icon for starting a process
    Settings2, // Icon for customization/processing
    Check, // Icon for completion/output
} from "lucide-react";
import CountUp from "react-countup";
import React, { useState, useEffect, useRef } from "react"; // Import useState, useEffect, and useRef

// Define features with specific grid span properties for different breakpoints
const features = [
    {
        icon: Zap,
        title: "Tailored AI Automation",
        description:
            "Custom-built AI workflows using low-code, no-code, or full code to fit your unique business needs.",
        color: "text-yellow-500",
        colSpan: {
            base: "col-span-full",
            md: "md:col-span-2",
            lg: "lg:col-span-2",
        },
        rowSpan: {
            base: "row-span-1",
            md: "md:row-span-2",
            lg: "lg:row-span-4",
        },
    },
    {
        icon: Users,
        title: "Boost Productivity",
        description:
            "Empower your team by automating tedious tasks, freeing them to focus on high-value work.",
        color: "text-blue-500",
        colSpan: {
            base: "col-span-full",
            md: "md:col-span-1",
            lg: "lg:col-span-1",
        },
        rowSpan: {
            base: "row-span-1",
            md: "md:row-span-1",
            lg: "lg:row-span-2",
        },
    },
    {
        icon: Shield,
        title: "Cost & Time Savings",
        description:
            "Reduce operational costs and save countless hours through efficient, automated processes.",
        color: "text-green-500",
        colSpan: {
            base: "col-span-full",
            md: "md:col-span-1",
            lg: "lg:col-span-1",
        },
        rowSpan: {
            base: "row-span-1",
            md: "md:row-span-1",
            lg: "lg:row-span-2",
        },
    },
    {
        icon: BarChart,
        title: "Enhanced Sales & Marketing",
        description:
            "Implement AI for lead nurturing, campaign management, and personalized customer interactions.",
        color: "text-purple-500",
        colSpan: {
            base: "col-span-full",
            md: "md:col-span-1",
            lg: "lg:col-span-1",
        },
        rowSpan: {
            base: "row-span-1",
            md: "md:row-span-1",
            lg: "lg:row-span-2",
        },
    },
    {
        icon: Globe,
        title: "Streamlined Intake & Ops",
        description:
            "Automate client onboarding, data entry, and internal workflows for smoother operations.",
        color: "text-cyan-500",
        colSpan: {
            base: "col-span-full",
            md: "md:col-span-1",
            lg: "lg:col-span-1",
        },
        rowSpan: {
            base: "row-span-1",
            md: "md:row-span-1",
            lg: "lg:row-span-2",
        },
    },
    {
        icon: Smartphone,
        title: "Scalable Solutions",
        description:
            "Our solutions are designed to grow with your business, adapting to evolving demands.",
        color: "text-pink-500",
        colSpan: {
            base: "col-span-full",
            md: "md:col-span-1",
            lg: "lg:col-span-1",
        },
        rowSpan: {
            base: "row-span-1",
            md: "md:row-span-1",
            lg: "lg:row-span-2",
        },
    },
    {
        icon: Clock,
        title: "Less Hassle, More Control",
        description:
            "Gain clarity and control over your processes with systems that work for you, not against you.",
        color: "text-orange-500",
        colSpan: {
            base: "col-span-full",
            md: "md:col-span-1",
            lg: "lg:col-span-2",
        },
        rowSpan: {
            base: "row-span-1",
            md: "md:row-span-1",
            lg: "lg:row-span-2",
        },
    },
    {
        icon: Settings,
        title: "Seamless Integration",
        description:
            "We ensure your new AI solutions integrate smoothly with your existing tools and platforms.",
        color: "text-indigo-500",
        colSpan: {
            base: "col-span-full",
            md: "md:col-span-2",
            lg: "lg:col-span-1",
        },
        rowSpan: {
            base: "row-span-1",
            md: "md:row-span-1",
            lg: "lg:row-span-2",
        },
    },
];

const Features = () => {
    const [progressBarWidth, setProgressBarWidth] = useState(0);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setProgressBarWidth(94); // Animate to 94% when in view
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => {
            if (progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
        };
    }, []);

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

                {/* Bento Grid Layout - adjusted for three distinct layouts */}
                <div
                    className="mx-auto grid max-w-5xl gap-4
                                 grid-cols-1
                                 md:grid-cols-2
                                 lg:grid-cols-4
                                 grid-rows-[repeat(8,_minmax(150px,_1fr))]
                                 md:grid-rows-[repeat(auto-fill,_minmax(150px,_1fr))]
                                 lg:grid-rows-6
                                 auto-rows-fr"
                >
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm
                                         ${feature.colSpan.base} ${feature.colSpan.md} ${feature.colSpan.lg}
                                         ${feature.rowSpan.base} ${feature.rowSpan.md} ${feature.rowSpan.lg}
                                         flex flex-col justify-between`}
                        >
                            <CardHeader className="pb-1">
                                <div
                                    className={`w-6 h-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center mb-4`}
                                >
                                    {React.createElement(feature.icon, {
                                        className: `w-6 h-6 ${feature.color}`,
                                    })}
                                </div>
                                <CardTitle className="text-xl font-semibold text-gray-900">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between">
                                <CardDescription className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </CardDescription>

                                {/* Infographic-like element for Tailored AI Automation */}
                                {index === 0 && (
                                    <div className="hidden md:flex md:flex-grow md:items-center md:justify-center px-4 pt-4">
                                        {" "}
                                        {/* Added padding and changed to flex for centering */}
                                        <div className="relative w-full max-w-sm">
                                            {" "}
                                            {/* Increased max-width slightly */}
                                            <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10 border border-gray-100 overflow-hidden">
                                                <h4 className="text-md font-semibold text-gray-800 text-center mb-6">
                                                    Your Automated Workflow
                                                </h4>
                                                <div className="flex flex-col items-center justify-center space-y-4 ">
                                                    {/* Node 1: Input/Discovery */}
                                                    <div className="flex items-center space-x-3 bg-blue-50 text-blue-800 p-3 rounded-xl shadow-sm w-full max-w-[180px] justify-center text-sm font-medium">
                                                        <Play className="w-4 h-4" />
                                                        <span>
                                                            Input & Data
                                                        </span>
                                                    </div>

                                                    {/* Connector 1 */}
                                                    <div className="w-0.5 h-6 bg-blue-300 relative">
                                                        <div className="absolute left-1/2 -ml-1.5 -bottom-0.5 w-3 h-3 bg-blue-300 rotate-45 transform" />
                                                    </div>

                                                    {/* Node 2: Tailored AI Processing */}
                                                    <div className="flex items-center space-x-3 bg-purple-50 text-purple-800 p-3 rounded-xl shadow-sm w-full max-w-[220px] justify-center text-sm font-medium">
                                                        <Settings2 className="w-4 h-4" />
                                                        <span>
                                                            Custom AI Logic
                                                        </span>
                                                    </div>

                                                    {/* Connector 2 */}
                                                    <div className="w-0.5 h-6 bg-purple-300 relative">
                                                        <div className="absolute left-1/2 -ml-1.5 -bottom-0.5 w-3 h-3 bg-purple-300 rotate-45 transform" />
                                                    </div>

                                                    {/* Node 3: Automated Output */}
                                                    <div className="flex items-center space-x-3 bg-green-50 text-green-800 p-3 rounded-xl shadow-sm w-full max-w-[180px] justify-center text-sm font-medium">
                                                        <Check className="w-4 h-4" />
                                                        <span>
                                                            Automated Output
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* The "Future of Your Small Business" section with statistics (remains unchanged) */}
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
                                        <CountUp
                                            className="text-2xl font-bold text-green-500"
                                            start={0}
                                            end={94}
                                            duration={3.5}
                                            suffix="%"
                                            enableScrollSpy
                                            scrollSpyOnce={true}
                                        >
                                            94%
                                        </CountUp>
                                    </div>
                                    {/* Progress Bar Div */}
                                    <div
                                        className="w-full bg-gray-200 rounded-full h-2"
                                        ref={progressBarRef}
                                    >
                                        <div
                                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{
                                                width: `${progressBarWidth}%`,
                                            }}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pt-4">
                                        <div className="text-center">
                                            <CountUp
                                                className="text-2xl font-bold text-gray-900"
                                                start={0}
                                                end={47}
                                                duration={3.5}
                                                enableScrollSpy
                                                scrollSpyOnce={true}
                                            >
                                                47
                                            </CountUp>
                                            <div className="text-sm text-gray-500">
                                                Hours Saved
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <CountUp
                                                className="text-2xl font-bold text-gray-900"
                                                start={0}
                                                end={23}
                                                duration={3.5}
                                                enableScrollSpy
                                                scrollSpyOnce={true}
                                            >
                                                23
                                            </CountUp>
                                            <div className="text-sm text-gray-500">
                                                Processes Automated
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <CountUp
                                                className="text-2xl font-bold text-gray-900"
                                                start={0}
                                                end={18}
                                                duration={3.5}
                                                enableScrollSpy
                                                scrollSpyOnce={true}
                                            >
                                                18
                                            </CountUp>
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
