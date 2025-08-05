// src/app/blog/page.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogControls from "@/components/BlogControls"; // Import the new client component
import { Badge } from "@/components/ui/badge";
import { getSortedPostsData } from "@/lib/posts"; // Import the data fetching function

export default async function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            Blog
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Insights & Stories from{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                SmartNode Solutions
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Stay updated with the latest trends in productivity,
                            remote work, and team collaboration. Learn from our
                            experiences and industry insights.
                        </p>
                    </div>

                    {/* Render the new client component and pass the posts as a prop */}
                    <BlogControls posts={allPostsData} />

                    <div className="mt-16 text-center">
                        <p className="text-gray-600 mb-4">
                            Want to stay updated with our latest posts?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
