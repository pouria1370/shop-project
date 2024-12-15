import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server"

export type ChainableMiddleware = (request: NextRequest, event: NextFetchEvent) => Promise<NextResponse>
export type MiddlewareFactoryType = (next: ChainableMiddleware) => ChainableMiddleware

export const StacKMiddlewaresHandler = (
  middlewares: MiddlewareFactoryType[] = [],
  index: number = 0
): ChainableMiddleware => {
  const current = middlewares[index]
  if (current) {
    const next = StacKMiddlewaresHandler(middlewares, index + 1)
    return async (request: NextRequest, event: NextFetchEvent) => {
      const response = await current(next)(request, event)
      if (!(response instanceof NextResponse)) {
        throw new TypeError(`Middleware at index ${index} did not return a NextResponse`)
      }
      return response
    }
  }
  return async () => NextResponse.next()
}
