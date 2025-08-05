// src/app/blog/[id]/page.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostData, getAllPostIds } from "@/lib/posts";

export default async function BlogPostPage({ params }) {
    const { id } = await params;

    const postData = await getPostData(id);

    if (!postData) {
        notFound();
    }

    const {
        contentHtml,
        title,
        excerpt,
        author,
        date,
        readTime,
        category,
        image,
    } = postData;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            <article className="py-20 lg:py-32">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to all articles
                    </Link>

                    {/* Blog Post Header */}
                    <div className="text-center mb-12">
                        <Badge
                            className={`mb-4 transition-colors bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg`}
                        >
                            {category}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            {excerpt}
                        </p>
                        <div className="flex items-center justify-center space-x-6 text-gray-500">
                            <div className="flex items-center">
                                <Avatar className="w-9 h-9 mr-3">
                                    <AvatarImage
                                        src={author.avatar}
                                        alt={author.name}
                                    />
                                    <AvatarFallback>
                                        {author.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">
                                        {author.name}
                                    </div>
                                    <div className="text-xs">{author.role}</div>
                                </div>
                            </div>
                            <span className="h-6 w-px bg-gray-300"></span>
                            <div className="flex items-center text-sm">
                                <Calendar className="w-4 h-4 mr-2" />
                                {new Date(date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center text-sm">
                                <Clock className="w-4 h-4 mr-2" />
                                {readTime}
                            </div>
                        </div>
                    </div>

                    {/* Blog Post Image */}
                    <div className="rounded-lg overflow-hidden shadow-lg mb-12">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Blog Post Content */}
                    <div
                        className="prose prose-lg mx-auto text-gray-800"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </div>
            </article>

            <Footer />
        </div>
    );
}

// Generate all possible paths at build time
export async function generateStaticParams() {
    return getAllPostIds();
}
