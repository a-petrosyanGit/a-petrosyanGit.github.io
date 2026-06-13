/* ============================================================
   INCLUDE-HTML.JS — Chargeur de fragments HTML
   ------------------------------------------------------------
   Ce petit script permet de réutiliser le même en-tête et le
   même pied de page sur toutes les pages, sans copier-coller.

   Comment ça marche ?
   1. Dans chaque page, on place une balise vide avec un attribut
      data-include, par exemple :
         <div data-include="includes/header.html"></div>
   2. Au chargement, ce script va chercher le fichier indiqué
      (avec fetch) et injecte son contenu dans la balise.
   3. Quand TOUS les fragments sont chargés, il déclenche
      l'événement "includesLoaded" : main.js attend ce signal
      avant de brancher le menu, les animations, etc.

   ⚠️ IMPORTANT : fetch() ne fonctionne pas en ouvrant les
   fichiers directement (file://). Il faut lancer un petit
   serveur local (voir le README).

   ⚠️ AUTRE PIÈGE : les <script> contenus dans un fragment
   injecté via innerHTML ne sont JAMAIS exécutés. C'est pour ça
   que toute la logique JavaScript vit dans main.js, et pas dans
   includes/header.html.
   ============================================================ */

(async function () {
  // On récupère toutes les balises qui ont un attribut data-include
  const balises = Array.from(document.querySelectorAll('[data-include]'));

  // Pour chaque balise, on charge le fichier correspondant
  for (const balise of balises) {
    const url = balise.getAttribute('data-include');
    try {
      const reponse = await fetch(url);
      if (reponse.ok) {
        // Tout va bien : on injecte le HTML du fragment
        balise.innerHTML = await reponse.text();
      } else {
        // Fichier introuvable : on laisse la balise vide
        // et on prévient dans la console pour faciliter le débogage
        console.warn('Fragment introuvable : ' + url);
        balise.innerHTML = '';
      }
    } catch (erreur) {
      // Erreur réseau (souvent : site ouvert en file:// sans serveur)
      console.warn('Impossible de charger ' + url + ' — avez-vous lancé un serveur local ?');
      balise.innerHTML = '';
    }
  }

  // On signale au reste du site que les fragments sont prêts
  window.includesLoaded = true;
  window.dispatchEvent(new Event('includesLoaded'));
})();
