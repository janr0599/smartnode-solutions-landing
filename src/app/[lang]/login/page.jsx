"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Mail, Lock, Zap, Github, Chrome } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast.success("You have been successfully signed in.");
            setIsLoading(false);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSocialLogin = (provider) => {
        toast.success(`Redirecting to ${provider} authentication...`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                                Welcome Back
                            </Badge>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Sign in to{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    SmartNode Solutions
                                </span>
                            </h1>
                            <p className="text-gray-600">
                                Access your dashboard and continue your workflow
                            </p>
                        </div>

                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl font-bold text-center">
                                    Sign In
                                </CardTitle>
                                <CardDescription className="text-center">
                                    Enter your credentials to access your
                                    account
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            handleSocialLogin("Google")
                                        }
                                        className="w-full"
                                    >
                                        <Chrome className="w-4 h-4 mr-2" />
                                        Google
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            handleSocialLogin("GitHub")
                                        }
                                        className="w-full"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        GitHub
                                    </Button>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <Separator className="w-full" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-white px-2 text-gray-500">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="pl-10 bg-white"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password">
                                                Password
                                            </Label>
                                            <Link
                                                href="#"
                                                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="password"
                                                name="password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="pl-10 pr-10 bg-white"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                                        size="lg"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                Signing in...
                                            </div>
                                        ) : (
                                            "Sign In"
                                        )}
                                    </Button>
                                </form>

                                <div className="text-center text-sm">
                                    <span className="text-gray-600">
                                        Don&apos;t have an account?{" "}
                                    </span>
                                    <Link
                                        href="/signup"
                                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-500">
                                By signing in, you agree to our{" "}
                                <Link
                                    href="/terms"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/privacy"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
