"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { AlertCircle, Calendar, Clock, Download, FileText, Filter, Plus, Search, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"

// Données fictives pour les déclarations de soupçon
const suspicionReports = [
  {
    id: "1",
    reference: "DS-2023-001",
    date: "15/04/2023",
    status: "submitted",
    subject: "Jean Dupont",
    submittedBy: "Marie Martin",
    validatedBy: "Pierre Durand",
  },
  {
    id: "2",
    reference: "DS-2023-002",
    date: "20/05/2023",
    status: "pending",
    subject: "SCI Azur",
    submittedBy: "Sophie Bernard",
    validatedBy: null,
  },
  {
    id: "3",
    reference: "DS-2023-003",
    date: "10/06/2023",
    status: "rejected",
    subject: "Ahmed Khalid",
    submittedBy: "Lucas Petit",
    validatedBy: "Jean Dupont",
  },
  {
    id: "4",
    reference: "DS-2023-004",
    date: "05/07/2023",
    status: "submitted",
    subject: "SARL Méditerranée",
    submittedBy: "Marie Martin",
    validatedBy: "Pierre Durand",
  },
  {
    id: "5",
    reference: "DS-2023-005",
    date: "12/08/2023",
    status: "pending",
    subject: "Roberto Conti",
    submittedBy: "Sophie Bernard",
    validatedBy: null,
  },
]

export default function SuspicionPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [newReportDialogOpen, setNewReportDialogOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [needsValidation, setNeedsValidation] = useState(false)
  const [validator, setValidator] = useState("")

  const filteredReports = suspicionReports.filter(
    (report) =>
      report.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "submitted":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Logique de soumission
    setNewReportDialogOpen(false)
    setCurrentStep(1)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{t("suspicion.title")}</h1>
        <p className="text-muted-foreground">Gérez les déclarations de soupçon à l'AMSF</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Déclarations de soupçon</CardTitle>
            <CardDescription>Historique des déclarations de soupçon soumises à l'AMSF</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="w-[200px] pl-8 md:w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Dialog open={newReportDialogOpen} onOpenChange={setNewReportDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Nouvelle déclaration
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Nouvelle déclaration de soupçon</DialogTitle>
                  <DialogDescription>Soumettez une nouvelle déclaration de soupçon à l'AMSF</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="mb-8">
                    <div className="relative">
                      <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-muted"></div>
                      <ol className="relative z-10 flex justify-between">
                        {[1, 2, 3, 4].map((step) => (
                          <li key={step} className="flex items-center justify-center">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                                currentStep >= step
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {step}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="mt-2 flex justify-between text-sm">
                      <div className="text-center">Informations générales</div>
                      <div className="text-center">Détails de l'opération</div>
                      <div className="text-center">Validation</div>
                      <div className="text-center">Confirmation</div>
                    </div>
                  </div>

                  {currentStep === 1 && (
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="subjectType">Type de sujet</Label>
                          <Select>
                            <SelectTrigger id="subjectType">
                              <SelectValue placeholder="Sélectionner un type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="individual">Personne physique</SelectItem>
                              <SelectItem value="entity">Personne morale</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="subjectName">Nom du sujet</Label>
                          <Input id="subjectName" placeholder="Jean Dupont" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="suspicionType">Type de soupçon</Label>
                        <Select>
                          <SelectTrigger id="suspicionType">
                            <SelectValue placeholder="Sélectionner un type de soupçon" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="money_laundering">Blanchiment d'argent</SelectItem>
                            <SelectItem value="terrorist_financing">Financement du terrorisme</SelectItem>
                            <SelectItem value="fraud">Fraude</SelectItem>
                            <SelectItem value="corruption">Corruption</SelectItem>
                            <SelectItem value="tax_evasion">Évasion fiscale</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description du soupçon</Label>
                        <Textarea id="description" placeholder="Décrivez les raisons de votre soupçon..." rows={5} />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="needsValidation" checked={needsValidation} onCheckedChange={setNeedsValidation} />
                        <Label htmlFor="needsValidation">Nécessite une validation avant envoi</Label>
                      </div>
                      {needsValidation && (
                        <div className="grid gap-2">
                          <Label htmlFor="validator">Validateur</Label>
                          <Select value={validator} onValueChange={setValidator}>
                            <SelectTrigger id="validator">
                              <SelectValue placeholder="Sélectionner un validateur" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="jean.dupont">Jean Dupont</SelectItem>
                              <SelectItem value="marie.martin">Marie Martin</SelectItem>
                              <SelectItem value="pierre.durand">Pierre Durand</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="operationDate">Date de l'opération</Label>
                        <div className="relative">
                          <Input id="operationDate" placeholder="JJ/MM/AAAA" />
                          <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="operationAmount">Montant de l'opération</Label>
                        <Input id="operationAmount" placeholder="10000" type="number" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="operationCurrency">Devise</Label>
                        <Select defaultValue="eur">
                          <SelectTrigger id="operationCurrency">
                            <SelectValue placeholder="Sélectionner une devise" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="eur">EUR</SelectItem>
                            <SelectItem value="usd">USD</SelectItem>
                            <SelectItem value="gbp">GBP</SelectItem>
                            <SelectItem value="chf">CHF</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="operationDetails">Détails de l'opération</Label>
                        <Textarea
                          id="operationDetails"
                          placeholder="Décrivez les détails de l'opération suspecte..."
                          rows={5}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Documents justificatifs</Label>
                        <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                          <div className="flex flex-col items-center space-y-2 text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                              <FileText className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium">
                                Glissez-déposez des fichiers ou cliquez pour parcourir
                              </p>
                              <p className="text-xs text-muted-foreground">PDF, JPG, PNG jusqu'à 10 MB</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Parcourir les fichiers
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4 py-4">
                      {needsValidation ? (
                        <div className="space-y-4">
                          <Alert>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Validation requise</AlertTitle>
                            <AlertDescription>
                              Cette déclaration sera envoyée à {validator.replace(".", " ")} pour validation avant
                              d'être soumise à l'AMSF.
                            </AlertDescription>
                          </Alert>
                          <div className="rounded-md border p-4">
                            <div className="flex items-center gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <User className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium">{validator.replace(".", " ")}</p>
                                <p className="text-sm text-muted-foreground">Validateur</p>
                              </div>
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="validationMessage">Message pour le validateur (optionnel)</Label>
                            <Textarea
                              id="validationMessage"
                              placeholder="Ajoutez un message pour le validateur..."
                              rows={3}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Alert>
                            <Send className="h-4 w-4" />
                            <AlertTitle>Envoi direct</AlertTitle>
                            <AlertDescription>
                              Cette déclaration sera directement soumise à l'AMSF sans validation préalable.
                            </AlertDescription>
                          </Alert>
                          <div className="rounded-md border p-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <p className="font-medium">Type de soupçon</p>
                                <Badge>Blanchiment d'argent</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="font-medium">Sujet</p>
                                <p>Jean Dupont</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="font-medium">Montant</p>
                                <p>10,000 EUR</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="font-medium">Date de l'opération</p>
                                <p>15/04/2023</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-4 py-4">
                      <div className="rounded-md border border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                            <Send className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="font-medium text-green-800 dark:text-green-300">
                              {needsValidation
                                ? "Déclaration envoyée pour validation"
                                : "Déclaration soumise avec succès"}
                            </p>
                            <p className="text-sm text-green-600 dark:text-green-400">
                              {needsValidation
                                ? `Un email a été envoyé à ${validator.replace(".", " ")} pour validation.`
                                : "Votre déclaration a été soumise à l'AMSF."}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Référence</p>
                            <p>DS-2023-006</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Date de soumission</p>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <p>25/04/2023</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Heure de soumission</p>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <p>14:30</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Statut</p>
                            <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                              {needsValidation ? "En attente de validation" : "Soumis"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <DialogFooter>
                  {currentStep > 1 && currentStep < 4 && (
                    <Button variant="outline" onClick={handlePreviousStep}>
                      Précédent
                    </Button>
                  )}
                  {currentStep < 3 && <Button onClick={handleNextStep}>Suivant</Button>}
                  {currentStep === 3 && (
                    <Button onClick={handleNextStep}>
                      {needsValidation ? "Envoyer pour validation" : "Soumettre à l'AMSF"}
                    </Button>
                  )}
                  {currentStep === 4 && <Button onClick={() => setNewReportDialogOpen(false)}>Fermer</Button>}
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtrer
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exporter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Référence</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Sujet</TableHead>
                <TableHead>Soumis par</TableHead>
                <TableHead>Validé par</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.reference}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(
                        report.status,
                      )}`}
                    >
                      {report.status === "submitted" ? "Soumis" : report.status === "pending" ? "En attente" : "Rejeté"}
                    </span>
                  </TableCell>
                  <TableCell>{report.subject}</TableCell>
                  <TableCell>{report.submittedBy}</TableCell>
                  <TableCell>{report.validatedBy || "-"}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Détails
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
