import { AlertCircle, CheckCircle, Download, Info, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Person {
  firstName: string
  lastName: string
  birthDate: string
  nationality: string
  gender: string
}

interface ExposureResultProps {
  result: "none" | "low" | "medium" | "high"
  person: Person
}

export function ExposureResult({ result, person }: ExposureResultProps) {
  const resultConfig = {
    none: {
      title: "Aucune exposition détectée",
      description: "La personne ne figure pas dans les listes de sanctions consultées.",
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950",
      borderColor: "border-green-200 dark:border-green-800",
    },
    low: {
      title: "Exposition faible détectée",
      description: "La personne présente des similitudes avec des entrées à faible risque.",
      icon: Info,
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
    medium: {
      title: "Exposition moyenne détectée",
      description: "La personne présente des correspondances avec des entrées à risque modéré.",
      icon: AlertCircle,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
    high: {
      title: "Exposition élevée détectée",
      description: "La personne figure dans des listes de sanctions à haut risque.",
      icon: XCircle,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950",
      borderColor: "border-red-200 dark:border-red-800",
    },
  }

  const config = resultConfig[result]
  const Icon = config.icon

  return (
    <Card className={`border-2 ${config.borderColor}`}>
      <CardHeader className={`${config.bgColor}`}>
        <div className="flex items-center gap-2">
          <Icon className={`h-6 w-6 ${config.color}`} />
          <CardTitle className={config.color}>{config.title}</CardTitle>
        </div>
        <CardDescription>{config.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-medium">Informations sur la personne</h3>
            <div className="space-y-2 rounded-md border p-3">
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Nom:</span>
                <span className="col-span-2 text-sm">{person.lastName}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Prénom:</span>
                <span className="col-span-2 text-sm">{person.firstName}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Date de naissance:</span>
                <span className="col-span-2 text-sm">{person.birthDate}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Nationalité:</span>
                <span className="col-span-2 text-sm">{person.nationality}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Genre:</span>
                <span className="col-span-2 text-sm">
                  {person.gender === "male" ? "Homme" : person.gender === "female" ? "Femme" : "Autre"}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium">Détails de la vérification</h3>
            <div className="space-y-2 rounded-md border p-3">
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Date:</span>
                <span className="col-span-2 text-sm">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Heure:</span>
                <span className="col-span-2 text-sm">{new Date().toLocaleTimeString()}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Référence:</span>
                <span className="col-span-2 text-sm">
                  EXP-
                  {Math.floor(Math.random() * 10000)
                    .toString()
                    .padStart(4, "0")}
                </span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Bases consultées:</span>
                <span className="col-span-2 text-sm">UN, UE, OFAC, UK</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-sm font-medium">Validité:</span>
                <span className="col-span-2 text-sm">12 mois</span>
              </div>
            </div>
          </div>
        </div>

        {result !== "none" && (
          <Alert className="mt-4" variant="warning">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Attention</AlertTitle>
            <AlertDescription>
              Cette vérification a révélé des correspondances potentielles. Veuillez examiner les détails et prendre les
              mesures appropriées conformément à vos procédures internes.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Nouvelle recherche</Button>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Télécharger le rapport
        </Button>
      </CardFooter>
    </Card>
  )
}
