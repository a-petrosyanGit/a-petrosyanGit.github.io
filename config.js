/* ============================================================
   CONFIG.JS — Les infos de l'agence, à un seul endroit 🦉
   ------------------------------------------------------------
   👉 C'EST LE SEUL FICHIER À MODIFIER pour mettre à jour vos
      coordonnées : email, SIRET, hébergeur, etc.

   Comment ça marche ?
   Un peu partout dans le site (pied de page, page contact,
   mentions légales, confidentialité), des éléments portent un
   attribut spécial, par exemple :
       <span data-info="siret"></span>
       <a data-info-email></a>
   Au chargement, main.js les remplit automatiquement avec les
   valeurs ci-dessous.

   Pour changer une info : modifiez simplement sa valeur ici,
   enregistrez, et TOUTES les pages sont à jour d'un coup.
   (Plus besoin de chercher dans chaque fichier HTML !)
   ============================================================ */

const INFOS_SITE = {

  /* --- Identité --- */
  nom: "Code & Chouette",

  /* --- Contact --- */
  // Email affiché dans le pied de page, la page contact et les pages légales
  email: "petrosyan21000@gmail.com",
  // Téléphone : laissez vide ("") si vous ne voulez pas l'afficher
  telephone: "",

  /* --- Informations légales (mentions légales + RGPD) --- */
  responsable: "Avtandil PETROSYAN",        // Éditeur + directeur de la publication
  statut: "Micro-entreprise",
  siret: "980 139 851 000 11",
  adresse: "Dijon (21000), France",         // Ajoutez votre rue ici si nécessaire

  /* --- Hébergeur (obligatoire dans les mentions légales) --- */
  hebergeur: "Netlify, Inc. — 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis (netlify.com)"

};
