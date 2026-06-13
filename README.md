# Code & Chouette 🦉 — L'agence web des commerçants de Dijon

Site vitrine de notre agence web étudiante, basée à Dijon. Nous créons des sites
pour les **commerçants, artisans et indépendants** de Bourgogne : sites vitrines,
boutiques en ligne, refontes et maintenance.

**Stack : HTML5 + CSS3 (vanilla) + JavaScript pur. Aucun framework.**

## Structure du projet

```
.
├── index.html              # Accueil (héros, services, process, clin d'œil chouette)
├── services.html           # Détail des 4 services
├── pricing.html            # Tarifs (Le Nid, L'Envol, La Boutique, Le Sur-Mesure, Le Perchoir)
├── about.html              # Qui sommes-nous ? (histoire, valeurs, équipe)
├── contact.html            # Contact + formulaire de devis
├── mentions-legales.html   # Mentions légales (⚠️ compléter les [À COMPLÉTER])
├── confidentialite.html    # Politique de confidentialité RGPD
├── styles.css              # TOUTE la mise en forme (mobile-first, très commentée)
├── main.js                 # TOUTES les interactions (menu, animations, FAQ, formulaire)
├── include-html.js         # Chargeur de fragments (header/footer partagés)
├── includes/
│   ├── header.html         # En-tête commun (logo, navigation, burger)
│   └── footer.html         # Pied de page commun
├── sitemap.xml             # Plan du site pour Google (⚠️ remplacer le domaine)
├── robots.txt              # Instructions pour les moteurs de recherche
├── og-image.png            # Image affichée lors d'un partage sur les réseaux
├── netlify.toml            # Config de déploiement Netlify (site statique)
└── server.js               # Serveur Node legacy (non utilisé avec Netlify Forms)
```

> Le formulaire de devis utilise **Netlify Forms** une fois le site déployé :
> aucun serveur ni service tiers à configurer. `server.js` n'est donc plus
> nécessaire (vous pouvez le supprimer pour un projet 100 % statique).

## L'identité visuelle (palette Bourgogne)

Toutes les couleurs sont des variables CSS, en haut de `styles.css` :

| Variable | Couleur | Usage |
|---|---|---|
| `--couleur-fond` | Blanc cassé `#FBF7EF` | Fond général |
| `--couleur-moutarde` | Jaune moutarde `#E0A526` | Boutons, accents |
| `--couleur-cassis` | Cassis/Bordeaux `#6B2143` | En-tête, titres, pied de page |
| `--couleur-encre` | `#3A2230` | Texte principal |

Polices : **Fraunces** (titres) et **Nunito** (texte), via Google Fonts.

## Démarrage local

⚠️ À cause du `fetch()` utilisé par `include-html.js` pour charger le header et
le footer, il faut **lancer un serveur local** (ouvrir les fichiers en `file://`
ne fonctionne pas).

### Option 1 : Python (le plus rapide)

```bash
python -m http.server 8000
```

Puis ouvrez [http://localhost:8000](http://localhost:8000)

> ℹ️ En local, le **formulaire de devis** ne peut pas aboutir (Netlify Forms
> n'existe que sur le site déployé) : un message d'erreur s'affiche, c'est
> normal. Tout le reste du site fonctionne parfaitement en local.

### Option 3 : VS Code (Live Server)

Clic droit sur `index.html` → « Open with Live Server »

## Modifications courantes

- **Changer un texte** : directement dans le fichier HTML de la page concernée
- **Navigation / logo** : `includes/header.html`
- **Pied de page** : `includes/footer.html`
- **Couleurs / polices / arrondis** : variables `:root` en haut de `styles.css`
- **Ajouter un membre d'équipe** : bloc commenté prêt à copier dans `about.html`
- **Activer les témoignages** : bloc commenté prêt à l'emploi dans `index.html`

## 🚀 Déploiement (checklist dans l'ordre)

### 1. Acheter le nom de domaine

`codeetchouette.fr` (ou autre) chez OVH, Gandi ou Infomaniak (~10 €/an).
Une adresse en `.netlify.app` ou `.github.io` nuit à la crédibilité ET au
référencement — pour une agence web, le domaine propre est indispensable.

### 2. Remplacer le domaine partout dans le code

Le code contient `codeetchouette.fr` en **placeholder**. Faites un
rechercher-remplacer global avec votre vrai domaine. Fichiers concernés :
les balises `<head>` des pages HTML (canonical, Open Graph), `sitemap.xml`
et `robots.txt`.

### 3. Compléter les pages légales

`mentions-legales.html` et `confidentialite.html` contiennent des
`[À COMPLÉTER]` (nom du responsable, statut, hébergeur). **Obligatoire en
France avant la mise en ligne** (loi LCEN + RGPD).

### 4. Le formulaire (rien à faire !)

Le formulaire de devis est déjà configuré pour **Netlify Forms** (voir
`contact.html` et `main.js`). Une fois le site déployé sur Netlify, les
demandes arriveront automatiquement dans l'onglet **Forms** de votre tableau
de bord Netlify — pensez à y activer les notifications par email
(Site settings → Forms → Form notifications) pour être prévenu à chaque devis.

### 5. Mettre en ligne sur Netlify (recommandé)

1. Poussez le code sur GitHub
2. Sur [netlify.com](https://netlify.com) : « Add new site » → « Import an
   existing project » → choisissez le dépôt → Deploy (aucun réglage à changer)
3. Dans « Domain settings », ajoutez votre nom de domaine ; le HTTPS est
   automatique

Chaque `git push` redéploiera le site tout seul. ✨

### 6. Activer la visibilité Google

1. **Fiche Google Business Profile** ([business.google.com](https://business.google.com)) :
   LE levier n°1 pour « agence web Dijon ». Remplissez tout, ajoutez des
   photos, et récoltez des avis dès les premiers clients.
2. **Google Search Console** ([search.google.com/search-console](https://search.google.com/search-console)) :
   validez votre domaine puis soumettez `sitemap.xml`.
3. **Liens locaux** : annuaire CCI Côte-d'Or, associations de commerçants,
   page partenaires de l'IUT... et le footer « Site réalisé par Code &
   Chouette » sur chaque site livré à un client.

## Points techniques à connaître

- **Mobile-first** : les styles de base ciblent le mobile ; les media queries
  `@media (min-width: ...)` adaptent ensuite pour les grands écrans.
- **Pas de `<script>` dans les includes** : les scripts injectés via `innerHTML`
  ne sont jamais exécutés par le navigateur. Toute la logique vit dans `main.js`,
  qui attend l'événement `includesLoaded`.
- **Accessibilité** : lien d'évitement, `aria-expanded` sur le burger et la FAQ,
  `prefers-reduced-motion` respecté pour les animations.

---

**Code & Chouette — fait avec soin (et pas mal de café) à Dijon** ☕🦉
