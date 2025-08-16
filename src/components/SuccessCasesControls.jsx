"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Briefcase, BarChart2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/lib/i18n-provider";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

// 1. Define a color map for each industry
const industryColorMap = {
    // English keys
    Healthcare: { bg: "bg-blue-50", text: "text-blue-700" },
    "E-commerce": { bg: "bg-purple-50", text: "text-purple-700" },
    "Real Estate": { bg: "bg-amber-50", text: "text-amber-700" },
    Legal: { bg: "bg-fuchsia-50", text: "text-fuchsia-700" },
    Retail: { bg: "bg-green-50", text: "text-green-700" },
    // Spanish keys
    Salud: { bg: "bg-blue-50", text: "text-blue-700" },
    "Comercio Electrónico": { bg: "bg-purple-50", text: "text-purple-700" },
    "Bienes Raíces": { bg: "bg-amber-50", text: "text-amber-700" },
    "Comercio Minorista": { bg: "bg-green-50", text: "text-green-700" },
    // Default fallback color
    default: { bg: "bg-gray-50", text: "text-gray-700" },
};

export default function SuccessCasesControls({ cases }) {
    const { t } = useTranslation();
    const params = useParams();
    const lang = params.lang;
    const [searchQuery, setSearchQuery] = useState("");
    const [activeIndustry, setActiveIndustry] = useState(
        t("components.SuccessCasesControls.industries.0")
    );

    const industries =
        t("components.SuccessCasesControls.industries", {
            returnObjects: true,
        }) || [];

    const filteredCases =
        cases?.filter((caseItem) => {
            const matchesIndustry =
                activeIndustry === industries[0] ||
                caseItem.industry === activeIndustry;
            const matchesSearch =
                (caseItem.title?.toLowerCase() || "").includes(
                    searchQuery.toLowerCase()
                ) ||
                (caseItem.clientName?.toLowerCase() || "").includes(
                    searchQuery.toLowerCase()
                ) ||
                (caseItem.industry?.toLowerCase() || "").includes(
                    searchQuery.toLowerCase()
                );
            return matchesIndustry && matchesSearch;
        }) || [];

    return (
        <>
            {/* Search and Filter Section */}
            <div className="max-w-xl mx-auto mb-12 flex items-center gap-2">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        type="text"
                        placeholder={t(
                            "components.SuccessCasesControls.searchPlaceholder"
                        )}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {industries.map((industry, index) => (
                    <Badge
                        key={index}
                        variant={
                            activeIndustry === industry ? "default" : "outline"
                        }
                        className={`cursor-pointer transition-colors px-4 py-2 text-sm ${
                            activeIndustry === industry
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "hover:bg-blue-100 hover:border-blue-300"
                        }`}
                        onClick={() => setActiveIndustry(industry)}
                    >
                        {industry}
                    </Badge>
                ))}
            </div>

            {/* Success Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCases.map((caseItem) => {
                    const colors =
                        industryColorMap[caseItem.industry] ||
                        industryColorMap.default;

                    return (
                        // The Link component now wraps the entire Card
                        <Link
                            href={`/${lang}/case-studies/${caseItem.id}`}
                            key={caseItem.id}
                            className="group"
                        >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 flex flex-col">
                                <CardHeader className="pb-3">
                                    <Badge
                                        variant="outline"
                                        className="text-xs w-fit mb-3"
                                    >
                                        {caseItem.industry}
                                    </Badge>
                                    <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {caseItem.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <div className="flex items-center text-sm text-gray-600 mb-4">
                                            <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                                            <span>{caseItem.clientName}</span>
                                        </div>
                                        <div
                                            className={cn(
                                                "flex items-start text-sm p-3 rounded-lg",
                                                colors.bg,
                                                colors.text
                                            )}
                                        >
                                            <BarChart2 className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                                            <p className="font-semibold">
                                                {caseItem.mainAchievement}
                                            </p>
                                        </div>
                                    </div>
                                    {/* The separate Link for "Read More" is now part of the larger card link */}
                                    <div className="block mt-6">
                                        <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors text-sm font-medium">
                                            {t(
                                                "components.SuccessCasesControls.readMore"
                                            )}
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>
            {filteredCases.length === 0 && (
                <div className="text-center col-span-full py-16">
                    <p className="text-gray-500">
                        {t("components.SuccessCasesControls.noResults")}
                    </p>
                </div>
            )}
        </>
    );
}
