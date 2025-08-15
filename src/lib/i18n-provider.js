"use client";

import { createContext, useContext, useMemo } from "react";

export const I18nContext = createContext(null);

export const useTranslation = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useTranslation must be used within an I18nProvider");
    }
    return context;
};

// This function recursively finds the value for a given key.
const getNestedValue = (obj, key, fallback = key) => {
    if (!obj) return fallback;
    const keys = key.split(".");
    let value = obj;
    for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
            value = value[k];
        } else {
            return fallback;
        }
    }
    return value;
};

export const I18nProvider = ({ children, dictionary }) => {
    // We use useMemo to ensure the 't' function is only created once.
    const t = useMemo(
        () => (key, options) => {
            const value = getNestedValue(dictionary, key, key);
            if (options && options.returnObjects) {
                return value;
            }
            return value;
        },
        [dictionary]
    );

    return (
        <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>
    );
};
