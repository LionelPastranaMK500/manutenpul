import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["it", "es"];
const defaultLocale = "it";

const spanishCountries = [
    "ES",
    "PE",
    "MX",
    "AR",
    "CO",
    "CL",
    "EC",
    "VE",
    "BO",
    "PY",
    "UY",
    "CR",
    "PA",
    "GT",
    "HN",
    "NI",
    "SV",
    "DO",
    "CU",
];

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    let detectedLocale = request.cookies.get("NEXT_LOCALE")?.value || "";

    if (!locales.includes(detectedLocale)) {
        try {
            const ip =
                request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

            const response = await fetch(
                `http://ip-api.com/json/${ip}?fields=countryCode`
            );

            if (response.ok) {
                const data = await response.json();

                if (data.countryCode === "IT") {
                    detectedLocale = "it";
                } else if (spanishCountries.includes(data.countryCode)) {
                    detectedLocale = "es";
                }
            }
        } catch {
            detectedLocale = "";
        }
    }

    if (!locales.includes(detectedLocale)) {
        const acceptLanguage = request.headers.get("accept-language") || "";
        detectedLocale = acceptLanguage.toLowerCase().includes("es") ? "es" : defaultLocale;
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${detectedLocale}${pathname}`;

    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};