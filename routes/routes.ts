export type TPreservedRoute = {
  Url: string
  minRole: EMinRole
}
export enum EMinRole {
  "admin" = "admin",
  "user" = "user",
  "seller" = "seller",
  "manager" = "manager",
  "operator" = "operator",
}
export const preservedRoutes: TPreservedRoute[] = [
  {
    Url: "panel/seller",
    minRole: EMinRole.seller,
  },
  {
    Url: "panel/admin",
    minRole: EMinRole.admin,
  },
  {
    Url: "panel/user",
    minRole: EMinRole.user,
  },
]
