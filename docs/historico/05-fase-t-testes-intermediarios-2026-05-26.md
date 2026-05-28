# Fase T — Testes intermediários concluídos

- **Data:** 2026-05-26
- **Autor:** Claude
- **Escopo:** config, UI

## Contexto / Motivação

Execução de todos os testes automatizáveis da Fase T antes de passar para conteúdo real.

## Resultados dos testes

### HTTP / Assets
- ✅ 3 páginas respondem 200 (/ com 200, /processo e /portfolio com 301→200 via serve)
- ✅ Todos os CSS e JS servidos corretamente (200)
- ✅ Logo e favicon presentes e servidos

### i18n
- ✅ 104 chaves em PT e 104 em EN — paridade perfeita, zero chaves faltando
- ✅ Zero chaves usadas no HTML sem correspondente nas translations
- ✅ Zero valores vazios em PT ou EN
- ✅ portfolio.card.see, portfolio.card.soon, portfolio.empty usados corretamente em portfolio.js (não no HTML)

### HTML / Acessibilidade
- ✅ htmlhint: 0 erros em 3 arquivos
- ✅ 1 `<h1>` por página
- ✅ lang="pt-BR" em todas as páginas
- ✅ favicon em todas as páginas
- ✅ meta description em todas as páginas
- ✅ `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>` presentes em todas as páginas
- ✅ Todas as imagens com `alt`
- ✅ Todos os links externos com `rel="noopener noreferrer"` e `target="_blank"`
- ✅ Botão hamburguer com `aria-label` e `aria-expanded`

### CSS
- ✅ Google Fonts declarado apenas em `global.css` (não nos CSS de página)
- ✅ 29 variáveis declaradas, 26 em uso — zero variáveis usadas sem declaração
- ✅ Ordem de carregamento CSS correta nas 3 páginas (global → components → page)

### JavaScript
- ✅ 9 cases cobrem os 9 setores obrigatórios
- ✅ `buildCard()` gera HTML válido para todos os cases em PT e EN
- ✅ `SECTOR_FILTER_MAP` mapeia todos os setores corretamente
- ✅ `portfolio.js` carregado apenas em `portfolio.html`
- ✅ Ordem de carregamento JS correta (translations → i18n → portfolio → main)

### Lighthouse (desktop) — scores finais
| Página | Performance | Accessibility | Best Practices | SEO |
|--------|-------------|---------------|----------------|-----|
| Home | 100 | 100 | 100 | 100 |
| Processo | 100 | 100 | 100 | 100 |
| Portfolio | 100 | 100 | 100 | 100 |

## O que foi corrigido durante os testes

1. **404 em placeholder.webp dos depoimentos** — criado `assets/images/depoimentos/placeholder.svg` e referências atualizadas no `index.html`
2. **404 em placeholder.webp do portfólio** — criado `assets/images/portfolio/placeholder.svg` e referências atualizadas em `portfolio.js`
3. **Google Fonts bloqueava render** — movido de `@import` no CSS para `<link media="print" onload>` nos HTMLs (non-render-blocking) + `<noscript>` fallback
4. **CLS alto no portfólio (0.644)** — adicionado `min-height: 400px` ao `.portfolio-grid` para reservar espaço antes da injeção via JS

## Itens remanescentes (não-acionáveis em localhost)

- `cache-insight` (~20 KB savings) — desaparece em produção com headers de cache da Vercel
- `network-dependency-tree-insight` — aviso informativo sobre encadeamento de requests
- `render-blocking-insight` (60–80ms) — CSS local do próprio projeto, esperado

## Impacto

Fase T concluída. Site pronto para receber conteúdo real (Fase 5).
