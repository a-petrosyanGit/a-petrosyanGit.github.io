# 📚 Documentation Complète — Portfolio Avtandil PETROSYAN

**Dernière mise à jour :** 6 février 2026  
**Créé avec :** HTML5 • CSS3 • JavaScript (Vanilla ES6+)  
**Responsable :** Avtandil PETROSYAN

---

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Structure du projet](#structure-du-projet)
3. [Architecture technique](#architecture-technique)
4. [Fichiers détaillés](#fichiers-détaillés)
5. [Données intégrées](#données-intégrées)
6. [Guide de modification](#guide-de-modification)
7. [Déploiement](#déploiement)
8. [Maintenance future](#maintenance-future)

---

## 🎯 Vue d'ensemble

### Objectif
Portfolio responsive d'un étudiant en BUT Informatique à Dijon, présentant :
- Formation académique et projets techniques
- Compétences en programmation
- Passions : horlogerie et entrepreneuriat
- Support pour candidatures d'alternance

### Technologies
- **Frontend** : HTML5 sémantique + CSS3 (Grid, Flexbox, animations)
- **Interactivité** : JavaScript Vanilla (ES6+, fetch API, IntersectionObserver)
- **Typographie** : Google Fonts (Inter family)
- **Architecture** : Multi-page avec composants réutilisables (include)
- **Serveur** : HTTP local requis (Python, Node, VS Code Live Server)

### Caractéristiques principales
✅ Responsive design (mobile-first)  
✅ Dark mode avec persistance localStorage  
✅ Avatar 3D avec suivi du curseur (3D tilt)  
✅ Animations révélation au scroll (IntersectionObserver)  
✅ Modal carousel pour galeries d'images  
✅ Navigation multi-page avec header/footer partagés  
✅ Accessible (ARIA labels, keyboard navigation)  

---

## 📂 Structure du projet

```
testHTMLcss/
│
├── 📄 Pages principales (HTML)
│   ├── index.html              # Landing page (alias test.html)
│   ├── test.html               # Landing page (landing hero uniquement)
│   ├── about.html              # À propos + formation + savoir-être
│   ├── projects.html           # Projets détaillés avec modal carousel
│   ├── skills.html             # Compétences, langues, expériences
│   ├── passions.html           # Horlogerie + Entrepreneuriat avec galeries
│   └── contact.html            # Formulaire de contact + infos
│
├── 🎨 Styles
│   └── styles.css              # Stylesheet global (900 lignes)
│       ├── CSS variables (thème)
│       ├── Dark mode
│       ├── Layout (header, hero, cards)
│       ├── Animations (float, gear-spin, reveal, tilt)
│       ├── Components (buttons, form, badges, timeline)
│       └── Responsive (880px, 720px breakpoints)
│
├── 🔧 Scripts
│   ├── include-html.js         # Chargeur de fragments HTML (15 lignes)
│   └── main.js                 # Logique d'interaction centralisée (500+ lignes)
│       ├── IntersectionObserver (reveal animations)
│       ├── Modal & carousel
│       ├── Avatar 3D tilt effect
│       ├── Theme toggle (dark/light)
│       ├── Form handling
│       └── Event delegation
│
├── 📦 Composants réutilisables
│   └── includes/
│       ├── header.html         # En-tête & navigation
│       └── footer.html         # Pied de page
│
├── 📄 Documentation
│   ├── README.md               # Guide rapide (démarrage, features)
│   ├── DOCUMENTATION.md        # Ce fichier (documentation exhaustive)
│   └── CV_fev2026.pdf          # CV téléchargeable
│
└── 🎯 Fichiers de configuration
    └── (Aucun build process requis — site statique pur)
```

---

## 🏗️ Architecture technique

### Pattern architectural : Component-based Multi-page

```
┌─────────────────────────────────────────────────────────┐
│         HTTP Server (Python / Node / VS Code)           │
└─────────────────────────────────────────────────────────┘
                          ↓
        ┌─────────────────────────────────┐
        │   include-html.js (fetch API)   │
        │   Charge fragments HTML         │
        └─────────────────────────────────┘
                          ↓
    ┌───────────────────────────────────────────┐
    │  Page HTML (index.html, about.html, etc)  │
    │  Structure sémantique + data attributes   │
    └───────────────────────────────────────────┘
                          ↓
    ┌──────────────────────────────────────────┐
    │    main.js (Event listeners & logic)     │
    │  - IntersectionObserver (reveal)         │
    │  - Modal carousel (projects)             │
    │  - Avatar 3D tilt (pointer tracking)     │
    │  - Theme toggle (localStorage)           │
    │  - Form validation (contact)             │
    └──────────────────────────────────────────┘
                          ↓
    ┌──────────────────────────────────────────┐
    │    styles.css (CSS global + variants)    │
    │  Variables CSS → dark/light mode         │
    │  Grid/Flexbox → responsive layouts       │
    │  Animations → keyframes & transitions    │
    └──────────────────────────────────────────┘
```

### Flux de chargement initial

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
   → Crée tilt control UI
   → Observe .reveal elements
```

### Absence de dépendances externes
- Zero npm dependencies
- Vanilla JavaScript ES6+
- CSS pur (pas de SASS/LESS)
- Google Fonts (CDN only)

---

## 📄 Fichiers détaillés

### 1. **index.html** (Landing page — version complète)

**Fonction :** Page d'accueil principale avec héro section

**Structure HTML :**
```html
<html>
  <head>
    <!-- Meta SEO + Open Graph -->
    <title>Portfolio — Avtandil PETROSYAN</title>
    <meta name="description" content="...">
    <meta name="theme-color" content="#0b6ef6">
    <!-- Favicon SVG data URI -->
    <link rel="icon" href="data:image/svg+xml,...">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap">
    <!-- Stylesheets -->
    <link rel="stylesheet" href="styles.css">
    <!-- Scripts -->
    <script src="include-html.js" defer></script>
    <script src="main.js" defer></script>
  </head>
  <body>
    <!-- Header injecté par include-html.js -->
    <div data-include="includes/header.html"></div>
    
    <!-- Hero section (visible) -->
    <section class="hero reveal">
      <div class="container hero-inner">
        <!-- Texte gauche -->
        <div class="hero-text">
          <!-- Badge recherche alternance -->
          <div style="background:#fef3c7;border:1.5px solid #f59e0b;...">
            ⚡ Recherche : Alternance BUT 2 & 3
          </div>
          <h2>Développeur web & passionné de mécanique</h2>
          <p>Étudiant en 1ère année de BUT Informatique...</p>
          <div>Compétences : HTML/CSS • Python • SQL • Pascal • C#</div>
          <div class="hero-cta">
            <a class="btn primary" href="projects.html">Voir mes projets</a>
            <a class="btn" href="contact.html">Me contacter</a>
          </div>
        </div>
        
        <!-- Avatar 3D droite -->
        <div class="hero-card">
          <div class="avatar">
            <div class="avatar-3d">  <!-- Perspective 3D -->
              <div class="avatar-inner">  <!-- Transform 3D appliquées ici -->
                <svg>...AP...</svg>
              </div>
            </div>
          </div>
          <p class="meta">Étudiant • Dév web • Horlogerie • Entrepreneurship</p>
          <div class="avatar-gear">  <!-- Gear décorative -->
            <svg class="gear-rotate">...</svg>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer injecté par include-html.js -->
    <div data-include="includes/footer.html"></div>
  </body>
</html>
```

**Éléments clés :**
- Badge jaune/orange "Recherche alternance" en évidence
- Avatar SVG gradient bleu (AP initiales)
- Gear SVG décorative qui tourne sans fin
- Avatar 3D réactif au curseur (géré par main.js)
- CTA buttons vers projects.html et contact.html

---

### 2. **test.html** (Landing identique à index.html)

**Fonction :** Alias de index.html pour continuité avec le nom initial du projet

**Contenu :** Exactement identique à index.html

**Utilisation :** Peut être utilisé comme fallback ou gardé pour compatibilité

---

### 3. **about.html** (À propos + Formation)

**Fonction :** Présente le profil académique et soft skills

**Structure :**
```html
<main class="container">
  <!-- Section 1: About -->
  <section class="card reveal">
    <h1>À propos</h1>
    <p>Je suis étudiant en 1ère année de BUT Informatique à l'IUT Dijon,
       passionné par le développement web...</p>
  </section>
  
  <!-- Section 2: Formation (timeline) -->
  <section class="card reveal">
    <h2>Formation</h2>
    <div class="timeline">
      <div class="timeline-item">
        <h3>BUT Informatique</h3>
        <p class="muted">2025 - 2028 • IUT Dijon</p>
        <p>1ère année en cours. Formation généraliste...</p>
      </div>
      <div class="timeline-item">
        <h3>Baccalauréat Général</h3>
        <p class="muted">2024 • Lycée G. Eiffel, Dijon</p>
        <p>Spécialités : Mathématiques, Physique-Chimie, NSI...</p>
      </div>
    </div>
  </section>
  
  <!-- Section 3: Soft skills -->
  <section class="card reveal">
    <h2>Savoir-être</h2>
    <ul style="display:flex;flex-wrap:wrap;gap:10px;">
      <li>Écoute & Cordialité</li>
      <li>Autonomie</li>
      <li>Rigueur & Responsabilité</li>
      <li>Relationnel</li>
      <li>Curieux & Motivé</li>
    </ul>
  </section>
</main>
```

**CSS utilisé :**
- `.timeline` : Grid flex vertical avec gaps
- `.timeline-item` : Fond gradient, border-left colorée
- `.reveal` : Animation d'entrée au scroll

---

### 4. **projects.html** (Projets + Carousel modal)

**Fonction :** Galerie des 5 projets avec modal interactivité

**Structure des projets :**

Chaque projet est une `<article class="project">` avec :
- **data-title** : "Site Horlogerie"
- **data-desc** : Description complète pour la modal
- **data-tags** : "Frontend • Accessibilité"
- **data-images** : URLs séparées par virgules
- **project-thumb** : SVG coloré avec label texte

**5 Projets présents :**

| Titre | Description | Technologies | Images |
|-------|-------------|--------------|--------|
| Site Horlogerie | Site web HTML/CSS sur horlogerie (en cours) | Frontend • Accessibilité | 2 images |
| Jeu en Pascal | Application simple avec gestion de date | Pascal • Jeux | 1 image |
| Configuration Système | Installation Ubuntu + Java dev setup | Linux • Java | 1 image |
| Base de Données | Conception MCD/MLD | SQL • Modélisation | 1 image |
| Refresh PC | Maintenance et installation OS | Hardware • OS | 1 image |

**Interactivité (main.js) :**
```javascript
// Au clic sur .project → Modal s'ouvre
// Modal affiche data-title, data-desc dans header
// Carousel img avec data-images
// Navigation prev/next avec boutons + flèches clavier
// Escape pour fermer
```

**CSS spécifique :**
```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.project {
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
}
.project:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(...);
}
```

---

### 5. **skills.html** (Compétences + Langues + Expériences)

**Fonction :** Présentation détaillée des skills professionnels

**3 Sections :**

#### A) Langues
```html
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));">
  <div style="border-left:4px solid #0b6ef6;">
    <h3>Français</h3>
    <p>Bilingue</p>
  </div>
  <div style="border-left:4px solid #ff8a00;">
    <h3>Arménien</h3>
    <p>Bilingue</p>
  </div>
  <!-- etc. -->
</div>
```

**Langues :**
- Français (bilingue)
- Arménien (bilingue)
- Anglais (B1, Cambridge B2 First)
- Russe (A2)
- Espagnol (A2)

#### B) Compétences informatiques
```html
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;">
  <div style="background:#eef6ff;padding:12px 16px;border-radius:8px;">Pascal</div>
  <div style="background:#eef6ff;padding:12px 16px;border-radius:8px;">C#</div>
  <!-- ... -->
</div>
```

**Technos :** Pascal, C#, Python, HTML/CSS, SQL, PL/SQL

#### C) Expériences professionnelles (timeline)
```html
<div class="timeline">
  <div class="timeline-item">
    <h3>Agent d'entretien</h3>
    <p class="muted">Micro-entreprise • Juin 2024 - Présent</p>
    <p>Gestion de chantiers, rigueur...</p>
  </div>
  <!-- 5 postes au total -->
</div>
```

**Postes chronologiques :**
1. Agent d'entretien (micro-entreprise) — Juin 2024+
2. Agent d'entretien (R'Propreté) — Été 2025
3. Vendeur Freelance (MARCUS) — 2023-2025
4. Employé Burger King — Nov-Déc 2023
5. Palissage vignes — Été 2023
6. Bénévole administratif — 1 an

---

### 6. **passions.html** (Horlogerie + Entrepreneuriat)

**Fonction :** Présentation détaillée de 2 passions principales

**Section 1 : Horlogerie**
```html
<section class="card reveal">
  <h2>Horlogerie</h2>
  <p>La précision mécanique et l'horlogerie représentent...</p>
  <div class="mini-gallery">
    <img src="https://picsum.photos/seed/watch1/400/240">
    <img src="https://picsum.photos/seed/watch2/400/240">
    <img src="https://picsum.photos/seed/watch3/400/240">
  </div>
  <div style="background:#f5f5f5;padding:16px;">
    <h4>Intérêts</h4>
    <ul>
      <li>Compréhension des mouvements mécaniques</li>
      <li>Entretien et maintenance de montres</li>
      <li>Histoire et évolution des mécanismes</li>
      <li>Précision et nanométrie</li>
    </ul>
  </div>
</section>
```

**Section 2 : Entrepreneuriat**
```html
<section class="card reveal">
  <h2>Entrepreneuriat</h2>
  <p>Créer, innover et transformer des idées...</p>
  <div class="mini-gallery">
    <!-- 3 images picsum.photos -->
  </div>
  <div style="background:#f5f5f5;padding:16px;">
    <h4>Domaines d'intérêt</h4>
    <ul>
      <li>Création et gestion d'auto-entreprise</li>
      <li>Prototypage et MVP</li>
      <li>Stratégie produit et marché</li>
      <li>Développement web pour projets</li>
    </ul>
  </div>
</section>
```

**CSS `.mini-gallery` :**
```css
.mini-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}
.mini-gallery img {
  width: 100%;
  max-height: 180px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(...);
}
```

---

### 7. **contact.html** (Formulaire + Infos)

**Fonction :** Page de contact avec formulaire démo

**Sections :**

#### A) Intro
```html
<section class="card reveal">
  <h1>Contact</h1>
  <p>Intéressé par une collaboration ou une alternance ? Contactez-moi !</p>
</section>
```

#### B) Formulaire
```html
<form class="contact-form" id="contact-form">
  <div>
    <label for="name">Nom complet</label>
    <input type="text" id="name" name="name" placeholder="John Doe" required>
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="..." required>
  </div>
  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>
  <button type="submit" class="btn primary">Envoyer</button>
</form>
```

**Interaction (main.js) :**
```javascript
// Au submit → Validation HTML5
// Affiche alert démo (pas de backend intégré)
// TODO: Connecter à Netlify Forms ou Formspree
```

#### C) Infos pratiques
```html
<section class="card reveal">
  <h2>Infos pratiques</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
    <div>
      <h3>Email</h3>
      <p><a href="mailto:petrosyan21000@gmail.com">petrosyan21000@gmail.com</a></p>
    </div>
    <div>
      <h3>Localisation</h3>
      <p>Dijon, 21000<br>France</p>
    </div>
    <div>
      <h3>Permis</h3>
      <p>Permis B</p>
    </div>
    <div>
      <h3>Recherche</h3>
      <p>Alternance BUT 2 & 3</p>
    </div>
  </div>
</section>
```

---

### 8. **styles.css** (900+ lignes — stylesheet global)

**Structure :**

#### Variables CSS (thème)
```css
:root {
  --bg: #f6f9ff;           /* Fond clair */
  --card: #ffffff;         /* Cartes blanches */
  --accent: #0b6ef6;       /* Bleu primaire */
  --accent-2: #4aa3ff;     /* Bleu clair */
  --muted: #6b7280;        /* Texte secondaire */
  --text: #0f1720;         /* Texte primaire */
}

html.dark {             /* Mode sombre */
  --bg: #071023;
  --card: #071826;
  --accent: #529fff;
  --muted: #9ca3af;
  --text: #f3f4f6;
}
```

#### Layout général
```css
html, body {
  height: 100%;
  font-family: Inter, system-ui, -apple-system;
  background: var(--bg);
  color: var(--text);
  scroll-behavior: smooth;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 28px;
}
```

#### Header
```css
.site-header {
  background: linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%);
  color: #fff;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-nav a {
  color: #fff;
  text-decoration: none;
  margin-left: 18px;
  font-weight: 600;
  transition: opacity .2s;
}
.main-nav a:hover {
  opacity: 0.95;
}
```

#### Hero section
```css
.hero {
  padding: 36px 0;
  background: linear-gradient(180deg, rgba(11,110,246,0.06), transparent);
}
.hero-inner {
  display: flex;
  gap: 24px;
  align-items: center;
}
.hero-text h2 {
  font-size: 1.6rem;
  margin: 0;
}
.hero-text p {
  color: var(--muted);
  line-height: 1.45;
}
```

#### Avatar 3D (crucial)
```css
.avatar-3d {
  perspective: 1000px;
  display: inline-block;
  border-radius: 999px;
}
.avatar-inner {
  transform-style: preserve-3d;
  transition: transform .12s cubic-bezier(.2,.9,.2,1), box-shadow .12s;
  will-change: transform;
  border-radius: 999px;
  overflow: hidden;
}
/* Les transforms rotateX/rotateY sont appliquées par JS */
```

#### Gear animation
```css
.avatar-gear {
  position: absolute;
  right: -6px;
  bottom: -6px;
  width: 42px;
  height: 42px;
  opacity: 0.95;
}
.gear-rotate {
  animation: gear-spin 6s linear infinite;
}
@keyframes gear-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

#### Reveal animations (scroll)
```css
.reveal {
  opacity: 0;
  transform: translateY(18px) scale(.995);
  transition: opacity .6s cubic-bezier(.2,.9,.2,1),
              transform .6s cubic-bezier(.2,.9,.2,1);
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}
```

#### Cards
```css
.card {
  background: var(--card);
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 8px 22px rgba(12,34,60,0.06);
  margin-bottom: 20px;
}
```

#### Timeline (formations, expériences)
```css
.timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.timeline-item {
  padding: 16px;
  background: linear-gradient(135deg, #f0f9ff, #f9f1ff);
  border-radius: 8px;
  border-left: 4px solid var(--accent);
}
.timeline-item h3 {
  margin: 0 0 4px;
  font-size: 1.05rem;
}
.timeline-item .muted {
  font-size: 0.85rem;
}
```

#### Modal carousel
```css
.modal {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 60;
  background: rgba(2,6,23,.8);
  backdrop-filter: blur(4px);
}
.modal[aria-hidden="false"] {
  display: block;
}
.modal-content {
  background: var(--card);
  border-radius: 12px;
  max-width: 700px;
  margin: auto;
  margin-top: 40px;
  /* ... */
}
.carousel-img {
  max-width: 100%;
  max-height: 420px;
  border-radius: 8px;
  object-fit: cover;
}
```

#### Formulaire
```css
.contact-form {
  display: grid;
  gap: 10px;
}
.contact-form div {
  display: grid;
  gap: 4px;
}
.contact-form label {
  font-size: 0.9rem;
  font-weight: 600;
}
.contact-form input,
.contact-form textarea {
  padding: 10px;
  border: 1px solid #e6eef9;
  border-radius: 8px;
  font-family: inherit;
}
.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(11,110,246,0.1);
}
.contact-form button {
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  transition: opacity .2s, box-shadow .2s;
}
.contact-form button:hover {
  opacity: 0.95;
  box-shadow: 0 6px 18px rgba(11,110,246,0.15);
}
```

#### Tilt settings UI
```css
.tilt-control {
  position: fixed;
  right: 18px;
  bottom: 18px;
  background: var(--card);
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: 0 10px 30px rgba(2,6,23,.12);
  z-index: 80;
  display: flex;
  align-items: center;
  gap: 8px;
}
.tilt-control input {
  width: 80px;
  cursor: pointer;
}
```

#### Responsive breakpoints
```css
@media (max-width: 880px) {
  .hero-inner { flex-direction: column; }
  .header-inner { flex-direction: column; }
  .footer-inner { flex-direction: column; }
}

@media (max-width: 720px) {
  .header-inner { text-align: center; }
  .main-nav { display: flex; flex-wrap: wrap; justify-content: center; }
  .hero-text h2 { font-size: 1.2rem; }
}
```

---

### 9. **include-html.js** (Chargeur de fragments — 15 lignes)

**Fonction :** Chargement automatique des composants réutilisables

**Code complet :**
```javascript
(async function() {
  // Récupère tous les [data-include] du DOM
  const nodes = Array.from(document.querySelectorAll('[data-include]'));
  
  // Pour chaque include
  for (const n of nodes) {
    const url = n.getAttribute('data-include');
    try {
      const res = await fetch(url);
      if (res.ok) {
        n.innerHTML = await res.text();
      }
    } catch (e) {
      console.error(`Erreur chargement ${url}:`, e);
    }
  }
  
  // Signal que tous les includes sont chargés
  window.dispatchEvent(new Event('includesLoaded'));
})();
```

**Utilisation :**
```html
<!-- Dans n'importe quelle page HTML -->
<div data-include="includes/header.html"></div>
<div data-include="includes/footer.html"></div>
```

**Avantages :**
- DRY (Don't Repeat Yourself) — evite duplication header/footer
- Centralisation des mises à jour (une modification = toutes les pages mises à jour)
- Maintenance simplifiée

**Limitation :**
- Requiert HTTP server (fetch() bloqué sur file://)

---

### 10. **main.js** (Logique d'interaction — 500+ lignes)

**Fonction :** Cœur interactif du site

#### A) IntersectionObserver (animations reveal)
```javascript
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);  // Une seule fois
      }
    });
  },
  {
    threshold: 0.12  // Déclenche à 12% de visibilité
  }
);

// Observe tous les .reveal
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
```

**Résultat :** Éléments fade-in + scale-up au scroll

#### B) Avatar 3D tilt (suivi curseur)
```javascript
const avatar3d = document.querySelector('.avatar-inner');
const avatarCard = document.querySelector('.hero-card');
let tiltMax = parseFloat(localStorage.getItem('tilt-max')) || 12;

function updateTilt(event) {
  const rect = avatarCard.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  // Calcul angles
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateY = ((x - centerX) / centerX) * tiltMax;
  const rotateX = -((y - centerY) / centerY) * tiltMax;
  
  // Application
  avatar3d.style.transform = 
    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
  // Ombre dynamique
  const shadowX = rotateY * 2;
  const shadowY = rotateX * 2;
  avatarCard.style.boxShadow = 
    `${shadowX}px ${shadowY}px 30px rgba(11,110,246,.2)`;
}

document.addEventListener('mousemove', updateTilt);
```

**Résultat :** Avatar penche 3D vers le curseur

#### C) Tilt intensity slider
```javascript
const tiltSlider = document.createElement('input');
tiltSlider.type = 'range';
tiltSlider.min = '0';
tiltSlider.max = '20';
tiltSlider.value = String(tiltMax);

tiltSlider.addEventListener('input', (e) => {
  tiltMax = parseFloat(e.target.value);
  localStorage.setItem('tilt-max', tiltMax);  // Persistance
});

// Crée le UI flottant
const tiltControl = document.createElement('div');
tiltControl.className = 'tilt-control';
tiltControl.innerHTML = `<label>⚙️ Tilt:</label>`;
tiltControl.appendChild(tiltSlider);
document.body.appendChild(tiltControl);
```

**Résultat :** Petit slider bas-droit pour ajuster l'intensité du tilt

#### D) Modal carousel (projects)
```javascript
let currentImages = [];
let currentIndex = 0;

// Au clic sur .project → ouvre modal
document.addEventListener('click', (e) => {
  const project = e.target.closest('.project');
  if (project) {
    const title = project.dataset.title;
    const desc = project.dataset.desc;
    const images = project.dataset.images.split(',');
    
    currentImages = images;
    currentIndex = 0;
    
    modal.innerHTML = `
      <div class="modal-inner">
        <button class="modal-close">&times;</button>
        <h2>${title}</h2>
        <p>${desc}</p>
        <div class="carousel">
          <button class="carousel-prev">❮</button>
          <img class="carousel-img" src="${images[0]}" alt="">
          <button class="carousel-next">❯</button>
        </div>
      </div>
    `;
    modal.setAttribute('aria-hidden', 'false');
  }
});

// Navigation carousel
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('carousel-next')) {
    currentIndex = (currentIndex + 1) % currentImages.length;
    document.querySelector('.carousel-img').src = currentImages[currentIndex];
  }
  if (e.target.classList.contains('carousel-prev')) {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    document.querySelector('.carousel-img').src = currentImages[currentIndex];
  }
});

// Clavier
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    // showNext()
  }
  if (e.key === 'ArrowLeft') {
    // showPrev()
  }
  if (e.key === 'Escape') {
    modal.setAttribute('aria-hidden', 'true');
  }
});
```

**Résultat :** Clics + flèches clavier pour naviguer images

#### E) Theme toggle (dark mode)
```javascript
const themeToggle = document.getElementById('theme-toggle');
const isDarkMode = localStorage.getItem('pref-theme') === 'dark';

// Applique pref au chargement
if (isDarkMode) {
  document.documentElement.classList.add('dark');
  themeToggle.setAttribute('aria-pressed', 'true');
}

// Toggle au clic
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('pref-theme', isDark ? 'dark' : 'light');
  themeToggle.setAttribute('aria-pressed', isDark);
});
```

**Résultat :** Bouton 🌙 bascule dark/light, sauvegarde préférence

#### F) Form handling (contact)
```javascript
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // TODO: Envoyer à backend
    alert(`Merci ${name}! Nous vous recontacterons à ${email}`);
    contactForm.reset();
  });
}
```

**Limitation :** Démo seulement, pas de backend connecté

#### G) Skill bar animation (optionnel)
```javascript
// Si présent : anime les % des barres au scroll
const skillFills = document.querySelectorAll('.skill-fill');
skillFills.forEach(bar => {
  const fill = bar.dataset.fill;
  bar.style.width = '0';
  
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      bar.style.transition = 'width 1s ease-out';
      bar.style.width = fill + '%';
      obs.unobserve(bar);
    }
  });
  obs.observe(bar);
});
```

#### Initialisation (au chargement)
```javascript
// Attend que include-html.js finisse
window.addEventListener('includesLoaded', () => {
  // Initialise tilt intensity slider
  createTiltControl();
  
  // Initialise IntersectionObserver pour .reveal
  initRevealObserver();
  
  // Attache event listeners
  attachModalListeners();
  attachThemeListener();
  attachFormListener();
  
  console.log('Portfolio initialization complete');
});
```

---

### 11. **includes/header.html** (Composant partagé)

**Fonction :** En-tête & navigation commune à toutes les pages

**Structure :**
```html
<header class="site-header">
  <div class="container header-inner">
    <!-- Brand -->
    <div class="brand">
      <a href="index.html">
        <h1>Avtandil PETROSYAN</h1>
      </a>
      <p class="subtitle">Étudiant en BUT Informatique — Dijon</p>
    </div>
    
    <!-- Navigation -->
    <nav class="main-nav">
      <a href="index.html">Accueil</a>
      <a href="about.html">À propos</a>
      <a href="projects.html">Projets</a>
      <a href="skills.html">Compétences</a>
      <a href="passions.html">Passions</a>
      <a href="contact.html">Contact</a>
    </nav>
    
    <!-- Actions -->
    <div class="header-actions">
      <a class="btn small" href="CV_fev2026.pdf" download>
        Télécharger CV
      </a>
      <button id="theme-toggle" class="icon-btn" 
              aria-pressed="false" aria-label="Basculer thème">
        <span class="moon">🌙</span>
      </button>
    </div>
  </div>
</header>
```

**Pages liées :**
- Accueil → index.html (landing)
- À propos → about.html (formation)
- Projets → projects.html (5 projets)
- Compétences → skills.html (langues, techos)
- Passions → passions.html (horlogerie/entrepreneuriat)
- Contact → contact.html (formulaire)

**CV téléchargeable :**
- Points vers `CV_fev2026.pdf` (dans le répertoire root)
- Attribute `download` force téléchargement au lieu d'ouvrir

---

### 12. **includes/footer.html** (Composant partagé)

**Fonction :** Pied de page générique

**Structure :**
```html
<footer class="site-footer">
  <div class="container footer-inner">
    <p>&copy; 2026 Avtandil PETROSYAN — Portfolio</p>
    <div class="socials">
      <a href="https://github.com">GitHub</a>
      <a href="https://linkedin.com">LinkedIn</a>
    </div>
  </div>
</footer>
```

**Notes :**
- URLs GitHub/LinkedIn sont placeholders (#)
- À remplacer par URLs réelles

---

### 13. **CV_fev2026.pdf** (Document externe)

**Fonction :** CV téléchargeable

**Contenu intégré :** Voir section "Données intégrées" ci-dessous

**Format :** PDF natif (1 page)

**Accès :**
- Lien dans le header "Télécharger CV"
- Servir directement depuis le répertoire root

---

## 📊 Données intégrées

### Infos personnelles
```
Nom complet : Avtandil PETROSYAN
Email : petrosyan21000@gmail.com
Localisation : Dijon, 21000 (France)
Permis : Permis B
```

### Formation
```
BUT Informatique
  - IUT Dijon
  - 2025 - 2028
  - 1ère année en cours
  - Spécialités : Développement, BDD, Systèmes

Baccalauréat Général (2024)
  - Lycée G. Eiffel, Dijon
  - Spécialités : Maths, Physique-Chimie, NSI
  - Mention Euro Maths/Anglais
```

### Compétences informatiques
```
Langages : Pascal, C#, Python, HTML/CSS, SQL, PL/SQL
Focus : Frontend (HTML/CSS), Backend (Python/Java), DB (SQL)
```

### Langues
```
Français : Bilingue
Arménien : Bilingue
Anglais : B1 (Cambridge B2 First)
Russe : A2 (Compréhension orale)
Espagnol : A2
```

### Projets (sites/code)
```
1. Site Horlogerie
   - Status : En cours
   - Stack : HTML/CSS, Accessibilité
   - Description : Découvrir la mécanique des montres

2. Jeu en Pascal
   - Status : Complété
   - Stack : Pascal
   - Description : Application simple, gestion date

3. Configuration Système
   - Status : Complété
   - Stack : Linux, Java
   - Description : Setup dev Ubuntu + Java

4. Base de Données
   - Status : Complété
   - Stack : SQL
   - Description : MCD/MLD, modélisation

5. Refresh PC
   - Status : Complété
   - Stack : Hardware, OS
   - Description : Maintenance, installation OS
```

### Expériences professionnelles
```
1. Agent d'entretien (Micro-entreprise)
   Juin 2024 - Présent
   Skills : Autonomie, Rigueur, Gestion

2. Agent d'entretien (R'Propreté)
   Été 2025
   Skills : Autonomie, Équipe

3. Vendeur Freelance (MARCUS)
   2023 - 2025
   Skills : Relationnel, Prospection, Organisation

4. Employé Burger King
   Nov 2023 - Déc 2023
   Skills : Travail équipe, Gestion pression

5. Autres contrats (Restauration, manutention, etc.)
   2023 - 2026
   Skills : Flexibilité, Polyvalence
```

### Soft skills / Savoir-être
```
✓ Écoute & Cordialité
✓ Autonomie
✓ Rigueur & Responsabilité
✓ Relationnel
✓ Curieux & Motivé
✓ Gestion de pression
✓ Travail en équipe
```

### Passions
```
Horlogerie
  - Comprendre mécanismes
  - Montrer/acheter montres
  - Entretien, restauration

Entrepreneuriat
  - Création EI
  - MVP et prototypage
  - Stratégie produit
  - Développement web
```

---

## 🛠️ Guide de modification

### Comment ajouter un nouveau projet

**Étape 1 :** Ouvrir `projects.html`

**Étape 2 :** Trouver `<div class="project-grid">` et ajouter un bloc :

```html
<article class="project" tabindex="0" role="button" 
  data-title="Titre du Projet" 
  data-desc="Description complète qui s'affichera dans la modal..." 
  data-tags="Tech1 • Tech2 • Tech3" 
  data-images="url1.jpg,url2.jpg,url3.jpg">
  
  <div class="project-thumb">
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="80" rx="6" fill="#eef6ff"></rect>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" 
        fill="#0b6ef6" font-family="Inter" font-size="12">Label</text>
    </svg>
  </div>
  
  <h3>Titre du Projet</h3>
  <p>Description courte (1-2 lignes)</p>
  <p class="tag">Tech1 • Tech2</p>
  <button class="more">En savoir plus</button>
</article>
```

**Étape 3 :** Personnaliser les couleurs SVG

| Couleur | fill (rect) | fill (text) |
|---------|------------|------------|
| Bleu | #eef6ff | #0b6ef6 |
| Orange | #fff7ed | #ff8a00 |
| Purple | #f9f0ff | #aa00ff |
| Vert | #ecfdf5 | #10b981 |
| Rouge | #fef2f2 | #ef4444 |

**Étape 4 :** Récupérer URLs images

Utiliser :
- `https://picsum.photos/seed/keyword/800/480` (placeholder)
- Ou uploader vos propres images dans un `/images` folder

**Exemple avec vraies images :**
```html
<article class="project" tabindex="0" role="button" 
  data-title="API REST Python"
  data-desc="Création d'une API REST avec Flask, JWT, et PostgreSQL pour gestion d'utilisateurs."
  data-tags="Python • Flask • API • Database"
  data-images="images/api-screenshot-1.png,images/api-screenshot-2.png">
  <!-- ... -->
</article>
```

### Comment mettre à jour les infos de contact

**Dans `contact.html` :**
```html
<div>
  <h3 style="font-size:14px;color:#888;margin-bottom:8px">Email</h3>
  <p><a href="mailto:petrosyan21000@gmail.com">petrosyan21000@gmail.com</a></p>
</div>
```

**Modifier l'email :** Changer à la fois l'href ET le texte visible

### Comment ajouter une expérience professionnelle

**Dans `skills.html`, section "Expériences" :**
```html
<div class="timeline-item">
  <h3>Titre du Poste</h3>
  <p class="muted">Entreprise • Date début - Date fin</p>
  <p>Brève description des missions et responsibilities...</p>
  <span style="display:inline-block;background:#e3f2fd;...">Skill1</span>
</div>
```

### Comment changer le thème couleur

**Dans `styles.css` :**
```css
:root {
  --accent: #0b6ef6;      /* Couleur primaire */
  --accent-2: #4aa3ff;    /* Couleur secondaire */
}

html.dark {
  --accent: #529fff;
  --accent-2: #7eb8ff;
}
```

**Remplacer les `#0b6ef6` (bleu) par votre couleur partout**

### Comment désactiver le tilt 3D

**Dans `main.js`, commentez :**
```javascript
// document.addEventListener('mousemove', updateTilt);
```

### Comment activer le dark mode par défaut

**Dans `main.js` :**
```javascript
// Force dark mode
if (!localStorage.getItem('pref-theme')) {
  localStorage.setItem('pref-theme', 'dark');
  document.documentElement.classList.add('dark');
}
```

### Comment connecter le formulaire de contact

**Option 1 : Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

**Option 2 : Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

**Option 3 : Backend custom**
```javascript
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  
  const res = await fetch('https://api.example.com/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData))
  });
  
  if (res.ok) alert('Message envoyé !');
});
```

### Comment ajouter une nouvelle langue

**Dans `skills.html` :**
```html
<div style="padding:16px;background:#eef6ff;border-radius:12px;border-left:4px solid #0b6ef6">
  <h3>Nom de la langue</h3>
  <p style="margin:8px 0;color:#555">Niveau (A1-C2 ou Description)</p>
</div>
```

### Comment ajouter une nouvelle page

**Créer `newpage.html` :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Titre — Avtandil PETROSYAN</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <script src="include-html.js" defer></script>
  <script src="main.js" defer></script>
</head>
<body>
  <div data-include="includes/header.html"></div>
  
  <main class="container">
    <section class="card reveal">
      <h1>Titre de la section</h1>
      <p>Contenu...</p>
    </section>
  </main>
  
  <div data-include="includes/footer.html"></div>
</body>
</html>
```

**Ajouter le lien dans le header :**
```html
<nav class="main-nav">
  <!-- ... liens existants ... -->
  <a href="newpage.html">Nouvelle page</a>
</nav>
```

---

## 🚀 Déploiement

### Local (développement)

**Python 3 :**
```bash
cd c:\Users\avik\Desktop\testHTMLcss
python -m http.server 8000
# Accéder : http://localhost:8000
```

**Node.js :**
```bash
npm install -g http-server
cd c:\Users\avik\Desktop\testHTMLcss
http-server
# Accéder : http://localhost:8080
```

**VS Code Live Server :**
1. Installer extension "Live Server" (ritwickdey.LiveServer)
2. Clic droit sur `index.html` → "Open with Live Server"
3. Serveur lance sur http://localhost:5500

### Production

#### Option 1 : GitHub Pages (Recommandé pour portfolio)

1. **Créer repo GitHub** : `username.github.io` (ou `mon-portfolio`)
2. **Push les fichiers** :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git remote add origin https://github.com/USERNAME/username.github.io
   git push -u origin main
   ```
3. **Activer GitHub Pages** :
   - Settings → Pages → Source = "main branch"
4. **Site live** : `https://username.github.io`

#### Option 2 : Netlify (Gratuit + avancé)

1. **Créer compte** : netlify.com
2. **Drag & drop dossier** ou connecter GitHub
3. **Auto-HTTPS, CDN, formulaires Netlify**
4. **Site live** : `https://random-name.netlify.app`

**Activer Netlify Forms pour contact :**
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

#### Option 3 : Vercel

1. **Créer compte** : vercel.com
2. **Importer repo GitHub** ou uploader dossier
3. **Déploiement auto**
4. **Site live** : `https://yourapp.vercel.app`

#### Option 4 : Serveur custom VPS

Uploader sur un serveur Linux + Nginx/Apache :
```bash
scp -r testHTMLcss/* user@server:/var/www/html/
```

### Configuration DNS (domaine personnalisé)

Pour les 3 options (GitHub Pages, Netlify, Vercel) :

1. Buyer un domaine (namecheap.com, ionos.com)
2. Configurer DNS records →
   ```
   CNAME : www.votredomaine.com → votresite.netlify.app
   A : 185.199.108.153 (GitHub Pages)
   ```
3. Attendre propagation (1-24h)

---

## 🔧 Maintenance future

### Checklist de mise à jour régulière

- [ ] **Chaque trimestre** : Mettre à jour CV (CV_fev2026.pdf)
- [ ] **Chaque projet** : Ajouter les nouveaux projets scolaires/personnels
- [ ] **Chaque alternance** : Mettre à jour l'expérience en contact.html + skills.html
- [ ] **Chaque changement** : Valider responsive sur mobile (720px)
- [ ] **Annuel** : Vérifier que tous les liens externes fonctionnent

### Tâches courantes et solutions

| Problème | Solution |
|----------|----------|
| Header/footer ne s'affiche pas | Vérifier HTTP server (pas file://) |
| Modal ne s'ouvre pas | Check `main.js` - vérifier event listeners |
| Couleurs différentes en dark mode | Vérifier CSS variables en `html.dark` |
| Avatar tilt ne fonctionne pas | Check that `main.js` est chargé (verifier network tab) |
| Formulaire n'envoie rien | Connecter Netlify Forms ou Formspree (voir guide) |
| Images ne s'affichent | Vérifier URLs ou chemins locaux dans projects.html |

### Performance

**Points forts :**
✅ Zero npm dependencies = 0 bloat
✅ Single CSS file = 1 requête
✅ Reveal animations optimisées (will-change)
✅ Images placeholders (picsum) — remplacer par images compressées

**Optimisations possibles :**
- Compresser images locales (.png → .webp)
- Minifier styles.css pour production
- Lazy-load images (`loading="lazy"`)
- Service Worker pour offline

### Sécurité

**Actuellement :** Site statique, aucun backend = très sûr

**À faire si ajout backend :**
- Valider formulaire côté serveur
- HTTPS obligatoire
- CORS headers
- Rate limiting

### Accessibilité

**Implémenté :**
✓ ARIA labels (avatar, buttons)
✓ Keyboard navigation (modal, form)
✓ Semantic HTML (h1-h6, main, section)
✓ Focus states (inputs, buttons)
✓ Color contrast (WCAG AA)

**À améliorer :**
- Ajouter `alt` text à toutes les images
- Tester avec screen reader (NVDA)
- Vérifier @ https://wave.webaim.org/

---

## 📞 Support futur

**Si modification par une autre IA :**

1. **Fournir ce document** comme contexte initial
2. **Préciser la modification** : "Ajouter un 6e projet", "Changer couleur primaire", etc.
3. **Tester dans navigateur** après chaque modif
4. **Valider responsive** (tester sur téléphone ou DevTools)

**Points critiques à ne pas casser :**
- Structure HTML (data-include, data-attributes)
- CSS variables (--accent, --bg, etc)
- main.js initialization flow (includesLoaded event)
- Chemins d'includes (includes/header.html, includes/footer.html)

---

## 📝 Historique des versions

| Version | Date | Changements |
|---------|------|-------------|
| 1.0 | 6 fév 2026 | Version initiale avec CV intégré |
| 0.3 | 6 fév 2026 | 5 projets + 5 pages + CV données |
| 0.2 | ~Janvier 2026 | Multi-page + 3D avatar + dark mode |
| 0.1 | ~Début janv | Single-page prototype |

---

**Fin de la documentation.**

Pour des questions ou mises à jour futures, consulter ce document en priorité.
