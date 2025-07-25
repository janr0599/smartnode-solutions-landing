"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "VP of Operations",
        company: "TechCorp",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
            "SmartNode Solutions has revolutionized how our team collaborates. The automation features alone have saved us 20+ hours per week.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Founder & CEO",
        company: "StartupXYZ",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
            "The analytics dashboard gives us insights we never had before. It's like having a crystal ball for our business.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Project Manager",
        company: "Digital Agency",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
            "Switching to SmartNode Solutions was the best decision we made this year. Our productivity has increased by 40%.",
        rating: 5,
    },
    {
        name: "David Thompson",
        role: "CTO",
        company: "InnovateLabs",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
            "The security features and compliance tools give us peace of mind. Perfect for our enterprise needs.",
        rating: 5,
    },
    {
        name: "Lisa Wang",
        role: "Marketing Director",
        company: "GrowthCo",
        avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
            "SmartNode Solutions's integration capabilities are outstanding. We connected all our tools in just one afternoon.",
        rating: 5,
    },
    {
        name: "James Wilson",
        role: "Operations Lead",
        company: "ScaleUp Inc",
        avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100",
        content:
            "The customer support is exceptional. They helped us migrate our entire workflow seamlessly.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Trusted by{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            50,000+ Teams
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        See what our customers are saying about SmartNode
                        Solutions and how it&apos;s transforming their
                        workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg"
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
                                Join 50,000+ satisfied customers
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
                                4.9/5 rating
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
