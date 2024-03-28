import type { Metadata } from "next";
import "./globals.css";
import { Locale, i18n } from "@/i18n.config";
import Header from "./components/header";
import Script from "next/script";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The next big brick thing",
    description:
        "LEGO prices and availability tracker - we rob and present the best LEGO deals for you",
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    return (
        <html lang={params.lang.slice(0, 2)}>
            <head>
                <Script
                    type="text/javascript"
                    src="//cdn.cookie-script.com/s/122ba1390704f0bacef519b943b3d79e.js"
                ></Script>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-KD0WKDHQ4H" />
                <Script id="google-analytics">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-KD0WKDHQ4H');
                    `}
                </Script>
                <meta name="robots" content="all" />
            </head>
            <body className={inter.className}>
                <Header lang={params.lang} />
                <main>{children}</main>
            </body>
        </html>
    );
}
