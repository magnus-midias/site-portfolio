# Plano de Ação — site-portfolio

**Iniciativa:** Desenvolvimento completo do site de portfólio e apresentação comercial da Magnus Mídias
**Versão:** 1.0
**Data:** 2026-05-26
**Status:** ✅ CONCLUÍDO — 2026-05-28 — https://portfolio.magnusmidias.com

> **Regra do plano:** uma fase só começa quando a anterior está 100% concluída (todos os itens marcados). Ao concluir uma fase, marcar como `✅ CONCLUÍDA` no cabeçalho dela e criar o registro correspondente em `docs/historico/`.

---

## Visão geral das fases

| # | Fase | Tipo | Status |
|---|------|------|--------|
| 1 | Estrutura base | Construção | ✅ Concluída — 2026-05-26 |
| 2 | Home | Construção | ✅ Concluída — 2026-05-26 |
| 3 | Como Funciona | Construção | ✅ Concluída — 2026-05-26 |
| 4 | Portfólio | Construção | ✅ Concluída — 2026-05-26 |
| T | Testes intermediários | Testes | ✅ Concluída — 2026-05-26 |
| 5 | Conteúdo real | Conteúdo | ✅ Concluída — 2026-05-27 (parcial: depoimentos e cases aguardam assets de Cristian) |
| 6 | Testes finais de segurança e performance | Testes | ✅ Concluída — 2026-05-28 |
| 7 | Deploy e go-live | Infra | ✅ Concluída — 2026-05-28 |

---

## Fase 1 — Estrutura Base ✅ CONCLUÍDA — 2026-05-26

**Objetivo:** Ter o esqueleto do projeto funcionando localmente — arquivos criados, tokens CSS ativos, header e footer renderizando, e o sistema de i18n alternando PT↔EN em pelo menos um elemento de teste.

**Status:** ✅ Concluída

### Checklist

**Repositório e arquivos**
- [ ] Criar repositório GitHub `site-portfolio` (ou confirmar nome com Cristian)
- [ ] Criar os 3 arquivos HTML na raiz: `index.html`, `processo.html`, `portfolio.html`
- [ ] Criar estrutura de pastas: `assets/css/pages/`, `assets/js/`, `assets/images/logo/`, `assets/images/portfolio/`, `assets/images/depoimentos/`, `assets/fonts/`, `translations/`
- [ ] Criar `README.md` na raiz com: descrição, stack, como rodar, scripts, estrutura de pastas e regra de ouro do histórico
- [ ] Copiar `logo-dark.svg`, `logo-light.svg` e `favicon.svg` de `docs/design-system/` para `assets/images/logo/`
- [ ] Criar `.gitignore` adequado (node_modules, .DS_Store, etc.)

**CSS global (`assets/css/global.css`)**
- [ ] Reset CSS (box-sizing, margin, padding, list-style)
- [ ] Todas as custom properties do design system declaradas no `:root`:
  - Cores: `--color-bg`, `--color-surface`, `--color-surface-alt`, `--color-primary`, `--color-primary-hover`, `--color-text`, `--color-text-muted`, `--color-text-inverse`, `--color-border`, `--color-border-strong`
  - Tipografia: `--font-body`, `--font-display` (ambas `Sora`)
  - Border radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`
  - Easing: `--ease` (`cubic-bezier(0.16, 1, 0.3, 1)`)
  - Espaçamentos: `--space-1` a `--space-20`
- [ ] Carregamento da fonte `Sora` via Google Fonts (preconnect + link com `display=swap`)
- [ ] Estilos base de tipografia: hierarquia h1→h6, body, eyebrow
- [ ] Classes utilitárias mínimas: `.container` (max-width + padding horizontal), `.visually-hidden`

**CSS de componentes (`assets/css/components.css`)**
- [ ] Header: sticky, altura, logo, nav links, toggle PT|EN, menu hamburguer (mobile)
- [ ] Footer: estrutura, links, copyright
- [ ] `.btn-primary`, `.btn-ghost` com todos os estados (hover, focus, active)
- [ ] Estilos base do carrossel (estrutura; conteúdo vem na Fase 2)

**Header e Footer (HTML compartilhado via JS ou duplicado nos 3 HTMLs)**
- [ ] Decidir e implementar estratégia de componentes compartilhados: include via JS (`fetch` de partials) ou duplicar o markup nos 3 arquivos — registrar decisão no PRD seção 14
- [ ] Header renderizando com logo, nav funcional entre as 3 páginas, toggle PT|EN visível
- [ ] Footer renderizando com conteúdo placeholder
- [ ] Menu hamburguer abrindo/fechando em mobile

**Sistema de i18n (`assets/js/i18n.js` + `translations/pt.js` + `translations/en.js`)**
- [ ] Estrutura dos arquivos de tradução definida (objeto JS com chaves aninhadas)
- [ ] Função `setLanguage(lang)` implementada — atualiza todos os elementos `[data-i18n]`
- [ ] Toggle PT|EN no header chamando `setLanguage` e salvando preferência em `localStorage`
- [ ] Ao carregar a página, ler `localStorage` e aplicar idioma salvo (fallback: `'pt'`)
- [ ] Pelo menos 3 elementos com `data-i18n` no header/footer alternando corretamente para validar o sistema

**`assets/js/main.js`**
- [ ] Inicialização do i18n
- [ ] `IntersectionObserver` configurado para fade-in-up de seções (classe `.animate-on-scroll`)
- [ ] Chamar inicialização do hamburguer

### Critério de conclusão

> O site abre em servidor local nas 3 URLs (`/`, `/processo`, `/portfolio`), o header com logo e navegação aparece em todas, o footer aparece em todas, o toggle PT|EN alterna textos corretamente em pelo menos o header, e o menu hamburguer abre/fecha em mobile (375px).

---

## Fase 2 — Home ✅ CONCLUÍDA — 2026-05-26

**Objetivo:** Página `index.html` completa com todos os blocos em PT-BR e EN, layout responsivo, depoimentos com dados placeholder e CTA funcional.

**Status:** ✅ Concluída

### Checklist

**CSS (`assets/css/pages/home.css`)**
- [ ] Estilos do Hero (layout, fundo, tipografia do headline/subheadline)
- [ ] Estilos do bloco "O Que Entregamos" (grid 2 col desktop / 1 col mobile, cards de serviço)
- [ ] Estilos dos cards de depoimento (foto circular, layout do card)
- [ ] Estilos do carrossel de depoimentos (scroll snap mobile, grid desktop)
- [ ] Estilos do bloco CTA final

**Bloco 1 — Hero**
- [ ] Markup semântico: `<section>`, headline `<h1 data-i18n>`, subheadline `<p data-i18n>`
- [ ] Botão WhatsApp com link `https://wa.me/` + número + mensagem pré-preenchida (placeholder até Cristian fornecer o número)
- [ ] Botão secundário linkando para `/portfolio`
- [ ] Background com gradiente sutil (tokens do design system)
- [ ] Textos em PT e EN nas translations
- [ ] Imagens do hero sem `loading="lazy"` (above the fold)

**Bloco 2 — O Que Entregamos**
- [ ] Markup das duas verticais com título de seção, cards de serviço (ícone SVG inline + nome + descrição)
- [ ] 4 serviços da vertical Marketing e 6 da vertical Tech
- [ ] Todos os textos com `data-i18n` e chaves nas translations PT e EN
- [ ] Grid responsivo (2 col desktop, 1 col mobile)

**Bloco 3 — Depoimentos**
- [ ] Estrutura HTML dos cards com dados placeholder (foto genérica, nome fictício, texto placeholder)
- [ ] Carrossel mobile funcional via scroll snap CSS (sem JS obrigatório nesta fase)
- [ ] Grid desktop (2 ou 3 colunas)
- [ ] Estrutura de dados de depoimentos no arquivo de translations (PT e EN separados) — placeholder, conteúdo real vem na Fase 5

**Bloco 4 — CTA Final**
- [ ] Markup com texto `data-i18n` e botão WhatsApp
- [ ] Layout responsivo

**Validação da página Home**
- [ ] Abre sem erros no console
- [ ] Toggle de idioma alterna todos os textos da página
- [ ] Responsiva em 375px, 768px e 1280px
- [ ] Botão WhatsApp abre no destino correto (mesmo com placeholder de número)

### Critério de conclusão

> `index.html` renderiza todos os 4 blocos corretamente, toggle PT↔EN funciona em 100% dos textos da página, layout responsivo sem quebras nos 3 breakpoints, sem erros no console.

---

## Fase 3 — Como Funciona ✅ CONCLUÍDA — 2026-05-26

**Objetivo:** Página `processo.html` completa com as timelines das duas verticais, diferenciais e CTA, responsiva e com i18n.

**Status:** ✅ Concluída

### Checklist

**CSS (`assets/css/pages/processo.css`)**
- [ ] Estilos da timeline horizontal (desktop) e vertical (mobile)
- [ ] Numeração circular (40×40px, fundo navy, texto off-white)
- [ ] Linha conectora entre fases
- [ ] Cards/blocos de fase
- [ ] Grid de diferenciais (ícone + título + descrição)

**Bloco 1 — Introdução**
- [ ] Markup com headline `<h1 data-i18n>` e 2 parágrafos `data-i18n`
- [ ] Chaves nas translations PT e EN

**Bloco 2 — Vertical Marketing / Tráfego Pago**
- [ ] Título e descrição da vertical com `data-i18n`
- [ ] 6 fases em markup de timeline (número + nome + descrição)
- [ ] Todos os textos com `data-i18n`
- [ ] Layout horizontal no desktop, vertical no mobile

**Bloco 3 — Vertical Tech / Desenvolvimento**
- [ ] Título e descrição da vertical com `data-i18n`
- [ ] 8 fases em markup de timeline
- [ ] Todos os textos com `data-i18n`
- [ ] Layout horizontal no desktop, vertical no mobile

**Bloco 4 — Diferenciais**
- [ ] 4 diferenciais (ícone SVG inline + título + descrição) com `data-i18n`

**Bloco 5 — CTA**
- [ ] Texto `data-i18n` + botão WhatsApp

**Validação**
- [ ] Abre sem erros no console
- [ ] Toggle alterna todos os textos
- [ ] Responsiva em 375px, 768px e 1280px

### Critério de conclusão

> `processo.html` renderiza os 5 blocos corretamente, timelines visualmente distintas nas versões mobile e desktop, toggle PT↔EN funciona em 100% dos textos, sem erros no console.

---

## Fase 4 — Portfólio ✅ CONCLUÍDA — 2026-05-26

**Objetivo:** Página `portfolio.html` com grid de cases, filtro por setor funcional e os 3 estados de card (com link, sem link, "em breve").

**Status:** ✅ Concluída

### Checklist

**CSS (`assets/css/pages/portfolio.css`)**
- [ ] Grid de cards (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Card de case: imagem, badges, título, tipo, tags de serviço, botão "Ver projeto"
- [ ] Estado "sem link": card sem botão, cursor padrão
- [ ] Estado "em breve": overlay ou estilo visual diferenciado, sem interação
- [ ] Barra de filtros pill com scroll horizontal mobile
- [ ] Hover do card (translateY + sombra)

**`assets/js/portfolio.js`**
- [ ] Array `cases` com pelo menos 9 objetos placeholder (1 por setor), cada um com: `id`, `setor`, `idioma`, `titulo`, `tipo`, `servicos`, `print`, `link`
- [ ] Função `renderCases(filtro)` que monta os cards no DOM dinamicamente
- [ ] Função `initFilters()` que ativa/desativa filtros e chama `renderCases`
- [ ] Integração com i18n: labels dos filtros e textos dos cards com `data-i18n` onde aplicável
- [ ] Estado "em breve": casos com `link: 'soon'` recebem classe visual diferente

**Bloco 1 — Introdução**
- [ ] Markup com headline `<h1 data-i18n>` e parágrafo `data-i18n`

**Bloco 2 — Filtro de Setores**
- [ ] 10 botões (Todos + 9 setores) com `data-filter` attribute
- [ ] "Todos" ativo por padrão (classe `.active`)
- [ ] Labels dos filtros com `data-i18n` nas translations PT e EN
- [ ] Scroll horizontal em mobile sem scrollbar visível

**Bloco 3 — Grid de Cases**
- [ ] Container `<div id="portfolio-grid">` onde os cards são injetados via JS
- [ ] Cards com imagens placeholder (pode usar `assets/images/portfolio/placeholder.webp` ou CSS genérico)
- [ ] Botão "Ver projeto" com `target="_blank" rel="noopener noreferrer"` — só aparece quando `link` não é null nem 'soon'

**Validação**
- [ ] Filtro mostra/oculta cards corretamente para cada setor
- [ ] Filtro "Todos" mostra todos os cards
- [ ] Estado "em breve" visualmente distinto e não clicável
- [ ] Toggle de idioma alterna labels dos filtros e textos dos cards
- [ ] Responsivo nos 3 breakpoints sem overflow horizontal
- [ ] Sem erros no console

### Critério de conclusão

> `portfolio.html` renderiza o grid com pelo menos 9 cards (1 por setor), filtro funciona corretamente para todos os setores, os 3 estados de card estão visualmente distintos, toggle PT↔EN funciona, sem erros no console.

---

## Fase T — Testes Intermediários

**Objetivo:** Validar o funcionamento cruzado de todo o site antes de inserir conteúdo real. Encontrar e corrigir todos os bugs de i18n, responsividade, navegação e interação.

**Status:** ⬜ Não iniciada
**Pré-requisito:** Fases 1, 2, 3 e 4 concluídas.

### Checklist

**i18n — sistema de tradução**
- [ ] Alternar PT→EN→PT em cada página sem perder estado
- [ ] Preferência de idioma persiste ao navegar entre as 3 páginas (localStorage)
- [ ] Nenhuma chave `data-i18n` faltando (verificar console por warnings)
- [ ] Nenhum texto hardcoded que deveria estar nas translations
- [ ] Depoimentos alternam entre versão PT e EN corretamente

**Navegação e header**
- [ ] Links do header funcionam em todas as 3 páginas
- [ ] Página ativa tem destaque visual no nav
- [ ] Menu hamburguer abre, fecha, e fecha ao clicar em um link
- [ ] Logo clicável leva para `/`

**Responsividade**
- [ ] 375px (iPhone SE): nenhum overflow horizontal em nenhuma página
- [ ] 768px (tablet): layout intermediário correto
- [ ] 1280px (desktop): layout completo sem elementos esticados
- [ ] Filtros do portfólio scrollam horizontalmente em mobile sem quebrar o layout
- [ ] Timelines alternam horizontal↔vertical conforme breakpoint

**Portfólio**
- [ ] Filtro funciona para cada um dos 9 setores individualmente
- [ ] Filtro "Todos" volta a exibir todos os cards
- [ ] Cards "em breve" não são clicáveis
- [ ] Cards sem link não exibem botão "Ver projeto"
- [ ] Links externos abrem em nova aba com `rel="noopener noreferrer"`

**Performance inicial (com placeholders)**
- [ ] Rodar Lighthouse em mobile para cada página — anotar scores de referência
- [ ] Nenhum erro ou warning crítico no console em nenhuma página
- [ ] Imagens placeholder com `loading="lazy"` e dimensões explícitas

**Acessibilidade básica**
- [ ] Todas as imagens com `alt` (mesmo as placeholder)
- [ ] Botões sem texto têm `aria-label`
- [ ] Contraste de texto ≥ WCAG AA em todas as combinações de cor

### Critério de conclusão

> As 3 páginas funcionam sem erros de console, i18n funciona 100% em todas as páginas, nenhum overflow horizontal em mobile, Lighthouse performance ≥ 70 com placeholders (os 90 definitivos vêm após otimização de imagens reais na Fase 6).

---

## Fase 5 — Conteúdo Real ✅ CONCLUÍDA — 2026-05-27 (parcial)

**Objetivo:** Substituir todos os placeholders por conteúdo real fornecido por Cristian. Otimizar todas as imagens para WebP.

**Status:** ✅ Concluída (parcial — depoimentos e cases aguardam assets de Cristian)
**Pré-requisito:** Fase T concluída. Todo o conteúdo da seção 11 do PRD deve estar disponível.

### Checklist

**Identidade visual**
- [ ] Confirmar que os SVGs de logo já em uso são os definitivos (ou substituir)
- [ ] Confirmar cores e fontes (já definidas no design system — validar com Cristian)

**Textos**
- [ ] Preencher `translations/pt.js` com todas as copys definitivas em PT-BR
- [ ] Preencher `translations/en.js` com todas as copys definitivas em EN
- [ ] Copys obrigatórias: headline + subheadline do hero, descrições dos serviços, textos das fases de processo, diferenciais, CTAs
- [ ] Número WhatsApp definitivo + mensagem pré-preenchida contextual (PT e EN)

**Depoimentos**
- [ ] Substituir fotos placeholder pelas fotos reais dos clientes (otimizadas, WebP, ~100 KB)
- [ ] Preencher nome, cargo e empresa de cada depoimento nas translations
- [ ] Preencher texto dos depoimentos em PT e EN nas translations
- [ ] Mínimo 3 depoimentos ativos

**Portfólio**
- [ ] Otimizar todas as imagens de cases para WebP (máx 300 KB, mín 1280×800px) com `squoosh`, `cwebp` ou equivalente
- [ ] Fazer upload dos WebPs para `assets/images/portfolio/`
- [ ] Preencher array `cases` em `portfolio.js` com dados reais (mínimo 1 por setor, meta 18 cases)
- [ ] Confirmar links ao vivo de cada case
- [ ] Confirmar cases "em breve" (se houver)
- [ ] Verificar que todos os links externos usam `target="_blank" rel="noopener noreferrer"`

**Domínio e configuração**
- [ ] Confirmar domínio com Cristian (magnusmidias.com.br ou .com?)
- [ ] Criar `vercel.json` com headers de segurança (ver Fase 7)

### Critério de conclusão

> Nenhum texto placeholder visível em nenhum idioma. Todas as imagens de cases e depoimentos são reais, otimizadas e em WebP. Número de WhatsApp correto nos CTAs. Array `cases` com dados reais de pelo menos 9 cases (1 por setor).

---

## Fase 6 — Testes Finais de Segurança e Performance ✅ CONCLUÍDA — 2026-05-28

**Objetivo:** Garantir que o site está pronto para produção — performance, segurança, acessibilidade e compatibilidade validadas.

**Status:** ✅ Concluída
**Pré-requisito:** Fase 5 concluída.

### Checklist

**Performance**
- [ ] Lighthouse Performance ≥ 90 em mobile em cada uma das 3 páginas
- [ ] LCP < 2,5s em cada página (mobile)
- [ ] FCP < 1,5s em cada página (mobile)
- [ ] CLS < 0,1 (sem layout shift — todas as imagens com width + height explícitos)
- [ ] Nenhuma imagem de portfólio acima de 300 KB
- [ ] Nenhuma imagem de depoimento acima de 100 KB
- [ ] Fontes com `font-display: swap` confirmado
- [ ] Hero images sem `loading="lazy"`, restantes com `loading="lazy"`
- [ ] CSS e JS minificados (ou verificar se a Vercel minifica automaticamente no build — registrar decisão)

**Segurança**
- [ ] Nenhum secret, API key ou token no repositório (revisar todos os arquivos)
- [ ] Todos os links externos com `rel="noopener noreferrer"` e `target="_blank"` — varredura completa
- [ ] `vercel.json` com headers de segurança: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection: 1; mode=block`, `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] Número de WhatsApp e mensagem pré-preenchida não expõem dados sensíveis
- [ ] Se houver formulário: confirmar que o embed externo (Tally/Typeform) não carrega scripts desnecessários

**Acessibilidade**
- [ ] Todas as imagens com `alt` descritivo (não apenas `alt=""`)
- [ ] Todos os botões com texto visível ou `aria-label`
- [ ] Toggle PT|EN com `aria-label` e estados `aria-pressed`
- [ ] Menu hamburguer com `aria-expanded` e `aria-label`
- [ ] Contraste WCAG AA confirmado para todas as combinações de texto/fundo
- [ ] Navegação por teclado funcional (Tab order lógica, focus visible)
- [ ] Sem erros no axe DevTools ou Lighthouse Accessibility

**Compatibilidade**
- [ ] Chrome (última versão) — todas as 3 páginas
- [ ] Safari (última versão, macOS e iOS) — todas as 3 páginas
- [ ] Firefox (última versão) — todas as 3 páginas
- [ ] Mobile físico ou emulado: 375px (iPhone SE) e 390px (iPhone 14)

**Smoke test funcional completo**
- [ ] Navegar pelas 3 páginas em PT e em EN
- [ ] Clicar em todos os CTAs WhatsApp — confirmar que abrem com número e mensagem corretos
- [ ] Testar filtros do portfólio (todos os 9 setores + "Todos")
- [ ] Clicar em "Ver projeto" em cada case com link — confirmar que abrem em nova aba
- [ ] Alternar idioma em cada página — confirmar que persiste ao navegar
- [ ] Recarregar a página — confirmar que o idioma persiste via localStorage

### Critério de conclusão

> Lighthouse Performance ≥ 90 mobile nas 3 páginas. Sem erros de console. Sem falhas de acessibilidade críticas. Headers de segurança configurados. Smoke test completo aprovado em Chrome, Safari e Firefox.

---

## Fase 7 — Deploy e Go-live

**Objetivo:** Site em produção na Vercel com domínio personalizado configurado e funcionando corretamente.

**Status:** ⬜ Não iniciada
**Pré-requisito:** Fase 6 concluída.

### Checklist

**Vercel**
- [ ] Repositório GitHub criado e com todos os commits da Fase 1–5
- [ ] Projeto criado na Vercel conectado ao repositório
- [ ] Build command e output directory configurados (se necessário — para HTML estático puro, Vercel serve direto da raiz)
- [ ] Deploy de preview gerado e testado
- [ ] `vercel.json` com headers de segurança deployado e funcionando (verificar via DevTools → Network → Response Headers)

**Domínio**
- [ ] Domínio definido e registrado (confirmar com Cristian)
- [ ] DNS apontado para a Vercel (registros A ou CNAME conforme instrução da Vercel)
- [ ] HTTPS automático ativo (Vercel provisiona certificado automaticamente)
- [ ] Redirect `www` → apex (ou apex → `www`) configurado na Vercel

**Verificação pós-deploy**
- [ ] Site abre pelo domínio definitivo em HTTPS
- [ ] Redirecionamentos funcionando corretamente
- [ ] Todas as imagens carregando (sem 404)
- [ ] Todos os SVGs de logo e favicon carregando
- [ ] Console sem erros de CORS ou mixed content
- [ ] Lighthouse rodado no domínio final (não no preview) — performance ≥ 90 confirmada
- [ ] Smoke test completo no domínio final

**Documentação**
- [ ] `README.md` atualizado com URL do site em produção
- [ ] PRD seção 13 atualizado com fases marcadas como concluídas
- [ ] Registro `07-deploy-go-live-AAAA-MM-DD.md` criado em `docs/historico/`

### Critério de conclusão

> Site acessível pelo domínio definitivo em HTTPS, sem erros, Lighthouse ≥ 90 mobile confirmado no domínio final, smoke test completo aprovado.

---

## Fora do Escopo deste Plano (pós-v1)

Para evitar looping ou scope creep:

- Google Analytics / rastreamento de eventos
- Formulário de contato com envio por email
- Blog ou área de conteúdo dinâmico
- Modo escuro
- Animações com biblioteca externa (GSAP)
- Terceiro idioma
- Painel administrativo
- PWA / instalação no home screen

---

*Plano v1.0 — Magnus Mídias — 2026-05-26*
*Atualizar status das fases à medida que forem concluídas. Registrar cada conclusão em `docs/historico/`.*
