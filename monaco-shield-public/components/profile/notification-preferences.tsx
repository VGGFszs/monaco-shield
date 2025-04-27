"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"
import { Bell, Mail, Smartphone } from "lucide-react"

export function NotificationPreferences() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true)
  const [appNotifications, setAppNotifications] = useState<boolean>(true)
  const [smsNotifications, setSmsNotifications] = useState<boolean>(false)
  const [notificationFrequency, setNotificationFrequency] = useState<string>("immediate")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler une requête API
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Préférences mises à jour",
        description: "Vos préférences de notification ont été mises à jour avec succès.",
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Canaux de notification</h3>
        <p className="text-sm text-muted-foreground">Choisissez comment vous souhaitez recevoir vos notifications</p>

        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="email-notifications" className="flex-1">
                Notifications par email
              </Label>
            </div>
            <Switch id="email-notifications" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="app-notifications" className="flex-1">
                Notifications dans l'application
              </Label>
            </div>
            <Switch id="app-notifications" checked={appNotifications} onCheckedChange={setAppNotifications} />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="sms-notifications" className="flex-1">
                Notifications par SMS
              </Label>
            </div>
            <Switch id="sms-notifications" checked={smsNotifications} onCheckedChange={setSmsNotifications} />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Fréquence des notifications</h3>
        <p className="text-sm text-muted-foreground">
          Choisissez à quelle fréquence vous souhaitez recevoir vos notifications
        </p>

        <RadioGroup value={notificationFrequency} onValueChange={setNotificationFrequency} className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="immediate" id="immediate" />
            <Label htmlFor="immediate">Immédiatement</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hourly" id="hourly" />
            <Label htmlFor="hourly">Toutes les heures</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily">Résumé quotidien</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly">Résumé hebdomadaire</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Types de notifications</h3>
        <p className="text-sm text-muted-foreground">
          Sélectionnez les types d'événements pour lesquels vous souhaitez être notifié
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="new-document" className="flex-1">
              Nouveau document à signer
            </Label>
            <Switch id="new-document" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="signature-completed" className="flex-1">
              Signature complétée
            </Label>
            <Switch id="signature-completed" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="compliance-alert" className="flex-1">
              Alerte de conformité
            </Label>
            <Switch id="compliance-alert" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="account-activity" className="flex-1">
              Activité du compte
            </Label>
            <Switch id="account-activity" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="system-updates" className="flex-1">
              Mises à jour système
            </Label>
            <Switch id="system-updates" />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="marketing" className="flex-1">
              Informations marketing
            </Label>
            <Switch id="marketing" />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Enregistrement..." : "Enregistrer les préférences"}
      </Button>
    </form>
  )
}
