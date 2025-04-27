// Base email template with logo, disclaimer and footer
const baseTemplate = (content: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MonacoShield</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid #eee;
    }
    .logo {
      max-width: 200px;
      height: auto;
    }
    .content {
      padding: 30px 0;
    }
    .footer {
      text-align: center;
      padding: 20px 0;
      border-top: 1px solid #eee;
      font-size: 12px;
      color: #666;
    }
    .disclaimer {
      font-size: 11px;
      color: #999;
      margin-top: 20px;
      padding: 10px;
      background: #f9f9f9;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://monacoshield.com/logo.png" alt="MonacoShield Logo" class="logo">
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="disclaimer">
      Ce message est confidentiel et est destiné uniquement à son destinataire. Si vous avez reçu ce message par erreur, merci de le supprimer et d'en informer l'expéditeur. MonacoShield ne peut être tenu responsable de l'intégrité des messages transmis par Internet.
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} MonacoShield. Tous droits réservés.</p>
      <p>MonacoShield SARL - 7 Avenue de Grande Bretagne, 98000 Monaco</p>
      <p>Tel: +377 99 99 99 99 | Email: contact@monacoshield.com</p>
    </div>
  </div>
</body>
</html>
`;

export const emailTemplates = {
  welcome: (firstName: string) => baseTemplate(`
    <h2>Bienvenue chez MonacoShield, ${firstName} !</h2>
    <p>Nous sommes ravis de vous accueillir dans notre communauté d'entreprises monégasques.</p>
    <p>Pour commencer à utiliser nos services, veuillez vérifier votre adresse email en cliquant sur le lien ci-dessous :</p>
    <p><a href="https://monacoshield.com/verify-email">Vérifier mon email</a></p>
    <p>Si vous avez des questions, notre équipe est là pour vous aider.</p>
    <p>Cordialement,<br>L'équipe MonacoShield</p>
  `),

  passwordReset: (resetLink: string) => baseTemplate(`
    <h2>Réinitialisation de votre mot de passe</h2>
    <p>Vous avez demandé la réinitialisation de votre mot de passe MonacoShield.</p>
    <p>Cliquez sur le lien ci-dessous pour créer un nouveau mot de passe :</p>
    <p><a href="${resetLink}">Réinitialiser mon mot de passe</a></p>
    <p>Ce lien expirera dans 24 heures.</p>
    <p>Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet email.</p>
    <p>Cordialement,<br>L'équipe MonacoShield</p>
  `),

  emailVerification: (verificationLink: string) => baseTemplate(`
    <h2>Vérification de votre adresse email</h2>
    <p>Merci de vous être inscrit chez MonacoShield.</p>
    <p>Pour activer votre compte, veuillez cliquer sur le lien ci-dessous :</p>
    <p><a href="${verificationLink}">Vérifier mon email</a></p>
    <p>Ce lien expirera dans 24 heures.</p>
    <p>Cordialement,<br>L'équipe MonacoShield</p>
  `),

  securityAlert: (alertType: string, details: string) => baseTemplate(`
    <h2>Alerte de sécurité : ${alertType}</h2>
    <p>${details}</p>
    <p>Si vous n'êtes pas à l'origine de cette action, veuillez immédiatement :</p>
    <ol>
      <li>Changer votre mot de passe</li>
      <li>Activer l'authentification à deux facteurs</li>
      <li>Contacter notre support sécurité</li>
    </ol>
    <p>Cordialement,<br>L'équipe Sécurité MonacoShield</p>
  `),

  moduleNotification: (moduleName: string, status: string, details: string) => baseTemplate(`
    <h2>Notification du module ${moduleName}</h2>
    <p>Statut : ${status}</p>
    <p>${details}</p>
    <p>Vous pouvez consulter les détails complets dans votre espace client.</p>
    <p>Cordialement,<br>L'équipe MonacoShield</p>
  `),

  subscriptionUpdate: (planName: string, action: string, details: string) => baseTemplate(`
    <h2>Mise à jour de votre abonnement</h2>
    <p>Votre abonnement a été ${action.toLowerCase()} au plan ${planName}.</p>
    <p>${details}</p>
    <p>Vous pouvez gérer votre abonnement dans les paramètres de votre compte.</p>
    <p>Cordialement,<br>L'équipe MonacoShield</p>
  `)
}; 