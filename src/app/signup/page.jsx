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
import { Checkbox } from "@/components/ui/checkbox";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    Building,
    Chrome,
    Github,
    Check,
} from "lucide-react";
import { toast } from "sonner";

export default function Signup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Please make sure your passwords match.");
            return;
        }

        if (!agreedToTerms) {
            toast.error("Please agree to the terms and conditions.");
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast.success(
                "Welcome to SmartNode Solutions. Your account has been created successfully."
            );
            setIsLoading(false);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSocialSignup = (provider) => {
        toast.success(`Redirecting to ${provider} authentication...`);
    };

    const passwordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };

    const getStrengthColor = (strength) => {
        if (strength < 2) return "bg-red-500";
        if (strength < 4) return "bg-yellow-500";
        return "bg-green-500";
    };

    const getStrengthText = (strength) => {
        if (strength < 2) return "Weak";
        if (strength < 4) return "Medium";
        return "Strong";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                                Get Started
                            </Badge>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Join{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    SmartNode Solutions
                                </span>
                            </h1>
                            <p className="text-gray-600">
                                Create your account and start your free trial
                                today
                            </p>
                        </div>

                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl font-bold text-center">
                                    Create Account
                                </CardTitle>
                                <CardDescription className="text-center">
                                    Fill in your details to get started
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            handleSocialSignup("Google")
                                        }
                                        className="w-full"
                                    >
                                        <Chrome className="w-4 h-4 mr-2" />
                                        Google
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            handleSocialSignup("GitHub")
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
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">
                                                First Name
                                            </Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                <Input
                                                    id="firstName"
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="John"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="pl-10 bg-white"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">
                                                Last Name
                                            </Label>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                placeholder="Doe"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="bg-white"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="pl-10 bg-white"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">
                                            Company (Optional)
                                        </Label>
                                        <div className="relative">
                                            <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="company"
                                                name="company"
                                                type="text"
                                                placeholder="Your company name"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="pl-10 bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
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
                                                placeholder="Create a strong password"
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
                                        {formData.password && (
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-gray-500">
                                                        Password strength:
                                                    </span>
                                                    <span
                                                        className={`font-medium ${
                                                            passwordStrength(
                                                                formData.password
                                                            ) < 2
                                                                ? "text-red-500"
                                                                : passwordStrength(
                                                                      formData.password
                                                                  ) < 4
                                                                ? "text-yellow-500"
                                                                : "text-green-500"
                                                        }`}
                                                    >
                                                        {getStrengthText(
                                                            passwordStrength(
                                                                formData.password
                                                            )
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1">
                                                    <div
                                                        className={`h-1 rounded-full transition-all duration-300 ${getStrengthColor(
                                                            passwordStrength(
                                                                formData.password
                                                            )
                                                        )}`}
                                                        style={{
                                                            width: `${
                                                                (passwordStrength(
                                                                    formData.password
                                                                ) /
                                                                    5) *
                                                                100
                                                            }%`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword">
                                            Confirm Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={
                                                    showConfirmPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Confirm your password"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className="pl-10 pr-10 bg-white"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        !showConfirmPassword
                                                    )
                                                }
                                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                        {formData.confirmPassword &&
                                            formData.password !==
                                                formData.confirmPassword && (
                                                <p className="text-xs text-red-500">
                                                    Passwords do not match
                                                </p>
                                            )}
                                        {formData.confirmPassword &&
                                            formData.password ===
                                                formData.confirmPassword && (
                                                <p className="text-xs text-green-500 flex items-center">
                                                    <Check className="w-3 h-3 mr-1" />
                                                    Passwords match
                                                </p>
                                            )}
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="terms"
                                            checked={agreedToTerms}
                                            onCheckedChange={(checked) =>
                                                setAgreedToTerms(checked)
                                            }
                                        />
                                        <Label
                                            htmlFor="terms"
                                            className="text-sm text-gray-600"
                                        >
                                            I agree to the{" "}
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
                                        </Label>
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
                                                Creating account...
                                            </div>
                                        ) : (
                                            "Create Account"
                                        )}
                                    </Button>
                                </form>

                                <div className="text-center text-sm">
                                    <span className="text-gray-600">
                                        Already have an account?{" "}
                                    </span>
                                    <Link
                                        href="/login"
                                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <Check className="w-4 h-4 text-green-500 mr-1" />
                                    14-day free trial
                                </div>
                                <div className="flex items-center">
                                    <Check className="w-4 h-4 text-green-500 mr-1" />
                                    No credit card required
                                </div>
                                <div className="flex items-center">
                                    <Check className="w-4 h-4 text-green-500 mr-1" />
                                    Cancel anytime
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
