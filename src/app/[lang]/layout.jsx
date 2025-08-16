// Path: /app/[lang]/layout.js

import { Toaster } from "sonner";
import Script from "next/script";
import { i18n } from "@/i18n-config";
import { getDictionary } from "@/lib/i18n";
import { I18nProvider } from "@/lib/i18n-provider";

// The Inter font import has been removed from this file.

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

// NOTE: The <html> and <body> tags are REMOVED from this nested layout.
export default async function LangLayout({ children, params }) {
    const common = await getDictionary(params.lang);
    return (
        <I18nProvider dictionary={common}>
            {/* Google Analytics scripts can be placed here. */}
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

            <main>
                {children}
                <Toaster />
            </main>
        </I18nProvider>
    );
}
