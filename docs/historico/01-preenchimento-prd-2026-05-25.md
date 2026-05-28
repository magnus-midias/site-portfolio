# Preenchimento do PRD com dados reais do projeto

- **Data:** 2026-05-25
- **Autor:** Claude
- **Escopo:** arquitetura

## Contexto / Motivação

Cristian forneceu o PRD completo do projeto (v1.0, Mai 2026). O documento foi revisado, adaptado ao padrão da estrutura de documentação, melhorado na organização interna e salvo em `docs/prd-e-arquitetura/product-requirements-document.md`, substituindo o esqueleto de placeholders criado na inicialização.

## O que mudou

- `docs/prd-e-arquitetura/product-requirements-document.md` — reescrito com o conteúdo real do projeto:
  - Objetivo e contexto de uso do site (ferramenta comercial, não tráfego frio)
  - Dois públicos-alvo definidos: mercado BR e mercado internacional
  - Stack definida: HTML5 + CSS3 + JS vanilla + Vercel
  - 3 páginas especificadas: Home, Como Funciona, Portfólio
  - Especificação detalhada de todos os blocos de cada página
  - Sistema de toggle PT-BR / EN com estratégia de implementação via `data-i18n`
  - 9 setores do portfólio com estrutura de dados dos cases
  - Requisitos de performance (Lighthouse ≥ 90 mobile, LCP < 2,5s)
  - Requisitos de responsividade (mobile first, 3 breakpoints)
  - Checklist de conteúdo a fornecer
  - Definições de pronto por página
  - Tabela de decisões tomadas e justificativas
  - Não-negociáveis de segurança
  - Resumo das fases de desenvolvimento (plano detalhado pendente em arquivo próprio)

## Melhorias aplicadas em relação ao documento original

- Seções renumeradas e reorganizadas para seguir o padrão do template
- Escopo (dentro/fora) consolidado em seção única no início
- Tabela de decisões tomadas adicionada (seção 14)
- Requisitos de acessibilidade e segurança unificados em seção própria (seção 10)
- `rel="noopener noreferrer"` especificado diretamente na spec dos cards de portfólio
- Referência ao plano de ação detalhado (`plano-de-acao-site-portfolio.md`) — a ser criado
- Caminho de imagem corrigido na estrutura de dados dos cases (`/assets/images/portfolio/`)

## Impacto

Nenhum código alterado. Documento estritamente documental.

Próximos passos:
- Atualizar `CLAUDE.md` com dados reais do projeto
- Criar `docs/prd-e-arquitetura/plano-de-acao-site-portfolio.md` com fases detalhadas e critérios de conclusão
- Preencher `docs/design-system/design-system.md` com identidade visual da Magnus Mídias
