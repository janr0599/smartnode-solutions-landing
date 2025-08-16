import { NextResponse } from "next/server";
import { i18n } from "./i18n-config";

// This function is the core of the fix, as it prevents the middleware from
// running on static files and other non-page assets.
const isStaticFile = (pathname) => {
    return [
        ".svg",
        ".png",
        ".jpg",
        ".jpeg",
        ".gif",
        ".webp",
        ".js",
        ".css",
        "/logos/",
    ].some((ext) => pathname.endsWith(ext) || pathname.includes(ext));
};

const DEFAULT_LOCALE = i18n.defaultLocale;
const LOCALE_REGEX = new RegExp(`^/(${i18n.locales.join("|")})(/.*)?$`, "i");

function getLocale(request) {
    const pathname = request.nextUrl.pathname;
    const match = pathname.match(LOCALE_REGEX);
    return match ? match[1] : null;
}

export function middleware(request) {
    // If the request is for a static file, skip the middleware.
    if (isStaticFile(request.nextUrl.pathname)) {
        return NextResponse.next();
    }

    const pathnameIsMissingLocale = !getLocale(request);

    if (pathnameIsMissingLocale) {
        const locale = getLocaleFromHeader(request);
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}${url.pathname}`;
        return NextResponse.redirect(url);
    }

    // **FIX:** The header modification has been removed to allow static site generation.
    return NextResponse.next();
}

function getLocaleFromHeader(request) {
    const acceptLanguage = request.headers.get("accept-language");
    const userLocale =
        acceptLanguage?.split(",")?.[0]?.toLowerCase() || DEFAULT_LOCALE;

    return i18n.locales.includes(userLocale) ? userLocale : DEFAULT_LOCALE;
}

export const config = {
    matcher: [
        "/((?!api|_next|static|favicon.ico|manifest.webmanifest|workbox-.*).*)",
    ],
};
