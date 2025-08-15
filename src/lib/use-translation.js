// This is an example of a custom hook for client components.
// It assumes you have a translation context setup in your layout.

import { useContext } from "react";
import { I18nContext } from "./i18n-provider"; // Assume you created this provider

export const useTranslation = () => {
    const { t } = useContext(I18nContext);
    return { t };
};
