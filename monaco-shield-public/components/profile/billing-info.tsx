"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download, FileText } from "lucide-react"

export function BillingInfo() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [paymentMethod, setPaymentMethod] = useState<string>("card")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler une requête API
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Informations de paiement mises à jour",
        description: "Vos informations de paiement ont été mises à jour avec succès.",
      })
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Abonnement actuel</h3>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Plan Basique</CardTitle>
              <Badge>Actif</Badge>
            </div>
            <CardDescription>25 € / mois</CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>3 utilisateurs</span>
                <span>Inclus</span>
              </div>
              <div className="flex justify-between">
                <span>20 dossiers</span>
                <span>Inclus</span>
              </div>
              <div className="flex justify-between">
                <span>2 eSignatures / mois</span>
                <span>Inclus</span>
              </div>
              <div className="flex justify-between">
                <span>Données intégralement chiffrées</span>
                <span>Inclus</span>
              </div>
              <div className="flex justify-between">
                <span>Cloud souverain monégasque</span>
                <span>Inclus</span>
              </div>
              <div className="flex justify-between">
                <span>Archivage inclus</span>
                <span>Inclus</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Changer de plan</Button>
            <Button variant="ghost" className="text-red-500 hover:text-red-700 hover:bg-red-50">
              Annuler l'abonnement
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          <CreditCard className="h-5 w-5" />
          Méthode de paiement
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
            <div className="flex items-start space-x-3 rounded-md border p-3">
              <RadioGroupItem value="card" id="card" className="mt-1" />
              <div className="flex-1 space-y-3">
                <Label htmlFor="card" className="font-medium">
                  Carte de crédit
                </Label>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Numéro de carte</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Date d'expiration</Label>
                      <Input id="expiry" placeholder="MM/AA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-name">Nom sur la carte</Label>
                    <Input id="card-name" placeholder="J. DUPONT" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 rounded-md border p-3">
              <RadioGroupItem value="sepa" id="sepa" className="mt-1" />
              <div className="flex-1 space-y-3">
                <Label htmlFor="sepa" className="font-medium">
                  Prélèvement SEPA
                </Label>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="iban">IBAN</Label>
                    <Input id="iban" placeholder="FR76 1234 5678 9012 3456 7890 123" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-name">Titulaire du compte</Label>
                    <Input id="account-name" placeholder="Jean Dupont" />
                  </div>
                </div>
              </div>
            </div>
          </RadioGroup>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Enregistrement..." : "Enregistrer la méthode de paiement"}
          </Button>
        </form>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          <FileText className="h-5 w-5" />
          Historique de facturation
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <p className="font-medium">Facture #INV-2025-004</p>
              <p className="text-sm text-muted-foreground">23 avril 2025 - 25,00 €</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <p className="font-medium">Facture #INV-2025-003</p>
              <p className="text-sm text-muted-foreground">23 mars 2025 - 25,00 €</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <p className="font-medium">Facture #INV-2025-002</p>
              <p className="text-sm text-muted-foreground">23 février 2025 - 25,00 €</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <p className="font-medium">Facture #INV-2025-001</p>
              <p className="text-sm text-muted-foreground">23 janvier 2025 - 25,00 €</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
