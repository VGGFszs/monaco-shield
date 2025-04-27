import Image from "next/image"

interface ConfirmationEmailProps {
  platformName: string
  recipientName: string
  supportEmail: string
  helpCenterLink: string
}

export function ConfirmationEmail({
  platformName,
  recipientName,
  supportEmail,
  helpCenterLink,
}: ConfirmationEmailProps) {
  return (
    <div className="mx-auto max-w-2xl rounded-lg border p-8">
      <div className="mb-6 flex items-center justify-center">
        <div className="relative h-16 w-16">
          <Image src="/images/monaco-shield-logo.png" alt="Monaco Shields Logo" fill className="object-contain" />
        </div>
      </div>

      <h1 className="mb-6 text-center text-2xl font-bold">Bienvenue sur {platformName}</h1>

      <p className="mb-4">Bonjour {recipientName},</p>

      <p className="mb-4">
        Nous sommes ravis de vous accueillir sur Monaco Shields, la plateforme de conformité conçue pour les
        professionnels monégasques.
      </p>

      <p className="mb-6">
        Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter et commencer à utiliser nos services.
      </p>

      <div className="mb-6 rounded-lg bg-muted p-4">
        <h2 className="mb-2 font-semibold">Pour commencer :</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Complétez votre profil</li>
          <li>Ajoutez des membres à votre équipe</li>
          <li>Explorez les différents modules disponibles</li>
          <li>Consultez nos guides et tutoriels</li>
        </ul>
      </div>

      <p className="mb-6">
        Si vous avez des questions ou besoin d'assistance, n'hésitez pas à contacter notre équipe de support à l'adresse
        suivante : {supportEmail} ou à consulter notre centre d'aide :{" "}
        <a href={helpCenterLink} className="text-primary underline">
          Centre d'aide
        </a>
        .
      </p>

      <p className="mb-2">Cordialement,</p>
      <p className="mb-6">L'équipe Monaco Shields</p>

      <div className="border-t pt-4 text-center text-sm text-muted-foreground">
        <p>© 2023 Monaco Shields. Tous droits réservés.</p>
      </div>
    </div>
  )
}
