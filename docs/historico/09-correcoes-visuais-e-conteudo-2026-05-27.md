# 09 — Correções visuais e de conteúdo

**Data:** 2026-05-27

## O que foi alterado

### 1. Timeline — z-index dos números (processo.css)
- Adicionado `isolation: isolate` ao `.timeline` para criar stacking context
- `timeline::before` (linha) recebeu `z-index: 0` (base e dark)
- `timeline__number` (círculos) recebeu `z-index: 1` (base) e `z-index: 2` (dark)
- Em `section-dark`, o `.timeline__number` passou a ter `background-color: var(--color-primary)` — fundo sólido navy em vez de transparente, para que a linha vertical não apareça por trás dos círculos

### 2. Diferencial cards — fundo visível (processo.css)
- `.section-dark .diferencial-card` aumentado de `rgba(244,244,249,0.06)` para `rgba(244,244,249,0.10)` (fundo visível)
- Hover aumentado para `rgba(244,244,249,0.16)`
- Ícone aumentado para `rgba(244,244,249,0.15)`
- Borda aumentada para `rgba(244,244,249,0.18)`

### 3. Services grid — altura igual (home.css)
- Adicionado `align-items: stretch` ao `.services__grid` no breakpoint `min-width: 768px`
- Já existiam `flex: 1` em `.services__list` e `.service-item`

### 4. Portfolio case clicável — saude-01
- `pageSlug: null` → `pageSlug: 'saude-01'` no primeiro case do CASES array (portfolio.js)
- Criado `/portfolio/saude-01.html` com conteúdo placeholder real

### 5. Remoção de travessões (em-dash "—") da cópia visível
Arquivos alterados:
- `translations/pt.js` linhas 62 e 119: substituídos por vírgula e dois-pontos
- `translations/en.js` linhas 62 e 119: idem
- `portfolio.js` títulos dos 9 cases: `Nome — Cidade` → `Nome, Cidade`
- `processo.html` linha 112: conteúdo hardcoded sincronizado com tradução
- `portfolio.html` linha 98: conteúdo hardcoded sincronizado com tradução

Travessões em comentários de código (/* ── ... */), `<title>`, `aria-label`, `<meta>` e `og:title` foram mantidos por serem convencionais e invisíveis ao usuário final.

### 6. Footer do template e saude-01.html
- Logo corrigido de `logo-light.svg` para `logo-dark.svg`
