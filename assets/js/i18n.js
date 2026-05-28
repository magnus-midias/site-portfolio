/**
 * i18n.js — Sistema de toggle PT/EN
 * Usa atributo data-i18n nos elementos HTML.
 * Preferência salva em localStorage.
 */

const I18N_KEY = 'magnus-lang';
const SUPPORTED = ['pt', 'en'];

let currentLang = 'pt';
let allTranslations = {};

/**
 * Carrega os arquivos de tradução e inicializa o idioma.
 * Chamado uma vez no DOMContentLoaded via main.js.
 */
function initI18n() {
  // Cada arquivo de translation popula window.__i18n.{lang}
  if (window.__i18n) {
    allTranslations = { ...window.__i18n };
  }

  const saved = localStorage.getItem(I18N_KEY);
  const lang = SUPPORTED.includes(saved) ? saved : 'pt';
  setLanguage(lang, false);
}

/**
 * Alterna o idioma e atualiza o DOM.
 * @param {string} lang - 'pt' ou 'en'
 * @param {boolean} [save=true] - salvar no localStorage
 */
function setLanguage(lang, save = true) {
  if (!SUPPORTED.includes(lang)) return;

  currentLang = lang;
  if (save) localStorage.setItem(I18N_KEY, lang);

  const dict = allTranslations[lang] || {};

  // Atualiza todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value !== undefined) el.textContent = value;
  });

  // Atualiza atributos como placeholder, aria-label, title
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = dict[key];
    if (value !== undefined) el.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const value = dict[key];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  // Atualiza botões do toggle
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  // Atualiza atributo lang do <html>
  document.documentElement.lang = lang;
}

/**
 * Retorna o idioma atual.
 */
function getCurrentLang() {
  return currentLang;
}

/**
 * Expõe as translations para outros módulos (ex.: portfolio.js).
 */
function getTranslations() {
  return allTranslations;
}
