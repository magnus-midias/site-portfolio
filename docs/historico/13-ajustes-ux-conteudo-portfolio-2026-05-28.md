# 13 — Ajustes de UX, Conteúdo e Portfólio

- **Data:** 2026-05-28
- **Autor:** Claude
- **Escopo:** UX, conteúdo, portfólio, acessibilidade, i18n

---

## O que mudou

### i18n — Traduções novas

**`translations/pt.js` e `translations/en.js`:**
- Adicionadas 4 chaves faltantes para os novos serviços de Marketing:
  - `home.services.automacao.name` / `home.services.automacao.desc`
  - `home.services.estrategia.name` / `home.services.estrategia.desc`
- Adicionada chave `processo.cta.sub` (subtítulo do CTA da página processo)

---

### Carrossel de depoimentos — fix de gap

**`assets/css/pages/home.css`:**
- Adicionado `padding-right: var(--space-5)` em `.testimonials__strip`
- Corrige o gap assimétrico entre a última faixa e a primeira (o espaço entre cards era `gap`, mas entre faixas era zero)

---

### Página Processo — diferenciais

**`assets/css/pages/processo.css`:**
- Removido `background-color: rgba(244, 244, 249, 0.15)` de `.section-dark .diferencial-card__icon`
- Os ícones agora ficam diretamente sobre o fundo do card, sem caixa branca em volta

---

### Página Processo — CTA

**`processo.html`:**
- Seção CTA migrada de `.cta-section` (navy) para `.section` (fundo claro)
- Padrão de 3 botões aplicado: WhatsApp + Enviar e-mail + Ver portfólio
- Subtítulo adicionado com chave `processo.cta.sub`
- Motivo: sequência navy (Diferenciais → CTA → Footer) criava massa visual pesada sem respiro

---

### Portfólio — troca de cases

**Gastronomia EN (`food-02`):** Sexy Fish, Londres → **Lilia, Nova York**
- Screenshot novo capturado via shot-scraper (101 KB)
- HTML, traduções PT/EN e portfolio.js atualizados
- Lilia: restaurante italiano aclamado em Williamsburg, chef Missy Robbins, referência em NYC desde 2016

**Advocacia PT (`advoc-01`):** Aroeira Salles, Florianópolis → **LMorato Advogados, São Paulo**
- Screenshot novo capturado (51 KB)
- Escritório boutique de alta performance, 25 anos, Legal 500 / Leaders League / Análise Advocacia

**Advocacia EN (`advoc-02`):** WilmerHale, EUA → **Clintons, Londres**
- Screenshot novo capturado (96 KB)
- Boutique no West End, líder em entretenimento/mídia/criativas, identidade visual laranja bold

Motivo das trocas: WilmerHale (1.000+ advogados) e Sexy Fish eram grandes demais para o porte da Magnus.

---

### Acessibilidade — contraste btn-whatsapp

**`assets/css/components.css`:**
- `btn-whatsapp` background: `#25D366` → `#0E7A3F` (hover: `#0a6233`)
- Contraste era 1.98:1 (reprovado WCAG AA) → agora 5.42:1 (aprovado)
- O verde oficial do WhatsApp não passa 4.5:1 com texto branco; `#0E7A3F` é visualmente próximo e acessível

---

## Resultados Lighthouse após esta sessão

| Página        | Performance | Accessibility | SEO |
|---------------|-------------|---------------|-----|
| Home          | 100         | 100           | 100 |
| Como Funciona | 97          | 100           | 100 |
| Portfólio     | 94          | 100           | 100 |

---

## Verificações realizadas antes do commit

- ✅ Todas as chaves `data-i18n` têm correspondência em pt.js e en.js
- ✅ Todas as 20 imagens de portfólio existem e abaixo de 300 KB
- ✅ Nenhuma chave i18n faltando em nenhuma das páginas HTML ou cases
- ✅ Servidor local rodando sem erros
- ✅ Lighthouse 100/100/100 na Home após fix de contraste
