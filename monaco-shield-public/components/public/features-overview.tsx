"use client"
import { useLanguage } from "@/lib/i18n/use-language"
import { Search, FileWarning, MonitorSmartphone, UserCheck, FileSignature, FileCheck } from "lucide-react"

export function FeaturesOverview() {
  const { language, t } = useLanguage()

  const features = [
    {
      icon: <Search className="h-12 w-12 text-red-600" />,
      title: t("features.vigilance.title", language) || "Vigilance",
      description:
        t("features.vigilance.description", language) ||
        "Permettre aux utilisateurs de consulter automatiquement les principales bases de données internationales pour connaitre leur client, fournisseur ou partenaire.",
    },
    {
      icon: <MonitorSmartphone className="h-12 w-12 text-red-600" />,
      title: t("features.formation.title", language) || "Formation",
      description:
        t("features.formation.description", language) ||
        "Permettre d'assurer la formation des collaborateurs en matière d'opposabilité juridique des actes électroniques.",
    },
    {
      icon: <FileSignature className="h-12 w-12 text-red-600" />,
      title: t("features.signature.title", language) || "eSignature",
      description:
        t("features.signature.description", language) ||
        "Signature électronique avancée ou qualifiée de tout document en quelques clics.",
    },
    {
      icon: <FileWarning className="h-12 w-12 text-red-600" />,
      title: t("features.reporting.title", language) || "Reporting",
      description:
        t("features.reporting.description", language) ||
        "Gestion intégrée des déclarations de soupçon et disponibilité des pistes d'audit.",
    },
    {
      icon: <UserCheck className="h-12 w-12 text-red-600" />,
      title: t("features.rbe.title", language) || "Registre des bénéficiaires effectifs",
      description:
        t("features.rbe.description", language) || "Due diligence auprès du registre des bénéficiaires effectifs.",
    },
    {
      icon: <FileCheck className="h-12 w-12 text-red-600" />,
      title: t("features.audit.title", language) || "Audit",
      description:
        t("features.audit.description", language) || "Preuve et archivage des démarches et justificatifs idoines.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("features.overview.title", language) || "Nos fonctionnalités principales"}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
