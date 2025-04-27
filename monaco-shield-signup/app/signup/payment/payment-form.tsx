"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PaymentForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simuler un délai de traitement
    setTimeout(() => {
      setIsLoading(false)
      router.push("/signup/success")
    }, 2000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="card-name">Nom sur la carte</Label>
          <Input id="card-name" placeholder="Jean Dupont" required disabled={isLoading} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="card-number">Numéro de carte</Label>
          <div className="relative">
            <Input id="card-number" placeholder="1234 5678 9012 3456" required disabled={isLoading} />
            <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Label htmlFor="expiry-month">Mois</Label>
            <Select disabled={isLoading}>
              <SelectTrigger id="expiry-month">
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => {
                  const month = i + 1
                  return (
                    <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                      {month.toString().padStart(2, "0")}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1">
            <Label htmlFor="expiry-year">Année</Label>
            <Select disabled={isLoading}>
              <SelectTrigger id="expiry-year">
                <SelectValue placeholder="AA" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => {
                  const year = new Date().getFullYear() + i
                  return (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="123" required disabled={isLoading} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="address">Adresse de facturation</Label>
          <Input id="address" placeholder="123 Rue de la Paix" required disabled={isLoading} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <Label htmlFor="city">Ville</Label>
            <Input id="city" placeholder="Monaco" required disabled={isLoading} />
          </div>

          <div className="col-span-1">
            <Label htmlFor="postal-code">Code postal</Label>
            <Input id="postal-code" placeholder="98000" required disabled={isLoading} />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="country">Pays</Label>
          <Select disabled={isLoading}>
            <SelectTrigger id="country">
              <SelectValue placeholder="Sélectionnez un pays" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mc">Monaco</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="be">Belgique</SelectItem>
              <SelectItem value="ch">Suisse</SelectItem>
              <SelectItem value="lu">Luxembourg</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-2 rounded-lg border p-4 text-sm">
        <Lock className="h-5 w-5 text-muted-foreground" />
        <p className="text-muted-foreground">
          Vos informations de paiement sont sécurisées et cryptées. Nous ne stockons pas les détails de votre carte.
        </p>
      </div>

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg" disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Traitement en cours...
          </span>
        ) : (
          "Finaliser l'abonnement"
        )}
      </Button>
    </form>
  )
}
