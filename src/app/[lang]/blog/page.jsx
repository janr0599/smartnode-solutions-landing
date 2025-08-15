import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogControls from "@/components/BlogControls"; // Import the new client component
import { Badge } from "@/components/ui/badge";
import { getSortedPostsData } from "@/lib/posts"; // Import the data fetching function
import NewsletterForm from "@/components/NewsletterForm";
import { getDictionary } from "@/lib/i18n"; // Correct server-side import

export default async function Blog({ params: { lang } }) {
    const common = await getDictionary(lang);
    const allPostsData = getSortedPostsData();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {common.blog.badge}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            {common.blog.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {common.blog.description}
                        </p>
                    </div>

                    <BlogControls posts={allPostsData} />

                    <div className="mt-16 text-center">
                        <p className="text-gray-600 mb-4">
                            {common.blog.newsletterPrompt}
                        </p>
                        <NewsletterForm />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
