"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n-provider";

const CTA = () => {
    const { t } = useTranslation();

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
                        {t("components.CTA.title")}
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t("components.CTA.description")}
                    </p>

                    <div className="justify-center items-center mb-12">
                        <Link
                            href="https://calendly.com/smartnode-solutions/30min"
                            passHref
                            target="_blank"
                        >
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 h-auto text-lg font-semibold group shadow-xl"
                            >
                                {t("components.CTA.button")}
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
                                {t("components.CTA.forSmallBusinesses")}
                            </h3>
                            <p className="text-blue-100">
                                {t("components.CTA.forSmallBusinessesDesc")}
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {t("components.CTA.secureReliable")}
                            </h3>
                            <p className="text-blue-100">
                                {t("components.CTA.secureReliableDesc")}
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {t("components.CTA.driveEfficiency")}
                            </h3>
                            <p className="text-blue-100">
                                {t("components.CTA.driveEfficiencyDesc")}
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-blue-100 text-sm">
                            {t("components.CTA.customJourney")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
