"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/lib/i18n-provider";
import { useParams } from "next/navigation";

export default function BlogControls({ posts }) {
    const { t } = useTranslation();
    const params = useParams();
    const lang = params.lang;
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState(
        t("components.BlogControls.categories.0")
    );

    const categories =
        t("components.BlogControls.categories", { returnObjects: true }) || [];

    const filteredPosts =
        posts?.filter((post) => {
            const matchesCategory =
                activeCategory === categories[0] ||
                post.category === activeCategory;
            const matchesSearch =
                (post.title?.toLowerCase() || "").includes(
                    searchQuery.toLowerCase()
                ) ||
                (post.excerpt?.toLowerCase() || "").includes(
                    searchQuery.toLowerCase()
                ) ||
                (post.category?.toLowerCase() || "").includes(
                    searchQuery.toLowerCase()
                );
            return matchesCategory && matchesSearch;
        }) || [];

    return (
        <>
            {/* Search and Filter Section */}
            <div className="max-w-xl mx-auto mb-12 flex items-center gap-2">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        type="text"
                        placeholder={t(
                            "components.BlogControls.searchPlaceholder"
                        )}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category, index) => (
                    <Badge
                        key={index}
                        variant={
                            activeCategory === category ? "default" : "outline"
                        }
                        className={`cursor-pointer transition-colors px-4 py-2 text-sm ${
                            activeCategory === category
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "hover:bg-blue-100 hover:border-blue-300"
                        }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </Badge>
                ))}
            </div>

            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                    // The Link component now wraps the entire Card
                    <Link
                        href={`/${lang}/blog/${post.id}`}
                        key={post.id}
                        className="group"
                    >
                        <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 flex flex-col">
                            <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
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
                            <CardContent className="flex flex-col flex-grow">
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center">
                                        <Avatar className="w-8 h-8 mr-3">
                                            <AvatarImage
                                                src={post.author?.avatar}
                                                alt={post.author?.name}
                                            />
                                            <AvatarFallback>
                                                {(post.author?.name || "")
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">
                                                {post.author?.name}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {post.author?.role}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors text-sm font-medium">
                                        {t("components.BlogControls.readMore")}
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    );
}
