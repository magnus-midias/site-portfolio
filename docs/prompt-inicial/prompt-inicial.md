# Prompt inicial — Estrutura padrao de projeto (Cristian)

Este arquivo contem um **prompt pronto** para colar no inicio de qualquer projeto novo. Ele instrui o agente (Claude Code ou equivalente) a montar a estrutura padrao de documentacao e as regras de trabalho que o Cristian usa em todos os seus projetos — sem precisar explicar do zero.

**Como usar:** em um projeto novo, copie tudo que esta entre os marcadores `=== COPIE DAQUI ===` e `=== ATE AQUI ===` e envie como primeira mensagem. Depois, em uma segunda mensagem, explique o projeto em si (o que e, para que serve, publico, restricoes).

---

=== COPIE DAQUI ===

Voce vai me ajudar a estruturar este projeto. Antes de qualquer outra coisa, configure a seguinte estrutura de documentacao e regras de trabalho. Este e o padrao que eu uso em TODOS os meus projetos.

## 1. Estrutura de pastas a criar

Na raiz do projeto, crie:

```
docs/
  prd-e-arquitetura/
  historico/
  design-system/
    logos/
    icones/
    favicon/
  prompt-inicial/
CLAUDE.md
```

E copie este mesmo arquivo (`prompt-inicial.md`) para dentro de `docs/prompt-inicial/` para referencia futura.

**Convencao de nomenclatura (obrigatoria e valida para o projeto inteiro):**
- Nenhum arquivo ou pasta pode ter acentos ou caracteres especiais (c-cedilha, til, crase, etc.). Use ASCII puro e kebab-case em nomes compostos.
- Textos dentro dos arquivos podem ser em pt-BR com acentos normalmente. A restricao e so para **nomes** de arquivos e pastas.

## 2. Finalidade de cada pasta

### `docs/prd-e-arquitetura/`
Centraliza tudo que define e descreve o produto e sua arquitetura tecnica, mais as regras de trabalho e planos de acao. Arquivos obrigatorios:
- `product-requirements-document.md` — visao geral do produto: objetivo, escopo (dentro/fora v1), stack, estrutura de pastas, modelo de roles, entidades principais, fluxos criticos, decisoes tomadas e nao-negociaveis de seguranca.
- `banco-de-dados.md` — schema do banco, tabelas, colunas, politicas RLS, triggers e migrations relevantes.
- `instrucoes.md` — regras de trabalho do projeto: fluxo obrigatorio (leia antes / altere / registre depois), convencoes e ordem de leitura.
- `plano-de-acao-<nome>.md` — plano de acao por fases (um arquivo por iniciativa, quando houver).

Outros arquivos possiveis nesta pasta: `permissoes.md` (quando o modelo de roles for complexo), `integracoes.md`, ou qualquer documento tecnico relevante ao produto.

### `docs/historico/`
Registro sequencial de **toda alteracao relevante** feita no projeto, cada uma em seu proprio arquivo `.md`. Formato obrigatorio do nome:

```
NN-descricao-curta-AAAA-MM-DD.md
```

Onde:
- `NN` = numero sequencial com 2 digitos, comecando em `00` e incrementando (`00`, `01`, ... `10`, `11`, ...). Use o proximo numero disponivel olhando os arquivos existentes na pasta.
- `descricao-curta` = resumo em kebab-case, sem acentos.
- `AAAA-MM-DD` = data da alteracao.

Exemplo: `00-criacao-estrutura-docs-2026-04-21.md`.

### `docs/design-system/`
Identidade visual e design system do projeto. Cada projeto tem o seu (Magnus, outras marcas do Cristian, cliente, marca pessoal, etc.). Arquivo principal: `design-system.md`, cobrindo:
- Sobre a marca (posicionamento, tom de voz).
- Tipografia (fontes, hierarquia).
- Paleta de cores (tokens semanticos + cores de marca + gradientes).
- Border radius / espacamentos padrao.
- Componentes e padroes de UX/UI.
- Animacoes.
- Assets (logos, icones, favicon) — armazenados nas subpastas `logos/`, `icones/`, `favicon/`.

Regra: qualquer alteracao com impacto visual deve ler este arquivo antes e atualiza-lo depois, se introduzir ou alterar um token. Se o projeto ainda nao tem marca definida, criar o arquivo com estrutura vazia e placeholders.

### `docs/prompt-inicial/`
Contem este proprio arquivo (`prompt-inicial.md`), apenas para referencia. O agente nao precisa consultar essa pasta durante o trabalho — ela existe para que o Cristian encontre facilmente o prompt padrao quando for iniciar um projeto novo.

### `CLAUDE.md` (raiz)
Arquivo de contexto que o agente consulta antes de qualquer alteracao. Deve conter: o que e o projeto, stack, scripts de dev, estrutura de pastas relevante, ponteiros para `docs/` e a "regra inegociavel" de historico (secao 3). O conteudo especifico do projeto sera preenchido em conversa posterior.

## 3. Regra inegociavel de historico (obrigatoria)

Toda e qualquer alteracao relevante no projeto deve ser registrada em `docs/historico/` como um arquivo `.md` novo, no formato `NN-descricao-curta-AAAA-MM-DD.md`.

"Relevante" inclui, mas nao se limita a:
- Criacao, remocao ou renomeacao de arquivos/pastas
- Alteracao de dependencias
- Mudanca de estrutura de rotas, componentes ou logica de negocio
- Alteracao de conteudo (se for um projeto de conteudo)
- Mudanca de estilo/design global
- Alteracoes de configuracao (build, lint, tipagem, etc.)
- Decisoes de arquitetura (mesmo sem codigo alterado)

### Antes de fazer uma alteracao relevante
1. **Ler todo o historico** em `docs/historico/` em ordem numerica crescente.
2. **Ler `docs/prd-e-arquitetura/product-requirements-document.md`** e os arquivos relevantes ao escopo.
3. Se a alteracao tem impacto visual: **ler tambem** `docs/design-system/design-system.md`.
4. So entao propor/aplicar a alteracao.

### Depois de fazer uma alteracao relevante
1. Criar um arquivo novo em `docs/historico/` seguindo o formato do nome.
2. Se a alteracao impactou PRD ou arquitetura, atualizar `docs/prd-e-arquitetura/`.
3. Se a alteracao mudou regras/fluxo de trabalho, atualizar `docs/prd-e-arquitetura/instrucoes.md`.
4. Se a alteracao tocou em tokens visuais, componentes, animacoes ou assets de marca, atualizar `docs/design-system/`.

### Formato de cada arquivo de historico

```markdown
# <Titulo da alteracao>

- **Data:** AAAA-MM-DD
- **Autor:** <Cristian | Claude>
- **Escopo:** <arquitetura | conteudo | UI | config | infra | outro>

## Contexto / Motivacao
Por que essa alteracao foi feita.

## O que mudou
Lista objetiva dos arquivos/areas afetadas.

## Impacto
O que pode quebrar, o que precisa ser revisado, proximos passos.
```

## 4. Planos de acao por fases

Projetos (ou iniciativas grandes dentro de projetos) devem ser quebrados em **fases numeradas** e registrados como um arquivo proprio em `docs/prd-e-arquitetura/` (por exemplo, `plano-de-acao-<nome>.md`).

Diretrizes do plano:
- Cada fase tem objetivo, checklist e **criterio de conclusao claro**.
- Uma fase so comeca quando a anterior esta 100% concluida (sem voltar).
- Quando convier, **intercalar fases de testes de funcionalidade** entre fases de construcao (ex.: Fase 1, 2, 3 → Fase de testes → Fase 4, 5). Nao deixar testes so para o fim.
- **A ultima fase antes do deploy deve ser uma rodada de testes de seguranca + funcionalidade**, cobrindo: sanitizacao/XSS, auditoria de dependencias, headers, segredos, links externos com `rel="noopener noreferrer"`, smoke test manual e re-execucao da suite automatica.
- Ao final de cada fase: marcar como concluida no plano **e** criar o registro correspondente em `docs/historico/`.
- Listar explicitamente o que esta **fora de escopo** (pos-MVP), para evitar looping em partes ja concluidas.

## 5. README

O `README.md` na raiz do projeto deve ser reescrito no inicio para refletir o projeto real (nao deixar template default de nenhum gerador/scaffolder). Conteudo minimo: descricao curta, stack, como rodar, scripts, estrutura de pastas, ponteiros para `docs/` e a regra de ouro do historico.

## 6. O que eu quero que voce faca agora

1. Criar as pastas e arquivos descritos na secao 1 (incluindo `docs/design-system/` e subpastas `logos/`, `icones/`, `favicon/`).
2. Criar `docs/prd-e-arquitetura/product-requirements-document.md` com esqueleto das secoes (Objetivo, Escopo dentro/fora, Stack, Arquitetura decisoes, Estrutura de pastas, Roles, Entidades principais, Fluxo principal, Regra de ouro, Decisoes tomadas, Nao-negociaveis de seguranca, Como atualizar) usando placeholders `_(a preencher)_` — vou passar os detalhes na proxima mensagem.
3. Criar `docs/prd-e-arquitetura/banco-de-dados.md` com placeholder — sera preenchido apos definicao do schema.
4. Preencher `docs/prd-e-arquitetura/instrucoes.md` com as regras das secoes 2, 3 e 4 acima (adaptadas ao tom de documento de instrucoes, nao ao tom de prompt).
5. Criar um `CLAUDE.md` inicial na raiz com a estrutura explicada na secao 2, deixando placeholders `_(a preencher)_` nas partes que dependem do projeto especifico (visao geral, stack, scripts, marca), que eu vou te passar na proxima mensagem.
6. Criar `docs/design-system/design-system.md` com esqueleto das secoes numeradas (1. Sobre a marca, 2. Tipografia, 3. Paleta de cores, 4. Border radius e espacamentos, 5. Componentes, 6. Animacoes, 7. Assets, 8. A preencher) usando placeholders `_(a preencher)_` — vou informar a marca e os tokens na proxima mensagem.
7. Criar um `README.md` curto em cada subpasta de assets (`logos/`, `icones/`, `favicon/`) com orientacao de formato e nomenclatura.
8. Copiar este mesmo prompt para `docs/prompt-inicial/prompt-inicial.md`.
9. Criar o primeiro registro em `docs/historico/` como `00-criacao-estrutura-docs-AAAA-MM-DD.md` documentando o que voce acabou de criar.
10. Me avisar ao terminar, para eu te explicar o projeto em si e passarmos para a fase de preencher `product-requirements-document.md`, `CLAUDE.md`, `design-system.md` e criar o plano de acao.

**Nao faca nenhuma outra alteracao no projeto alem dessas.** Nao crie codigo, nao instale dependencias, nao reescreva o README principal ainda — isso vai depender do projeto e sera feito em etapa posterior.

=== ATE AQUI ===

---

## Observacoes para o Cristian (fora do prompt)

- Depois de enviar o prompt acima, a proxima mensagem e explicar o projeto: o que e, para que serve, publico, stack desejada (se ja souber), restricoes. Com isso o agente preenche `CLAUDE.md` e `product-requirements-document.md` de verdade.
- Em seguida, pedir o **plano de acao por fases** (incluindo a fase de testes intermediaria e a rodada final de seguranca). Esse plano vai para `docs/prd-e-arquitetura/` e ganha seu proprio registro em `docs/historico/`.
- Se o projeto ja existir (nao for do zero), pedir ao agente para ler o codigo antes de preencher o PRD, para que ele reflita o estado real.
