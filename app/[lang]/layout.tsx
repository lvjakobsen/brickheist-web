import type { Metadata } from "next";
import "./globals.css";
import { Locale, i18n } from "@/i18n.config";
import Header from "./components/header";

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
            <body className={inter.className}>
                <Header lang={params.lang} />
                <main>{children}</main>
            </body>
        </html>
    );
}
