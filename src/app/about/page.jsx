import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe } from "lucide-react";

const team = [
    {
        name: "Alex Johnson",
        role: "CEO & Founder",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
        bio: "Former VP of Engineering at TechCorp with 15+ years of experience building scalable platforms.",
    },
    {
        name: "Sarah Kim",
        role: "CTO",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
        bio: "Full-stack engineer and architect who led the development of SmartNode Solutions core infrastructure.",
    },
    {
        name: "Michael Chen",
        role: "VP of Product",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
        bio: "Product strategist with a passion for creating intuitive user experiences and growth.",
    },
    {
        name: "Emily Rodriguez",
        role: "VP of Marketing",
        avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
        bio: "Growth marketing expert who has helped scale multiple SaaS companies from startup to IPO.",
    },
];

const stats = [
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: Globe, label: "Countries", value: "25+" },
    { icon: Target, label: "Customer Satisfaction", value: "99%" },
    { icon: Award, label: "Awards Won", value: "12" },
];

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            About SmartNode Solutions
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Building the Future of{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Workplace Productivity
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We&apos;re on a mission to help teams worldwide work
                            smarter, not harder. Founded in 2020, SmartNode
                            Solutions has grown from a simple idea to a platform
                            trusted by over 50,000 teams globally.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg"
                            >
                                <CardHeader className="pb-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-3xl font-bold text-gray-900">
                                        {stat.value}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        {stat.label}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                SmartNode Solutions was born out of frustration
                                with the fragmented tools and inefficient
                                processes that plagued modern workplaces. Our
                                founders, having experienced these pain points
                                firsthand at their previous companies, set out
                                to create a unified platform that would truly
                                streamline workflows.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                What started as a small team of engineers has
                                grown into a diverse, global company with one
                                shared vision: to eliminate the friction that
                                prevents teams from doing their best work.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <span className="text-gray-700">
                                        Founded in 2020 by former enterprise
                                        software leaders
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <span className="text-gray-700">
                                        Raised $50M in Series B funding
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <span className="text-gray-700">
                                        Trusted by Fortune 500 companies
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    To empower every team to achieve
                                    extraordinary results by providing the most
                                    intuitive, powerful, and integrated
                                    productivity platform in the world.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            We&apos;re a diverse team of dreamers, builders, and
                            problem-solvers united by our passion for creating
                            exceptional software.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <Card
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <CardHeader className="text-center">
                                        <Avatar className="w-24 h-24 mx-auto mb-4">
                                            <AvatarImage
                                                src={member.avatar}
                                                alt={member.name}
                                            />
                                            <AvatarFallback>
                                                {member.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <CardTitle className="text-xl font-bold text-gray-900">
                                            {member.name}
                                        </CardTitle>
                                        <p className="text-blue-600 font-semibold">
                                            {member.role}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
