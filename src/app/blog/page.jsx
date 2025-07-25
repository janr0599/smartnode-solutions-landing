"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "The Future of Remote Work: How SaaS Tools Are Shaping Tomorrow's Workplace",
        excerpt:
            "Discover how modern SaaS platforms are revolutionizing remote work and enabling teams to collaborate more effectively than ever before.",
        author: {
            name: "Sarah Johnson",
            avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
            role: "Product Manager",
        },
        date: "2024-01-15",
        readTime: "5 min read",
        category: "Remote Work",
        image: "https://images.pexels.com/photos/4792369/pexels-photo-4792369.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 2,
        title: "Boosting Team Productivity: 10 Automation Strategies That Actually Work",
        excerpt:
            "Learn practical automation techniques that can save your team hours of manual work every week.",
        author: {
            name: "Michael Chen",
            avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
            role: "Engineering Lead",
        },
        date: "2024-01-12",
        readTime: "7 min read",
        category: "Productivity",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 3,
        title: "Security First: Building Trust in the Age of Cloud Computing",
        excerpt:
            "Understanding the security measures that make modern SaaS platforms safer than traditional on-premise solutions.",
        author: {
            name: "Emily Rodriguez",
            avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
            role: "Security Engineer",
        },
        date: "2024-01-10",
        readTime: "6 min read",
        category: "Security",
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 4,
        title: "Data-Driven Decisions: Making Sense of Your Analytics Dashboard",
        excerpt:
            "Transform raw data into actionable insights with these analytics best practices for growing teams.",
        author: {
            name: "David Thompson",
            avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
            role: "Data Analyst",
        },
        date: "2024-01-08",
        readTime: "4 min read",
        category: "Analytics",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 5,
        title: "Scaling Your Startup: When to Invest in Professional Tools",
        excerpt:
            "A founder's guide to knowing when it's time to upgrade from free tools to professional SaaS solutions.",
        author: {
            name: "Lisa Wang",
            avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100",
            role: "Startup Advisor",
        },
        date: "2024-01-05",
        readTime: "8 min read",
        category: "Startup",
        image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 6,
        title: "The Art of Digital Collaboration: Building Stronger Remote Teams",
        excerpt:
            "Best practices for fostering team culture and collaboration in distributed work environments.",
        author: {
            name: "James Wilson",
            avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100",
            role: "Team Lead",
        },
        date: "2024-01-03",
        readTime: "6 min read",
        category: "Team Building",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];

const categories = [
    "All",
    "Remote Work",
    "Productivity",
    "Security",
    "Analytics",
    "Startup",
    "Team Building",
];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory =
            activeCategory === "All" || post.category === activeCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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

                    <div className="mb-8">
                        <div className="flex items-center  bg-white/80 px-5 rounded-md">
                            <Search className="h-4 w-4 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="border-none rounded-none focus-visible:ring-0 h-11"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                variant={
                                    category === activeCategory
                                        ? "default"
                                        : "outline"
                                }
                                className={`cursor-pointer transition-all duration-300 ${
                                    category === activeCategory
                                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                        : "hover:bg-blue-100 hover:border-blue-300"
                                }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No articles found
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {searchQuery
                                    ? `No articles match "${searchQuery}" in the ${activeCategory} category.`
                                    : `No articles found in the ${activeCategory} category.`}
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setActiveCategory("All");
                                    setSearchQuery("");
                                }}
                            >
                                Clear filters
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <p className="text-gray-600">
                                    {filteredPosts.length === blogPosts.length
                                        ? `Showing all ${filteredPosts.length} articles`
                                        : `Showing ${filteredPosts.length} of ${blogPosts.length} articles`}
                                    {activeCategory !== "All" &&
                                        ` in ${activeCategory}`}
                                    {searchQuery &&
                                        ` matching "${searchQuery}"`}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPosts.map((post) => (
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
                                                    className={`text-xs cursor-pointer transition-colors ${
                                                        post.category ===
                                                        activeCategory
                                                            ? "bg-blue-100 text-blue-800 border-blue-300"
                                                            : "hover:bg-gray-100"
                                                    }`}
                                                    onClick={() =>
                                                        setActiveCategory(
                                                            post.category
                                                        )
                                                    }
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
                                                            src={
                                                                post.author
                                                                    .avatar
                                                            }
                                                            alt={
                                                                post.author.name
                                                            }
                                                        />
                                                        <AvatarFallback>
                                                            {post.author.name
                                                                .split(" ")
                                                                .map(
                                                                    (n) => n[0]
                                                                )
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
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
