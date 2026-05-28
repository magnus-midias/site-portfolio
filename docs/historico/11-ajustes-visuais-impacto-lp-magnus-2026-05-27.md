# 11 — Ajustes visuais de alto impacto — espelhamento lp-magnus

**Data:** 2026-05-27

## Problema
As mudanças da sessão 10 alteraram tokens e valores numéricos mas não produziram mudança perceptível no visual, pois as diferenças eram sutis (line-height 1.1 vs 1.2, duração 0.2s vs 0.25s). As mudanças visualmente impactantes estavam na estrutura e layout dos componentes.

## O que foi alterado

### Hero (home.css + index.html)
- `hero__content` ganhou `margin-inline: auto` e `text-align: center`
- `hero__actions` ganhou `justify-content: center`
- Resultado: hero centralizado, igual ao lp-magnus

### Service items (home.css + index.html)
- Layout anterior: `display: grid; grid-template-columns: 40px 1fr` — ícone pequeno lateral + texto
- Layout novo: card flat com `padding: 1.75rem`, `border-radius: var(--radius-lg)` (24px)
- Ícone: `width: 36px; height: 36px; margin-bottom: 1.25rem` — ícone acima do texto, sem fundo cinza
- Nome: `font-size: 1.125rem` (era 0.9375rem)
- Desc: `font-size: 0.95rem; opacity: 0.7` (era 0.875rem com color-text-muted)
- HTML: removido o `<div>` wrapper interno em volta de nome+desc
- Gap entre cards: `1.5rem` (era var(--space-3) = 12px)
- Gap entre colunas: `2rem` (era var(--space-8) = 32px fixo)
- `services__vertical-title`: `font-size: 1.125rem; font-weight: 700`

### Diferencial cards (processo.css)
- `border-radius: var(--radius-lg)` (era radius-md = 12px)
- `padding: 2.5rem` (era var(--space-6) = 24px)
- Ícone: `width/height: 36px; margin-bottom: 1.5rem`, sem fundo e borda
- Título: `font-size: 1.25rem` (era 1rem)
- Desc: `font-size: 0.95rem; opacity: 0.7`

### Testimonial cards (home.css)
- `padding: 1.75rem` (era var(--space-6) = 24px)
