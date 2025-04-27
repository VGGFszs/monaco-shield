"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/use-language"

export function HeroSection() {
  const { language, t } = useLanguage()

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0 z-0 bg-[url('/monaco-cityscape-map.png')] bg-cover bg-center opacity-10"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Optimiser votre vigilance et vos signatures électroniques
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            MonacoShield est la solution souveraine qui simplifie vos obligations en matière de lutte anti-blanchiment
            et sécurise vos signatures électroniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/inscription"
              className="inline-flex h-11 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Essai gratuit
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
