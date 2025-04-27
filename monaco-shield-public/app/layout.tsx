import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

export const viewport = {
  themeColor: "#c1121f",
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MonacoShield - Conformité LAB et Signature Électronique",
  description:
    "Solution souveraine de gestion de conformité en matière de lutte anti-blanchiment et de signature électronique",
  icons: {
    icon: "/images/monaco-shield-logo-new.png",
    apple: "/images/monaco-shield-logo-new.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
