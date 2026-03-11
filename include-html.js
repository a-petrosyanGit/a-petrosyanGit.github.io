// include-html.js — charge des fragments HTML dans les éléments [data-include]
(async function(){
  const nodes = Array.from(document.querySelectorAll('[data-include]'));
  for(const n of nodes){
    const url = n.getAttribute('data-include');
    try{
      const res = await fetch(url);
      if(res.ok){
        const text = await res.text();
        n.innerHTML = text;
      } else {
        n.innerHTML = '';
      }
    } catch(err){
      n.innerHTML = '';
    }
  }
  window.includesLoaded = true;
  window.dispatchEvent(new Event('includesLoaded'));
})();
