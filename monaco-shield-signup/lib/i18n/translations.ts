type Translations = {
  [key: string]: {
    fr: string
    en: string
  }
}

const translations: Translations = {
  "nav.features": {
    fr: "Fonctionnalités",
    en: "Features",
  },
  "nav.pricing": {
    fr: "Tarifs",
    en: "Pricing",
  },
  "nav.about": {
    fr: "À propos",
    en: "About",
  },
  "nav.contact": {
    fr: "Contact",
    en: "Contact",
  },
  "nav.login": {
    fr: "Connexion",
    en: "Login",
  },
  "nav.signup": {
    fr: "S'inscrire",
    en: "Sign up",
  },
  "footer.tagline": {
    fr: "La solution monégasque pour simplifier votre conformité réglementaire et sécuriser vos processus.",
    en: "The Monegasque solution to simplify your regulatory compliance and secure your processes.",
  },
  "footer.product": {
    fr: "Produit",
    en: "Product",
  },
  "footer.features": {
    fr: "Fonctionnalités",
    en: "Features",
  },
  "footer.pricing": {
    fr: "Tarifs",
    en: "Pricing",
  },
  "footer.demo": {
    fr: "Démonstration",
    en: "Demo",
  },
  "footer.faq": {
    fr: "FAQ",
    en: "FAQ",
  },
  "footer.company": {
    fr: "Entreprise",
    en: "Company",
  },
  "footer.about": {
    fr: "À propos",
    en: "About",
  },
  "footer.contact": {
    fr: "Contact",
    en: "Contact",
  },
  "footer.blog": {
    fr: "Blog",
    en: "Blog",
  },
  "footer.careers": {
    fr: "Carrières",
    en: "Careers",
  },
  "footer.legal": {
    fr: "Légal",
    en: "Legal",
  },
  "footer.terms": {
    fr: "Mentions légales",
    en: "Terms of Service",
  },
  "footer.privacy": {
    fr: "Politique de confidentialité",
    en: "Privacy Policy",
  },
  "footer.cookies": {
    fr: "Politique de cookies",
    en: "Cookie Policy",
  },
  "footer.rights": {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
  },
  "pricing.title": {
    fr: "Tarifs simples et transparents",
    en: "Simple and transparent pricing",
  },
  "pricing.subtitle": {
    fr: "Choisissez le plan qui correspond à vos besoins",
    en: "Choose the plan that fits your needs",
  },
  "pricing.billing.monthly": {
    fr: "Mensuel",
    en: "Monthly",
  },
  "pricing.billing.annual": {
    fr: "Annuel",
    en: "Annual",
  },
  "pricing.recommended": {
    fr: "Recommandé",
    en: "Recommended",
  },
  "pricing.comparison.title": {
    fr: "Comparaison des fonctionnalités",
    en: "Feature comparison",
  },
  "pricing.comparison.subtitle": {
    fr: "Découvrez en détail ce que chaque plan offre",
    en: "Discover in detail what each plan offers",
  },
  "signup.title": {
    fr: "Rejoignez MonacoShield",
    en: "Join MonacoShield",
  },
  "signup.subtitle": {
    fr: "Créez votre compte et commencez à sécuriser vos actifs dès aujourd'hui.",
    en: "Create your account and start securing your assets today.",
  },
  "signup.step": {
    fr: "Étape",
    en: "Step",
  },
  "signup.of": {
    fr: "sur",
    en: "of",
  },
}

export function t(key: string, language: "fr" | "en"): string {
  if (translations[key]) {
    return translations[key][language]
  }
  return key
}
