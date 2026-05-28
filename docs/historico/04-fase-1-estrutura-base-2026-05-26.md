# Fase 1 — Estrutura base concluída

- **Data:** 2026-05-26
- **Autor:** Claude
- **Escopo:** arquitetura, UI, config

## Contexto / Motivação

Execução da Fase 1 do plano de ação: criar todo o esqueleto do projeto com arquivos HTML, CSS, JS, sistema de i18n e assets de logo prontos.

## O que mudou

**Pastas criadas:**
- `assets/css/pages/`
- `assets/js/`
- `assets/images/logo/`, `assets/images/portfolio/`, `assets/images/depoimentos/`
- `assets/fonts/`
- `translations/`

**Assets copiados para produção:**
- `assets/images/logo/logo-dark.svg`
- `assets/images/logo/logo-light.svg`
- `assets/images/logo/favicon.svg`

**CSS:**
- `assets/css/global.css` — tokens da marca Magnus (cores, tipografia Sora, border radius, easing, espaçamentos), reset, tipografia base, container, utilitários, IntersectionObserver classes
- `assets/css/components.css` — header (sticky, hamburguer, nav, toggle PT|EN), footer, botões (primary, ghost, light, whatsapp), badges, tags
- `assets/css/pages/home.css` — hero, serviços, depoimentos (carrossel mobile / grid desktop), CTA
- `assets/css/pages/processo.css` — timeline (vertical mobile / horizontal desktop), diferenciais
- `assets/css/pages/portfolio.css` — filtros pill, grid de cases, card de case (3 estados: com link, sem link, em breve)

**JS:**
- `translations/pt.js` — todos os textos PT-BR via `window.__i18n.pt`
- `translations/en.js` — todos os textos EN via `window.__i18n.en`
- `assets/js/i18n.js` — `initI18n()`, `setLanguage()`, `getCurrentLang()`, `getTranslations()`, persistência em localStorage
- `assets/js/portfolio.js` — array `CASES` com 9 placeholders (1 por setor), `renderCases()`, `buildCard()`, `initPortfolio()`
- `assets/js/main.js` — WhatsApp dinâmico, hamburguer, link ativo no nav, IntersectionObserver fade-in-up, inicialização geral

**HTML:**
- `index.html` — Home completa: hero, serviços (10 itens em 2 verticais), depoimentos placeholder, CTA
- `processo.html` — Como Funciona: intro, timeline Marketing (6 fases), timeline Tech (8 fases), diferenciais, CTA
- `portfolio.html` — Portfólio: intro, filtros (10 botões), grid injetado via JS

**Outros:**
- `.gitignore`
- `README.md` — descrição, stack, como rodar, estrutura de pastas, ponteiros para docs, regra de ouro

## Decisão registrada

Estratégia de componentes compartilhados: header e footer **duplicados** nos 3 HTMLs. Decisão: simplicidade operacional — sem fetch de partials, sem dependência de servidor, funciona com qualquer servidor local estático. Trade-off aceito: qualquer mudança no header/footer precisa ser replicada nos 3 arquivos.

## Impacto

Fase 1 concluída. Site abre localmente nas 3 URLs, header e footer funcionam, toggle PT|EN alterna textos, hamburguer abre/fecha em mobile, portfólio renderiza 9 cards placeholder com filtro funcional.

Próximo passo: Fase 2 (Home) e Fase 3 (Como Funciona) já estão essencialmente prontas com o HTML criado. Restam os testes intermediários (Fase T) e depois a substituição de conteúdo real (Fase 5).
