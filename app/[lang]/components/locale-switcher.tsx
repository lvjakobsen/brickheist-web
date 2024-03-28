"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "@/i18n.config";

const translateLocale = (locale: string) => {
    switch (locale) {
        case "da-dk":
            return "Danish";
        case "en-us":
            return "English";
        case "nb-no":
            return "Norwegian";
        case "sv-se":
            return "Swedish";
        // Tilføj flere cases efter behov
        default:
            return locale;
    }
};

export default function LocaleSwitcher() {
    const pathName = usePathname();

    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <ul className="flex gap-x-3">
            {i18n.locales.map((locale) => {
                return (
                    <li key={locale}>
                        <Link
                            href={redirectedPathName(locale)}
                            className="rounded-md border bg-black px-3 py-2 text-white"
                        >
                            {translateLocale(locale)}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
