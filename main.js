/* ============================================================
   MAIN.JS — Toutes les interactions du site Code & Chouette 🦉
   ------------------------------------------------------------
   Ce fichier regroupe le JavaScript de TOUTES les pages :

   1. Menu burger (mobile)
   2. Mise en évidence du lien de la page en cours
   3. Animations d'apparition au défilement
   4. Accordéon FAQ (pages tarifs et contact)
   5. Formulaire de contact (validation + envoi)
   6. Année automatique dans le pied de page

   Le code attend l'événement "includesLoaded" (déclenché par
   include-html.js) : il garantit que l'en-tête et le pied de
   page sont bien présents dans la page avant d'y brancher
   les écouteurs d'événements.
   ============================================================ */

function initialiserSite() {

  /* ----------------------------------------------------------
     1. MENU BURGER (mobile)
     ----------------------------------------------------------
     Au clic sur le bouton, on ajoute/retire la classe .ouverte
     sur la navigation. Le CSS s'occupe de l'animation.
     ---------------------------------------------------------- */
  const boutonMenu = document.getElementById('bouton-menu');
  const navigation = document.getElementById('navigation-principale');

  if (boutonMenu && navigation) {
    boutonMenu.addEventListener('click', function () {
      const estOuvert = navigation.classList.toggle('ouverte');
      // aria-expanded informe les lecteurs d'écran de l'état du menu
      boutonMenu.setAttribute('aria-expanded', estOuvert ? 'true' : 'false');
      boutonMenu.setAttribute('aria-label', estOuvert ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    // On referme le menu dès qu'on clique sur un lien (confort mobile)
    navigation.querySelectorAll('a').forEach(function (lien) {
      lien.addEventListener('click', function () {
        navigation.classList.remove('ouverte');
        boutonMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     2. LIEN ACTIF DANS LA NAVIGATION
     ----------------------------------------------------------
     On compare le nom du fichier de la page actuelle (ex :
     "services.html") avec chaque lien du menu, et on souligne
     celui qui correspond.
     ---------------------------------------------------------- */
  if (navigation) {
    // location.pathname donne par ex. "/services.html" → on garde "services.html".
    // Si on est à la racine ("/"), c'est la page d'accueil.
    const pageActuelle = location.pathname.split('/').pop() || 'index.html';

    navigation.querySelectorAll('a').forEach(function (lien) {
      if (lien.getAttribute('href') === pageActuelle) {
        lien.classList.add('lien-actif');
        // aria-current précise aux lecteurs d'écran qu'on est sur cette page
        lien.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ----------------------------------------------------------
     3. ANIMATIONS D'APPARITION AU DÉFILEMENT
     ----------------------------------------------------------
     IntersectionObserver "surveille" les éléments .apparition :
     dès qu'un élément devient visible à l'écran, on lui ajoute
     la classe .est-visible et le CSS le fait apparaître en
     douceur. On arrête ensuite de le surveiller (une seule
     animation par élément, pas besoin de plus).
     ---------------------------------------------------------- */
  const elementsAnimes = document.querySelectorAll('.apparition');

  const observateur = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (entree) {
      if (entree.isIntersecting) {
        entree.target.classList.add('est-visible');
        observateur.unobserve(entree.target);
      }
    });
  }, {
    // threshold: 0 → on déclenche dès que l'élément entre dans l'écran.
    // (Avec un seuil en %, un bloc plus haut que l'écran d'un téléphone
    // pourrait ne jamais l'atteindre... et rester invisible pour toujours !)
    threshold: 0,
    // La marge négative en bas retarde un peu le déclenchement :
    // l'élément doit être entré de 60px dans l'écran pour apparaître.
    rootMargin: '0px 0px -60px 0px'
  });

  elementsAnimes.forEach(function (element) {
    observateur.observe(element);
  });

  /* ----------------------------------------------------------
     4. ACCORDÉON FAQ
     ----------------------------------------------------------
     Au clic sur une question, on ouvre/ferme sa réponse en
     ajoutant/retirant la classe .ouverte (l'animation est
     gérée par le CSS).
     ---------------------------------------------------------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function () {
      const estOuverte = item.classList.toggle('ouverte');
      // aria-expanded : utile pour l'accessibilité
      question.setAttribute('aria-expanded', estOuverte ? 'true' : 'false');
    });
  });

  /* ----------------------------------------------------------
     5. FORMULAIRE DE CONTACT
     ----------------------------------------------------------
     - On vérifie que les champs obligatoires sont remplis
     - On envoie les données à Netlify Forms (POST vers "/")
     - On affiche un message de succès ou d'erreur

     ⚠️ L'envoi ne fonctionne QUE sur le site déployé sur Netlify.
     En local (python / Live Server), il n'y a pas de Netlify pour
     recevoir le POST : le message d'erreur s'affichera, c'est normal.
     ---------------------------------------------------------- */
  const formulaire = document.getElementById('formulaire-contact');

  if (formulaire) {
    formulaire.addEventListener('submit', async function (evenement) {
      // On empêche le rechargement de la page (comportement par défaut)
      evenement.preventDefault();

      const zoneMessage = document.getElementById('message-formulaire');

      // Petite fonction utilitaire pour afficher un message coloré
      function afficherMessage(texte, type) {
        zoneMessage.textContent = texte;
        zoneMessage.className = 'message-formulaire ' + type; // "succes" ou "erreur"
      }

      // --- Récupération des champs à valider ---
      // (les autres champs sont envoyés directement via FormData plus bas)
      const nom = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const conditions = document.getElementById('terms').checked;

      // --- Validation ---
      if (!nom || !email || !message) {
        afficherMessage('Oups ! Merci de remplir tous les champs marqués d\'une étoile (*).', 'erreur');
        return;
      }

      if (!conditions) {
        afficherMessage('Merci de cocher la case de consentement avant d\'envoyer.', 'erreur');
        return;
      }

      // --- Envoi vers Netlify Forms ---
      // FormData récupère automatiquement tous les champs du formulaire
      // (grâce à leur attribut "name"), y compris le champ caché
      // "form-name" requis par Netlify. On convertit ensuite en
      // "url-encoded", le format attendu par Netlify Forms.
      try {
        const reponse = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(formulaire)).toString()
        });

        if (reponse.ok) {
          afficherMessage('🦉 C\'est envoyé ! Nous revenons vers vous sous 48 h. Merci de votre confiance.', 'succes');
          formulaire.reset();
        } else {
          throw new Error('Le serveur a renvoyé une erreur');
        }
      } catch (erreur) {
        afficherMessage('Aïe, l\'envoi a échoué. Réessayez dans un instant, ou écrivez-nous directement par email.', 'erreur');
      }
    });
  }

  /* ----------------------------------------------------------
     6. ANNÉE AUTOMATIQUE DANS LE PIED DE PAGE
     ----------------------------------------------------------
     Plus besoin de penser à mettre à jour le copyright
     chaque 1er janvier !
     ---------------------------------------------------------- */
  const annee = document.getElementById('annee-actuelle');
  if (annee) {
    annee.textContent = new Date().getFullYear();
  }
}

/* ------------------------------------------------------------
   POINT DE DÉPART
   ------------------------------------------------------------
   Si les fragments (header/footer) sont déjà chargés, on lance
   tout de suite. Sinon, on attend le signal d'include-html.js.
   ------------------------------------------------------------ */
if (window.includesLoaded) {
  initialiserSite();
} else {
  window.addEventListener('includesLoaded', initialiserSite);
}
