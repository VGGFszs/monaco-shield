"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { BarChart3, Download, Printer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Données fictives pour les rapports
export default function ReportsPage() {
  const reports = [
    {
    id: "1",
    name: "Rapport d'activité mensuel",
    date: "30/04/2023",
    type: "activity",
    format: "PDF",
    size: "1.2 MB",
  },
  {
    id: "2",
    name: "Rapport de vérifications d'exposition",
    date: "15/05/2023",
    type: "exposure",
    format: "XLSX",
    size: "850 KB",
  },
  {
    id: "3",
    name: "Rapport de déclarations de soupçon",
    date: "10/06/2023",
    type: "suspicion",
    format: "PDF",
    size: "1.5 MB",
  },
  {
    id: "4",
    name: "Rapport de signatures électroniques",
    date: "05/07/2023",
    type: "signature",
    format: "PDF",
    size: "980 KB",
  },
  {
    id: "5",
    name: "Rapport de bénéficiaires effectifs",
    date: "12/08/2023",
    type: "beneficiary",
    format: "XLSX",
    size: "1.1 MB",
  },
]

// Données pour les graphiques
const activityData = [
  { month: "Jan", exposureChecks: 12, suspicionReports: 2, signatures: 8, beneficiaryChecks: 5 },
  { month: "Fév", exposureChecks: 18, suspicionReports: 3, signatures: 12, beneficiaryChecks: 7 },
  { month: "Mar", exposureChecks: 15, suspicionReports: 1, signatures: 10, beneficiaryChecks: 6 },
  { month: "Avr", exposureChecks: 25, suspicionReports: 4, signatures: 15, beneficiaryChecks: 9 },
  { month: "Mai", exposureChecks: 20, suspicionReports: 2, signatures: 18, beneficiaryChecks: 8 },
  { month: "Juin", exposureChecks: 30, suspicionReports: 5, signatures: 22, beneficiaryChecks: 12 },
]

const statusData = [
  { name: "Complété", value: 45 },
  { name: "En attente", value: 30 },
  { name: "Expiré", value: 15 },
  { name: "Non disponible", value: 10 },
]

const COLORS = ["#4ade80", "#facc15", "#f87171", "#94a3b8"]

  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [period, setPeriod] = useState("last6months")

  const filteredReports = reports.filter(
    (report) =>
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{t("reports.title")}</h1>
        <p className="text-muted-foreground">
          Générez et consultez des rapports sur vos activités
        </p>
      </div>

      <Tabs defaultValue="analytics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="analytics">Analytique</TabsTrigger>
          <TabsTrigger value="reports">Rapports</TabsTrigger>
          <TabsTrigger value="audit">Piste d'audit</TabsTrigger>
        </TabsList>
        <TabsContent value="analytics" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Analytique</h2>
              <p className="text-sm text-muted-foreground">
                Visualisez les tendances et performances de vos activités
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sélectionner une période" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last30days">30 derniers jours</SelectItem>
                  <SelectItem value="last3months">3 derniers mois</SelectItem>
                  <SelectItem value="last6months">6 derniers mois</SelectItem>
                  <SelectItem value="lastyear">Année dernière</SelectItem>
                  <SelectItem value="custom">Personnalisé</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Printer className="mr-2 h-4 w-4" />
                Imprimer
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Exporter
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Vérifications d'exposition
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">120</div>
                <p className="text-xs text-muted-foreground">
                  +12% par rapport à la période précédente
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Déclarations de soupçon
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">17</div>
                <p className="text-xs text-muted-foreground">
                  +5% par rapport à la période précédente
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Signatures électroniques
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85</div>
                <p className="text-xs text-muted-foreground">
                  +18% par rapport à la période précédente
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Vérifications de bénéficiaires
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">
                  +7% par rapport à la période précédente
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Activité par mois</CardTitle>
                <CardDescription>
                  Nombre d'opérations par type et par mois
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ChartContainer
                  config={{
                    exposureChecks: {
                      label: "Vérifications d'exposition",
                      color: "hsl(var(--chart-1))",
                    },
                    suspicionReports: {
                      label: "Déclarations de soupçon",
                      color: "hsl(var(--chart-2))",
                    },
                    signatures: {
                      label: "Signatures électroniques",
                      color: "hsl(var(--chart-3))",
                    },
                    beneficiaryChecks: {
                      label: "Vérifications de bénéficiaires",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="aspect-[4/3]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar
                        dataKey="exposureChecks"
                        fill="var(--color-exposureChecks)"
                      />
                      <Bar
                        dataKey="suspicionReports"
                        fill="var(--color-suspicionReports)"
                      />
                      <Bar
                        dataKey="signatures"
                        fill="var(--color-signatures)"
                      />
                      <Bar
                        dataKey="beneficiaryChecks"
                        fill="var(--color-beneficiaryChecks)"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Répartition par statut</CardTitle>
                <CardDescription>
                  Répartition des opérations par statut
                </CardDescription>
\
