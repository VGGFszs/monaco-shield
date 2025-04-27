"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import {
  AlertCircle,
  Building,
  Check,
  Clock,
  Download,
  FileCheck,
  FileText,
  Filter,
  Globe,
  Plus,
  Search,
  Send,
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
import { Textarea } from "@/components/ui/textarea"

// Données fictives pour les vérifications de bénéficiaires effectifs
const beneficiaryChecks = [
  {
    id: "1",
    reference: "BE-2023-001",
    date: "15/04/2023",
    status: "completed",
    entity: "SCI Azur",
    country: "Monaco",
    beneficiaries: ["Jean Dupont (75%)", "Marie Martin (25%)"],
  },
  {
    id: "2",
    reference: "BE-2023-002",
    date: "20/05/2023",
    status: "pending",
    entity: "SARL Méditerranée",
    country: "France",
    beneficiaries: ["En attente de déclaration"],
  },
  {
    id: "3",
    reference: "BE-2023-003",
    date: "10/06/2023",
    status: "unavailable",
    entity: "Holding Monaco",
    country: "Monaco",
    beneficiaries: ["Information non disponible"],
  },
  {
    id: "4",
    reference: "BE-2023-004",
    date: "05/07/2023",
    status: "completed",
    entity: "SAS Riviera",
    country: "France",
    beneficiaries: ["Sophie Bernard (100%)"],
  },
  {
    id: "5",
    reference: "BE-2023-005",
    date: "12/08/2023",
    status: "pending",
    entity: "SARL Côte d'Azur",
    country: "France",
    beneficiaries: ["En attente de déclaration"],
  },
]

export default function BeneficiaryPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [newCheckDialogOpen, setNewCheckDialogOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedEntity, setSelectedEntity] = useState(null)
  const [contacts, setContacts] = useState([{ name: "", email: "", role: "legal_representative" }])

  const filteredChecks = beneficiaryChecks.filter(
    (check) =>
      check.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      check.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      check.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      check.beneficiaries.some((beneficiary) => beneficiary.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "unavailable":
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
      case "unavailable":
        return <X className="h-4 w-4 text-red-600" />
      default:
        return null
    }
  }

  const handleSearch = () => {
    setIsSearching(true)
    // Simulation d'une recherche API
    setTimeout(() => {
      setSearchResults([
        {
          id: "entity1",
          name: "SCI Azur",
          registrationNumber: "12345678",
          country: "Monaco",
          legalForm: "Société Civile Immobilière",
          address: "5 Avenue Princesse Grace, Monaco",
          representatives: ["Jean Dupont"],
        },
        {
          id: "entity2",
          name: "SARL Méditerranée",
          registrationNumber: "87654321",
          country: "France",
          legalForm: "Société à Responsabilité Limitée",
          address: "15 Rue de la République, Nice, France",
          representatives: ["Marie Martin"],
        },
        {
          id: "entity3",
          name: "SAS Riviera",
          registrationNumber: "56781234",
          country: "France",
          legalForm: "Société par Actions Simplifiée",
          address: "25 Boulevard des Moulins, Cannes, France",
          representatives: ["Sophie Bernard"],
        },
      ])
      setIsSearching(false)
    }, 1500)
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleAddContact = () => {
    setContacts([...contacts, { name: "", email: "", role: "legal_representative" }])
  }

  const handleRemoveContact = (index) => {
    const newContacts = [...contacts]
    newContacts.splice(index, 1)
    setContacts(newContacts)
  }

  const handleContactChange = (index, field, value) => {
    const newContacts = [...contacts]
    newContacts[index][field] = value
    setContacts(newContacts)
  }

  const handleSubmit = () => {
    // Logique de soumission
    setNewCheckDialogOpen(false)
    setCurrentStep(1)
    setSearchResults([])
    setSelectedEntity(null)
    setContacts([{ name: "", email: "", role: "legal_representative" }])
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{t("beneficiary.title")}</h1>
        <p className="text-muted-foreground">Gérez les vérifications de bénéficiaires effectifs</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Vérifications de bénéficiaires effectifs</CardTitle>
            <CardDescription>Historique des vérifications de bénéficiaires effectifs</CardDescription>
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
            <Dialog open={newCheckDialogOpen} onOpenChange={setNewCheckDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Nouvelle vérification
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Nouvelle vérification de bénéficiaire effectif</DialogTitle>
                  <DialogDescription>Vérifiez les bénéficiaires effectifs d'une personne morale</DialogDescription>
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
                      <div className="text-center">Recherche</div>
                      <div className="text-center">Sélection</div>
                      <div className="text-center">Contacts</div>
                      <div className="text-center">Confirmation</div>
                    </div>
                  </div>

                  {currentStep === 1 && (
                    <div className="space-y-4 py-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="entityName">Nom de la personne morale</Label>
                          <Input id="entityName" placeholder="SCI Azur" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="country">Pays d'incorporation</Label>
                          <Select>
                            <SelectTrigger id="country">
                              <SelectValue placeholder="Sélectionner un pays" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mc">Monaco</SelectItem>
                              <SelectItem value="fr">France</SelectItem>
                              <SelectItem value="it">Italie</SelectItem>
                              <SelectItem value="gb">Royaume-Uni</SelectItem>
                              <SelectItem value="other">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="outline"
                          onClick={() => setSearchResults([])}
                          disabled={isSearching || searchResults.length === 0}
                        >
                          Effacer
                        </Button>
                        <Button onClick={handleSearch} disabled={isSearching}>
                          {isSearching ? "Recherche en cours..." : "Rechercher"}
                        </Button>
                      </div>
                      {searchResults.length > 0 && (
                        <div className="rounded-md border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Nom</TableHead>
                                <TableHead>Numéro d'immatriculation</TableHead>
                                <TableHead>Pays</TableHead>
                                <TableHead>Forme juridique</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {searchResults.map((entity) => (
                                <TableRow key={entity.id}>
                                  <TableCell className="font-medium">{entity.name}</TableCell>
                                  <TableCell>{entity.registrationNumber}</TableCell>
                                  <TableCell>{entity.country}</TableCell>
                                  <TableCell>{entity.legalForm}</TableCell>
                                  <TableCell className="text-right">
                                    <Button variant="outline" size="sm" onClick={() => setSelectedEntity(entity)}>
                                      Sélectionner
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      )}
                    </div>
                  )}

                  {currentStep === 2 && selectedEntity && (
                    <div className="space-y-4 py-4">
                      <Alert>
                        <Building className="h-4 w-4" />
                        <AlertTitle>Entité sélectionnée</AlertTitle>
                        <AlertDescription>Vérifiez les informations de l'entité sélectionnée</AlertDescription>
                      </Alert>
                      <div className="rounded-md border p-4">
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Nom</p>
                              <p className="text-lg font-semibold">{selectedEntity.name}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Numéro d'immatriculation</p>
                              <p className="text-lg font-semibold">{selectedEntity.registrationNumber}</p>
                            </div>
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Forme juridique</p>
                              <p>{selectedEntity.legalForm}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Pays</p>
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-muted-foreground" />
                                <p>{selectedEntity.country}</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Adresse</p>
                            <p>{selectedEntity.address}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Représentant(s) légal(aux)</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedEntity.representatives.map((rep, index) => (
                                <Badge key={index} variant="outline">
                                  {rep}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Information sur les bénéficiaires effectifs</AlertTitle>
                        <AlertDescription>
                          Les informations sur les bénéficiaires effectifs ne sont pas disponibles dans les registres
                          publics. Une attestation sera générée et des contacts devront être invités à déclarer ces
                          informations.
                        </AlertDescription>
                      </Alert>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4 py-4">
                      <div className="space-y-4">
                        {contacts.map((contact, index) => (
                          <div key={index} className="rounded-md border p-4">
                            <div className="mb-4 flex items-center justify-between">
                              <h4 className="font-medium">Contact {index + 1}</h4>
                              {index > 0 && (
                                <Button variant="ghost" size="sm" onClick={() => handleRemoveContact(index)}>
                                  <X className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                            <div className="grid gap-4">
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid gap-2">
                                  <Label htmlFor={`name-${index}`}>Nom</Label>
                                  <Input
                                    id={`name-${index}`}
                                    placeholder="Jean Dupont"
                                    value={contact.name}
                                    onChange={(e) => handleContactChange(index, "name", e.target.value)}
                                  />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor={`email-${index}`}>Email</Label>
                                  <Input
                                    id={`email-${index}`}
                                    type="email"
                                    placeholder="jean.dupont@example.com"
                                    value={contact.email}
                                    onChange={(e) => handleContactChange(index, "email", e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor={`role-${index}`}>Qualité</Label>
                                <Select
                                  value={contact.role}
                                  onValueChange={(value) => handleContactChange(index, "role", value)}
                                >
                                  <SelectTrigger id={`role-${index}`}>
                                    <SelectValue placeholder="Sélectionner une qualité" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="legal_representative">Représentant légal</SelectItem>
                                    <SelectItem value="shareholder">Actionnaire</SelectItem>
                                    <SelectItem value="financial_advisor">Conseiller financier</SelectItem>
                                    <SelectItem value="lawyer">Avocat</SelectItem>
                                    <SelectItem value="other">Autre</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>
                        ))}
                        <Button variant="outline" className="w-full" onClick={handleAddContact}>
                          <Plus className="mr-2 h-4 w-4" />
                          Ajouter un contact
                        </Button>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message (optionnel)</Label>
                        <Textarea id="message" placeholder="Message pour les contacts..." rows={3} />
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-4 py-4">
                      <Alert>
                        <Send className="h-4 w-4" />
                        <AlertTitle>Prêt à envoyer</AlertTitle>
                        <AlertDescription>
                          Une invitation sera envoyée aux contacts pour déclarer les bénéficiaires effectifs de{" "}
                          {selectedEntity?.name}.
                        </AlertDescription>
                      </Alert>
                      <div className="rounded-md border p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Entité</p>
                            <p>{selectedEntity?.name}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Pays</p>
                            <p>{selectedEntity?.country}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Numéro d'immatriculation</p>
                            <p>{selectedEntity?.registrationNumber}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium">Contacts</p>
                        <div className="space-y-2">
                          {contacts.map((contact, index) => (
                            <div key={index} className="flex items-center justify-between rounded-md border p-3">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                  <User className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="font-medium">{contact.name || "Non spécifié"}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {contact.email || "Email non spécifié"}
                                  </p>
                                </div>
                              </div>
                              <Badge variant="outline">
                                {contact.role === "legal_representative"
                                  ? "Représentant légal"
                                  : contact.role === "shareholder"
                                    ? "Actionnaire"
                                    : contact.role === "financial_advisor"
                                      ? "Conseiller financier"
                                      : contact.role === "lawyer"
                                        ? "Avocat"
                                        : "Autre"}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Alert className="border-green-500">
                        <FileCheck className="h-4 w-4 text-green-500" />
                        <AlertTitle>Attestation générée</AlertTitle>
                        <AlertDescription className="flex items-center justify-between">
                          <span>Une attestation de recherche de bénéficiaires effectifs a été générée.</span>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Télécharger
                          </Button>
                        </AlertDescription>
                      </Alert>
                    </div>
                  )}
                </div>
                <DialogFooter>
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={handlePreviousStep}>
                      Précédent
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNextStep}
                      disabled={
                        (currentStep === 1 && !selectedEntity) ||
                        (currentStep === 3 && contacts.some((contact) => !contact.name || !contact.email))
                      }
                    >
                      Suivant
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit}>Confirmer et envoyer</Button>
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
                <TableHead>Entité</TableHead>
                <TableHead>Pays</TableHead>
                <TableHead>Bénéficiaires</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredChecks.map((check) => (
                <TableRow key={check.id}>
                  <TableCell className="font-medium">{check.reference}</TableCell>
                  <TableCell>{check.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(check.status)}
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(
                          check.status,
                        )}`}
                      >
                        {check.status === "completed"
                          ? "Complété"
                          : check.status === "pending"
                            ? "En attente"
                            : "Non disponible"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{check.entity}</TableCell>
                  <TableCell>{check.country}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {check.beneficiaries.map((beneficiary, index) => (
                        <Badge key={index} variant="outline">
                          {beneficiary}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
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
