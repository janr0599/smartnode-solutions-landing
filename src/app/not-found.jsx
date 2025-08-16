// Path: /app/not-found.js

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Wrench } from "lucide-react";
import { getDictionary } from "@/lib/i18n";
import "@/app/globals.css";
import { i18n } from "@/i18n-config";

// This is a Server Component that now defaults to a single language.
export default async function NotFound() {
    // **FIX:** Fetch the dictionary for the default language (e.g., 'en').
    // Reading headers here forces pages to be dynamic, causing build errors.
    const lang = i18n.defaultLocale;
    const dict = await getDictionary(lang);
    const notFoundContent = dict.notFound || {};

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
            <main className="flex-grow flex items-center justify-center text-center px-4">
                <div>
                    <div className="relative inline-block mb-8">
                        <Wrench className="w-16 h-16 text-blue-300 transform -rotate-12" />
                        <Search className="absolute w-20 h-20 text-purple-300 top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4" />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
                        {notFoundContent.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
                        {notFoundContent.description}
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity text-lg px-8 py-6 group"
                    >
                        {/* Link back to the default language homepage */}
                        <Link href={`/${lang}`}>
                            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                            {notFoundContent.button}
                        </Link>
                    </Button>
                </div>
            </main>
        </div>
    );
}
