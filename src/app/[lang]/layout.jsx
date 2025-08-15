import { Toaster } from "sonner";
import "../globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { i18n } from "@/i18n-config";
import { getDictionary } from "@/lib/i18n";
import { I18nProvider } from "@/lib/i18n-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SmartNode Solutions - Automation for Small Businesses",
    description:
        "Streamline your workflow with our powerful AI Automation Solutions. Built for modern teams.",
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }) {
    const common = await getDictionary(params.lang);
    return (
        <html lang={params.lang} className="scroll-smooth">
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
                <I18nProvider dictionary={common}>
                    <main>
                        {children}
                        <Toaster />
                    </main>
                </I18nProvider>
            </body>
        </html>
    );
}
