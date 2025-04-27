import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Calendar, Download, FileCheck, Filter, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AuditPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Piste d'audit</h1>
          <p className="text-muted-foreground">Preuve et archivage des démarches et justificatifs idoines</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Période
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtres
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recherche d'audit</CardTitle>
          <CardDescription>Recherchez des actions spécifiques dans la piste d'audit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher par utilisateur, action ou dossier..." className="pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Type d'action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les actions</SelectItem>
                <SelectItem value="login">Connexion</SelectItem>
                <SelectItem value="document">Document</SelectItem>
                <SelectItem value="signature">Signature</SelectItem>
                <SelectItem value="verification">Vérification</SelectItem>
                <SelectItem value="declaration">Déclaration</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" />
              Rechercher
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Journal d'audit</CardTitle>
          <CardDescription>Historique complet des actions effectuées</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <FileCheck className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">Document vérifié</p>
                  <Badge variant="outline">Vérification</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Utilisateur: admin@monacoshield.com | Dossier: #1234 | Document: Passeport
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">23/04/2025 14:30</Badge>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <FileCheck className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">Document signé</p>
                  <Badge variant="outline">Signature</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Utilisateur: client@example.com | Document: Contrat de service
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">23/04/2025 12:15</Badge>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <FileCheck className="h-5 w-5 text-amber-600" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">Déclaration soumise</p>
                  <Badge variant="outline">Déclaration</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Utilisateur: admin@monacoshield.com | Déclaration: #DS-2025-001
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">22/04/2025 16:45</Badge>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <FileCheck className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">Connexion utilisateur</p>
                  <Badge variant="outline">Connexion</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Utilisateur: admin@monacoshield.com | IP: 192.168.1.1</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">22/04/2025 09:00</Badge>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
