"use client"

import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à sécuriser votre conformité ?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Rejoignez les professionnels qui font confiance à MonacoShield pour leurs besoins en matière de conformité et
          de lutte anti-blanchiment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
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
    </section>
  )
}
