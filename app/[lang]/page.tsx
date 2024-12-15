import { Metadata } from "next"
import { getDictionary, LocalEnum } from "./dictionaries"
export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default async function Web({ params }: { params: Promise<{ lang: LocalEnum }> }) {
  const dict = await getDictionary((await params).lang) // en
  return <div>{dict.products.cart}</div>
}
