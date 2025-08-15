// src/components/NewsletterForm.jsx
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "@/lib/i18n-provider"; // Import the useTranslation hook

export default function NewsletterForm() {
    const { t } = useTranslation();

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                toast.success(t("components.NewsletterForm.success"));
                setEmail("");
            } else {
                toast.error(t("components.NewsletterForm.error"));
            }
        } catch (error) {
            console.error("Subscription error:", error);
            toast.error(t("components.NewsletterForm.errorGeneric"));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("components.NewsletterForm.placeholder")}
                    required
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                    {t("components.NewsletterForm.button")}
                </button>
            </div>
        </form>
    );
}
