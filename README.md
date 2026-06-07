# Agence Web PETROSYAN — Services WordPress & Développement Personnalisé

Site agence web proposant des services de création de sites internet en **WordPress** et **développement web personnalisé** pour PME et entrepreneurs.

## Structure

```
testHTMLcss/
├── index.html              # Landing agence (Hero + Services + CTA)
├── services.html           # Détail services : WordPress vs Développement personnalisé
├── projects.html           # Portfolio / Case studies clients
├── pricing.html            # Tarifs & packages disponibles
├── about.html              # Qui sommes-nous + expertise
├── contact.html            # Contact + Demande de devis
├── styles.css              # Styles global (dark mode, animations, responsive)
├── main.js                 # Interactions (reveal, modal, tilt avatar, theme toggle)
├── include-html.js         # Chargeur de fragments HTML
├── includes/
│   ├── header.html         # En-tête agence (navigation)
│   └── footer.html         # Pied de page (mentions, liens sociaux)
└── test.html               # Landing page alternative
```

## 📋 Services proposés

- **WordPress** : Sites vitrines et e-commerce clé en main
- **Développement personnalisé** : Solutions web sur mesure (HTML/CSS/JS, Python, React)
- **Consultation** : Audit et optimisation de sites existants
- **Maintenance** : Support technique et mises à jour

## Infos de contact

- **Email** : petrosyan21000@gmail.com
- **Localisation** : Dijon, 21000 (France)
- **Disponibilité** : Projets court & long terme
- **Spécialiste** : PME, startups, micro-entrepreneurs

## Démarrage local

À cause du `fetch()` utilisé par `include-html.js`, **vous devez lancer un serveur local** (pas de `file://` directement).

### Option 1 : Python (rapide)

```bash
cd c:\Users\avik\Desktop\testHTMLcss
python -m http.server 8000
```

Puis ouvrez [http://localhost:8000](http://localhost:8000)

### Option 2 : Node.js (http-server)

```bash
npm install -g http-server
cd c:\Users\avik\Desktop\testHTMLcss
http-server
```

### Option 3 : VS Code (Live Server)

- Installez l'extension "Live Server" (ritwickdey.LiveServer)
- Clic droit sur `index.html` → "Open with Live Server"

## Modification rapide

### Ajouter un projet client dans portfolio

Éditez `projects.html` — ajoutez une carte projet :

```html
<article class="project" tabindex="0" role="button" 
  data-title="Nom du Client" 
  data-desc="Description du projet..." 
  data-tags="WordPress|React|E-commerce" 
  data-images="image1.jpg,image2.jpg">
  <div class="project-thumb">
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="80" rx="6" fill="#eef6ff"></rect>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" 
        fill="#0b6ef6" font-family="Inter" font-size="12">Tag</text>
    </svg>
  </div>
  <h3>Nom du Client</h3>
  <p>Description courte</p>
  <p class="tag">WordPress • E-commerce</p>
  <button class="more">En savoir plus</button>
</article>
```

### Modifier textes et infos

- **Header & Navigation** : `includes/header.html`
- **Footer & Contact** : `includes/footer.html`
- **Textes pages** : `index.html`, `services.html`, `about.html`, etc.
- **Styles** : `styles.css` (variables CSS au top)

## 🌟 Fonctionnalités principales

✨ **Design moderne** — Brand professionnel  
🌙 **Dark Mode** — Bascule thème  
✨ **Animations** — Reveal au scroll, hover effects  
📸 **Portfolio Modal** — Galeries d'images clients  
📱 **Responsive** — Mobile, tablet, desktop  
🎯 **CTAs visibles** — Demande de devis partout  
📝 **Formulaire contact** — Validation intégrée  

## 🚀 Déploiement

### GitHub Pages

```bash
git init
git add .
git commit -m "Agence Web PETROSYAN"
git branch -M main
git remote add origin https://github.com/USERNAME/repo.git
git push -u origin main
```

Puis repo settings → Pages → Source: `main`

### Netlify (recommandé - formulaires)

Upload via [netlify.com/drop](https://app.netlify.com/drop)

### Vercel

```bash
npm i -g vercel
cd testHTMLcss
vercel
```

## 📖 Documentation complète

Voir `DOCUMENTATION.md` pour :
- Architecture technique complète
- Guide modification détaillé
- Pages et fonctionnalités
- Maintenance

---

**Agence Web PETROSYAN — 7 juin 2026**
