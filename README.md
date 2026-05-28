# site-portfolio — Magnus Mídias

Site institucional e de portfólio da frente de Consultoria da Magnus Mídias.

Enviado no processo comercial após qualificação do lead para gerar credibilidade e converter em reunião ou fechamento. Não é uma ferramenta de tráfego frio.

---

## Stack

- HTML5 semântico
- CSS3 com custom properties (tokens da marca Magnus)
- JavaScript vanilla ES6+, sem frameworks
- Deploy: Vercel via GitHub (push automático)

## Como rodar localmente

```bash
npm run dev
```

Abre em `http://localhost:3000`. Não há build step — o `npm run dev` apenas serve os arquivos estáticos.

## Páginas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `index.html` | Home — hero, serviços, depoimentos, CTA |
| `/processo.html` | `processo.html` | Como Funciona — timelines das duas verticais, diferenciais |
| `/portfolio.html` | `portfolio.html` | Portfólio — grid de cases com filtro por setor |

## Estrutura de pastas

```
/
├── index.html
├── processo.html
├── portfolio.html
├── assets/
│   ├── css/
│   │   ├── global.css          ← tokens, reset, tipografia, utilitários
│   │   ├── components.css      ← header, footer, botões, badges
│   │   └── pages/              ← CSS específico de cada página
│   ├── js/
│   │   ├── i18n.js             ← toggle de idioma PT/EN
│   │   ├── portfolio.js        ← dados dos cases e lógica de filtro
│   │   └── main.js             ← inicialização geral
│   └── images/
│       ├── logo/               ← logo-dark.svg, logo-light.svg, favicon.svg
│       ├── portfolio/          ← prints dos cases (WebP, máx 300 KB)
│       └── depoimentos/        ← fotos dos clientes (WebP)
├── translations/
│   ├── pt.js                   ← todos os textos em PT-BR
│   └── en.js                   ← todos os textos em EN
└── docs/                       ← documentação do projeto
```

## Documentação

| Documento | Caminho |
|-----------|---------|
| PRD e arquitetura | `docs/prd-e-arquitetura/product-requirements-document.md` |
| Plano de ação por fases | `docs/prd-e-arquitetura/plano-de-acao-site-portfolio.md` |
| Instruções de trabalho | `docs/prd-e-arquitetura/instrucoes.md` |
| Design system | `docs/design-system/design-system.md` |
| Histórico de alterações | `docs/historico/` |

## Regra de ouro

**Toda alteração relevante deve ser registrada em `docs/historico/`** no formato `NN-descricao-curta-AAAA-MM-DD.md`. Leia `docs/prd-e-arquitetura/instrucoes.md` para o fluxo completo.
