# 📚 Documentation — Code & Chouette 🦉

**Dernière mise à jour :** juin 2026
**Stack :** HTML5 • CSS3 (vanilla) • JavaScript pur (aucun framework)
**Contact :** petrosyan21000@gmail.com — Dijon

---

## 1. Vue d'ensemble

**Code & Chouette** est le site de notre agence web étudiante, basée à Dijon.
Cible : commerçants, artisans et indépendants de Bourgogne.

Le site comprend 5 pages :

| Page | Rôle |
|---|---|
| `index.html` | Accueil : promesse, services, process, clin d'œil chouette |
| `services.html` | Détail des 4 services (vitrine, boutique, refonte, maintenance) |
| `pricing.html` | Forfaits : Le Nid, L'Envol, La Boutique, Le Sur-Mesure + Le Perchoir |
| `about.html` | Histoire, valeurs, équipe, engagements |
| `contact.html` | Formulaire de devis + coordonnées + mini-FAQ |
| `mentions-legales.html` | Mentions légales (compléter les `[À COMPLÉTER]` !) |
| `confidentialite.html` | Politique de confidentialité (RGPD) |

Fichiers de référencement : `sitemap.xml`, `robots.txt`, `og-image.png`
(image de partage social) + balises canonical/Open Graph dans chaque `<head>`
et données structurées JSON-LD dans `index.html`.
**Le domaine `codeetchouette.fr` y figure en placeholder** — voir la checklist
de déploiement du README.

---

## 2. Architecture technique

### Fragments partagés (header / footer)

L'en-tête et le pied de page sont écrits **une seule fois** dans `includes/`
et injectés sur chaque page par `include-html.js` :

```html
<div data-include="includes/header.html"></div>
...
<div data-include="includes/footer.html"></div>
```

Quand tous les fragments sont chargés, `include-html.js` déclenche
l'événement `includesLoaded`. `main.js` attend ce signal avant de brancher
ses écouteurs (sinon le menu n'existerait pas encore !).

> ⚠️ **Piège n°1 :** `fetch()` ne marche pas en `file://`. Lancez toujours un
> serveur local (voir README).
>
> ⚠️ **Piège n°2 :** un `<script>` placé dans un fragment injecté via
> `innerHTML` **n'est jamais exécuté**. Tout le JavaScript vit dans `main.js`.

### main.js — les interactions

1. **Menu burger** (mobile) : bascule la classe `.ouverte` sur la navigation
2. **Lien actif** : compare l'URL avec les liens du menu, ajoute `.lien-actif`
3. **Animations d'apparition** : `IntersectionObserver` ajoute `.est-visible`
   aux éléments `.apparition` quand ils entrent dans l'écran
4. **FAQ accordéon** : bascule `.ouverte` sur les `.faq-item`
5. **Formulaire** : validation + envoi vers `URL_ENVOI_FORMULAIRE`
   (constante en haut de la section : `/send-email` pour `server.js` en local,
   ou une adresse Formspree pour un hébergement statique)
6. **Année automatique** dans le footer (`#annee-actuelle`)

### styles.css — le design

- **Mobile-first** : styles de base = mobile, puis `@media (min-width: ...)`
- **Variables CSS** dans `:root` : palette Bourgogne (moutarde `#E0A526`,
  cassis `#6B2143`, blanc cassé `#FBF7EF`), polices, rayons, ombres
- Sommaire commenté en tête de fichier — chaque section est numérotée
- Accessibilité : `prefers-reduced-motion` respecté, `:focus-visible` stylé,
  lien d'évitement `.lien-evitement`

### server.js — l'envoi d'email (optionnel)

Petit serveur Express qui sert les fichiers statiques et expose la route
`POST /send-email` (Nodemailer + Gmail). Pour l'activer :

1. `npm install`
2. Renseigner un **mot de passe d'application Google** dans `server.js`
3. `npm start` → http://localhost:3000

Sans ce serveur, le site fonctionne entièrement, sauf l'envoi réel du
formulaire (un message d'erreur aimable s'affiche).

---

## 3. Guide de modification

| Je veux... | Fichier à modifier |
|---|---|
| Changer un texte | Le fichier HTML de la page concernée |
| Changer les couleurs / polices | Variables `:root` en haut de `styles.css` |
| Ajouter un lien au menu | `includes/header.html` (+ `includes/footer.html`) |
| Ajouter un membre d'équipe | `about.html` (bloc commenté prêt à copier) |
| Activer les témoignages | `index.html` (section commentée prête à l'emploi) |
| Modifier un tarif | `pricing.html` (et les prix cités dans `index.html` / `services.html`) |
| Ajouter une question FAQ | Copier un bloc `.faq-item` dans `pricing.html` ou `contact.html` |

### Ajouter une carte de service (exemple)

```html
<article class="carte apparition">
  <div class="carte-icone" aria-hidden="true">🦉</div>
  <h3>Titre du service</h3>
  <p>Description courte et chaleureuse.</p>
  <span class="carte-prix">À partir de XXX €</span><br>
  <a class="carte-lien" href="services.html">En savoir plus →</a>
</article>
```

### Classes CSS utiles

- `.section` / `.section-douce` / `.section-cassis` — bandes de page
- `.titre-section` + `.sous-titre-section` — titres centrés avec trait moutarde
- `.grille-cartes` / `.grille-deux` — grilles responsives
- `.bouton .bouton-principal` / `.bouton .bouton-secondaire` (+ `.bouton-grand`)
- `.liste-coches` — liste à coches moutarde
- `.apparition` — animation d'apparition au défilement

---

## 4. Maintenance

- **Formulaire** : les `id` des champs (`name`, `email`, `phone`,
  `project-type`, `budget`, `message`, `terms`) sont partagés entre
  `contact.html`, `main.js` et `server.js`. Ne pas renommer l'un sans les autres.
- **Polices** : chargées depuis Google Fonts (Fraunces + Nunito). Pour un site
  100 % hors-ligne, télécharger les fichiers de polices et les servir localement.
- **Images** : préférer le format `.webp` et toujours renseigner l'attribut `alt`.

---

*Fait avec soin (et pas mal de café) à Dijon* ☕🦉
