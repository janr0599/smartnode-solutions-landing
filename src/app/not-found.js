import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Wrench } from "lucide-react";
import { getDictionary } from "@/lib/i18n"; // Server-side dictionary function
// import Header from "@/components/Header"; // Import Header
// import Footer from "@/components/Footer"; // Import Footer
import "@/app/globals.css"; // Import global styles

export default async function NotFound() {
    // Fetch translations for a default language (e.g., 'en') on the server
    const dict = await getDictionary("en");
    const notFoundContent = dict.notFound || {};

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
            {/* <Header /> */}
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
                    {/* The link now safely defaults to the English homepage */}
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity text-lg px-8 py-6 group"
                    >
                        <Link href="/en">
                            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                            {notFoundContent.button}
                        </Link>
                    </Button>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}
