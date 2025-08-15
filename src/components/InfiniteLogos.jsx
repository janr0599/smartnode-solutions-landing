"use client";

import { Logos } from "./Logos";
import { useTranslation } from "@/lib/i18n-provider"; // Import the useTranslation hook

function InfiniteLogos() {
    const { t } = useTranslation();

    return (
        <section className="relative overflow-hidden">
            <div className="pt-10">
                <h2 className="text-center text-xl font-semibold text-gray-700 mb-8">
                    {t("components.InfiniteLogos.title")}
                </h2>
                <Logos />
            </div>
        </section>
    );
}

export default InfiniteLogos;
