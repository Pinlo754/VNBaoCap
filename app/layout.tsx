import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Roboto_Slab } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "./styles.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Việt Nam Thời Bao Cấp - Dấu Ấn Một Thời Kinh Tế Kế Hoạch Hóa",
  description: "Khám phá lịch sử kinh tế bao cấp Việt Nam qua game tương tác và nội dung giáo dục",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${merriweather.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
