import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Mentor | Social links profile",
  description:
    "This is a solution to the Frontend Mentor 'Social links profile' challenge, coded by Darrick Fauvel.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#141414]`}>{children}</body>
    </html>
  )
}
