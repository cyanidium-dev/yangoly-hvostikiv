import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["uk", "en"];
const defaultLocale = "uk";
const LOCALE_COOKIE = "NEXT_LOCALE";

function getLocaleFromHeader(request: NextRequest): string {
  // Спочатку перевіряємо cookie
  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (savedLocale && locales.includes(savedLocale)) {
    return savedLocale;
  }

  // Якщо немає в cookie, перевіряємо заголовок Accept-Language
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const browserLocales = acceptLanguage
    .split(",")
    .map((locale) => locale.split(";")[0])
    .map((locale) => locale.substring(0, 2));

  const matchedLocale = browserLocales.find((locale) =>
    locales.includes(locale)
  );

  return matchedLocale || defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Перевіряємо чи URL містить локаль
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Отримуємо поточну локаль з URL якщо вона там є
  const currentLocale = pathnameHasLocale ? pathname.split("/")[1] : null;

  if (!pathnameHasLocale) {
    // Якщо локалі немає в URL, беремо її з cookie або заголовка
    const locale = getLocaleFromHeader(request);
    const response = NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );

    // Зберігаємо локаль в cookie
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 рік
    });

    return response;
  } else if (currentLocale) {
    // Якщо локаль є в URL, оновлюємо cookie
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, currentLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
