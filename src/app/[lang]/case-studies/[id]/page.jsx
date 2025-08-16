import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSuccessCaseData } from "@/lib/successCases";
import { getDictionary } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowLeft,
    Target,
    Wrench,
    BarChart3,
    MessageSquareQuote,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

export default async function SuccessCasePage({ params: { id, lang } }) {
    const caseData = await getSuccessCaseData(id, lang);
    const common = await getDictionary(lang);
    const t = common.successCasePage; // Traducciones específicas de esta página

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />
            <main className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href={`/${lang}/case-studies`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            {t.backLink}
                        </Link>

                        <article className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg">
                            <header className="mb-10 border-b pb-8">
                                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                                    {caseData.industry}
                                </Badge>
                                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                    {caseData.title}
                                </h1>
                                <p className="text-lg text-gray-600">
                                    {t.clientLabel}:{" "}
                                    <span className="font-semibold text-gray-800">
                                        {caseData.clientName}
                                    </span>
                                </p>
                            </header>

                            <div className="space-y-12 prose prose-lg max-w-none prose-p:text-gray-700 prose-h2:text-gray-800">
                                <section>
                                    <h2 className="flex items-center font-bold mb-4">
                                        <Target className="w-6 h-6 mr-3 text-red-500" />
                                        {t.challengeTitle}
                                    </h2>
                                    <p>{caseData.challenge}</p>
                                </section>

                                <section>
                                    <h2 className="flex items-center font-bold mb-4">
                                        <Wrench className="w-6 h-6 mr-3 text-blue-500" />
                                        {t.solutionTitle}
                                    </h2>
                                    <p>{caseData.solution}</p>
                                </section>

                                <section>
                                    <h2 className="flex items-center font-bold mb-4">
                                        <BarChart3 className="w-6 h-6 mr-3 text-green-500" />
                                        {t.resultsTitle}
                                    </h2>
                                    <ul className="list-none p-0 space-y-3">
                                        {caseData.results.map(
                                            (result, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start"
                                                >
                                                    <span className="text-green-500 font-bold mr-2">
                                                        ✔
                                                    </span>
                                                    <span>{result}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </section>

                                {caseData.testimonial && (
                                    <section className="bg-slate-100 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                                        <MessageSquareQuote className="w-8 h-8 text-blue-300 mb-4" />
                                        <blockquote className="text-xl italic text-gray-800 mb-4 not-prose">
                                            "{caseData.testimonial}"
                                        </blockquote>
                                        <footer className="text-right not-prose">
                                            <p className="font-bold text-gray-900">
                                                {caseData.testimonialAuthor}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {caseData.testimonialRole}
                                            </p>
                                        </footer>
                                    </section>
                                )}
                            </div>

                            <div className="mt-16 text-center border-t pt-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {t.ctaTitle}
                                </h3>
                                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                                    {t.ctaDescription}
                                </p>

                                {/* Make CTA full-width on small screens and auto-width on larger screens */}
                                <Link
                                    href={t.ctaButtonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full max-w-xs mx-auto sm:inline-block sm:max-w-auto"
                                >
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 h-auto text-lg font-semibold group pointer-events-auto"
                                    >
                                        {t.ctaButton}
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
