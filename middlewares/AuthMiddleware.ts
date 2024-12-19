import { clerkMiddleware } from "@clerk/nextjs/server"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server"
import { MiddlewareFactoryType } from "./StackHandler"

export const AuthMiddleware: MiddlewareFactoryType = (next) => {
  return async (request: NextRequest, event: NextFetchEvent): Promise<NextResponse> => {
    const clerkResponse = await clerkMiddleware()(request, event)

    const { pathname } = request.nextUrl
    if (pathname.split("/").includes("panel") || pathname.split("/").includes("setting")) {
      return NextResponse.redirect(new URL("/login", request.nextUrl.origin).toString())
    }

    if (clerkResponse) {
      return new NextResponse(clerkResponse.body, {
        status: clerkResponse.status,
        headers: clerkResponse.headers,
      })
    }

    return next(request, event)
  }
}
