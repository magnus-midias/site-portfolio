/**
 * main.js — Inicialização geral do site
 */

/* ── Número WhatsApp Magnus ───────────────────────────────── */
const WA_NUMBER = '5555999062078';
const WA_MSG_PT = encodeURIComponent('Olá! Vim pelo site da Magnus Mídias e gostaria de saber mais sobre os serviços.');
const WA_MSG_EN = encodeURIComponent('Hi! I found Magnus Mídias website and would like to know more about your services.');

function getWhatsAppUrl() {
  const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'pt';
  return `https://wa.me/${WA_NUMBER}?text=${lang === 'en' ? WA_MSG_EN : WA_MSG_PT}`;
}

/* ── WhatsApp links dinâmicos ─────────────────────────────── */
function initWhatsApp() {
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.href = getWhatsAppUrl();
  });
}

function updateWhatsAppLinks() {
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.href = getWhatsAppUrl();
  });
}

/* ── Menu hamburguer ──────────────────────────────────────── */
function initHamburger() {
  const btn  = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Fechar ao clicar em um link do menu mobile
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Link ativo no nav ────────────────────────────────────── */
function initActiveNav() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('[data-nav-path]').forEach(link => {
    const linkPath = link.getAttribute('data-nav-path').replace(/\/$/, '') || '/';
    link.classList.toggle('is-active', path === linkPath || path.endsWith(linkPath));
  });
}

/* ── IntersectionObserver (fade-in-up) ───────────────────── */
function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-on-scroll');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback: mostrar tudo imediatamente
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '200px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── Carrossel de depoimentos ─────────────────────────────── */
function initTestimonialsMarquee() {
  const marquee = document.querySelector('.testimonials__marquee');
  if (!marquee) return;

  // Respeita preferência de movimento reduzido
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const strips = marquee.querySelectorAll('.testimonials__strip');
  if (!strips.length) return;

  // Largura total de uma faixa (metade do conteúdo duplicado)
  const stripW = () => strips[0].offsetWidth;

  let offset = 0;       // posição atual em px (negativa = movendo para esquerda)
  const speed = 0.6;    // px por frame (~36px/s a 60fps)
  let paused = false;
  let rafId = null;

  // Drag state
  let dragging = false;
  let dragStartX = 0;
  let dragStartOffset = 0;
  let dragVelocity = 0;
  let lastDragX = 0;
  let lastDragTime = 0;

  function applyTransform() {
    // Normaliza offset: quando passa de uma largura de faixa, reseta sem salto
    const w = stripW();
    offset = ((offset % w) - w) % w; // mantém sempre em [-w, 0)
    strips.forEach(s => {
      s.style.transform = `translateX(${offset}px)`;
    });
  }

  function tick() {
    if (!paused && !dragging) {
      offset -= speed;
      applyTransform();
    }
    rafId = requestAnimationFrame(tick);
  }

  // ── Mouse drag ──────────────────────────────────────────
  marquee.addEventListener('mousedown', e => {
    dragging = true;
    dragStartX = e.clientX;
    dragStartOffset = offset;
    dragVelocity = 0;
    lastDragX = e.clientX;
    lastDragTime = performance.now();
    marquee.classList.add('is-dragging');
  });

  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    const now = performance.now();
    const dt = now - lastDragTime;
    if (dt > 0) dragVelocity = (e.clientX - lastDragX) / dt * 16; // px/frame
    lastDragX = e.clientX;
    lastDragTime = now;
    offset = dragStartOffset + (e.clientX - dragStartX);
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    marquee.classList.remove('is-dragging');
    // Aplica momentum: continua na direção do arrasto por um tempo
    const momentum = dragVelocity;
    if (Math.abs(momentum) > 0.5) {
      let frames = 0;
      const decay = () => {
        const v = momentum * Math.pow(0.92, frames++);
        offset += v;
        applyTransform();
        if (Math.abs(v) > 0.1) requestAnimationFrame(decay);
      };
      requestAnimationFrame(decay);
    }
  });

  // ── Touch drag ──────────────────────────────────────────
  let touchStartY = 0;

  marquee.addEventListener('touchstart', e => {
    dragging = true;
    dragStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    dragStartOffset = offset;
    dragVelocity = 0;
    lastDragX = dragStartX;
    lastDragTime = performance.now();
  }, { passive: true });

  // Registrado no document para garantir entrega no Safari iOS
  document.addEventListener('touchmove', e => {
    if (!dragging) return;
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    const dx = Math.abs(x - dragStartX);
    const dy = Math.abs(y - touchStartY);

    // Se gesto claramente vertical, abandona drag
    if (dy > dx * 1.5) {
      dragging = false;
      return;
    }

    e.preventDefault();
    const now = performance.now();
    const dt = now - lastDragTime;
    if (dt > 0) dragVelocity = (x - lastDragX) / dt * 16;
    lastDragX = x;
    lastDragTime = now;
    offset = dragStartOffset + (x - dragStartX);
    applyTransform();
  }, { passive: false });

  document.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    const momentum = dragVelocity;
    if (Math.abs(momentum) > 0.5) {
      let frames = 0;
      const decay = () => {
        const v = momentum * Math.pow(0.92, frames++);
        offset += v;
        applyTransform();
        if (Math.abs(v) > 0.1) requestAnimationFrame(decay);
      };
      requestAnimationFrame(decay);
    }
  });

  // ── Pausa ao hover (sem drag) ────────────────────────────
  marquee.addEventListener('mouseenter', () => { if (!dragging) paused = true; });
  marquee.addEventListener('mouseleave', () => { paused = false; });

  // Inicia o loop
  rafId = requestAnimationFrame(tick);
}

/* ── Inicialização ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // i18n
  if (typeof initI18n === 'function') {
    initI18n();
    // Atualizar links do WhatsApp quando idioma mudar
    const originalSetLanguage = setLanguage;
    window.setLanguage = function(lang, save) {
      originalSetLanguage(lang, save);
      updateWhatsAppLinks();
      // Re-renderizar portfólio se estiver na página
      if (typeof renderCases === 'function') {
        const activeFilter = document.querySelector('.filter-btn.is-active');
        const filtro = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
        renderCases(filtro || 'all');
      }
    };
  }

  // Toggle de idioma (botões PT/EN)
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (typeof setLanguage === 'function') setLanguage(lang);
    });
  });

  initWhatsApp();
  initHamburger();
  initActiveNav();
  initScrollAnimations();
  initTestimonialsMarquee();

  // Portfólio (só executa se estiver na página de portfólio)
  if (typeof initPortfolio === 'function') initPortfolio();
});
