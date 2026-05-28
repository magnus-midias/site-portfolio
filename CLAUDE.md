# CLAUDE.md — site-portfolio

Leia este arquivo antes de qualquer alteração no projeto.

---

## O Que É Este Projeto

Site institucional e de portfólio da frente de Consultoria da **Magnus Mídias**.

Não é uma ferramenta de tráfego frio. É enviado no processo comercial após a qualificação do lead, antes ou junto com a proposta. Função: gerar credibilidade, demonstrar competência e converter o lead em reunião ou fechamento.

**Dois mercados:**
- Brasil (São José, Palhoça, Biguaçu, Florianópolis) — pequenos e médios empresários, acesso majoritário pelo celular
- Internacional (Portugal, Espanha, Reino Unido, Irlanda) — empreendedores buscando desenvolvimento web com preço competitivo, chegam via LinkedIn ou indicação

---

## Stack

- HTML5 semântico
- CSS3 com custom properties (variáveis CSS)
- JavaScript vanilla (ES6+), sem frameworks, sem bibliotecas externas
- Hospedagem: Vercel (deploy automático via push no GitHub)
- Nenhum backend, nenhum banco de dados, nenhuma API

---

## Páginas

```
/             → index.html      (Home)
/processo     → processo.html   (Como Funciona)
/portfolio    → portfolio.html  (Portfólio)
```

---

## Scripts de Desenvolvimento

```bash
npm run dev    # inicia servidor local em http://localhost:3000
```

Sem build step. O `npm run dev` usa `npx serve` para servir os arquivos estáticos.

---

## Estrutura de Pastas Relevante

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
│   │   ├── i18n.js             ← toggle de idioma (data-i18n)
│   │   ├── portfolio.js        ← dados dos cases e filtro por setor
│   │   └── main.js             ← inicialização geral
│   ├── images/
│   │   ├── logo/
│   │   ├── portfolio/          ← prints dos cases (WebP, máx 300 KB)
│   │   └── depoimentos/        ← fotos dos clientes (WebP)
│   └── fonts/
├── translations/
│   ├── pt.js                   ← todos os textos em PT-BR
│   └── en.js                   ← todos os textos em EN
docs/
  prd-e-arquitetura/   → PRD, banco de dados, instruções, planos de ação
  historico/           → registro sequencial de todas as alterações relevantes
  design-system/       → design system da Magnus Mídias, assets
  prompt-inicial/      → prompt padrão para iniciar projetos novos
CLAUDE.md              → este arquivo
```

---

## Marca

**Magnus Mídias** — Consultoria de marketing digital e desenvolvimento web.

Identidade visual detalhada em `docs/design-system/design-system.md`.
_(a preencher com cores, fontes e tokens quando Cristian fornecer)_

---

## Regra Inegociável

**Toda alteração relevante deve ser registrada em `docs/historico/`.**

Formato do nome: `NN-descricao-curta-AAAA-MM-DD.md`

Leia `docs/prd-e-arquitetura/instrucoes.md` para o fluxo completo.

---

## Ponteiros para Documentação

| Documento | Caminho |
|-----------|---------|
| Instruções de trabalho | `docs/prd-e-arquitetura/instrucoes.md` |
| PRD e Arquitetura | `docs/prd-e-arquitetura/product-requirements-document.md` |
| Plano de ação por fases | `docs/prd-e-arquitetura/plano-de-acao-site-portfolio.md` |
| Design System | `docs/design-system/design-system.md` |
| Histórico de Alterações | `docs/historico/` |
