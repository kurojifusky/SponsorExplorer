import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Navbar, Footer } from "@/components/base"
import { cn } from "@/utils"
import { VideoListPeekProvider } from "@/context"

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  preload: true,
  display: "swap",
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s | SponsorExplorer",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={cn(
          inter.className,
          "antialiased text-sm overflow-x-hidden prose-headings:font-bold",
        )}
      >
        <VideoListPeekProvider>
          <Navbar />
          <main className="min-h-[calc(100dvh-13.85rem)]">{children}</main>
        </VideoListPeekProvider>
        <Footer />
      </body>
    </html>
  )
}
