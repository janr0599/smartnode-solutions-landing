"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "@/lib/i18n-provider"; // Import the useTranslation hook

const Testimonials = () => {
    const { t } = useTranslation();

    const testimonialsData =
        t("components.Testimonials", { returnObjects: true }) || {};
    const testimonials = testimonialsData.testimonials || [];

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {testimonialsData.title.replace(
                            testimonialsData.titleHighlight
                        )}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {testimonialsData.titleHighlight}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {testimonialsData.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Quote className="w-8 h-8 text-blue-500 opacity-50" />
                                    <div className="flex ml-auto">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 text-yellow-400 fill-current"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                <div className="flex items-center">
                                    <Avatar className="w-12 h-12 mr-4">
                                        <AvatarImage
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            style={{ objectFit: "cover" }}
                                        />
                                        <AvatarFallback>
                                            {testimonial.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {testimonial.role} at{" "}
                                            {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center max-sm:flex-col gap-8 bg-white rounded-full px-8 py-4 shadow-lg">
                        <div className="flex items-center max-sm:flex-col max-sm:gap-3">
                            <div className="flex -space-x-2">
                                {testimonials
                                    .slice(0, 4)
                                    .map((testimonial, index) => (
                                        <Avatar
                                            key={index}
                                            className="w-8 h-8 border-2 border-white"
                                        >
                                            <AvatarImage
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                style={{ objectFit: "cover" }}
                                            />
                                            <AvatarFallback>
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                    ))}
                            </div>
                            <span className="ml-4 text-sm text-gray-600">
                                {testimonialsData.trustedBy}
                            </span>
                        </div>
                        <div className="flex items-center">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-yellow-400 fill-current"
                                    />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                                {testimonialsData.fiveStar}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
