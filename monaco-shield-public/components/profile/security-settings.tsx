"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, KeyRound, ShieldCheck, Smartphone } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function SecuritySettings() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(false)
  const [showQRCode, setShowQRCode] = useState<boolean>(false)

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler une requête API
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Mot de passe mis à jour",
        description: "Votre mot de passe a été modifié avec succès.",
      })
    }, 1000)
  }

  const handleToggle2FA = () => {
    if (!twoFactorEnabled) {
      setShowQRCode(true)
    } else {
      setTwoFactorEnabled(false)
      setShowQRCode(false)
      toast({
        title: "Authentification à deux facteurs désactivée",
        description: "L'authentification à deux facteurs a été désactivée pour votre compte.",
      })
    }
  }

  const handleEnable2FA = () => {
    setTwoFactorEnabled(true)
    setShowQRCode(false)
    toast({
      title: "Authentification à deux facteurs activée",
      description: "L'authentification à deux facteurs a été activée pour votre compte.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          <KeyRound className="h-5 w-5" />
          Changer le mot de passe
        </h3>

        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Mot de passe actuel</Label>
            <Input id="current-password" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">Nouveau mot de passe</Label>
            <Input id="new-password" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirmer le nouveau mot de passe</Label>
            <Input id="confirm-password" type="password" />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Modification..." : "Modifier le mot de passe"}
          </Button>
        </form>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          <Smartphone className="h-5 w-5" />
          Authentification à deux facteurs
        </h3>

        <div className="flex items-center justify-between space-x-2">
          <div className="space-y-0.5">
            <Label htmlFor="2fa-toggle">Activer l'authentification à deux facteurs</Label>
            <p className="text-sm text-muted-foreground">
              Renforcez la sécurité de votre compte en exigeant un code en plus de votre mot de passe.
            </p>
          </div>
          <Switch id="2fa-toggle" checked={twoFactorEnabled} onCheckedChange={handleToggle2FA} />
        </div>

        {showQRCode && (
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex justify-center">
              <div className="h-48 w-48 bg-gray-200 flex items-center justify-center">
                <span className="text-sm text-gray-500">QR Code pour 2FA</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="verification-code">Code de vérification</Label>
              <Input id="verification-code" placeholder="Entrez le code à 6 chiffres" />
            </div>

            <Button onClick={handleEnable2FA}>Activer l'authentification à deux facteurs</Button>
          </div>
        )}
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          <ShieldCheck className="h-5 w-5" />
          Sessions actives
        </h3>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-medium">Monaco, Monaco</p>
                <p className="text-sm text-muted-foreground">Chrome sur Windows • Actuelle</p>
              </div>
              <Button variant="ghost" size="sm" disabled>
                Session actuelle
              </Button>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-medium">Paris, France</p>
                <p className="text-sm text-muted-foreground">Safari sur iPhone • Il y a 2 jours</p>
              </div>
              <Button variant="outline" size="sm">
                Déconnecter
              </Button>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            Déconnecter toutes les autres sessions
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Zone de danger</AlertTitle>
          <AlertDescription>
            Les actions ci-dessous sont irréversibles. Veuillez procéder avec prudence.
          </AlertDescription>
        </Alert>

        <Button variant="destructive">Supprimer mon compte</Button>
      </div>
    </div>
  )
}
