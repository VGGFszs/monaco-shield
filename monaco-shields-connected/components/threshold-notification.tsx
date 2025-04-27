"use client"

import { useState } from "react"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"

export function ThresholdNotification() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 text-amber-500">
          <AlertCircle className="h-4 w-4" />
          <span>Seuil d'utilisation proche</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Seuil d'utilisation proche</DialogTitle>
          <DialogDescription>
            Vous approchez de la limite de votre abonnement actuel. Envisagez de passer à un plan supérieur.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Alert variant="warning">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Attention</AlertTitle>
            <AlertDescription>
              Vous avez utilisé 48% de vos dossiers disponibles (24/50) et 50% de vos utilisateurs (5/10).
            </AlertDescription>
          </Alert>
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0">
              <Image src="/images/monaco-shield-logo.png" alt="Monaco Shields Logo" fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Plan Enterprise</h3>
              <p className="text-sm text-muted-foreground">100 dossiers, 200 signatures, 20 utilisateurs</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button onClick={() => setOpen(false)}>Mettre à niveau</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
