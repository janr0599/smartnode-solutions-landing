"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, Check } from "lucide-react";
import CountUp from "react-countup";
import { useTranslation } from "@/lib/i18n-provider";

// A more robust iconMap that maps a generic key to the icon component.
const iconMap = {
    projects: Users,
    industries: Globe,
    roi: Target,
    hours: Award,
};

export default function About() {
    const { t } = useTranslation();

    // Get data from the translation file. Add a null-check and a default empty array.
    const team = t("about.team", { returnObjects: true }) || [];
    const stats = t("about.stats", { returnObjects: true }) || [];
    const principles = t("about.principles", { returnObjects: true }) || [];

    // Create a new stats array with a unique icon key for mapping.
    const translatedStatsWithIcons = stats.map((stat, index) => {
        const iconKeys = ["projects", "industries", "roi", "hours"];
        return {
            ...stat,
            icon: iconKeys[index],
        };
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {t("about.badge")}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            {t("about.mainTitle").replace(
                                t("about.mainTitleHighlight"),
                                ""
                            )}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {t("about.mainTitleHighlight")}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {t("about.mainDescription")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
                        {translatedStatsWithIcons.map((stat, index) => {
                            const Icon = iconMap[stat.icon];
                            return (
                                <Card
                                    key={index}
                                    className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg"
                                >
                                    <CardHeader className="pb-3">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                            {Icon && (
                                                <Icon className="w-6 h-6 text-white" />
                                            )}
                                        </div>
                                        <CardTitle className="text-3xl font-bold text-gray-900">
                                            <CountUp
                                                start={0}
                                                end={stat.value}
                                                duration={3.5}
                                                suffix={
                                                    stat.label.includes("ROI")
                                                        ? "%"
                                                        : "+"
                                                }
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
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600">
                                            {stat.label}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                {t("about.missionTitle")}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {t("about.missionParagraph1")}
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {t("about.missionParagraph2")}
                            </p>
                            <div className="space-y-4">
                                {principles.map((principle, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center"
                                    >
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-700">
                                            {principle}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">
                                    {t("about.whyTitle")}
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    {t("about.whyDescription")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            {t("about.leadershipTitle")}
                        </h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            {t("about.leadershipDescription")}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:max-w-2xl gap-8 lg:mx-auto">
                            {team.map((member, index) => (
                                <Card
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <CardHeader className="text-center">
                                        <Avatar className="w-24 h-24 mx-auto mb-4">
                                            <AvatarImage
                                                src={member.avatar}
                                                alt={member.name}
                                                style={{ objectFit: "cover" }}
                                            />
                                            <AvatarFallback>
                                                {member.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <CardTitle className="text-xl font-bold text-gray-900">
                                            {member.name}
                                        </CardTitle>
                                        <p className="text-blue-600 font-semibold">
                                            {member.role}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
