import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n/use-language"
import "./globals.css"

export const metadata = {
  title: "MonacoShield - Solution souveraine de vigilance et de signature électronique",
  description:
    "MonacoShield offre une solution souveraine de vigilance et de signature électronique pour les entreprises monégasques et internationales.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
