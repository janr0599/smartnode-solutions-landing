import { Toaster } from "sonner";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import the Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SmartNode Solutions - Automation for Small Businesses",
    description:
        "Streamline your workflow with our powerful AI Automation Solutions. Built for modern teams.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                {/* Google tag (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-89ENM9L4J1"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-89ENM9L4J1');
                    `}
                </Script>
            </head>
            <body className={inter.className}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
