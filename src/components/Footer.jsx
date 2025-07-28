import Link from "next/link";
import { Workflow } from "lucide-react";
import { FiInstagram, FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 mb-4"
                        >
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Workflow className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">
                                SmartNode Solutions
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Streamline your workflow with our powerful SaaS
                            platform. Built for modern teams who want to achieve
                            more.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FiInstagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FiFacebook className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FiLinkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="mailto:smartnode.solutions"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FiMail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#features"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#pricing"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/case-studies"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Case Studies
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm text-center">
                            © {currentYear} SmartNode Solutions. All rights
                            reserved.
                        </p>
                        <div className="flex gap-6 flex-wrap max-[400px]:justify-center mt-4 md:mt-0">
                            <Link
                                href="/privacy"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/cookies"
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
