import { i18n } from "../i18n-config";
import path from "path";
import fs from "fs/promises";

// We use an async function to dynamically import the JSON files.
// This ensures we only load the translations needed for the current page request.
export const getDictionary = async (locale) => {
    // Check if the locale is supported, otherwise default to the defaultLocale.
    const lang = i18n.locales.includes(locale) ? locale : i18n.defaultLocale;

    // Construct a reliable, absolute path to the JSON file on the server.
    const filePath = path.join(
        process.cwd(),
        "public",
        "locales",
        `${lang}.json`
    );

    try {
        // Read the file content and parse it as JSON.
        const fileContents = await fs.readFile(filePath, "utf8");
        return JSON.parse(fileContents);
    } catch (error) {
        console.error(`Failed to load dictionary for locale: ${lang}`, error);
        // Return a fallback or empty dictionary to prevent the app from crashing.
        return {};
    }
};
