"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ExposureResult } from "@/components/exposure-result"
import { Loader2 } from "lucide-react"

export function PersonSearch() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState<null | "none" | "low" | "medium" | "high">(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    nationality: "",
    gender: "male",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setSearchResult(null)

    // Simuler une recherche API
    setTimeout(() => {
      // Résultat aléatoire pour la démonstration
      const results = ["none", "low", "medium", "high"] as const
      const randomResult = results[Math.floor(Math.random() * results.length)]
      setSearchResult(randomResult)
      setIsSearching(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="lastName">Nom</Label>
            <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="firstName">Prénom</Label>
            <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="birthDate">Date de naissance</Label>
            <Input
              id="birthDate"
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nationality">Nationalité</Label>
            <Input id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Genre</Label>
          <RadioGroup defaultValue={formData.gender} onValueChange={handleRadioChange} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Homme</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Femme</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Autre</Label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit" disabled={isSearching} className="w-full">
          {isSearching ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Recherche en cours...
            </>
          ) : (
            "Vérifier l'exposition"
          )}
        </Button>
      </form>

      {searchResult && <ExposureResult result={searchResult} person={formData} />}
    </div>
  )
}
