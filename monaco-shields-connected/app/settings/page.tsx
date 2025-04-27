"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  const { t, language, setLanguage } = useLanguage()
  const [notificationsEmail, setNotificationsEmail] = useState(true)
  const [notificationsBrowser, setNotificationsBrowser] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{t("settings.title")}</h1>
        <p className="text-muted-foreground">
          Gérez vos paramètres et préférences
        </p>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Compte</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Facturation</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
          <TabsTrigger value="appearance">Apparence</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profil</CardTitle>
              <CardDescription>
                Gérez les informations de votre profil
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?key=q66p9" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Changer d'avatar
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" defaultValue="Jean Dupont" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="jean.dupont@example.com" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Écrivez quelques mots à propos de vous..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="role">Rôle</Label>
                  <Input id="role" defaultValue="Administrateur" disabled />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer les modifications
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Entreprise</CardTitle>
              <CardDescription>
                Gérez les informations de votre entreprise
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="company">Nom de l'entreprise</Label>
                <Input id="company" defaultValue="SCI Azur" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Adresse</Label>
                <Textarea
                  id="address"
                  defaultValue="5 Avenue Princesse Grace, Monaco"
                  className="min-h-[80px]"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="city">Ville</Label>
                  <Input id="city" defaultValue="Monaco" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="country">Pays</Label>
                  <Select defaultValue="mc">
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Sélectionner un pays" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mc">Monaco</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="it">Italie</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="taxId">Numéro d'identification fiscale</Label>
                <Input id="taxId" defaultValue="MC12345678" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer les modifications
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configurez vos préférences de notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notifications par email</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications-email">Notifications de la plateforme</Label>
                      <p className="text-sm text-muted-foreground">
                        Recevez des emails pour les activités importantes
                      </p>
                    </div>
                    <Switch
                      id="notifications-email"
                      checked={notificationsEmail}
                      onCheckedChange={setNotificationsEmail}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing-emails">Emails marketing</Label>
                      <p className="text-sm text-muted-foreground">
                        Recevez des emails sur les nouvelles fonctionnalités et offres
                      </p>
                    </div>
                    <Switch
                      id="marketing-emails"
                      checked={marketingEmails}
                      onCheckedChange={setMarketingEmails}
                    />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notifications du navigateur</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications-browser">Notifications push</Label>
                    <p className="text-sm text-muted-foreground">
                      Recevez des notifications dans votre navigateur
                    </p>
                  </div>
                  <Switch
                    id="notifications-browser"
                    checked={notificationsBrowser}
                    onCheckedChange={setNotificationsBrowser}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer les préférences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Abonnement</CardTitle>
              <CardDescription>
                Gérez votre abonnement et vos quotas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Plan Business</p>
                    <p className="text-sm text-muted-foreground">
                      150 vérifications d'exposition / mois
                    </p>
                    <p className="text-sm

\
