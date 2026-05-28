# Visual e estrutura — alinhamento com feedback de Cristian

- **Data:** 2026-05-27
- **Autor:** Claude
- **Escopo:** CSS, HTML, JS

## Mudanças aplicadas

### 1. Toggle de idioma PT/EN — redesign
**Antes:** Segmento unificado com cantos quadrados.
**Depois:** Dois botões circulares separados (36×36px, `border-radius: 999px`, borda fina). Hover inverte para navy com `translateY(-2px)` — mesmo padrão visual dos `.socials a` do bio-magnus.

### 2. Seção Serviços (Home) — fundo navy
`section-alt` → `section-dark`. Adicionados ajustes em `home.css`:
- `.service-item`: fundo `rgba(244,244,249,0.06)`, borda `rgba(244,244,249,0.12)`
- `.service-item__icon`: fundo `rgba(244,244,249,0.10)`, texto inverse
- `.service-item__name` e `.service-item__desc`: cores adequadas ao fundo escuro
- `.services__vertical-title`: borda bottom sutil

### 3. Vertical Marketing (Como Funciona) — fundo navy
`section-alt` → `section-dark`. Adicionados ajustes em `processo.css`:
- `.timeline::before`: linha `rgba(244,244,249,0.2)`
- `.timeline__number`: fundo semitransparente com borda, texto inverse
- `.timeline__name` e `.timeline__desc`: cores para fundo escuro
- `.vertical-header__desc`: `rgba(244,244,249,0.7)`

### 4. Vertical Tech — removidas etapas 1 e 2, numeração 1–6
Removidas "Qualificação e proposta" (f1) e "Contrato e pagamento" (f2) do HTML.
Etapas renumeradas: f3→1, f4→2, f5→3, f6→4, f7→5, f8→6.
Ambas as verticais agora têm 6 etapas cada.

### 5. Seção Diferenciais (Como Funciona) — fundo navy
`section-alt` → `section-dark`. Adicionados ajustes em `processo.css`:
- `.diferencial-card`: fundo e borda semitransparentes
- `.diferencial-card__icon`, `.diferencial-card__title`, `.diferencial-card__desc`: cores para fundo escuro

### 6. Filtros do portfólio — grid wrap (sem scroll)
`overflow-x: auto` removido. `flex-wrap: wrap` adicionado. `flex-shrink: 0` removido dos botões.
Todos os filtros aparecem visíveis, quebrando linha quando necessário.

### 7. Cards do portfólio — clicáveis com página interna
**Antes:** Card era `<article>` com link interno no rodapé.
**Depois:** Card com `pageSlug` vira `<a href="/portfolio/[slug].html">` clicável inteiro. Card sem `pageSlug` fica como "Em breve" (`<article>`).
`CASES` agora usa `pageSlug: null` (todos placeholder por enquanto — Cristian preenche quando subir assets).

### 8. Template de página de case criado
`portfolio/_template.html` — estrutura completa com:
- Link "Voltar ao portfólio"
- Hero com meta (badge setor + idioma), título, tipo, tags, CTA "Visitar o site"
- Seção de imagem cover
- Seções "O desafio" e "O que entregamos"
- Placeholder para screenshots adicionais (comentado)
- CTA final + botão "Voltar ao portfólio"

`assets/css/pages/case.css` criado com estilos do template.

### 9. Chave `case.back` adicionada
`translations/pt.js`: `'case.back': 'Voltar ao portfólio'`
`translations/en.js`: `'case.back': 'Back to portfolio'`

## Como criar uma página de case

1. Copiar `portfolio/_template.html` para `portfolio/[slug].html`
2. Substituir todos os `[PLACEHOLDER]` com dados reais
3. Adicionar `pageSlug: '[slug]'` no objeto correspondente em `portfolio.js`
4. Fazer upload do print WebP para `assets/images/portfolio/[slug]-cover.webp`
