const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Configuration Nodemailer (Gmail avec mot de passe d'application)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'petrosyan21000@gmail.com',
    pass: 'your_app_password_here' // À remplacer par votre mot de passe d'application Google
  }
});

// Route pour envoyer l'email
app.post('/send-email', async (req, res) => {
  const { name, email, message, phone, projectType, budget } = req.body;

  // Validation basique
  if (!name || !email || !message) {
    return res.status(400).send('Tous les champs requis ne sont pas présents');
  }

  try {
    // Format du message
    let emailContent = `
      <h2>Nouvelle Demande de Devis</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
    `;
    
    if (phone) emailContent += `<p><strong>Téléphone :</strong> ${phone}</p>`;
    if (projectType) emailContent += `<p><strong>Type de projet :</strong> ${projectType}</p>`;
    if (budget) emailContent += `<p><strong>Budget indicatif :</strong> ${budget}</p>`;
    
    emailContent += `
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Email à vous-même
    await transporter.sendMail({
      from: 'petrosyan21000@gmail.com',
      to: 'petrosyan21000@gmail.com',
      subject: `Nouvelle demande de devis de ${name}`,
      html: emailContent
    });

    // Email de confirmation au visiteur
    await transporter.sendMail({
      from: 'petrosyan21000@gmail.com',
      to: email,
      subject: 'Demande de devis bien reçue 🦉 — Code & Chouette',
      html: `
        <h2>Merci pour votre demande de devis !</h2>
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre demande et nous revenons vers vous sous 48h avec un premier avis et un devis gratuit.</p>
        <p>Merci de votre confiance !</p>
        <p>L'équipe Code & Chouette — les jeunes dévs du quartier, à Dijon</p>
      `
    });

    res.status(200).send('Email envoyé avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'envoi :', error);
    res.status(500).send('Erreur lors de l\'envoi du message');
  }
});

// Servir les fichiers HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
  console.log('Accédez à http://localhost:3000/contact.html');
});
