"use client";

import Link from "next/link";
import { Workflow } from "lucide-react";
import { FiInstagram, FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";
import { useTranslation } from "@/lib/i18n-provider"; // Import the useTranslation hook
import { useParams } from "next/navigation";
import Image from "next/image";

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    const params = useParams();
    const locale = params.lang;

    const productLinks = [
        { name: t("components.Footer.features"), href: `/${locale}/#features` },
        { name: t("components.Footer.plans"), href: `/${locale}/#plans` },
        {
            name: t("components.Footer.caseStudies"),
            href: `/${locale}/case-studies`,
        },
    ];

    const companyLinks = [
        { name: t("components.Footer.about"), href: `/${locale}/about` },
        { name: t("components.Footer.blog"), href: `/${locale}/blog` },
        { name: t("components.Footer.contact"), href: `/${locale}/contact` },
    ];

    const legalLinks = [
        {
            name: t("components.Footer.privacyPolicy"),
            href: `/${locale}/privacy-policy`,
        },
        {
            name: t("components.Footer.termsOfService"),
            href: `/${locale}/terms-of-service`,
        },
        {
            name: t("components.Footer.cookiePolicy"),
            href: `/${locale}/cookie-policy`,
        },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link
                            href={`/${locale}`}
                            className="flex items-center space-x-2 mb-4"
                        >
                            {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Workflow className="w-5 h-5 text-white" />
                            </div> */}
                            <Image
                                src="/SMARTNODE_ISOTIPO_WHITE.svg"
                                alt="Company Logo"
                                width={32}
                                height={32}
                            />
                            <span className="text-xl font-bold">
                                {t("components.Footer.companyName")}
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            {t("components.Footer.description")}
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.instagram.com/smartnode.solutions/"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FiInstagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.facebook.com/profile.php?id=61578950055630"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FiFacebook className="w-5 h-5" />
                            </Link>
                            {/* <Link
                                href="#"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FiLinkedin className="w-5 h-5" />
                            </Link> */}
                            <Link
                                href={`mailto:${t(
                                    "contact.emailSection.generalEmail"
                                )}`}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FiMail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            {t("components.Footer.product")}
                        </h3>
                        <ul className="space-y-2">
                            {productLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            {t("components.Footer.company")}
                        </h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm text-center">
                            © {currentYear} {t("components.Footer.companyName")}
                            . {t("components.Footer.copyright")}
                        </p>
                        <div className="flex gap-6 flex-wrap max-[400px]:justify-center mt-4 md:mt-0">
                            {legalLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white text-sm transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
