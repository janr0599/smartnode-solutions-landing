"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Workflow } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Workflow className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            SmartNode Solutions
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/#features"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="/#pricing"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Blog
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/contact">
                            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/#features"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#pricing"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/blog"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Blog
                            </Link>
                            <div className="flex flex-col space-y-2 pt-4">
                                <Link href="/contact">
                                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
