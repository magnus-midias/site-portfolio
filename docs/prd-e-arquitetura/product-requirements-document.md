# Product Requirements Document
## Site de Portfólio e Apresentação Comercial — Magnus Mídias

**Versão:** 1.0
**Data:** Mai 2026
**Autor:** Cristian Dornelles
**Status:** Em elaboração

---

## 1. Objetivo

Site institucional e de portfólio da frente de Consultoria da Magnus Mídias, voltado para prospecção ativa de clientes locais nos mercados de São José, Palhoça, Biguaçu e Florianópolis, e para o mercado internacional (Portugal, Espanha, Reino Unido, Irlanda).

O site **não é uma ferramenta de tráfego frio.** É enviado no processo comercial após a qualificação do lead, antes ou junto com a proposta. Sua função principal é gerar credibilidade, demonstrar competência e converter o lead em reunião ou fechamento.

---

## 2. Escopo

### Dentro do escopo (v1)

- 3 páginas estáticas: Home (`/`), Como Funciona (`/processo`), Portfólio (`/portfolio`)
- Toggle de idioma PT-BR / EN sem recarregar a página
- Sistema de filtro de portfólio por setor (JS puro)
- CTA via WhatsApp com mensagem pré-preenchida
- Deploy na Vercel via GitHub

### Fora do escopo (pós-MVP)

- Backend de qualquer natureza
- Banco de dados
- Sistema de login ou área restrita
- Blog ou sistema de publicação de conteúdo
- Chat ao vivo (usar WhatsApp direto)
- Google Analytics ou rastreamento (pode ser adicionado depois)
- Animações pesadas ou bibliotecas de animação (GSAP etc.) — apenas CSS transitions
- Funcionalidade de agendamento online integrado
- E-commerce ou sistema de pagamento
- Formulário com envio de email (usar WhatsApp ou formulário externo como Tally/Typeform se necessário)
- Idiomas além de PT-BR e EN
- Painel administrativo para editar conteúdo

---

## 3. Público-Alvo

### Mercado Brasil

Pequenos e médios empresários locais. Donos de clínica, academia, restaurante, contabilidade, imobiliária. Não são do mundo tech. Valorizam credibilidade, clareza e resultados tangíveis. Acessam pelo celular na maioria das vezes.

### Mercado Internacional

Empreendedores em Portugal, Espanha, Reino Unido e Irlanda buscando desenvolvimento de sites, landing pages e SaaS com preço competitivo. Chegam via LinkedIn ou indicação. Comunicação em inglês.

---

## 4. Stack

- **HTML5** semântico
- **CSS3** com custom properties (variáveis CSS) para cores e tipografia
- **JavaScript vanilla** (ES6+), sem frameworks, sem bibliotecas externas exceto quando estritamente necessário
- **Hospedagem:** Vercel (deploy automático via push no GitHub)
- Nenhum backend, nenhum banco de dados, nenhuma API

---

## 5. Arquitetura e Estrutura de Pastas

### Páginas

```
/                   → Home
/processo           → Como Funciona
/portfolio          → Portfólio
```

Navegação compartilhada via header fixo:
- Logo Magnus Mídias (esquerda)
- Links: Home · Como Funciona · Portfólio (centro ou direita)
- Toggle de idioma: PT | EN (direita)

### Estrutura de arquivos

```
/
├── index.html
├── processo.html
├── portfolio.html
├── assets/
│   ├── css/
│   │   ├── global.css          ← reset, variáveis, tipografia, utilitários
│   │   ├── components.css      ← header, footer, botões, cards, badges
│   │   └── pages/
│   │       ├── home.css
│   │       ├── processo.css
│   │       └── portfolio.css
│   ├── js/
│   │   ├── i18n.js             ← toggle de idioma e traduções
│   │   ├── portfolio.js        ← dados dos cases e lógica de filtro
│   │   └── main.js             ← inicialização geral
│   ├── images/
│   │   ├── logo/
│   │   ├── portfolio/          ← prints dos cases (WebP)
│   │   └── depoimentos/        ← fotos dos clientes (WebP)
│   └── fonts/                  ← fontes locais (se não usar Google Fonts)
├── translations/
│   ├── pt.js
│   └── en.js
└── README.md
```

---

## 6. Especificação de Páginas

### 6.1 Home (`/`)

**Propósito:** Primeira impressão. Explicar quem é a Magnus, o que faz, para quem, e converter o visitante em lead.

---

#### Bloco 1 — Hero

- Headline principal: posicionamento direto da Magnus
- Subheadline: complemento explicando as duas verticais
- CTA primário: botão WhatsApp (abre conversa direta com mensagem pré-preenchida)
- CTA secundário: link para portfólio ou "ver como funciona"
- Background: elemento visual sutil (gradiente, textura ou imagem com overlay)

**Requisitos:**
- Textos em PT-BR e EN, alternados via toggle
- CTA WhatsApp aponta para número da Magnus com mensagem pré-preenchida contextual

---

#### Bloco 2 — O Que Entregamos

Grid ou lista de serviços agrupados por vertical:

**Vertical 1 — Marketing e Tráfego:**
- Gestão de tráfego pago (Google Ads, Meta Ads)
- Gestão de redes sociais
- Captação e produção de conteúdo e vídeo
- Criação de landing pages de campanha

**Vertical 2 — Tech e Desenvolvimento:**
- Link na Bio
- Landing Pages
- Sites Institucionais
- SaaS MVP
- SaaS V1
- Cardápio digital

Cada serviço: ícone + nome + uma linha de descrição. Sem preços nesta seção.

**Requisitos:**
- Textos em PT-BR e EN
- Layout responsivo: 2 colunas em desktop, 1 coluna em mobile

---

#### Bloco 3 — Depoimentos

Cards com:
- Foto circular do cliente
- Nome completo
- Cargo e empresa
- Texto do depoimento (máximo 3–4 linhas visíveis, expansível se necessário)

Mínimo 3 depoimentos, máximo 6 na exibição inicial.
Layout: carrossel com swipe em mobile, grid em desktop.

**Requisitos:**
- Depoimentos PT-BR visíveis quando idioma for PT; depoimentos EN quando idioma for EN
- Fotos e dados fornecidos por Cristian

---

#### Bloco 4 — CTA Final

- Texto de chamada curto e direto
- Botão WhatsApp
- Opcionalmente: formulário simples com Nome, Email, WhatsApp e mensagem (via Tally/Typeform)

---

### 6.2 Como Funciona (`/processo`)

**Propósito:** Eliminar a objeção "mas como vai ser?". Mostrar que a Magnus tem processo, metodologia e previsibilidade na entrega.

---

#### Bloco 1 — Introdução

- Headline da página
- Dois parágrafos explicando a filosofia de trabalho

---

#### Bloco 2 — Vertical Marketing / Tráfego Pago

- Título e descrição em 2 linhas (o que é, para quem)
- Timeline visual das fases (horizontal em desktop, vertical em mobile):
  1. Diagnóstico e planejamento
  2. Definição de estratégia e canais
  3. Criação dos materiais e campanhas
  4. Configuração e lançamento
  5. Monitoramento e otimização
  6. Relatórios e evolução
- Cada fase: número + nome + descrição de 1–2 linhas

---

#### Bloco 3 — Vertical Tech / Desenvolvimento

- Título e descrição em 2 linhas (o que é, para quem)
- Timeline visual das fases:
  1. Qualificação e proposta
  2. Contrato e pagamento
  3. Briefing e discovery
  4. Planejamento e arquitetura
  5. Produção e execução
  6. Revisão e aprovação
  7. Entrega e handoff
  8. Pós-entrega e recorrência
- Cada fase: número + nome + descrição de 1–2 linhas

---

#### Bloco 4 — Diferenciais

3–4 diferenciais em formato ícone + título + descrição:
- Processo documentado
- Comunicação clara e prazos cumpridos
- Sem surpresas de escopo
- Suporte pós-entrega incluído

---

#### Bloco 5 — CTA

- Texto curto
- Botão WhatsApp

---

### 6.3 Portfólio (`/portfolio`)

**Propósito:** Demonstrar capacidade real de execução por nicho. Um case por setor, com projeto em PT-BR e em EN onde aplicável.

---

#### Bloco 1 — Introdução

- Headline da página
- Parágrafo curto de contexto

---

#### Bloco 2 — Filtro de Setores

Barra de filtros clicáveis com os 9 setores:
1. Saúde e Odontologia
2. Fitness e Bem-estar
3. Beleza e Estética
4. Autoescolas
5. Contabilidade e Advocacia
6. Alimentação e Gastronomia
7. Construção e Imobiliário
8. Comércio e Moda
9. Serviços Automotivos

- Filtro "Todos" ativo por padrão
- Ao clicar em um setor: exibe apenas os cards daquele setor
- Filtro via JS puro, sem navegação de página
- Scroll horizontal em mobile

---

#### Bloco 3 — Grid de Cases

Cada card contém:
- Print do projeto (WebP, proporção 16:9 ou 4:3)
- Badge do setor (tag colorida)
- Badge de idioma: PT-BR ou EN
- Nome ou descrição do projeto (não precisa ser o nome real do cliente)
- Tipo de entrega: Site Institucional, Landing Page, Link na Bio, SaaS, etc.
- Serviços aplicados: tags pequenas (ex: Design, Desenvolvimento, Tráfego Pago)
- Botão "Ver projeto" que abre link externo em nova aba (com `rel="noopener noreferrer"`)

**Estrutura de dados de cada case:**

```js
{
  id: "odonto-01",
  setor: "saude-odontologia",
  idioma: "pt",
  titulo: "Clínica Odontológica — Florianópolis",
  tipo: "Site Institucional",
  servicos: ["Design", "Desenvolvimento", "SEO"],
  print: "/assets/images/portfolio/odonto-01.webp",
  link: "https://..."   // null se não tiver link ao vivo
}
```

**Requisitos:**
- Mínimo 1 case por setor
- Meta: 2 cases por setor (1 PT-BR + 1 EN) = 18 cases no total
- Cases sem link ao vivo: exibem apenas o print, sem botão "Ver projeto"
- Cases "Em breve": card com estado visual diferente e sem interação

**Layout do grid:**
- 1 coluna em mobile
- 2 colunas em tablet
- 3 colunas em desktop

---

## 7. Toggle de Idioma

**Comportamento:**
- Toggle PT | EN no header
- Padrão: PT (fixo ou detectado pelo browser)
- Ao alternar: todos os textos mudam sem recarregar a página
- URL não muda (não há rotas separadas por idioma)
- Preferência salva em `localStorage` para persistir entre páginas

**Implementação:**
- `translations/pt.js` — todos os textos em PT-BR
- `translations/en.js` — todos os textos em EN
- Função `setLanguage(lang)` que atualiza elementos via atributo `data-i18n`
- Exemplo: `<h1 data-i18n="hero.headline"></h1>`

**Escopo do toggle:**
- Header e navegação
- Todos os textos da Home
- Todos os textos de Como Funciona
- Filtros e labels do Portfólio
- Textos dos cards de portfólio (nome, tipo, serviços)
- Footer

**Fora do escopo do toggle:**
- Prints dos projetos (são imagens, não mudam)
- Links externos
- Depoimentos: dados separados por idioma nos arquivos de tradução

---

## 8. Requisitos de Performance

- **Lighthouse Performance Score:** mínimo 90 em mobile
- **First Contentful Paint:** abaixo de 1,5s em conexão 4G
- **Largest Contentful Paint:** abaixo de 2,5s
- Todas as imagens em formato WebP
- `loading="lazy"` em todas as imagens exceto as do hero (above the fold)
- Dimensões explícitas em todas as imagens (evitar layout shift / CLS)
- CSS e JS minificados para produção
- Fontes com `font-display: swap`
- Nenhuma imagem de portfólio acima de 300 KB após otimização

---

## 9. Requisitos de Responsividade

Mobile first.

| Contexto | Breakpoint |
|----------|-----------|
| Mobile | até 768px |
| Tablet | 768px – 1024px |
| Desktop | acima de 1024px |

- Navegação mobile: menu hamburguer (painel lateral ou dropdown)
- Portfolio grid: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Depoimentos: carrossel com swipe em mobile, grid em desktop
- Filtros do portfólio: scroll horizontal em mobile

---

## 10. Requisitos de Acessibilidade e Segurança

- HTML semântico (`<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- `alt` em todas as imagens
- `aria-label` onde necessário (botões, ícones sem texto)
- Contraste mínimo WCAG AA nas cores de texto
- Todos os links externos com `rel="noopener noreferrer"` e `target="_blank"`
- Nenhum secret ou chave no repositório
- Validação e sanitização de qualquer input antes de enviar para serviços externos

---

## 11. Conteúdo a Ser Fornecido por Cristian

### Identidade visual
- [ ] Arquivo de logo (SVG preferencialmente, PNG fallback)
- [ ] Guia de cores (hex das cores principais e secundárias)
- [ ] Fontes utilizadas (nome + link Google Fonts ou arquivo local)

### Depoimentos
- [ ] Foto de cada cliente (mínimo 400×400 px, WebP ou PNG)
- [ ] Nome, cargo e empresa
- [ ] Texto em PT-BR
- [ ] Texto em EN (quando aplicável)

### Portfólio
- [ ] Print de cada projeto (mínimo 1280×800 px, WebP ou PNG)
- [ ] Título do case (como aparece no card)
- [ ] Setor de cada case
- [ ] Tipo de entrega
- [ ] Serviços aplicados
- [ ] Link ao vivo (quando disponível)
- [ ] Idioma do case (PT-BR ou EN)

### Textos (copys)
- [ ] Headline e subheadline do hero (PT-BR e EN)
- [ ] Descrição dos serviços de cada vertical (PT-BR e EN)
- [ ] Textos dos diferenciais
- [ ] Textos das fases do processo (PT-BR e EN)
- [ ] Copy dos CTAs e botões
- [ ] Número WhatsApp + mensagem pré-preenchida

### Configuração
- [ ] Domínio do site (ex: magnusmidias.com.br ou magnusmidias.com)
- [ ] Conta Vercel criada e conectada ao repositório

---

## 12. Definições de Pronto

Uma página está pronta quando:

- [ ] Renderiza corretamente em Chrome, Safari e Firefox (versões recentes)
- [ ] Responsiva em mobile (375px), tablet (768px) e desktop (1280px)
- [ ] Toggle de idioma alterna todos os textos corretamente
- [ ] Todos os links externos abrem em nova aba com `rel="noopener noreferrer"`
- [ ] Lighthouse Performance ≥ 90 em mobile
- [ ] Nenhum erro no console do browser
- [ ] Imagens com lazy loading implementado (exceto hero)
- [ ] HTML semântico e acessível (alt, aria-labels)
- [ ] Nenhum secret ou variável sensível exposta no código

---

## 13. Plano de Desenvolvimento por Fases

> O plano detalhado com checklist e critério de conclusão de cada fase está em
> `docs/prd-e-arquitetura/plano-de-acao-site-portfolio.md`.

### Resumo das fases

| Fase | Descrição |
|------|-----------|
| 1 | Estrutura base: repo, arquivos, CSS global, header/footer, i18n |
| 2 | Home: Hero, serviços, depoimentos (placeholder), CTA |
| 3 | Como Funciona: processo Marketing, processo Tech, diferenciais, CTA |
| 4 | Portfólio: dados dos cases, grid, filtro, estados |
| — | **Testes intermediários** de funcionalidade (i18n, filtro, responsividade) |
| 5 | Conteúdo real: substituição de placeholders, otimização de imagens |
| 6 | **Testes finais de segurança e performance** antes do deploy |
| 7 | Deploy: Vercel, domínio, smoke test em produção |

---

## 14. Decisões Tomadas

| Decisão | Justificativa |
|---------|---------------|
| Sem framework JS | Site estático simples; adicionar React/Vue seria overhead sem benefício |
| Toggle de idioma via `data-i18n` | Simples, sem dependência externa, fácil de manter |
| Dados do portfólio em JS/JSON | Não há backend; facilita manutenção por Cristian no futuro |
| Deploy na Vercel | Integração nativa com GitHub, CDN global, HTTPS automático |
| Imagens em WebP | Melhor compressão que PNG/JPG, suporte universal em 2026 |
| Mobile first | Público BR acessa majoritariamente pelo celular |

---

## 15. Não-Negociáveis de Segurança

- Nenhum backend ou processamento server-side neste site
- Nenhum secret, API key ou credencial no repositório (mesmo variáveis de ambiente "vazias")
- Todos os links externos com `rel="noopener noreferrer"`
- Todas as imagens com `alt` descritivo
- Inputs de formulário (se houver) sanitizados antes de envio externo
- Auditoria `npm audit` (se houver dependências) antes do deploy
- Headers de segurança configurados na Vercel (`vercel.json`)

---

*PRD v1.0 — Magnus Mídias — Mai 2026*
*Atualizar este documento sempre que uma decisão de escopo, arquitetura ou stack mudar, registrando a mudança em `docs/historico/`.*
