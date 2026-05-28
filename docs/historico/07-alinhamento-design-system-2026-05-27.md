# Alinhamento com design system — bio-magnus e lp-magnus

- **Data:** 2026-05-27
- **Autor:** Claude
- **Escopo:** CSS, HTML (acessibilidade)

## Contexto / Motivação

Cristian pediu verificação dos projetos `bio-magnus` e `lp-magnus` para garantir que o `site-portfolio` aplica o design system da Magnus Mídias com a mesma fidelidade.

## Projetos de referência analisados

- `/int-infra/bio-magnus` — `src/style.css`
- `/int-infra/lp-magnus` — `css/tokens.css` + `css/styles.css`

## Gaps identificados e corrigidos

### 1. Tipografia (`global.css`)
**Antes:** `h1`–`h4` sem a declaração agrupada `font-family: var(--font-display)` e sem `letter-spacing: -0.02em` unificado.
**Depois:** `h1, h2, h3, h4` agrupados com `font-family`, `letter-spacing: -0.02em` e `line-height: 1.1` — exatamente como nos projetos de referência.

### 2. `.container--narrow` (`global.css`)
**Antes:** Não existia.
**Depois:** Adicionado `max-width: 860px` (padrão do lp-magnus).

### 3. `.section-dark` (`global.css`)
**Antes:** Não existia — seções escuras usavam classes ad-hoc.
**Depois:** Classe `.section-dark` com `background-color: var(--color-primary)`, `color: var(--color-text-inverse)`, ajuste de `.eyebrow`, `h2`, `h3` e `:focus-visible` — igual ao lp-magnus.

### 4. `.section__header` e `.section-closer` (`global.css`)
**Antes:** `section__header` sem `max-width` e sem margem no `h2`.
**Depois:** `max-width: 820px` no header, `margin-top: var(--space-2)` no `h2` filho — como no lp-magnus. Adicionado `.section-closer` para textos de fechamento centrados.

### 5. `.prose` (`global.css`)
**Antes:** Não existia no global.
**Depois:** Adicionado com `gap`, `font-size: 1.0625rem`, `opacity: 0.8`, `line-height: 1.65` — padrão do lp-magnus.

### 6. Skip link (`global.css` + HTMLs)
**Antes:** Classe `.skip-link` não tinha CSS. HTML não tinha o elemento.
**Depois:** CSS com `position: absolute; top: -40px` e `:focus { top: 0.75rem }` idêntico ao lp-magnus. Elemento `<a class="skip-link">` adicionado nos 3 HTMLs.

### 7. Header semi-transparente (`components.css`)
**Antes:** `background-color: var(--color-bg)` (opaco).
**Depois:** `background-color: rgba(244, 244, 249, 0.85)` + `backdrop-filter: blur(12px)` + `transition` + `.is-hidden` — exatamente como no lp-magnus.

### 8. Social pills do footer (`components.css`)
**Antes:** `.footer__social-link` era um link simples com ícone e `opacity` no hover.
**Depois:** Pills de 40×40px com `border-radius: var(--radius-pill)`, `border: 1px solid rgba(244,244,249,0.2)`, hover com `opacity: 1`, `background-color rgba(244,244,249,0.08)`, `border-color rgba(244,244,249,0.35)` e `transform: translateY(-2px)` — idêntico ao `.social-pill` do lp-magnus.

## O que foi mantido diferente (intencional)

| Diferença | Motivo |
|-----------|--------|
| Hero alinhado à esquerda (não centralizado) | PRD especifica layout left-aligned para o mercado do site-portfolio |
| Breakpoints 768/1024px (lp-magnus usa 560/960px) | Padrão mais moderno; alinhado com o PRD |
| Sistema de espaçamento `--space-*` modular | Adição do site-portfolio, não conflita |
| `--color-text-muted`, `--color-border` nomeados | Tokens extras que não existem no bio/lp, mas seguem a mesma paleta |

## Impacto

CSS fundacional alinhado ao design system canônico da Magnus Mídias. Qualquer novo projeto Magnus pode derivar do `site-portfolio` com segurança.
