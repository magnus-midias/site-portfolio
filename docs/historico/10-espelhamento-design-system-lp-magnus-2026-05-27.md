# 10 — Espelhamento completo do design system do lp-magnus

**Data:** 2026-05-27  
**Referência:** `/int-infra/lp-magnus`

## O que foi alterado

### global.css
- **Section padding:** `40px / 64px` (fixo) → `clamp(4rem, 8vw, 8rem)` (fluido, igual ao `--section-py` do lp-magnus)
- **Hero padding:** `64px / 80px` (fixo) → `clamp(5rem, 10vw, 9rem)` (fluido)
- **Container padding:** breakpoints escalonados → `clamp(1rem, 4vw, 2rem)` (fluido, único)
- **h2 line-height:** `1.2` removido → herda `1.1` do seletor agrupado `h1,h2,h3`
- **h3 line-height:** `1.3` removido → herda `1.1`
- **Eyebrow:** adicionados `display: inline-block`, `color: var(--color-primary)`, `margin-bottom: 1rem`
- **section__header margin-bottom:** escalonado (32px/48px) → `3rem` fixo
- **prose margin-top:** `var(--space-5)` → `2rem`

### components.css
- **Header border:** `var(--color-border)` → `rgba(0, 0, 42, 0.08)` (valor literal, igual ao lp-magnus)
- **lang-toggle border:** `var(--color-border)` → `rgba(0, 0, 42, 0.08)`
- **btn base:** `font-size: 0.9375rem` → `0.95rem`; `letter-spacing: -0.01em` removido; transições: `0.25s` → `0.2s`; `border: none` adicionado
- **btn-primary:** `border: 2px solid` removido
- **btn-ghost:** `border: 2px solid` → `border: 1px solid`
- **btn-light:** `border: 2px solid` removido; hover `var(--color-surface-alt)` → `#ffffff`
- **btn-whatsapp:** `border: 2px solid` removido

### home.css
- **hero__subheadline:** `font-size: 1.125rem` → `clamp(1.05rem, 1.6vw, 1.25rem)`; `color: var(--color-text-muted)` → `opacity: 0.75`
- **service-item border:** `var(--color-border)` → `rgba(0, 0, 42, 0.08)`
- **service-item hover:** `translateY(-2px)` → `translateY(-4px)`; shadow mais forte: `0 20px 40px -20px rgba(0,0,42,0.15)`; transição `0.25s` → `0.2s`
- **testimonial-card border:** `var(--color-border)` → `rgba(0, 0, 42, 0.08)`

### processo.css
- **diferencial-card border:** `var(--color-border)` → `rgba(0, 0, 42, 0.08)`
- **diferencial-card hover:** `translateY(-3px)` → `translateY(-4px)`; shadow mais forte; transição `0.25s` → `0.2s`

### portfolio.css
- **case-card border:** `var(--color-border)` → `rgba(0, 0, 42, 0.08)`; transição `0.25s` → `0.2s`
- **filter-btn border:** `var(--color-border-strong)` → `rgba(0, 0, 42, 0.15)`

### case.css
- **case-cover__img border:** `var(--color-border)` → `rgba(0, 0, 42, 0.08)`

### main.js
- **initHeaderAutoHide()** adicionada: auto-hide com `requestAnimationFrame`, threshold 80px de scroll + delta de 4px, usando a classe `.is-hidden` já existente no CSS

## O que foi mantido diferente (decisões conscientes)
- Footer **light** (fundo `var(--color-bg)`) em vez de black — pedido explícito do Cristian na sessão anterior
- Carregamento de fonte **non-blocking** (`media="print" onload`) em vez de blocking — melhor para performance
- **IntersectionObserver** mantido — o lp-magnus não tem, mas o site-portfolio tem e é uma melhoria
- `--color-border` e `--color-border-strong` **mantidos como tokens** — o lp-magnus não os tokeniza, mas aqui são úteis
