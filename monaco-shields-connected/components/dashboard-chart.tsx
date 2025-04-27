"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
  { month: "Jan", dossiers: 12, verifications: 18, declarations: 2, signatures: 8 },
  { month: "Fév", dossiers: 15, verifications: 22, declarations: 1, signatures: 10 },
  { month: "Mar", dossiers: 18, verifications: 25, declarations: 3, signatures: 12 },
  { month: "Avr", dossiers: 20, verifications: 30, declarations: 2, signatures: 15 },
  { month: "Mai", dossiers: 22, verifications: 35, declarations: 4, signatures: 18 },
  { month: "Juin", dossiers: 25, verifications: 40, declarations: 3, signatures: 20 },
]

export function DashboardChart() {
  const [period, setPeriod] = useState("6m")

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select defaultValue={period} onValueChange={(value) => setPeriod(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sélectionner une période" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">Dernier mois</SelectItem>
            <SelectItem value="3m">3 derniers mois</SelectItem>
            <SelectItem value="6m">6 derniers mois</SelectItem>
            <SelectItem value="1y">Dernière année</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ChartContainer
        config={{
          dossiers: {
            label: "Dossiers",
            color: "hsl(var(--chart-1))",
          },
          verifications: {
            label: "Vérifications",
            color: "hsl(var(--chart-2))",
          },
          declarations: {
            label: "Déclarations",
            color: "hsl(var(--chart-3))",
          },
          signatures: {
            label: "Signatures",
            color: "hsl(var(--chart-4))",
          },
        }}
        className="h-[300px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line type="monotone" dataKey="dossiers" stroke="var(--color-dossiers)" name="Dossiers" />
            <Line type="monotone" dataKey="verifications" stroke="var(--color-verifications)" name="Vérifications" />
            <Line type="monotone" dataKey="declarations" stroke="var(--color-declarations)" name="Déclarations" />
            <Line type="monotone" dataKey="signatures" stroke="var(--color-signatures)" name="Signatures" />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
