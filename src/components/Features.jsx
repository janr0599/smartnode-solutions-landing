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
    Play,
    Settings2,
    Check,
} from "lucide-react";
import CountUp from "react-countup";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/lib/i18n-provider";
import { cn } from "@/lib/utils";

const iconMap = {
    Zap,
    Users,
    Shield,
    BarChart,
    Globe,
    Smartphone,
    Clock,
    Settings,
};

const Features = () => {
    const { t } = useTranslation();
    const [progressBarWidth, setProgressBarWidth] = useState(0);
    const progressBarRef = useRef(null);

    // Get all content from the Features section of the JSON file
    const featuresData =
        t("components.Features", { returnObjects: true }) || {};
    const features = featuresData.features || [];
    const infographic = featuresData.infographic || {};
    const statistics = featuresData.statistics || {};

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setProgressBarWidth(statistics?.stats?.[0]?.value || 94);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.5,
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
    }, [statistics]);

    return (
        <section id="features" className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {featuresData.title.replace(
                            featuresData.titleHighlight,
                            ""
                        )}
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {featuresData.titleHighlight}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {featuresData.description}
                    </p>
                </div>
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
                    {features.map((feature, index) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <Card
                                key={index}
                                className={cn(
                                    "hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm flex flex-col justify-between",
                                    feature.colSpan.base,
                                    feature.colSpan.md,
                                    feature.colSpan.lg,
                                    feature.rowSpan.base,
                                    feature.rowSpan.md,
                                    feature.rowSpan.lg
                                )}
                            >
                                <CardHeader className="pb-1">
                                    <div
                                        className={cn(
                                            "w-6 h-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center mb-4",
                                            `bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center mb-4`
                                        )}
                                    >
                                        {Icon && (
                                            <Icon
                                                className={`w-6 h-6 ${feature.color}`}
                                            />
                                        )}
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-gray-900">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <CardDescription className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </CardDescription>

                                    {index === 0 && (
                                        <div className="hidden md:flex md:flex-grow md:items-center md:justify-center px-4 pt-4">
                                            <div className="relative w-full max-w-sm">
                                                <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10 border border-gray-100 overflow-hidden">
                                                    <h4 className="text-md font-semibold text-gray-800 text-center mb-6">
                                                        {infographic.title}
                                                    </h4>
                                                    <div className="flex flex-col items-center justify-center space-y-4 ">
                                                        {infographic.nodes.map(
                                                            (node, i) => (
                                                                <React.Fragment
                                                                    key={i}
                                                                >
                                                                    <div
                                                                        className={cn(
                                                                            "flex items-center space-x-3 p-3 rounded-xl shadow-sm w-full max-w-[220px] justify-center text-sm font-medium",
                                                                            node.color
                                                                        )}
                                                                    >
                                                                        <node.icon className="w-4 h-4" />
                                                                        <span>
                                                                            {
                                                                                node.label
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    {i <
                                                                        infographic
                                                                            .nodes
                                                                            .length -
                                                                            1 && (
                                                                        <div
                                                                            className={cn(
                                                                                "w-0.5 h-6 relative",
                                                                                node.arrowColor
                                                                            )}
                                                                        >
                                                                            <div
                                                                                className={cn(
                                                                                    "absolute left-1/2 -ml-1.5 -bottom-0.5 w-3 h-3 rotate-45 transform",
                                                                                    node.arrowColor
                                                                                )}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </React.Fragment>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
                <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                {statistics.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {statistics.description}
                            </p>
                            <div className="space-y-4">
                                {statistics.bullets?.map((bullet, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center"
                                    >
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                        </div>
                                        <span className="text-gray-700">
                                            {bullet}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-500">
                                            {statistics.stats?.[0]?.label}
                                        </span>
                                        <CountUp
                                            className="text-2xl font-bold text-green-500"
                                            start={0}
                                            end={
                                                statistics.stats?.[0]?.value ||
                                                0
                                            }
                                            duration={3.5}
                                            suffix="%"
                                            enableScrollSpy
                                            scrollSpyOnce={true}
                                        >
                                            {({ countUpRef }) => (
                                                <span
                                                    ref={countUpRef}
                                                    className="text-2xl font-bold"
                                                />
                                            )}
                                        </CountUp>
                                    </div>
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
                                        {statistics.stats
                                            ?.slice(1)
                                            ?.map((stat, index) => (
                                                <div
                                                    key={index}
                                                    className="text-center"
                                                >
                                                    <CountUp
                                                        className="text-2xl font-bold text-gray-900"
                                                        start={0}
                                                        end={stat.value}
                                                        duration={3.5}
                                                        enableScrollSpy
                                                        scrollSpyOnce={true}
                                                    >
                                                        {({ countUpRef }) => (
                                                            <span
                                                                ref={countUpRef}
                                                                className="text-2xl font-bold"
                                                            />
                                                        )}
                                                    </CountUp>
                                                    <div className="text-sm text-gray-500">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
