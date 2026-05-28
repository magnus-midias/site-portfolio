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

  // Portfólio (só executa se estiver na página de portfólio)
  if (typeof initPortfolio === 'function') initPortfolio();
});
