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
  const { name, email, message } = req.body;

  // Validation basique
  if (!name || !email || !message) {
    return res.status(400).send('Tous les champs sont obligatoires');
  }

  try {
    // Email à vous-même
    await transporter.sendMail({
      from: 'petrosyan21000@gmail.com',
      to: 'petrosyan21000@gmail.com',
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Email de confirmation au visiteur
    await transporter.sendMail({
      from: 'petrosyan21000@gmail.com',
      to: email,
      subject: 'Confirmation - Message reçu',
      html: `
        <h2>Merci pour votre message !</h2>
        <p>Bonjour ${name},</p>
        <p>Votre message a bien été reçu. Je vous recontacterai au plus vite.</p>
        <p>À bientôt !</p>
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
