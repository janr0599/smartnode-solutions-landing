"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n-provider";
import { useParams } from "next/navigation";
import Image from "next/image";

const Header = () => {
    const { t } = useTranslation();
    const params = useParams();
    const locale = params.lang;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: t("components.Header.features"), href: `/${locale}#features` },
        { name: t("components.Header.plans"), href: `/${locale}#plans` },
        {
            name: t("components.Header.caseStudies"),
            href: `/${locale}/case-studies`,
        },
        { name: t("components.Header.about"), href: `/${locale}/about` },
        { name: t("components.Header.contact"), href: `/${locale}/contact` },
        { name: t("components.Header.blog"), href: `/${locale}/blog` },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between md:gap-4">
                    <Link
                        href={`/${locale}`}
                        className="flex items-center space-x-2"
                    >
                        {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Workflow className="w-5 h-5 text-white" />
                        </div> */}
                        <Image
                            src="/SmartNode_Logo.svg"
                            alt="Company Logo"
                            width={32}
                            height={32}
                        />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t("components.Header.companyName")}
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-4 lg:space-x-8 lg:mr-36">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center">
                        <Link href={`/${locale}/contact`}>
                            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                                {t("components.Header.getInTouch")}
                            </Button>
                        </Link>
                    </div>

                    <button
                        className="lg:hidden"
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
                    <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-2 pt-4">
                                <Link href={`/${locale}/contact`}>
                                    <Button
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {t("components.Header.getInTouch")}
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
