// main.js — centralise les interactions (attend includesLoaded si nécessaire)
function initSite(){
  // Reveal animations using IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries, o)=>{
      entries.forEach(e=>{
          if(e.isIntersecting){
              e.target.classList.add('is-visible');
              o.unobserve(e.target);
          }
      })
  },{threshold:0.12});
  reveals.forEach(r=>obs.observe(r));

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click',e=>{
          const href = a.getAttribute('href');
          if(href.length>1){
              e.preventDefault();
              const el = document.querySelector(href);
              if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
          }
      })
  });

  // Animate skill bars when skills section reveals
  const skillObserver = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
          if(en.isIntersecting){
              document.querySelectorAll('.skill-fill').forEach(el=>{
                  const v = el.getAttribute('data-fill')||0;
                  el.style.width = v + '%';
              });
              skillObserver.disconnect();
          }
      })
  },{threshold:0.2});
  const skillsSection = document.getElementById('skills');
  if(skillsSection) skillObserver.observe(skillsSection);

  // Simple form submit prevention (demo)
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Merci — message simulé. (Cela peut être connecté à un backend plus tard)');
    });
  }

  // Project modal logic
  const modal = document.getElementById('project-modal');
  if(modal){
    const modalTitle = document.getElementById('project-modal-title');
    const modalDesc = document.getElementById('project-modal-desc');
    const modalTags = document.getElementById('project-modal-tags');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;
    let currentImages = [];

    function renderCarousel(){
      carouselTrack.innerHTML = '';
      currentImages.forEach((src,i)=>{
        const img = document.createElement('img');
        img.src = src;
        img.alt = modalTitle.textContent + ' image ' + (i+1);
        img.className = 'carousel-img';
        img.style.display = i===currentIndex ? 'block' : 'none';
        carouselTrack.appendChild(img);
      });
      // update view link
      const modalView = document.getElementById('modal-view');
      if(modalView && currentImages[0]) modalView.href = currentImages[0];
    }

    function showNext(){ if(currentImages.length===0) return; currentIndex = (currentIndex+1)%currentImages.length; renderCarousel(); }
    function showPrev(){ if(currentImages.length===0) return; currentIndex = (currentIndex-1+currentImages.length)%currentImages.length; renderCarousel(); }

    document.querySelectorAll('.project').forEach(p=>{
      function openFrom(el){
        const title = el.getAttribute('data-title');
        const desc = el.getAttribute('data-desc');
        const tags = el.getAttribute('data-tags');
        const imagesAttr = el.getAttribute('data-images') || '';
        currentImages = imagesAttr.split(',').map(s=>s.trim()).filter(Boolean);
        currentIndex = 0;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalTags.textContent = tags;
        renderCarousel();
        modal.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
        const firstClose = document.querySelector('.modal-close');
        if(firstClose) firstClose.focus();
      }
      p.querySelectorAll('.more').forEach(b=>b.addEventListener('click', e=>{ e.stopPropagation(); openFrom(p); }));
      p.addEventListener('click', ()=> openFrom(p));
      p.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFrom(p); } });
    });

    document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click', ()=> closeModal()));
    const modalClose = document.querySelector('.modal-close');
    if(modalClose) modalClose.addEventListener('click', ()=> closeModal());
    if(prevBtn) prevBtn.addEventListener('click', showPrev);
    if(nextBtn) nextBtn.addEventListener('click', showNext);
    function closeModal(){ modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; currentImages = []; carouselTrack.innerHTML=''; }
    window.addEventListener('keydown', e=>{
      if(e.key === 'Escape' && modal.getAttribute('aria-hidden')==='false') closeModal();
      if(e.key === 'ArrowRight' && modal.getAttribute('aria-hidden')==='false') showNext();
      if(e.key === 'ArrowLeft' && modal.getAttribute('aria-hidden')==='false') showPrev();
    });
  }

  // Theme toggle (dark mode) persisted
  const themeToggle = document.getElementById('theme-toggle');
  if(themeToggle){
    function applyTheme(dark){
      if(dark) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      themeToggle.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }
    const saved = localStorage.getItem('pref-theme');
    if(saved){ applyTheme(saved==='dark'); }
    else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){ applyTheme(true); }
    themeToggle.addEventListener('click', ()=>{
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('pref-theme', isDark ? 'dark' : 'light');
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
  }

  // Avatar 3D tilt effect (responsive to pointer) with adjustable intensity
  let tiltMax = parseFloat(localStorage.getItem('tilt-max')) || 12;
  function initAvatarTilt(){
    document.querySelectorAll('.avatar-3d').forEach(el=>{
      const inner = el.querySelector('.avatar-inner');
      if(!inner) return;
      let raf = null;
      function handleMove(e){
        const rect = el.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const dx = (clientX - (rect.left + rect.width/2)) / (rect.width/2);
        const dy = (clientY - (rect.top + rect.height/2)) / (rect.height/2);
        const max = tiltMax; // degrees set by slider
        const rotateY = dx * max;
        const rotateX = -dy * max;
        if(raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(()=>{
          inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
          inner.style.boxShadow = `${-rotateY*2}px ${rotateX*2}px 30px rgba(2,6,23,0.18)`;
        });
      }
      function handleLeave(){ if(raf) cancelAnimationFrame(raf); inner.style.transform = ''; inner.style.boxShadow = ''; }
      el.addEventListener('pointermove', handleMove);
      el.addEventListener('pointerleave', handleLeave);
      el.addEventListener('touchmove', handleMove, {passive:true});
      el.addEventListener('touchend', handleLeave);
    });
  }
  initAvatarTilt();

  // Tilt settings UI (floating control)
  function createTiltControl(){
    if(document.getElementById('tilt-control')) return;
    const ctrl = document.createElement('div');
    ctrl.id = 'tilt-control';
    ctrl.className = 'tilt-control';
    ctrl.innerHTML = `
      <button id="tilt-toggle" title="Réglages tilt">⚙️</button>
      <div class="tilt-panel" id="tilt-panel" style="display:none">
        <label for="tilt-range">Intensité</label>
        <input id="tilt-range" class="tilt-range" type="range" min="0" max="30" value="${tiltMax}">
      </div>`;
    document.body.appendChild(ctrl);
    const toggle = document.getElementById('tilt-toggle');
    const panel = document.getElementById('tilt-panel');
    const range = document.getElementById('tilt-range');
    toggle.addEventListener('click', ()=>{ panel.style.display = panel.style.display==='none' ? 'flex' : 'none'; });
    range.addEventListener('input', (e)=>{ tiltMax = parseFloat(e.target.value); localStorage.setItem('tilt-max', tiltMax); });
  }
  createTiltControl();
}

if(window.includesLoaded){ initSite(); }
else { window.addEventListener('includesLoaded', initSite); }
