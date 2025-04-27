"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import {
  Calendar,
  Check,
  Clock,
  Download,
  FileSignature,
  FileText,
  Filter,
  Plus,
  Search,
  Upload,
  User,
  X,
} from "lucide-react"

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
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

// Données fictives pour les signatures électroniques
const signatures = [
  {
    id: "1",
    reference: "SIG-2023-001",
    date: "15/04/2023",
    status: "completed",
    document: "Contrat de service.pdf",
    signatories: ["Jean Dupont", "Marie Martin"],
    folder: "SCI Azur",
  },
  {
    id: "2",
    reference: "SIG-2023-002",
    date: "20/05/2023",
    status: "pending",
    document: "Procuration.pdf",
    signatories: ["Pierre Durand", "Sophie Bernard"],
    folder: "SARL Méditerranée",
  },
  {
    id: "3",
    reference: "SIG-2023-003",
    date: "10/06/2023",
    status: "expired",
    document: "Contrat de bail.pdf",
    signatories: ["Ahmed Khalid"],
    folder: "SCI Azur",
  },
  {
    id: "4",
    reference: "SIG-2023-004",
    date: "05/07/2023",
    status: "completed",
    document: "Attestation.pdf",
    signatories: ["Marie Martin"],
    folder: "SAS Riviera",
  },
  {
    id: "5",
    reference: "SIG-2023-005",
    date: "12/08/2023",
    status: "pending",
    document: "Mandat.pdf",
    signatories: ["Jean Dupont", "Roberto Conti"],
    folder: "SARL Méditerranée",
  },
]

export default function SignaturePage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [newSignatureDialogOpen, setNewSignatureDialogOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [signatories, setSignatories] = useState([{ name: "", email: "" }])

  const filteredSignatures = signatures.filter(
    (signature) =>
      signature.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      signature.document.toLowerCase().includes(searchTerm.toLowerCase()) ||
      signature.folder.toLowerCase().includes(searchTerm.toLowerCase()) ||
      signature.signatories.some((signatory) => signatory.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "expired":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <Check className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "expired":
        return <X className="h-4 w-4 text-red-600" />
      default:
        return null
    }
  }

  const handleNextStep = () => {
    if (currentStep === 1 && !uploadComplete) {
      // Simuler un téléchargement
      setIsUploading(true)
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            setUploadComplete(true)
            return 100
          }
          return prev + 10
        })
      }, 300)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleAddSignatory = () => {
    setSignatories([...signatories, { name: "", email: "" }])
  }

  const handleRemoveSignatory = (index) => {
    const newSignatories = [...signatories]
    newSignatories.splice(index, 1)
    setSignatories(newSignatories)
  }

  const handleSignatoryChange = (index, field, value) => {
    const newSignatories = [...signatories]
    newSignatories[index][field] = value
    setSignatories(newSignatories)
  }

  const handleSubmit = () => {
    // Logique de soumission
    setNewSignatureDialogOpen(false)
    setCurrentStep(1)
    setUploadProgress(0)
    setIsUploading(false)
    setUploadComplete(false)
    setSignatories([{ name: "", email: "" }])
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{t("signature.title")}</h1>
        <p className="text-muted-foreground">Gérez vos signatures électroniques</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Signatures électroniques</CardTitle>
            <CardDescription>Historique des signatures électroniques</CardDescription>
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
            <Dialog open={newSignatureDialogOpen} onOpenChange={setNewSignatureDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Nouvelle signature
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Nouvelle demande de signature</DialogTitle>
                  <DialogDescription>Envoyez un document à signer électroniquement</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="mb-8">
                    <div className="relative">
                      <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-muted"></div>
                      <ol className="relative z-10 flex justify-between">
                        {[1, 2, 3].map((step) => (
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
                      <div className="text-center">Document</div>
                      <div className="text-center">Signataires</div>
                      <div className="text-center">Confirmation</div>
                    </div>
                  </div>

                  {currentStep === 1 && (
                    <div className="space-y-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="folder">Dossier</Label>
                        <Select>
                          <SelectTrigger id="folder">
                            <SelectValue placeholder="Sélectionner un dossier" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sci_azur">SCI Azur</SelectItem>
                            <SelectItem value="sarl_mediterranee">SARL Méditerranée</SelectItem>
                            <SelectItem value="sas_riviera">SAS Riviera</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="documentType">Type de document</Label>
                        <Select>
                          <SelectTrigger id="documentType">
                            <SelectValue placeholder="Sélectionner un type de document" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="contract">Contrat</SelectItem>
                            <SelectItem value="power_of_attorney">Procuration</SelectItem>
                            <SelectItem value="certificate">Attestation</SelectItem>
                            <SelectItem value="mandate">Mandat</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label>Document à signer</Label>
                        <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8">
                          <div className="flex flex-col items-center space-y-2 text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                              <Upload className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium">
                                Glissez-déposez votre document ou cliquez pour parcourir
                              </p>
                              <p className="text-xs text-muted-foreground">PDF, DOCX jusqu'à 10 MB</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Parcourir les fichiers
                            </Button>
                          </div>
                        </div>
                      </div>
                      {isUploading && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Téléchargement en cours...</span>
                            <span className="text-sm font-medium">{uploadProgress}%</span>
                          </div>
                          <Progress value={uploadProgress} className="h-2" />
                        </div>
                      )}
                      {uploadComplete && (
                        <Alert className="border-green-500">
                          <Check className="h-4 w-4 text-green-500" />
                          <AlertTitle>Document téléchargé</AlertTitle>
                          <AlertDescription className="flex items-center justify-between">
                            <span>Contrat.pdf (2.5 MB)</span>
                            <Button variant="outline" size="sm">
                              <X className="mr-2 h-4 w-4" />
                              Supprimer
                            </Button>
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4 py-4">
                      <div className="space-y-4">
                        {signatories.map((signatory, index) => (
                          <div key={index} className="rounded-md border p-4">
                            <div className="mb-4 flex items-center justify-between">
                              <h4 className="font-medium">Signataire {index + 1}</h4>
                              {index > 0 && (
                                <Button variant="ghost" size="sm" onClick={() => handleRemoveSignatory(index)}>
                                  <X className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="grid gap-2">
                                <Label htmlFor={`name-${index}`}>Nom</Label>
                                <Input
                                  id={`name-${index}`}
                                  placeholder="Jean Dupont"
                                  value={signatory.name}
                                  onChange={(e) => handleSignatoryChange(index, "name", e.target.value)}
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor={`email-${index}`}>Email</Label>
                                <Input
                                  id={`email-${index}`}
                                  type="email"
                                  placeholder="jean.dupont@example.com"
                                  value={signatory.email}
                                  onChange={(e) => handleSignatoryChange(index, "email", e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                        <Button variant="outline" className="w-full" onClick={handleAddSignatory}>
                          <Plus className="mr-2 h-4 w-4" />
                          Ajouter un signataire
                        </Button>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="expiryDate">Date d'expiration</Label>
                        <div className="relative">
                          <Input id="expiryDate" placeholder="JJ/MM/AAAA" />
                          <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message (optionnel)</Label>
                        <Input id="message" placeholder="Message pour les signataires" />
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4 py-4">
                      <Alert>
                        <FileSignature className="h-4 w-4" />
                        <AlertTitle>Prêt à envoyer</AlertTitle>
                        <AlertDescription>
                          Votre document sera envoyé aux signataires pour signature électronique.
                        </AlertDescription>
                      </Alert>
                      <div className="rounded-md border p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Document</p>
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <p>Contrat.pdf</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Dossier</p>
                            <p>SCI Azur</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Date d'expiration</p>
                            <p>25/05/2023</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium">Signataires</p>
                        <div className="space-y-2">
                          {signatories.map((signatory, index) => (
                            <div key={index} className="flex items-center justify-between rounded-md border p-3">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                  <User className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="font-medium">{signatory.name || "Non spécifié"}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {signatory.email || "Email non spécifié"}
                                  </p>
                                </div>
                              </div>
                              <Badge variant="outline">En attente</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <DialogFooter>
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={handlePreviousStep}>
                      Précédent
                    </Button>
                  )}
                  {currentStep < 3 ? (
                    <Button
                      onClick={handleNextStep}
                      disabled={
                        (currentStep === 1 && !uploadComplete) ||
                        (currentStep === 2 && signatories.some((signatory) => !signatory.name || !signatory.email))
                      }
                    >
                      Suivant
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit}>Envoyer pour signature</Button>
                  )}
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
                <TableHead>Document</TableHead>
                <TableHead>Signataires</TableHead>
                <TableHead>Dossier</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSignatures.map((signature) => (
                <TableRow key={signature.id}>
                  <TableCell className="font-medium">{signature.reference}</TableCell>
                  <TableCell>{signature.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(signature.status)}
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(
                          signature.status,
                        )}`}
                      >
                        {signature.status === "completed"
                          ? "Complété"
                          : signature.status === "pending"
                            ? "En attente"
                            : "Expiré"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{signature.document}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {signature.signatories.map((signatory, index) => (
                        <Badge key={index} variant="outline">
                          {signatory}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{signature.folder}</TableCell>
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
