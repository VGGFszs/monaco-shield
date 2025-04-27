import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { SideNav } from "@/components/side-nav"
import { TopNav } from "@/components/top-nav"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Monaco Shields - Plateforme de Conformité",
  description: "Plateforme de conformité pour les professionnels monégasques",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")?.value || "light"
  const language = cookieStore.get("language")?.value || "fr"

  return (
    <html lang={language} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme={theme} enableSystem disableTransitionOnChange>
          <LanguageProvider defaultLanguage={language}>
            <div className="flex min-h-screen flex-col">
              <TopNav />
              <div className="flex flex-1">
                <SideNav />
                <main className="flex-1 p-6 md:p-8">{children}</main>
              </div>
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
