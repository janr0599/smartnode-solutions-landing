import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCasesControls from "@/components/SuccessCasesControls"; // Componente cliente
import { Badge } from "@/components/ui/badge";
import { getSortedSuccessCasesData } from "@/lib/successCases"; // Lógica de datos
import { getDictionary } from "@/lib/i18n";

export default async function SuccessCasesPage({ params: { lang } }) {
    const common = await getDictionary(lang);
    const allCasesData = getSortedSuccessCasesData(lang); // Pasa el idioma

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {common.successCases.badge}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            {common.successCases.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {common.successCases.description}
                        </p>
                    </div>

                    {/* Componente Cliente para filtros y la galería */}
                    <SuccessCasesControls cases={allCasesData} />
                </div>
            </section>
            <Footer />
        </div>
    );
}
