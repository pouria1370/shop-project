import "styles/tailwind.css"
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="container mx-auto p-10">
        <ClerkProvider>
          <SignedIn />
          <SignedOut />
          <UserButton />
          <SignInButton />
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
