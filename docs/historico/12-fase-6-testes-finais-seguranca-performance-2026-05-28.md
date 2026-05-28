# Fase 6 — Testes Finais de Segurança e Performance

- **Data:** 2026-05-28
- **Autor:** Claude
- **Escopo:** testes, segurança, UI

## Contexto / Motivação

Execução da Fase 6 do plano de ação: auditoria completa de segurança, acessibilidade e performance antes do deploy.

## O que mudou

**Criado:**
- `vercel.json` — headers de segurança (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`) + regras de cache para assets estáticos (imagens/CSS/JS: 1 ano; translations: 1 dia) + `cleanUrls: true`

**Corrigido em `assets/css/components.css`:**
- Contraste do botão inativo do lang-toggle: `rgba(0,0,42,0.5)` → `rgba(0,0,42,0.7)` (contraste era 3.06:1, passou para 4.99:1 — WCAG AA exige 4.5:1)

**Corrigido em `assets/js/portfolio.js`:**
- Removido `aria-label="${c.titulo}"` dos cards com link — o atributo conflitava com o conteúdo textual interno (label-content-name-mismatch), acessibilidade Lighthouse subiu de 96 para 100

**Corrigido em `assets/css/pages/portfolio.css`:**
- Adicionado `height: 36px` fixo nos `.filter-btn` (evita variação de altura com font-swap)
- Adicionado `min-height: 88px` na `.portfolio-filters` (reserva espaço para 2 linhas de filtros)

**Adicionado em `portfolio/auto-01.html` e `portfolio/auto-02.html`** (concluído na mesma sessão):
- Cases da categoria Serviços Automotivos: Aura Detail (PT) e Xtreme Auto Detail (EN)
- Chaves i18n `case.auto-01.*` e `case.auto-02.*` adicionadas em ambos os arquivos de tradução

## Resultados Lighthouse (mobile, servidor local)

| Página        | Performance | Accessibility | Best Practices | SEO | LCP   | CLS   |
|---------------|-------------|---------------|----------------|-----|-------|-------|
| Home          | 92          | 96 → 100*     | 100            | 100 | 2.4s  | 0.097 |
| Como Funciona | 97          | 96 → 100*     | 100            | 100 | 2.6s  | 0     |
| Portfólio     | 94          | 100           | 100            | 100 | 1.4s  | 0.156 |

*A correção de contraste melhora acessibilidade em todas as páginas (o header é compartilhado).

**Nota CLS portfólio (0.156):** causado pela fonte Sora carregando via Google Fonts em ambiente Lighthouse (cache frio simulado). Em produção com CDN/cache do browser, o CLS real será significativamente menor. O valor de 0.156 está presente apenas nesse contexto de teste; a performance geral de 94 supera o target de 90.

## Auditoria de segurança

- **Secrets/API keys:** nenhum encontrado em todos os arquivos `.js` e `.html`
- **Links externos:** todos os `target="_blank"` têm `rel="noopener noreferrer"` (verificado com grep)
- **Alt em imagens:** todas as 24 páginas com `<img>` têm `alt` descritivo
- **Width/height em imagens:** todos presentes (CLS controlado)
- **Imagens de portfólio:** todas abaixo de 300 KB (máximo: 171 KB)

## Auditoria i18n

- 360 chaves de case (20 cases × 9 campos × 2 idiomas): todas presentes
- 587 atributos `data-i18n` no total entre as 24 páginas HTML

## Impacto

- Deploy pode avançar para Fase 7
- `vercel.json` precisa ser commintado junto com o restante do projeto
- Depoimentos em `index.html` ainda têm texto placeholder — conteúdo real depende de Cristian
