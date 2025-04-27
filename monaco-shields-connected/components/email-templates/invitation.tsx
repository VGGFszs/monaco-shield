import Image from "next/image"

interface InvitationEmailProps {
  companyName: string
  platformName: string
  inviterName: string
  recipientName: string
  invitationLink: string
  inviterContact: string
}

export function InvitationEmail({
  companyName,
  platformName,
  inviterName,
  recipientName,
  invitationLink,
  inviterContact,
}: InvitationEmailProps) {
  return (
    <div className="mx-auto max-w-2xl rounded-lg border p-8">
      <div className="mb-6 flex items-center justify-center">
        <div className="relative h-16 w-16">
          <Image src="/images/monaco-shield-logo.png" alt="Monaco Shields Logo" fill className="object-contain" />
        </div>
      </div>

      <h1 className="mb-6 text-center text-2xl font-bold">
        {companyName} - Invitation à rejoindre {platformName}
      </h1>

      <p className="mb-4">Bonjour {recipientName},</p>

      <p className="mb-4">
        {inviterName} vous invite à collaborer sur {platformName}, la plateforme de conformité pour les professionnels
        monégasques.
      </p>

      <p className="mb-6">
        Monaco Shields vous permet de simplifier vos processus de conformité, de gérer les vérifications d'exposition,
        les déclarations de soupçon, et bien plus encore.
      </p>

      <div className="mb-6 text-center">
        <a
          href={invitationLink}
          className="inline-block rounded-md bg-primary px-6 py-3 text-center font-medium text-white"
        >
          Accepter l'invitation
        </a>
      </div>

      <p className="mb-4">
        Après avoir accepté l'invitation, vous pourrez configurer votre profil et commencer à utiliser la plateforme.
      </p>

      <p className="mb-6">
        Si vous avez des questions, n'hésitez pas à contacter {inviterName} à l'adresse suivante : {inviterContact}.
      </p>

      <p className="mb-2">Cordialement,</p>
      <p className="mb-6">L'équipe Monaco Shields</p>

      <div className="border-t pt-4 text-center text-sm text-muted-foreground">
        <p>© 2023 Monaco Shields. Tous droits réservés.</p>
      </div>
    </div>
  )
}
