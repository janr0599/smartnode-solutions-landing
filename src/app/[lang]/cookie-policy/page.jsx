// src/app/[lang]/privacy-policy/page.jsx (Server Component)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { i18n } from "@/i18n-config";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function PrivacyPolicyPage({ params: { lang } }) {
    const common = await getDictionary(lang);

    // This line has been corrected to use the correct nested path.
    const legalPagesData = common?.components?.LegalPages?.cookies || {};

    if (!legalPagesData) {
        notFound();
    }

    const { title, lastUpdated, sections } = legalPagesData;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            <main className="container mx-auto px-4 py-20 lg:py-32 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-500">{lastUpdated}</p>
                </div>

                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {section.heading}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
