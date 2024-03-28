export const i18n = {
    defaultLocale: "en-us",
    locales: ["en-us", "nb-no", "sv-se", "da-dk"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
