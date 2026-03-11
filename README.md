# Portfolio Avtandil PETROSYAN

Portfolio responsive d'un étudiant en BUT Informatique à Dijon — projets, compétences, passions (horlogerie, entreprenariat).

## Structure

```
testHTMLcss/
├── index.html              # Page d'accueil (landing)
├── test.html               # Landing page (alias)
├── about.html              # À propos + formation
├── projects.html           # Projets détaillés + carousel
├── skills.html             # Compétences, langues, expériences
├── passions.html           # Passions avec galerie
├── contact.html            # Formulaire de contact
├── styles.css              # Styles global (dark mode, animations, responsive)
├── main.js                 # Interactions (reveal, modal, tilt avatar, theme toggle)
├── include-html.js         # Chargeur de fragments HTML
├── includes/
│   ├── header.html         # En-tête partagé (navigation)
│   └── footer.html         # Pied de page partagé
└── CV_fev2026.pdf          # CV téléchargeable
```

## 📋 Infos du CV intégrées

- **Nom** : Avtandil PETROSYAN
- **Email** : petrosyan21000@gmail.com
- **Localisation** : Dijon, 21000 (France)
- **Formation** : BUT Informatique (1ère année) — IUT Dijon
- **Spécialités** : HTML/CSS, Python, Pascal, C#, SQL
- **Langues** : Français (bilingue), Arménien (bilingue), Anglais (B1), Russe (A2), Espagnol (A2)
- **Passions** : Horlogerie, Entrepreneuriat

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

## ➕ Comment ajouter un nouveau projet

### Étape 1 : Ajouter le projet dans `projects.html`

Dupliquez un bloc `<article>` existant dans la `.project-grid` et modifiez :

```html
<article class="project" tabindex="0" role="button" 
  data-title="Titre du Projet" 
  data-desc="Description courte du projet..." 
  data-tags="Tech1 • Tech2" 
  data-images="url1.jpg,url2.jpg">
  <div class="project-thumb">
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="80" rx="6" fill="#eef6ff"></rect>
      <text x="50%" y="54%" ... fill="#0b6ef6" ...>Label</text>
    </svg>
  </div>
  <h3>Titre du Projet</h3>
  <p>Description courte</p>
  <p class="tag">Tech1 • Tech2</p>
  <button class="more">En savoir plus</button>
</article>
```

**Attributs à modifier** :
- `data-title` : Nom du projet
- `data-desc` : Description complète (affichée dans modal)
- `data-tags` : Technologies/catégories (séparées par " • ")
- `data-images` : URLs des images (séparées par virgule) — utilisez `picsum.photos` ou vos propres images

### Exemple avec valeurs réelles

```html
<article class="project" tabindex="0" role="button" 
  data-title="Mon API REST" 
  data-desc="Création d'une API REST en Python+Flask avec authentification JWT et BDD PostgreSQL." 
  data-tags="Python • API • Flask" 
  data-images="https://picsum.photos/seed/api1/800/480,https://picsum.photos/seed/api2/800/480">
  <div class="project-thumb">
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="80" rx="6" fill="#f0f7ff"></rect>
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" 
        fill="#0066cc" font-family="Inter" font-size="12">API REST</text>
    </svg>
  </div>
  <h3>Mon API REST</h3>
  <p>Création d'une API REST en Python+Flask avec authentification JWT et BDD PostgreSQL.</p>
  <p class="tag">Python • API • Flask</p>
  <button class="more">En savoir plus</button>
</article>
```

### Étape 2 : Personnaliser les couleurs (optionnel)

Changez la couleur SVG du thumbnail en modifiant les valeurs `fill` :

```html
<!-- Bleu -->
<rect fill="#eef6ff"></rect>
<text fill="#0b6ef6"></text>

<!-- Orange -->
<rect fill="#fff7ed"></rect>
<text fill="#ff8a00"></text>

<!-- Purple -->
<rect fill="#f9f0ff"></rect>
<text fill="#aa00ff"></text>
```

## Fonctionnalités

✨ **Avatar 3D** — Tilt interactif du curseur avec contrôle d'intensité (⚙️ bottom-right)  
🌙 **Dark Mode** — Bascule thème avec persistance localStorage  
✨ **Animations** — Reveal IntersectionObserver, barres de compétences animées  
📸 **Modal Carousel** — Galerie d'images pour chaque projet  
🔗 **Multi-pages** — Navigation partagée, header/footer réutilisables  
📱 **Responsive** — Mobile-first CSS Grid + Flexbox  

## Personnalisation

1. Remplacer `Avtandil PETROSYAN` et infos dans `includes/header.html` et `includes/footer.html`
2. Ajouter/modifier projets dans `projects.html` (ajouter `data-images="url1,url2"` pour carousel)
3. Ajouter un vrai CV en remplaçant `CV.pdf`
4. Mettre à jour liens GitHub/LinkedIn dans le footer

## Déploiement

### GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit: portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

Puis dans les settings du repo GitHub → Pages → Source: `main` branch.

### Netlify

Upload du dossier `testHTMLcss` via [netlify.com/drop](https://app.netlify.com/drop)

### Vercel

```bash
npm i -g vercel
cd testHTMLcss
vercel
```

## Notes

- `main.js` centralise toutes les interactions (reveal, modal, tilt, theme)
- Le CSS utilise CSS variables (`:root`) pour la personnalisation facile
- Pas de dépendances externes (vanilla JS/CSS)
- Support des anciens navigateurs (IE11–) : adapter les préfixes `-webkit-`

---

**Dernière mise à jour** : 6 février 2026
