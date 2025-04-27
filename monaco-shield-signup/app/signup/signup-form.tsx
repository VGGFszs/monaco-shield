"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export default function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simuler un délai de traitement
    setTimeout(() => {
      setIsLoading(false)
      router.push("/signup/plan")
    }, 1000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="vous@exemple.com" required disabled={isLoading} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Mot de passe</Label>
        <Input id="password" type="password" required disabled={isLoading} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
        <Input id="confirm-password" type="password" required disabled={isLoading} />
      </div>
      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Création en cours...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Continuer
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  )
}
