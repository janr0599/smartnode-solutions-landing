// Path: /app/layout.js

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SmartNode Solutions - Automation for Small Businesses",
    description:
        "Streamline your workflow with our powerful AI Automation Solutions. Built for modern teams.",
};

// This is the one and only root layout. It provides the html and body tags.
export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
