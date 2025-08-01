"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        toast.success("We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", company: "", message: "" });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            Contact Us
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Let&apos;s Start a{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Conversation
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Have questions about SmartNode Solutions? Want to
                            see a demo? Our team is here to help. Reach out and
                            we&apos;ll get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-gray-900">
                                        Send us a message
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">
                                                    Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your name"
                                                    required
                                                    className="bg-white"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                    required
                                                    className="bg-white"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company">
                                                Company
                                            </Label>
                                            <Input
                                                id="company"
                                                name="company"
                                                type="text"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your company name"
                                                className="bg-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">
                                                Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your project or ask any questions..."
                                                rows={5}
                                                required
                                                className="bg-white"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                                            size="lg"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                                        <Mail className="w-5 h-5 mr-2 text-blue-500" />
                                        Email us
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        For general inquiries and support
                                        questions.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 w-20">
                                                General:
                                            </span>
                                            <span className="text-gray-900">
                                                hello@smartnode.solutions
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 w-20">
                                                Support:
                                            </span>
                                            <span className="text-gray-900">
                                                support@smartnode.solutions
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 w-20">
                                                Sales:
                                            </span>
                                            <span className="text-gray-900">
                                                sales@smartnode.solutions
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                                        <Phone className="w-5 h-5 mr-2 text-green-500" />
                                        Call us
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Speak with our team directly.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 w-20">
                                                US:
                                            </span>
                                            <span className="text-gray-900">
                                                +1 (555) 123-4567
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 w-20">
                                                UK:
                                            </span>
                                            <span className="text-gray-900">
                                                +44 20 7123 4567
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                                        <MapPin className="w-5 h-5 mr-2 text-red-500" />
                                        Visit us
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Our headquarters in San Francisco.
                                    </p>
                                    <address className="text-gray-900 not-italic">
                                        123 Innovation Drive
                                        <br />
                                        San Francisco, CA 94105
                                        <br />
                                        United States
                                    </address>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-purple-500" />
                                        Support hours
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">
                                                Monday - Friday:
                                            </span>
                                            <span className="text-gray-900">
                                                9AM - 6PM PST
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">
                                                Saturday:
                                            </span>
                                            <span className="text-gray-900">
                                                10AM - 4PM PST
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">
                                                Sunday:
                                            </span>
                                            <span className="text-gray-900">
                                                Closed
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card> */}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
