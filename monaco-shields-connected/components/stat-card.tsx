import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  description: string
  trend: "up" | "down" | "neutral"
  trendValue?: string
}

export function StatCard({ title, value, description, trend, trendValue }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {trend === "up" && <ArrowUpIcon className="h-4 w-4 text-emerald-500" />}
        {trend === "down" && <ArrowDownIcon className="h-4 w-4 text-rose-500" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {description}
          {trendValue && (
            <span className={trend === "up" ? "text-emerald-500" : trend === "down" ? "text-rose-500" : ""}>
              {" "}
              {trendValue}
            </span>
          )}
        </p>
      </CardContent>
    </Card>
  )
}
