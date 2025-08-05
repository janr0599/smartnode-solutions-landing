"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe } from "lucide-react";
import CountUp from "react-countup";

const team = [
    {
        name: "Javier Noguera",
        role: "CEO & Co-Founder", // Kept the CEO title for clarity and authority
        avatar: "/javiernoguera202311.jpg",
        bio: "Javier brings a unique blend of engineering and low-code expertise, building the technical foundation for our tailored automation solutions. He is the architect behind our mission to simplify complex workflows.",
    },
    {
        name: "Roselis Perez",
        role: "Project Management Lead",
        avatar: "/roselisperez202311.jpg",
        bio: "With a Master's in Project Management, Roselis ensures every client project is executed flawlessly. Her focus on clear communication and methodical execution guarantees that our solutions deliver tangible results.",
    },
];

const stats = [
    // This is placeholder content for now. If you have real stats, use them.
    // Otherwise, these can be aspirational or removed.
    { icon: Users, label: "Projects Delivered", value: "50" },
    { icon: Globe, label: "Industries Served", value: "10" },
    { icon: Target, label: "Average ROI", value: "300" },
    { icon: Award, label: "Hours Saved", value: "1000" },
];

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            Our Story
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Simplifying Business with{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Smart Automation
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            At SmartNode Solutions, we believe that powerful
                            automation should be accessible to every business,
                            regardless of size. We’re on a mission to free small
                            business owners and their teams from tedious,
                            repetitive tasks so they can focus on what truly
                            matters: growth and innovation.
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
                                        <CountUp
                                            start={0}
                                            end={stat.value}
                                            duration={3.5}
                                            suffix={
                                                stat.label.includes("ROI")
                                                    ? "%"
                                                    : "+"
                                            }
                                            enableScrollSpy
                                            scrollSpyOnce={true}
                                        >
                                            {({ countUpRef }) => (
                                                <span
                                                    ref={countUpRef}
                                                    className="text-2xl font-bold"
                                                />
                                            )}
                                        </CountUp>
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
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We are dedicated to empowering small and
                                medium-sized businesses with custom-built AI
                                automation solutions. Our approach is to work
                                closely with you to understand your unique
                                challenges and build powerful, scalable
                                workflows using low-code, no-code, and full code
                                tools that deliver a clear return on investment.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our vision is to be the go-to partner for
                                businesses seeking to harness the power of AI to
                                work smarter, not harder. We don't just build
                                solutions; we build long-term partnerships based
                                on trust, expertise, and a shared commitment to
                                your success.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <span className="text-gray-700">
                                        Founded on the principle of accessible
                                        technology
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <span className="text-gray-700">
                                        Dedicated to tailored solutions, not
                                        one-size-fits-all products
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                    <span className="text-gray-700">
                                        Expertise in low-code, no-code, and full
                                        code platforms
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">
                                    Why We Do What We Do
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    We started SmartNode Solutions to eliminate
                                    the daily frustrations caused by manual,
                                    repetitive work. Our motivation comes from
                                    seeing businesses thrive once they are freed
                                    from mundane tasks, allowing them to focus
                                    on innovation, strategy, and serving their
                                    customers better.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Meet Our Leadership
                        </h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            We are a small but mighty team of builders and
                            strategists, united by a passion for solving complex
                            business problems with elegant, effective
                            automation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:max-w-2xl gap-8 lg:mx-auto">
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
                                                style={{ objectFit: "cover" }}
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
