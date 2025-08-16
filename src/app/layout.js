// Path: /app/layout.js

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// This is the main root layout that provides the html and body tags.
// It will wrap your not-found.js page and also the layout in /app/[lang]/layout.js
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
