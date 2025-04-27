"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"

export function PublicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/images/monaco-shield-logo.png"
              alt="MonacoShield Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold">MonacoShield</span>
        </Link>

        <button
          className="flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 border-b bg-white shadow-lg">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <Link
              href="/fonctionnalites"
              className="text-sm font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link
              href="/tarifs"
              className="text-sm font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              href="/demo"
              className="text-sm font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demander une démo
            </Link>
            <Link
              href="/a-propos"
              className="text-sm font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
