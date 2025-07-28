"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Maria Sanchez",
        role: "Owner",
        company: "Local Bake Shop",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100", // Placeholder, ideally specific to small business owners
        content:
            "Our administrative tasks used to take hours. This AI solution handles everything seamlessly, freeing us to focus on our craft. Truly a game-changer for our small business!",
        rating: 5,
    },
    {
        name: "John Miller",
        role: "CEO",
        company: "E-commerce Boutique",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100", // Placeholder
        content:
            "The custom workflow automation implemented by the agency has drastically improved our order processing and customer service. It's like having an extra team member.",
        rating: 5,
    },
    {
        name: "Aisha Khan",
        role: "Clinic Manager",
        company: "Family Health Clinic",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100", // Placeholder
        content:
            "We needed a specific solution for patient scheduling and reminders. This agency delivered a perfect, tailored AI system that fits our clinic's unique needs.",
        rating: 5,
    },
    {
        name: "Roberto Gomez",
        role: "Operations Director",
        company: "Logistics Innovators",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100", // Placeholder
        content:
            "Their expertise in AI for logistics is unmatched. The custom solution they built streamlined our inventory management and reduced errors significantly.",
        rating: 5,
    },
    {
        name: "Sophia Lee",
        role: "Marketing Lead",
        company: "Creative Digital Studio",
        avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100", // Placeholder
        content:
            "We thought AI was only for big corporations, but this agency showed us how accessible and powerful it is for small businesses. Our marketing campaigns are now smarter and more efficient.",
        rating: 5,
    },
    {
        name: "Kevin Wong",
        role: "Restaurant Owner",
        company: "Gourmet Bistro",
        avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100", // Placeholder
        content:
            "The personalized approach to automation made all the difference. They truly understood our pain points and delivered a solution that has transformed our daily operations.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Empowering{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Small Businesses
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Hear directly from the small business owners and teams
                        who are achieving new levels of efficiency and growth
                        with our tailored AI automation solutions.
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
                                Trusted by businesses like yours
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
                                5-star success stories
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
