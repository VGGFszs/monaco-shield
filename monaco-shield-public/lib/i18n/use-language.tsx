"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { mergedTranslations } from "./merge-translations"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, lang?: Language, fallback?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage && (storedLanguage === "fr" || storedLanguage === "en")) {
      setLanguage(storedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string, lang = language, fallback = "") => {
    return mergedTranslations[lang]?.[key] || fallback || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
