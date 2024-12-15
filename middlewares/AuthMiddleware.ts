import { clerkMiddleware } from "@clerk/nextjs/server"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server"
import { MiddlewareFactoryType } from "./StackHandler"

export const AuthMiddleware: MiddlewareFactoryType = (next) => {
  return async (request: NextRequest, event: NextFetchEvent): Promise<NextResponse> => {
    console.log("Executing AuthMiddleware...")
    const clerkResponse = await clerkMiddleware()(request, event)

    if (clerkResponse) {
      console.log("Clerk returned a response:", clerkResponse)
      return clerkResponse
    }

    return next(request, event)
  }
}
