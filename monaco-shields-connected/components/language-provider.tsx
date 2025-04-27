"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { setCookie } from "cookies-next"

// Importation des traductions
import fr from "@/locales/fr.json"
import en from "@/locales/en.json"
import it from "@/locales/it.json"

type Language = "fr" | "en" | "it"
type Translations = Record<string, any>

const translations: Record<Language, Translations> = {
  fr,
  en,
  it,
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  defaultLanguage = "fr",
}: {
  children: ReactNode
  defaultLanguage?: Language
}) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const router = useRouter()

  // Fonction pour obtenir une valeur imbriquée à partir d'une clé en notation pointée
  const getNestedValue = (obj: any, path: string): string => {
    const keys = path.split(".")
    return keys.reduce((acc, key) => {
      if (acc && typeof acc === "object" && key in acc) {
        return acc[key]
      }
      return path // Retourne la clé si la traduction n'est pas trouvée
    }, obj)
  }

  // Fonction de traduction
  const t = (key: string): string => {
    const translation = getNestedValue(translations[language], key)
    return typeof translation === "string" ? translation : key
  }

  // Fonction pour changer de langue
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setCookie("language", lang, { maxAge: 60 * 60 * 24 * 365 }) // Cookie valide 1 an
    router.refresh() // Rafraîchir la page pour appliquer les changements
  }

  // Effet pour synchroniser la langue avec le cookie
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.lang = language
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
