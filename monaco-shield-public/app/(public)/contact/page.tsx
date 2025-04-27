"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Building, HelpCircle, Scale } from "lucide-react"
import { PublicHeader } from "@/components/public/public-header"
import { PublicFooter } from "@/components/public/public-footer"
import { useLanguage } from "@/lib/i18n/use-language"
import { t } from "@/lib/i18n/translations"

export default function ContactPage() {
  const { language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("contact.title", language)}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  {t("contact.subtitle", language)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">{t("contact.form.title", language)}</h2>
                  <p className="text-gray-500">
                    {t("contact.form.description", language)}
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">{t("contact.form.firstname", language)}</Label>
                      <Input id="first-name" placeholder={t("contact.form.firstname", language)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">{t("contact.form.lastname", language)}</Label>
                      <Input id="last-name" placeholder={t("contact.form.lastname", language)} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email", language)}</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contact.form.phone", language)}</Label>
                    <Input id="phone" placeholder="+377 12 34 56 78" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.form.subject", language)}</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder={t("contact.form.subject", language)} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Demande générale</SelectItem>
                        <SelectItem value="demo">Demande de démonstration</SelectItem>
                        <SelectItem value="sales">Question commerciale</SelectItem>
                        <SelectItem value="support">Support technique</SelectItem>
                        <SelectItem value="partnership">Partenariat</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.form.message", language)}</Label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.form.message", language)}
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    {t("contact.form.submit", language)}
                  </Button>
                </form>
              </div>

              {/* Contact Departments */}
              <section className="bg-gray-50 py-20">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nos départements</h2>
                      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                        Contactez directement le département qui correspond à votre besoin
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                          <MessageSquare className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold">Support client</h3>
                        <p className="text-gray-500">
                          Besoin d'aide avec notre plateforme ? Notre équipe de support est là pour vous aider.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                          <Building className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold">Ventes</h3>
                        <p className="text-gray-500">
                          Intéressé par nos solutions ? Notre équipe commerciale vous accompagnera dans votre projet.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                          <HelpCircle className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold">Partenariats</h3>
                        <p className="text-gray-500">
                          Vous souhaitez devenir partenaire ? Découvrez nos programmes de partenariat.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                          <Scale className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold">Conformité</h3>
                        <p className="text-gray-500">
                          Suivi des réglementations monégasques et réponses aux sollicitations juridiques des clients et de leurs autorités de tutelle.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Questions fréquentes</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Trouvez rapidement des réponses à vos questions
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold">Comment puis-je demander une démonstration ?</h3>
                  <p className="mt-2 text-gray-500">
                    Vous pouvez demander une démonstration en remplissant le formulaire de contact ci-dessus en
                    sélectionnant "Demande de démonstration" comme sujet, ou en nous contactant directement par
                    téléphone.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold">Quel est le délai de réponse à une demande de support ?</h3>
                  <p className="mt-2 text-gray-500">
                    Notre équipe de support s'engage à répondre à toutes les demandes dans un délai de 24 heures
                    ouvrées. Pour les clients avec un contrat Premium, le délai de réponse est de 4 heures ouvrées.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold">Proposez-vous des formations sur site ?</h3>
                  <p className="mt-2 text-gray-500">
                    Oui, nous proposons des formations sur site pour les entreprises à Monaco et dans les environs.
                    Pour les clients plus éloignés, nous proposons également des formations en ligne personnalisées.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold">Comment puis-je signaler un problème technique ?</h3>
                  <p className="mt-2 text-gray-500">
                    Les clients peuvent signaler un problème technique via leur espace client, par email ou par téléphone au numéro de téléphone dédié qui, selon leur contrat, leur est communiqué lors de la souscription.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-red-600 py-20 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Prêt à simplifier votre conformité ?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-red-100 md:text-xl">
                    Commencez dès aujourd'hui avec un essai gratuit de 14 jours, sans engagement
                  </p>
                </div>
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <a href="/inscription">Essai gratuit</a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
  )
}
