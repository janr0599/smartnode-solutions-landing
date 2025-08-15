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
import { useTranslation } from "@/lib/i18n-provider";

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success(t("contact.form.success"));
                setFormData({ name: "", email: "", company: "", message: "" });
            } else {
                toast.error(t("contact.form.error"));
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error(t("contact.form.errorGeneric"));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {t("contact.badge")}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            {t("contact.title")
                                .split(" ")
                                .slice(0, -1)
                                .join(" ")}{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {t("contact.title").split(" ").pop()}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {t("contact.description")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-gray-900">
                                        {t("contact.form.title")}
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
                                                    {t("contact.form.name")}
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder={t(
                                                        "contact.form.name"
                                                    )}
                                                    required
                                                    className="bg-white"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">
                                                    {t("contact.form.email")}
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder={t(
                                                        "contact.form.email"
                                                    )}
                                                    required
                                                    className="bg-white"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company">
                                                {t("contact.form.company")}
                                            </Label>
                                            <Input
                                                id="company"
                                                name="company"
                                                type="text"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder={t(
                                                    "contact.form.company"
                                                )}
                                                className="bg-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">
                                                {t("contact.form.message")}
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder={t(
                                                    "contact.form.message"
                                                )}
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
                                            {t("contact.form.send")}
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
                                        {t("contact.emailSection.title")}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        {t("contact.emailSection.description")}
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 w-20">
                                                {t(
                                                    "contact.emailSection.general"
                                                )}
                                            </span>
                                            <a
                                                href={`mailto:${t(
                                                    "contact.emailSection.generalEmail"
                                                )}`}
                                                className="text-gray-900 hover:text-blue-600 transition-colors"
                                            >
                                                {t(
                                                    "contact.emailSection.generalEmail"
                                                )}
                                            </a>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 w-20">
                                                {t(
                                                    "contact.emailSection.support"
                                                )}
                                            </span>
                                            <a
                                                href={`mailto:${t(
                                                    "contact.emailSection.supportEmail"
                                                )}`}
                                                className="text-gray-900 hover:text-blue-600 transition-colors"
                                            >
                                                {t(
                                                    "contact.emailSection.supportEmail"
                                                )}
                                            </a>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 w-20">
                                                {t(
                                                    "contact.emailSection.sales"
                                                )}
                                            </span>
                                            <a
                                                href={`mailto:${t(
                                                    "contact.emailSection.salesEmail"
                                                )}`}
                                                className="text-gray-900 hover:text-blue-600 transition-colors"
                                            >
                                                {t(
                                                    "contact.emailSection.salesEmail"
                                                )}
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-purple-500" />
                                        {t("contact.supportHours.title")}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">
                                                {t(
                                                    "contact.supportHours.mondayFriday"
                                                )}
                                            </span>
                                            <span className="text-gray-900">
                                                {t(
                                                    "contact.supportHours.mondayFridayHours"
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">
                                                {t(
                                                    "contact.supportHours.saturday"
                                                )}
                                            </span>
                                            <span className="text-gray-900">
                                                {t(
                                                    "contact.supportHours.saturdayHours"
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">
                                                {t(
                                                    "contact.supportHours.sunday"
                                                )}
                                            </span>
                                            <span className="text-gray-900">
                                                {t(
                                                    "contact.supportHours.sundayHours"
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
