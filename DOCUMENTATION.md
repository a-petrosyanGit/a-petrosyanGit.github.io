# 📚 Documentation Complète — Agence Web PETROSYAN

**Dernière mise à jour :** 7 juin 2026  
**Créé avec :** HTML5 • CSS3 • JavaScript (Vanilla ES6+)  
**Responsable :** Avtandil PETROSYAN — petrosyan21000@gmail.com

---

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Structure du projet](#structure-du-projet)
3. [Pages et fonctionnalités](#pages-et-fonctionnalités)
4. [Architecture technique](#architecture-technique)
5. [Guide de modification](#guide-de-modification)
6. [Déploiement](#déploiement)
7. [Maintenance](#maintenance)

---

## 🎯 Vue d'ensemble

### Objectif

**Agence Web PETROSYAN** — Site de présentation d'une agence web proposant des services de création de sites internet.

**Services proposés :**
- **WordPress** : Sites vitrines et e-commerce clé en main, faciles à maintenir
- **Développement personnalisé** : Solutions web sur mesure (HTML/CSS/JS, React, API, BDD)
- **Consultation** : Audit et optimisation de sites existants
- **Maintenance** : Support technique et mises à jour

**Cible** : PME, startups, micro-entrepreneurs, associations

### Technologies

- **Frontend** : HTML5 sémantique + CSS3 (Grid, Flexbox, animations fluides)
- **Interactivité** : JavaScript Vanilla (ES6+, fetch API, IntersectionObserver)
- **Typographie** : Google Fonts (Inter family)
- **Architecture** : Multi-page avec composants réutilisables (include)
- **Serveur** : HTTP local requis pour développement

### Caractéristiques principales

✅ **Design professionnel et moderne**  
✅ **Responsive design** (mobile-first)  
✅ **Dark mode** avec persistance localStorage  
✅ **Animations révélation** au scroll (IntersectionObserver)  
✅ **Modal carousel** pour galeries de projets clients  
✅ **Formulaire de contact** avec validation  
✅ **Demande de devis** intégrée  
✅ **CTA visibles partout** (Nous contacter, Demander un devis)  
✅ **Accessible** (ARIA labels, keyboard navigation)  

---

## 📂 Structure du projet

```
testHTMLcss/
│
├── 📄 Pages HTML principales
│   ├── index.html              # Landing agence (Hero + Services + Portfolio aperçu)
│   ├── services.html           # Détail complet : WordPress vs Développement personnalisé
│   ├── projects.html           # Portfolio / Case studies clients avec galeries
│   ├── pricing.html            # Tarifs & packages
│   ├── about.html              # Qui sommes-nous + expertise agence
│   ├── contact.html            # Formulaire contact + Demande de devis
│   └── test.html               # Landing page alternative (optionnel)
│
├── 🎨 Styles
│   └── styles.css              # Stylesheet global (1000+ lignes)
│       ├── CSS variables (thème bleu pro)
│       ├── Dark mode (dégradé sombre)
│       ├── Layout (header, hero, services, pricing)
│       ├── Animations (float, reveal, hover CTAs)
│       ├── Components (buttons, forms, cards, badges)
│       └── Responsive (880px, 720px breakpoints)
│
├── 🔧 Scripts
│   ├── include-html.js         # Chargeur de fragments HTML (fetch API)
│   └── main.js                 # Logique d'interaction centralisée
│       ├── Reveal animations (IntersectionObserver)
│       ├── Modal carousel (portfolio)
│       ├── Theme toggle (dark/light)
│       ├── Form validation (contact & devis)
│       ├── CTA tracking (optionnel)
│       └── Event delegation
│
├── 📦 Composants réutilisables
│   └── includes/
│       ├── header.html         # En-tête agence & navigation responsive
│       └── footer.html         # Pied de page professionnel
│
├── 📄 Documentation
│   ├── README.md               # Guide rapide
│   ├── DOCUMENTATION.md        # Ce fichier
│   └── package.json            # Configuration npm (optionnel)
│
└── 🎯 Autres fichiers
    ├── server.js               # Serveur Node.js optionnel
    └── .gitignore             # Fichiers ignorés Git
```

---

## 📑 Pages et fonctionnalités

### 1. **index.html** — Landing Agence

**Objectif :** Première impression, résumé des services, appel à l'action

**Sections :**
- Hero section avec proposition de valeur
- Services en avant (WordPress + Développement personnalisé)
- Portfolio aperçu (3-4 meilleurs projets)
- CTA principal "Demander un devis"
- FAQ ou avantages agence

**CTAs :**
- "Voir nos services" → services.html
- "Voir le portfolio" → projects.html
- "Demander un devis" → contact.html

---

### 2. **services.html** — Détail des Services

**Objectif :** Présenter en détail ce que propose l'agence

**Sections :**
- Service 1 : **WordPress**
  - Description (rapide, facile à maintenir, extensible)
  - Cas d'usage (vitrines, blogs, petit e-commerce)
  - Prix indicatif
  - Technologies (WooCommerce, plugins, etc.)

- Service 2 : **Développement Personnalisé**
  - Description (sur mesure, full-stack, scalable)
  - Cas d'usage (application complexe, intégrations, performance)
  - Technologies (HTML/CSS/JS, React, Node.js, BDD)

- Comparaison WordPress vs Sur mesure (tableau)
- Process de travail
- CTA : "Contacter pour discuter votre projet"

---

### 3. **projects.html** — Portfolio & Case Studies

**Objectif :** Montrer les réalisations précédentes

**Contenu :**
- Grille de projets (6-10 projets exemple)
- Pour chaque projet :
  - Miniature (SVG ou image)
  - Nom du client / Projet
  - Description courte
  - Technologies utilisées
  - Bouton "En savoir plus"

**Modal au clic :**
- Carousel d'images
- Description complète
- Technologies détaillées
- Lien vers le site en production
- Retours client (optionnel)

---

### 4. **pricing.html** — Tarifs & Packages

**Objectif :** Transparence tarifaire, faciliter la décision

**Contenu :**
- Tableau pricing avec 3-4 packages :
  - **Starter** : Site vitrine WordPress simple
  - **Pro** : WordPress avancé + e-commerce
  - **Custom** : Développement entièrement personnalisé
  - **Support** : Maintenance annuelle

- Pour chaque package :
  - Nom
  - Prix
  - Fonctionnalités incluses
  - Durée de développement
  - Support inclus
  - Bouton CTA "Commencer"

- FAQ tarifaire (questions courantes)

---

### 5. **about.html** — Qui Sommes-Nous

**Objectif :** Instaurer la confiance, montrer l'expertise

**Sections :**
- Introduction agence (qui, où, depuis quand)
- Compétences clés (technologies, domaines d'expertise)
- Pourquoi nous choisir (différenciateurs)
- Équipe (ou professionnel unique)
- Valeurs agence (qualité, support, innovation, etc.)
- Clients satisfaits (logos ou témoignages)
- CTA : "Parlons de votre projet"

---

### 6. **contact.html** — Contact & Devis

**Objectif :** Conversion en demande de devis ou contact

**Sections :**

A) **Formulaire de demande de devis**
   - Nom complet
   - Email
   - Téléphone (optionnel)
   - Type de projet (WordPress / Développement personnalisé)
   - Budget indicatif
   - Description du projet
   - Bouton "Envoyer la demande"

B) **Infos pratiques**
   - Email professionnel
   - Téléphone (si applicable)
   - Localisation (Dijon, France)
   - Horaires de disponibilité
   - Liens sociaux pros

C) **Réponse du formulaire**
   - Message de succès (email envoyé)
   - Message d'erreur (avec instructions)

---

## 🏗️ Architecture technique

### Flux de chargement

```
1. HTML page charge (index.html)
   ↓
2. include-html.js (defer) exécute
   → Fetch includes/header.html
   → Fetch includes/footer.html
   → Dispatch 'includesLoaded' event
   ↓
3. main.js (defer) exécute
   → Attend 'includesLoaded' event
   → Initialise tous les event listeners
   → Observe .reveal elements
   → Valide les formulaires
   ↓
4. CSS s'applique (styles.css)
   → Dark/light mode (localStorage)
   → Animations responsives
   → Layout adaptive
```

### Interactions principales

**Reveal animations** (IntersectionObserver)
- Éléments `.reveal` s'animent au scroll
- Améliore l'engagement utilisateur

**Modal carousel** (projects.html)
- Clic sur un projet → modal avec images
- Flèches pour naviguer galerie
- Clavier supporté (Esc, Flèches)

**Theme toggle** (Dark/Light)
- Bouton dans header
- Persisté en localStorage
- Respecte préférence système

**Form validation**
- Contact & devis
- Champs requis vérifiés
- Email valide
- Message de succès/erreur

---

## 📝 Guide de modification

### Ajouter un projet client

**Étape 1 :** Modifier `projects.html`

```html
<article class="project" tabindex="0" role="button" 
  data-title="Nom du client / Projet" 
  data-desc="Description complète du travail réalisé, technologies..." 
  data-tags="WordPress|React|E-commerce" 
  data-images="image1.jpg,image2.jpg,image3.jpg">
  
  <div class="project-thumb">
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="80" rx="6" fill="#eef6ff"></rect>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" 
        fill="#0b6ef6" font-family="Inter" font-size="12">Tag</text>
    </svg>
  </div>
  
  <h3>Nom du client</h3>
  <p>Description courte du projet</p>
  <p class="tag">WordPress • E-commerce</p>
  <button class="more">En savoir plus</button>
</article>
```

**Exemple réel :**

```html
<article class="project" tabindex="0" role="button" 
  data-title="Restaurant La Table — Site vitrine" 
  data-desc="Site vitrine WordPress pour petit restaurant local. Galerie photos plats, menu PDF, formulaire réservation, avis Google Maps, blog recettes." 
  data-tags="WordPress • Vitrine • Local" 
  data-images="https://picsum.photos/seed/rest1/800/480,https://picsum.photos/seed/rest2/800/480">
  
  <div class="project-thumb">
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="80" rx="6" fill="#fff7ed"></rect>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" 
        fill="#ff8a00" font-family="Inter" font-size="12">Vitrine</text>
    </svg>
  </div>
  
  <h3>Restaurant La Table</h3>
  <p>Site vitrine WordPress avec galerie, menu et réservations.</p>
  <p class="tag">WordPress • Vitrine</p>
  <button class="more">En savoir plus</button>
</article>
```

**Attributs importants :**
- `data-title` : Nom visible dans modal
- `data-desc` : Description complète (modal)
- `data-tags` : Technos séparées par `|`
- `data-images` : URLs séparées par `,` (picsum.photos ou vos images)

---

### Modifier les tarifs (pricing.html)

Cherchez les tables de pricing et modifiez :
- Noms des packages
- Prix
- Fonctionnalités (listes `<li>`)
- CTA buttons

---

### Mettre à jour le header/footer

**header.html** — Navigation
- Logo/nom agence
- Navigation liens (index, services, projects, pricing, about, contact)
- Bouton theme toggle
- Mobile menu (optionnel)

**footer.html** — Pied de page
- Copyright
- Liens rapides
- Réseaux sociaux
- Mentions légales
- Email/téléphone

---

## 🚀 Déploiement

### Option 1 : GitHub Pages

```bash
cd testHTMLcss
git init
git add .
git commit -m "Agence Web PETROSYAN — Site vitrine"
git branch -M main
git remote add origin https://github.com/USERNAME/agence-web.git
git push -u origin main
```

Puis : Repo settings → Pages → Source: `main` branch

### Option 2 : Netlify (recommandé pour formulaires)

```bash
# Via interface
1. Connectez-vous sur netlify.com
2. Drag & drop le dossier testHTMLcss
3. Configure le formulaire de contact (Netlify Forms)
```

### Option 3 : Vercel

```bash
npm i -g vercel
cd testHTMLcss
vercel
```

### Option 4 : Hébergement classique (OVH, etc.)

```bash
# Via FTP/SFTP
1. Upload tous les fichiers
2. Assurez-vous HTTP server est activé
3. Testez sur votredomaine.com
```

---

## 🔧 Maintenance

### Tâches régulières

- **Mensuellement** : Actualiser portfolio (ajouter nouveaux projets)
- **Trimestres** : Vérifier liens, images, CTAs
- **Annuellement** : Mettre à jour tarifs, technologies listées

### Monitoring

- Google Analytics (optionnel) : Voir qui visite
- Form submissions : Vérifier contact@

### Évolutions futures

- Système de blog (article blog → devis)
- Chatbot pour questions fréquentes
- Intégration Calendly (réservation RDV gratuit)
- Certificats client / avis
- Estimateur de prix interactif

---

**Version agence web : 1.0 — 7 juin 2026**
