import Image from "next/image"

interface NotificationEmailProps {
  platformName: string
  recipientName: string
  notificationType: "exposure" | "suspicion" | "signature" | "beneficiary" | "threshold"
  notificationDetails: string
  actionLink: string
  supportEmail: string
}

export function NotificationEmail({
  platformName,
  recipientName,
  notificationType,
  notificationDetails,
  actionLink,
  supportEmail,
}: NotificationEmailProps) {
  const notificationConfig = {
    exposure: {
      title: "Nouvelle vérification d'exposition",
      action: "Voir la vérification",
    },
    suspicion: {
      title: "Nouvelle déclaration de soupçon",
      action: "Voir la déclaration",
    },
    signature: {
      title: "Document à signer",
      action: "Signer le document",
    },
    beneficiary: {
      title: "Nouvelle recherche de bénéficiaire effectif",
      action: "Voir la recherche",
    },
    threshold: {
      title: "Seuil d'utilisation proche",
      action: "Gérer l'abonnement",
    },
  }

  const config = notificationConfig[notificationType]

  return (
    <div className="mx-auto max-w-2xl rounded-lg border p-8">
      <div className="mb-6 flex items-center justify-center">
        <div className="relative h-16 w-16">
          <Image src="/images/monaco-shield-logo.png" alt="Monaco Shields Logo" fill className="object-contain" />
        </div>
      </div>

      <h1 className="mb-6 text-center text-2xl font-bold">{config.title}</h1>

      <p className="mb-4">Bonjour {recipientName},</p>

      <p className="mb-6">{notificationDetails}</p>

      <div className="mb-6 text-center">
        <a
          href={actionLink}
          className="inline-block rounded-md bg-primary px-6 py-3 text-center font-medium text-white"
        >
          {config.action}
        </a>
      </div>

      <p className="mb-6">
        Si vous avez des questions ou besoin d'assistance, n'hésitez pas à contacter notre équipe de support à l'adresse
        suivante : {supportEmail}.
      </p>

      <p className="mb-2">Cordialement,</p>
      <p className="mb-6">L'équipe Monaco Shields</p>

      <div className="border-t pt-4 text-center text-sm text-muted-foreground">
        <p>© 2023 Monaco Shields. Tous droits réservés.</p>
        <p className="mt-2">
          Vous recevez cet email car vous êtes inscrit sur {platformName}. Si vous ne souhaitez plus recevoir ces
          notifications, vous pouvez modifier vos préférences dans les paramètres de votre compte.
        </p>
      </div>
    </div>
  )
}
