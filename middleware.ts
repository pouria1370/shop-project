import { NextFetchEvent, NextRequest } from "next/server"
import { AuthMiddleware } from "./middlewares/AuthMiddleware"
import { LocalMiddleware } from "./middlewares/LocalMiddleware"
import { StacKMiddlewaresHandler } from "./middlewares/StackHandler"

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  const middlewares = [LocalMiddleware, AuthMiddleware]
  const handler = StacKMiddlewaresHandler(middlewares)
  return handler(request, event)
}

export const config = {
  matcher: [
    // Match all pages except static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always match API routes
    "/(api|trpc)(.*)",
  ],
}
