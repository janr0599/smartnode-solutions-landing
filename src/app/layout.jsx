// Path: /app/layout.js

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Define metadata for reuse
const siteMetadata = {
    title: "SmartNode Solutions - AI Automation for Small Businesses",
    description:
        "We help small businesses navigate the complexities of AI to implement automation solutions that drive real growth and operational excellence. Custom workflows for sales, marketing, and operations.",
    url: "https://www.smartnode.solutions", // Replace with your actual domain
    siteName: "SmartNode Solutions",
    image: "https://res.cloudinary.com/dijjudk6z/image/upload/v1757385586/SMARTNODE_LOGO_BASE_HORIZONTAL_hv1aqs.png", // IMPORTANT: Create and upload this image
    // twitterHandle: "@yourtwitterhandle", // Optional: Your Twitter handle
};

export const metadata = {
    // --- Basic SEO ---
    title: {
        default: siteMetadata.title,
        template: `%s | ${siteMetadata.siteName}`, // For inner pages: "Page Title | SmartNode Solutions"
    },
    description: siteMetadata.description,

    // --- Favicons ---
    icons: {
        icon: [
            { url: "/SMARTNODE_ISOTIPO.svg", type: "image/svg+xml" },
            { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        ],
        apple: "/apple-touch-icon.png",
    },

    // --- Canonical URL and Robots ---
    metadataBase: new URL(siteMetadata.url),
    alternates: {
        canonical: "/",
    },
    robots: {
        // Optional: Set default robot rules
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // --- Open Graph (for social sharing) ---
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.url,
        siteName: siteMetadata.siteName,
        images: [
            {
                url: siteMetadata.image,
                width: 1200,
                height: 630,
                alt: "SmartNode Solutions - AI Automation",
            },
        ],
        locale: "en_US",
        alternateLocale: ["es_ES"], // Optional: Add other locales if applicable
        type: "website",
    },

    // --- Twitter Card (for X sharing) ---
    twitter: {
        card: "summary_large_image",
        title: siteMetadata.title,
        description: siteMetadata.description,
        // creator: siteMetadata.twitterHandle, // Optional
        images: [siteMetadata.image],
    },

    other: {
        "fb:app_id": "1939763916870955", // Optional: Facebook App ID
    },
};

// This is the one and only root layout.
export default function RootLayout({ children, params }) {
    return (
        <html lang={params.lang || "en"} className="scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
