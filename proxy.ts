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

    let detectedLocale = request.cookies.get("NEXT_LOCALE")?.value || "";
    let detectedRegion = "IT";

    if (!locales.includes(detectedLocale)) {
        try {
            const ip =
                request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

            const response = await fetch(
                `http://ip-api.com/json/${ip}?fields=countryCode`
            );

            if (response.ok) {
                const data = await response.json();
                const country = data.countryCode;

                detectedRegion = country || "IT";

                if (country === "IT") {
                    detectedLocale = "it";
                } else if (spanishCountries.includes(country)) {
                    detectedLocale = "es";
                }
            }
        } catch {
            detectedLocale = "";
            detectedRegion = "IT";
        }
    }

    if (!locales.includes(detectedLocale)) {
        const acceptLanguage = request.headers.get("accept-language") || "";
        detectedLocale = acceptLanguage.toLowerCase().includes("es") ? "es" : defaultLocale;
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${detectedLocale}${pathname}`;

    const response = pathnameHasLocale
        ? NextResponse.next()
        : NextResponse.redirect(url);

    response.cookies.set("REGION", detectedRegion, {
        path: "/",
        sameSite: "lax",
    });

    return response;
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};