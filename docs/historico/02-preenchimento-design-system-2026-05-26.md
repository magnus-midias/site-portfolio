# Preenchimento do design system a partir do bio-magnus

- **Data:** 2026-05-26
- **Autor:** Claude
- **Escopo:** UI

## Contexto / Motivação

Cristian apontou o design system canônico do projeto `bio-magnus` como fonte de verdade para a identidade visual da Magnus Mídias. O design system do `site-portfolio` foi preenchido com todos os tokens, componentes e padrões da marca, adaptando o que era necessário para um site multi-página com portfólio, toggle PT/EN, cards e timeline.

## O que mudou

- `docs/design-system/design-system.md` — reescrito com conteúdo real:
  - Seção 1: posicionamento, tom de voz, personalidade visual da Magnus
  - Seção 2: tipografia `Sora` com hierarquia canônica e aplicação no projeto
  - Seção 3: paleta de cores (canônica + tokens CSS para este projeto + escala navy + gradientes)
  - Seção 4: escala de border radius (`6/12/24px` + pill) e escala de espaçamentos
  - Seção 5: componentes documentados (header, btn-primary, btn-ghost, card de case, badges, filtro de setor, timeline, card de depoimento, toggle de idioma)
  - Seção 6: animações (easing `cubic-bezier(0.16, 1, 0.3, 1)`, durações, padrão de hover, fade-in-up via IntersectionObserver)
  - Seção 7: assets (logos copiados, favicon copiado, regras para imagens de conteúdo)
  - Seção 8: referências cruzadas para lp-magnus e bio-magnus

- `docs/design-system/logos/logo-dark.svg` — copiado do `bio-magnus`
- `docs/design-system/logos/logo-light.svg` — copiado do `bio-magnus`
- `docs/design-system/favicon/favicon.svg` — copiado do `bio-magnus`

## Impacto

Nenhum código de aplicação alterado. Alteração documental e de assets de referência.

Próximos passos:
- Criar `docs/prd-e-arquitetura/plano-de-acao-site-portfolio.md` com fases detalhadas
- Iniciar Fase 1 do desenvolvimento (estrutura base, CSS global com tokens, header/footer, i18n)
- Ao iniciar o desenvolvimento, promover os assets de `docs/design-system/` para `assets/images/`
