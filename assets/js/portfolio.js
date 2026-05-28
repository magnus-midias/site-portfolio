/**
 * portfolio.js — Dados dos cases e lógica de filtro
 */

const CASES = [
  /* ── Saúde e Odontologia ────────────────────────── */
  {
    id: 'saude-01',
    setor: 'saude-odontologia',
    idioma: 'en',
    titulo: 'Unique Dental, Dublin',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/saude-01.webp',
    pageSlug: 'saude-01'
  },
  {
    id: 'saude-02',
    setor: 'saude-odontologia',
    idioma: 'pt',
    titulo: 'Savini Bem Estar, Florianópolis',
    tipo: 'Landing Page',
    servicos: ['Design', 'Desenvolvimento', 'Tráfego Pago'],
    print: '/assets/images/portfolio/saude-02.webp',
    pageSlug: 'saude-02'
  },
  /* ── Fitness e Bem-estar ────────────────────────── */
  {
    id: 'fitness-01',
    setor: 'fitness-bemestar',
    idioma: 'pt',
    titulo: 'Run Fitness Club, Florianópolis',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/fitness-01.webp',
    pageSlug: 'fitness-01'
  },
  {
    id: 'fitness-02',
    setor: 'fitness-bemestar',
    idioma: 'en',
    titulo: 'Orangetheory Fitness, EUA',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/fitness-02.webp',
    pageSlug: 'fitness-02'
  },
  /* ── Beleza e Estética ──────────────────────────── */
  {
    id: 'beleza-01',
    setor: 'beleza-estetica',
    idioma: 'pt',
    titulo: 'F&G Faces, Criciúma',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/beleza-01.webp',
    pageSlug: 'beleza-01'
  },
  {
    id: 'beleza-02',
    setor: 'beleza-estetica',
    idioma: 'en',
    titulo: 'Riko Med, Nova York',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/beleza-02.webp',
    pageSlug: 'beleza-02'
  },
  /* ── Estúdio de Tatuagem ────────────────────────── */
  {
    id: 'tattoo-01',
    setor: 'estudio-tatuagem',
    idioma: 'pt',
    titulo: "Led's Tattoo, São Paulo",
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/tattoo-01.webp',
    pageSlug: 'tattoo-01'
  },
  {
    id: 'tattoo-02',
    setor: 'estudio-tatuagem',
    idioma: 'en',
    titulo: 'Live by the Sword Tattoo, Nova York',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento'],
    print: '/assets/images/portfolio/tattoo-02.webp',
    pageSlug: 'tattoo-02'
  },
  /* ── Contabilidade ──────────────────────────────── */
  {
    id: 'contabil-01',
    setor: 'contabilidade',
    idioma: 'pt',
    titulo: 'Ozai Contabilidade, São Paulo',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/contabil-01.webp',
    pageSlug: 'contabil-01'
  },
  {
    id: 'contabil-02',
    setor: 'contabilidade',
    idioma: 'en',
    titulo: 'Merry Mullen, Dublin',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/contabil-02.webp',
    pageSlug: 'contabil-02'
  },
  /* ── Advocacia ──────────────────────────────────── */
  {
    id: 'advocacia-01',
    setor: 'advocacia',
    idioma: 'pt',
    titulo: 'LMorato Advogados, São Paulo',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/advoc-01.webp',
    pageSlug: 'advoc-01'
  },
  {
    id: 'advocacia-02',
    setor: 'advocacia',
    idioma: 'en',
    titulo: 'Clintons, Londres',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento'],
    print: '/assets/images/portfolio/advoc-02.webp',
    pageSlug: 'advoc-02'
  },
  /* ── Alimentação e Gastronomia ──────────────────── */
  {
    id: 'food-01',
    setor: 'alimentacao-gastronomia',
    idioma: 'pt',
    titulo: 'Modern Mamma Osteria, São Paulo',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/food-01.webp',
    pageSlug: 'food-01'
  },
  {
    id: 'food-02',
    setor: 'alimentacao-gastronomia',
    idioma: 'en',
    titulo: 'Lilia, Nova York',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento'],
    print: '/assets/images/portfolio/food-02.webp',
    pageSlug: 'food-02'
  },
  /* ── Construção e Imobiliário ───────────────────── */
  {
    id: 'imob-01',
    setor: 'construcao-imobiliario',
    idioma: 'pt',
    titulo: 'Vértiza Imóveis, São Paulo',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/imob-01.webp',
    pageSlug: 'imob-01'
  },
  {
    id: 'imob-02',
    setor: 'construcao-imobiliario',
    idioma: 'en',
    titulo: 'Domus Nova, Londres',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/imob-02.webp',
    pageSlug: 'imob-02'
  },
  /* ── Comércio e Moda ────────────────────────────── */
  {
    id: 'comercio-01',
    setor: 'comercio-moda',
    idioma: 'pt',
    titulo: 'Pitanga, São Paulo',
    tipo: 'E-commerce',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/comercio-01.webp',
    pageSlug: 'comercio-01'
  },
  {
    id: 'comercio-02',
    setor: 'comercio-moda',
    idioma: 'en',
    titulo: 'Doodie Stark, Reino Unido',
    tipo: 'E-commerce',
    servicos: ['Design', 'Desenvolvimento'],
    print: '/assets/images/portfolio/comercio-02.webp',
    pageSlug: 'comercio-02'
  },
  /* ── Serviços Automotivos ───────────────────────── */
  {
    id: 'auto-01',
    setor: 'servicos-automotivos',
    idioma: 'pt',
    titulo: 'Aura Detail, Palhoça',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/auto-01.webp',
    pageSlug: 'auto-01'
  },
  {
    id: 'auto-02',
    setor: 'servicos-automotivos',
    idioma: 'en',
    titulo: 'Xtreme Auto Detail, Austin',
    tipo: 'Site Institucional',
    servicos: ['Design', 'Desenvolvimento', 'SEO'],
    print: '/assets/images/portfolio/auto-02.webp',
    pageSlug: 'auto-02'
  },
];

const SECTOR_FILTER_MAP = {
  'saude-odontologia':       'saude',
  'fitness-bemestar':        'fitness',
  'beleza-estetica':         'beleza',
  'estudio-tatuagem':        'tatuagem',
  'contabilidade':           'contabilidade',
  'advocacia':               'advocacia',
  'alimentacao-gastronomia': 'alimentacao',
  'construcao-imobiliario':  'construcao',
  'comercio-moda':           'comercio',
  'servicos-automotivos':    'automotivo',
};

/**
 * Renderiza os cards de portfólio no grid.
 * @param {string} filtro - setor ou 'all'
 */
function renderCases(filtro) {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'pt';
  const all  = typeof getTranslations === 'function' ? getTranslations() : (window.__i18n || {});
  const dict = all[lang] || {};

  const filtered = filtro === 'all'
    ? CASES
    : CASES.filter(c => c.setor === filtro);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="portfolio-empty"><p>${dict['portfolio.empty'] || 'Nenhum projeto neste setor ainda.'}</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(c => buildCard(c, dict)).join('');
}

/**
 * Constrói o HTML de um card de case.
 */
function buildCard(c, dict) {
  const isSoon    = !c.pageSlug;
  const soonLabel = dict['portfolio.card.soon'] || 'Em breve';
  const seeLabel  = dict['portfolio.card.see']  || 'Ver projeto';
  const langLabel = c.idioma === 'en' ? 'EN' : 'PT';
  const langClass = c.idioma === 'en' ? 'badge-lang-en' : 'badge-lang-pt';
  const cardClass = `case-card${isSoon ? ' case-card--soon' : ''}`;
  const internalUrl = c.pageSlug ? `/portfolio/${c.pageSlug}.html` : null;

  const imgWrapAttrs = isSoon ? ` data-soon-label="${soonLabel}"` : '';

  const seeArrow = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

  const tags = c.servicos.map(s => `<span class="tag">${s}</span>`).join('');

  const body = `
      <div class="case-card__image-wrap"${imgWrapAttrs}>
        <img
          src="${c.print}"
          alt="${c.titulo}"
          class="case-card__image"
          loading="lazy"
          width="640"
          height="360"
        />
      </div>
      <div class="case-card__body">
        <div class="case-card__badges">
          <span class="badge badge-sector">${getSectorLabel(c.setor, dict)}</span>
          <span class="badge ${langClass}">${langLabel}</span>
        </div>
        <div>
          <p class="case-card__title">${c.titulo}</p>
          <p class="case-card__tipo">${c.tipo}</p>
        </div>
        <div class="case-card__tags">${tags}</div>
        ${!isSoon ? `<div class="case-card__footer"><span class="case-card__link">${seeLabel} ${seeArrow}</span></div>` : ''}
      </div>`;

  if (internalUrl) {
    return `<a href="${internalUrl}" class="${cardClass} case-card--link">${body}</a>`.trim();
  }

  return `<article class="${cardClass}">${body}</article>`.trim();
}

/**
 * Retorna o label traduzido do setor.
 */
function getSectorLabel(setor, dict) {
  const filterKey = SECTOR_FILTER_MAP[setor];
  return dict[`portfolio.filter.${filterKey}`] || setor;
}

/**
 * Inicializa os botões de filtro e o grid.
 */
function initPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  renderCases('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filtro = btn.getAttribute('data-filter') || 'all';
      renderCases(filtro);
    });
  });
}
