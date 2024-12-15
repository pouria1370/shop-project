import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server"
import { MiddlewareFactoryType } from "./StackHandler"

const locales = ["en", "du"]

function getLocale(request: NextRequest): string {
  const headers = { "accept-language": request.headers.get("accept-language") || "en-US,en;q=0.5" }
  const languages = new Negotiator({ headers }).languages()
  const defaultLocale = "en-US"
  return match(languages, locales, defaultLocale)
}

export const LocalMiddleware: MiddlewareFactoryType = (next) => {
  return async (request: NextRequest, event: NextFetchEvent): Promise<NextResponse> => {
    console.log("Executing LocalMiddleware...")
    const { pathname } = request.nextUrl

    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    if (pathnameHasLocale) {
      console.log("Locale found in pathname:", pathname)
      return next(request, event)
    }

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    console.log("Redirecting to:", request.nextUrl.toString())
    return NextResponse.redirect(request.nextUrl)
  }
}
