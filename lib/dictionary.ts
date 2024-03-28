import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
    "da-dk": () =>
        import("@/dictionaries/da-dk.json").then((module) => module.default),
    "en-us": () =>
        import("@/dictionaries/en-us.json").then((module) => module.default),
    "nb-no": () =>
        import("@/dictionaries/nb-no.json").then((module) => module.default),
    "sv-se": () =>
        import("@/dictionaries/sv-se.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
