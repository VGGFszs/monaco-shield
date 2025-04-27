"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Monitor, Moon, Palette, Sun } from "lucide-react"

export function InterfaceSettings() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>("system")
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false)
  const [denseMode, setDenseMode] = useState<boolean>(false)
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(true)
  const [accentColor, setAccentColor] = useState<string>("red")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler une requête API
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Préférences mises à jour",
        description: "Vos préférences d'interface ont été mises à jour avec succès.",
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          <Sun className="h-5 w-5" />
          <Moon className="h-5 w-5" />
          Thème
        </h3>
        <p className="text-sm text-muted-foreground">Choisissez le thème de l'interface</p>

        <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
          <div>
            <RadioGroupItem value="light" id="theme-light" className="peer sr-only" />
            <Label
              htmlFor="theme-light"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-100 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Sun className="mb-3 h-6 w-6" />
              Clair
            </Label>
          </div>

          <div>
            <RadioGroupItem value="dark" id="theme-dark" className="peer sr-only" />
            <Label
              htmlFor="theme-dark"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gray-950 p-4 text-white hover:bg-gray-900 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Moon className="mb-3 h-6 w-6" />
              Sombre
            </Label>
          </div>

          <div>
            <RadioGroupItem value="system" id="theme-system" className="peer sr-only" />
            <Label
              htmlFor="theme-system"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gradient-to-br from-white to-gray-900 p-4 text-black hover:bg-gray-100 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Monitor className="mb-3 h-6 w-6" />
              Système
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          <Palette className="h-5 w-5" />
          Personnalisation
        </h3>
        <p className="text-sm text-muted-foreground">Personnalisez l'apparence de l'interface</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="accent-color">Couleur d'accent</Label>
            <Select value={accentColor} onValueChange={setAccentColor}>
              <SelectTrigger id="accent-color">
                <SelectValue placeholder="Sélectionnez une couleur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="red">Rouge</SelectItem>
                <SelectItem value="blue">Bleu</SelectItem>
                <SelectItem value="green">Vert</SelectItem>
                <SelectItem value="purple">Violet</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="sidebar-collapsed" className="flex-1">
              Barre latérale réduite par défaut
            </Label>
            <Switch id="sidebar-collapsed" checked={sidebarCollapsed} onCheckedChange={setSidebarCollapsed} />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="dense-mode" className="flex-1">
              Mode compact (densité d'affichage élevée)
            </Label>
            <Switch id="dense-mode" checked={denseMode} onCheckedChange={setDenseMode} />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="animations-enabled" className="flex-1">
              Activer les animations
            </Label>
            <Switch id="animations-enabled" checked={animationsEnabled} onCheckedChange={setAnimationsEnabled} />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Disposition du tableau de bord</h3>
        <p className="text-sm text-muted-foreground">Personnalisez les widgets affichés sur votre tableau de bord</p>

        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="widget-signatures" className="flex-1">
              Signatures en attente
            </Label>
            <Switch id="widget-signatures" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="widget-alerts" className="flex-1">
              Alertes de conformité
            </Label>
            <Switch id="widget-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="widget-activity" className="flex-1">
              Activité récente
            </Label>
            <Switch id="widget-activity" defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="widget-stats" className="flex-1">
              Statistiques d'utilisation
            </Label>
            <Switch id="widget-stats" defaultChecked />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Enregistrement..." : "Enregistrer les préférences"}
      </Button>
    </form>
  )
}
