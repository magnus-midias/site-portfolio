# Design System — site-portfolio (Magnus Mídias)

Este documento é a **fonte única de verdade sobre a identidade visual da Magnus Mídias aplicada ao projeto `site-portfolio`**. A identidade Magnus é canônica e portátil entre projetos — o que varia de um projeto para outro é apenas a implementação.

Qualquer alteração com impacto visual deve ler este arquivo antes e atualizá-lo depois, se introduzir ou alterar um token.

> **Fonte de referência canônica da marca:** landing page da Magnus Mídias (`lp-magnus`) em `/Users/cristiandornelles/Documents/PROGRAMAÇÃO/COISAS MAGNUS/lp-magnus/` — `css/tokens.css`, `css/styles.css` e `index.html`.
>
> **Outros projetos que usam esta identidade:** `bio-magnus` (vanilla CSS, página de link-in-bio) e `biblioteca-cristian` (React + Tailwind + shadcn/ui, mesmos tokens em HSL).

---

## 1. Sobre a Marca

**Magnus Mídias** — consultoria de Tecnologia com IA e Marketing Estratégico para empresas que querem crescer com inteligência, não com mais esforço manual.

- **Posicionamento:** estrutura operação, implementa tecnologia e aplica IA onde ela gera resultado real. Foco em diagnóstico real, implementação prática e acompanhamento contínuo.
- **Tom de voz:** direto, sóbrio, anti-hype. Sem jargão desnecessário, sem "complexidade performática". Frases curtas, afirmativas, com contraste (ex.: "Não vendemos ferramenta. Não entregamos relatório.").
- **Público do site-portfolio:** dois grupos — empresários locais BR (não-tech, mobile-first, valorizam clareza e resultados tangíveis) e empreendedores internacionais (PT, ES, UK, IE) que chegam por LinkedIn ou indicação.
- **Personalidade visual:** navy profundo (quase preto) sobre off-white, tipografia `Sora` em todos os pesos, layout amplo, alto contraste em neutros frios, cantos generosos, zero poluição gráfica. Premium minimalista.
- **Aplicação no `site-portfolio`:** identidade canônica expandida para site multi-página com portfólio, toggle PT/EN, cards de cases e timeline de processos.

---

## 2. Tipografia

- **Fonte principal:** `Sora` (sans-serif, Google Fonts). Pesos: 300, 400, 500, 600, 700, 800.
- **Carregamento:** `<head>` via preconnect + `<link>` Google Fonts com `display=swap`.
- **Declaração CSS:** `--font-body` e `--font-display` ambas apontam para `Sora`, fallback `system-ui, -apple-system, sans-serif`.

### Hierarquia canônica Magnus

| Uso | Tamanho | Peso | Letter-spacing | Line-height | Observação |
|-----|---------|------|----------------|-------------|------------|
| H1 | `clamp(2.25rem, 5.5vw, 4.5rem)` | 800 | -0.02em | 1.1 | `max-width: 18ch` |
| H2 | `clamp(1.75rem, 3.4vw, 2.75rem)` | 700 | — | — | |
| H3 | `1.25rem` | 600 | — | — | |
| Eyebrow | `0.75rem` | 600 | 0.18em | — | `text-transform: uppercase`, `opacity: 0.7` |
| Body | `1rem` | 400 | — | — | |
| Prose | `1.0625rem` | 400 | — | 1.65 | `opacity: 0.8` |

### Aplicação neste projeto

| Elemento | Regra |
|----------|-------|
| Hero headline | H1 canônico (`clamp`, peso 800, letter-spacing -0.02em) |
| Headline de seção | H2 canônico |
| Subtítulo de vertical/fase | H3 (`1.25rem`, peso 600) |
| Eyebrow de seção | `0.75rem`, peso 600, `letter-spacing: 0.18em`, uppercase, `opacity: 0.7` |
| Body / descrições | `1rem`, peso 400 |
| Label de badge/tag | `0.75rem`, peso 600, `letter-spacing: 0.04em` |
| Footer | `0.875rem`, `opacity: 0.65`, `line-height: 1.55` |

---

## 3. Paleta de Cores

### 3.1 Cores de marca — referência canônica Magnus

| Nome | HEX | Uso |
|------|-----|-----|
| Navy profundo | `#00002B` | cor primária, texto principal, fundo escuro, focus ring |
| Off-white | `#F4F4F9` | fundo geral, texto inverso sobre navy |
| Preto | `#000000` | footer e pontos de contraste máximo |
| Navy hover | `#000014` | estado hover do botão primário |
| Alt surface | `#EAEAF2` | fundo de seção alternativa |

### 3.2 Tokens CSS para este projeto

Definidos como custom properties no `:root` de `assets/css/global.css`:

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-bg` | `#F4F4F9` | fundo da página (off-white Magnus) |
| `--color-surface` | `#FFFFFF` | fundo de cards, modais, elementos elevados |
| `--color-surface-alt` | `#EAEAF2` | fundo de seções alternadas |
| `--color-primary` | `#00002B` | texto, botões primários, bordas fortes (navy) |
| `--color-primary-hover` | `#000014` | hover do botão primário |
| `--color-black` | `#000000` | pontos de contraste máximo |
| `--color-text` | `#00002B` | texto padrão (= primary) |
| `--color-text-muted` | `rgba(0, 0, 43, 0.6)` | texto secundário, legendas |
| `--color-text-inverse` | `#F4F4F9` | texto sobre fundo navy |
| `--color-border` | `rgba(0, 0, 42, 0.08)` | bordas suaves (padrão Magnus) |
| `--color-border-strong` | `rgba(0, 0, 42, 0.15)` | bordas em contextos de mais contraste |

### 3.3 Paleta Navy — escala completa (para gradientes e profundidade)

| Token | Valor (HSL) | Uso |
|-------|-------------|-----|
| `--navy-dark` | `hsl(240 100% 6%)` | pontos mais escuros / preto de marca |
| `--navy-base` | `hsl(240 100% 8%)` | navy base (≈ `#00002B`) |
| `--navy-mid` | `hsl(240 100% 10%)` | — |
| `--navy-light` | `hsl(240 100% 12%)` | — |
| `--navy-lighter` | `hsl(240 100% 14%)` | — |
| `--silver` | `hsl(240 20% 93%)` | acento claro |

### 3.4 Gradientes

O site-portfolio pode usar gradientes sutis no hero e em seções de destaque:

- **Hero background:** linear vertical off-white → `#EAEAF2` (suave, apenas para profundidade).
- **Botão gradiente (se aplicável):** `linear-gradient` de accent ao primary.
- **Radial em seções escuras:** `radial-gradient(ellipse at center, hsl(240 100% 8%) 0%, #000000 100%)`.

---

## 4. Border Radius e Espaçamentos

### Border Radius — escala canônica Magnus: 6 / 12 / 24 px

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | `6px` | micro-componentes, badges, tags |
| `--radius-md` | `12px` | botões, cards de case, inputs |
| `--radius-lg` | `24px` | blocos hero, seções de CTA, cards grandes |
| `--radius-pill` | `999px` | botão pill canônico, ícones sociais, filtros de setor |

**Regra de uso:** badges/tags → `--radius-sm`. Botões e cards normais → `--radius-md`. Blocos amplos → `--radius-lg`. Filtros de setor em formato pill → `--radius-pill`.

### Espaçamentos

Escala baseada em múltiplos de 4px:

| Token | Valor | Uso típico |
|-------|-------|------------|
| `--space-1` | `4px` | gap mínimo, padding de badge |
| `--space-2` | `8px` | padding interno de tags |
| `--space-3` | `12px` | gap entre elementos próximos |
| `--space-4` | `16px` | padding mobile de botões |
| `--space-5` | `20px` | padding padrão de botões |
| `--space-6` | `24px` | gap de grid, padding interno de cards |
| `--space-8` | `32px` | gap entre seções menores |
| `--space-10` | `40px` | padding de seção em mobile |
| `--space-12` | `48px` | padding de seção em tablet |
| `--space-16` | `64px` | padding de seção em desktop |
| `--space-20` | `80px` | espaçamento entre blocos grandes |

---

## 5. Componentes e Padrões de UX/UI

### 5.1 Header

- Fixo no topo (`position: sticky` ou `fixed`), fundo `--color-bg` com `backdrop-filter: blur` leve.
- Logo (esquerda) + navegação (centro/direita) + toggle PT|EN (extrema direita).
- Navegação mobile: menu hamburguer — painel lateral ou dropdown.
- Borda inferior: `1px solid var(--color-border)`.
- Altura: ~64px desktop / ~56px mobile.

### 5.2 Botão Primário (`btn-primary`)

| Propriedade | Valor |
|-------------|-------|
| Background | `var(--color-primary)` |
| Color | `var(--color-text-inverse)` |
| Border radius | `var(--radius-pill)` (`999px`) |
| Padding | `1rem 1.875rem` |
| Font | `Sora` 600, `letter-spacing: -0.01em` |
| Hover | `translateY(-1px)` + background `var(--color-primary-hover)` |
| Transition | `0.25s var(--ease)` |

### 5.3 Botão Ghost (`btn-ghost`)

| Propriedade | Valor |
|-------------|-------|
| Background | `transparent` |
| Border | `1px solid var(--color-primary)` |
| Color | `var(--color-primary)` |
| Border radius | `var(--radius-pill)` |
| Hover | background `var(--color-primary)`, color `var(--color-text-inverse)` |

### 5.4 Card de Case (portfólio)

| Propriedade | Valor |
|-------------|-------|
| Background | `var(--color-surface)` |
| Border | `1px solid var(--color-border)` |
| Border radius | `var(--radius-md)` (12px) |
| Padding | `0` (imagem sangra até a borda) |
| Hover | `translateY(-4px)` + `box-shadow: 0 20px 40px -20px rgba(0, 0, 42, 0.15)` |
| Transition | `0.25s var(--ease)` |
| Overflow | `hidden` (para a imagem respeitar o border-radius) |

### 5.5 Badge / Tag

| Tipo | Border radius | Padding | Font |
|------|---------------|---------|------|
| Badge de setor | `var(--radius-sm)` (6px) | `4px 8px` | `0.7rem`, peso 600 |
| Badge de idioma (PT/EN) | `var(--radius-sm)` | `4px 8px` | `0.7rem`, peso 700 |
| Tag de serviço | `var(--radius-pill)` | `4px 10px` | `0.72rem`, peso 500 |

### 5.6 Filtro de Setor (portfólio)

- Botões pill (`var(--radius-pill)`), borda `var(--color-border-strong)`.
- Estado ativo: background `var(--color-primary)`, texto `var(--color-text-inverse)`.
- Estado inativo: background transparente ou `var(--color-surface)`.
- Scroll horizontal em mobile sem scrollbar visível.

### 5.7 Timeline de Processo

- Numeração: círculo 40×40px, fundo `var(--color-primary)`, texto `var(--color-text-inverse)`, peso 700.
- Linha conectora: `2px solid var(--color-border)`.
- Layout: horizontal em desktop (flex row), vertical em mobile (flex column).

### 5.8 Card de Depoimento

- Foto circular (`border-radius: 50%`, 64×64px).
- Background `var(--color-surface)`, borda `var(--color-border)`, `--radius-md`.
- Texto com `opacity: 0.8`, `line-height: 1.65`.
- Carrossel com swipe em mobile (via scroll snap ou JS puro), grid em desktop.

### 5.9 Toggle de Idioma

- Dois botões lado a lado: `PT` | `EN`.
- Estado ativo: background `var(--color-primary)`, texto `var(--color-text-inverse)`, `--radius-sm`.
- Estado inativo: texto `var(--color-text-muted)`.
- Separador: barra vertical sutil entre os dois.

### 5.10 Referências canônicas adicionais

- **Card canônico (landing):** fundo `--color-bg`, borda `rgba(0,0,42,0.08)`, `--radius-md`, padding `1.75rem`, hover `translateY(-4px)` + sombra.
- **Botão `btn-light`:** fundo off-white, texto navy.
- **Social pill:** 44×44px, `border-radius: 999px`, borda `rgba(0,0,42,0.15)`, ícone SVG 18×18 `stroke: currentColor`.

---

## 6. Animações

- **Curva de easing padrão da marca:** `cubic-bezier(0.16, 1, 0.3, 1)` — ease-out acentuado, sensação premium. Exposta como `var(--ease)` em `assets/css/global.css`.
- **Padrão de hover:** translação vertical pequena (`-2px` a `-4px`) + sombra projetada abaixo (`0 20px 40px -20px rgba(0,0,42,0.X)`). Nunca bounce, nunca spring.
- **Durações:**
  - Hover rápido (botões, socials): `0.2s`
  - Hover standard (cards): `0.25s`
  - Entrada de seção (fade-in-up): `0.6s` com stagger de `0.1s` entre elementos
- **CSS transitions apenas** — sem GSAP ou bibliotecas de animação.
- **Entrada animada de seções:** `opacity: 0 → 1` + `translateY(20px → 0)`, acionada via `IntersectionObserver` no `main.js`.

---

## 7. Assets

### 7.1 Logos — `docs/design-system/logos/`

- `logo-dark.svg` — logo em navy `#00002B` para uso sobre fundos claros (off-white, branco). ✅ Presente
- `logo-light.svg` — logo em off-white `#F4F4F9` para uso sobre fundos escuros (navy, preto). ✅ Presente

**Regra de uso:** fundo claro → `logo-dark.svg`. Fundo navy/preto → `logo-light.svg`.

**Uso no projeto:** header usa `logo-dark.svg` (fundo off-white). Footer escuro (se houver) usa `logo-light.svg`.

**Promoção para o app:** ao iniciar o desenvolvimento, copiar para `assets/images/logo/` e referenciar no HTML.

### 7.2 Favicon — `docs/design-system/favicon/`

- `favicon.svg` — favicon vetorial (letterform da logo em proporção quadrada). ✅ Presente

**Débito conhecido:** falta `.ico` de fallback para browsers legados e `apple-touch-icon.png`. Produzir na fase de polimento/deploy.

**Promoção para o app:** copiar para `assets/images/` e referenciar em todos os `.html` via `<link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />`.

### 7.3 Ícones — `docs/design-system/icones/`

A Magnus ainda não tem iconografia proprietária além da letterform da logo. Pasta existe como reserva estrutural.

**Iconografia funcional:** SVGs inline no HTML, estilo Feather — `viewBox="0 0 24 24"`, `stroke: currentColor`, `stroke-width: 2`, `stroke-linecap: round`, `stroke-linejoin: round`. Usar este padrão em todos os ícones funcionais do site (serviços, diferenciais, navegação, cards).

### 7.4 Imagens de conteúdo — `assets/images/` (a criar no projeto)

| Pasta | Conteúdo | Formato | Limite |
|-------|----------|---------|--------|
| `assets/images/logo/` | logo-dark.svg, logo-light.svg, favicon.svg | SVG | — |
| `assets/images/portfolio/` | prints dos cases | WebP | 300 KB por imagem |
| `assets/images/depoimentos/` | fotos dos clientes | WebP | 100 KB por foto |

**Regra:** toda imagem de conteúdo deve ser otimizada e convertida para WebP antes de entrar no repositório. Dimensões mínimas: portfolio 1280×800px, depoimentos 400×400px.

---

## 8. Referências Cruzadas

- Implementação dos tokens e estilos: `assets/css/global.css` e `assets/css/components.css`.
- Dados dos cases do portfólio: `assets/js/portfolio.js`.
- Toggle de idioma: `assets/js/i18n.js` + `translations/pt.js` + `translations/en.js`.
- Assets servidos em produção: `assets/images/`.
- Identidade canônica (consulta profunda): `lp-magnus` em `/Users/cristiandornelles/Documents/PROGRAMAÇÃO/COISAS MAGNUS/lp-magnus/` — `css/tokens.css`, `css/styles.css`, `index.html`.
- Implementação vanilla de referência: `bio-magnus` em `/Users/cristiandornelles/Documents/PROGRAMAÇÃO/COISAS MAGNUS/int-infra/bio-magnus/` — `src/style.css`, `index.html`.
