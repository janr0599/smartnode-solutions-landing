// src/app/blog/page.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts"; // Import the new data fetching function

const categories = [
    "All",
    "Remote Work",
    "Productivity",
    "Security",
    "Analytics",
    "Startup",
    "Team Building",
];

export default async function Blog() {
    const allPostsData = getSortedPostsData();

    // Since this is a server component, we can't use useState for filtering.
    // Instead, you would use search parameters or a separate client component for filtering.
    // For this example, we'll display all posts.

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

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {/* Note: The category filtering logic needs to be a client component */}
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                variant="outline"
                                className="cursor-pointer hover:bg-blue-100 hover:border-blue-300 transition-colors"
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPostsData.map((post) => (
                            <Card
                                key={post.id}
                                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0"
                            >
                                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            {post.category}
                                        </Badge>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Avatar className="w-8 h-8 mr-3">
                                                <AvatarImage
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                />
                                                <AvatarFallback>
                                                    {post.author.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {post.author.name}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {post.author.role}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {new Date(
                                                post.date
                                            ).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="block mt-4"
                                    >
                                        <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

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
