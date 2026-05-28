# Instruções de Trabalho do Projeto

Este documento define o fluxo obrigatório de trabalho, as convenções e a ordem de leitura que devem ser seguidos em todas as alterações neste projeto.

---

## 1. Fluxo Obrigatório

### Antes de qualquer alteração relevante

1. Ler todo o histórico em `docs/historico/` em ordem numérica crescente.
2. Ler `docs/prd-e-arquitetura/product-requirements-document.md` e os arquivos relevantes ao escopo da alteração.
3. Se a alteração tiver impacto visual: ler também `docs/design-system/design-system.md`.
4. Só então propor ou aplicar a alteração.

### Depois de qualquer alteração relevante

1. Criar um arquivo novo em `docs/historico/` seguindo o formato: `NN-descricao-curta-AAAA-MM-DD.md`.
2. Se a alteração impactou PRD ou arquitetura: atualizar `docs/prd-e-arquitetura/`.
3. Se a alteração mudou regras ou fluxo de trabalho: atualizar este arquivo (`instrucoes.md`).
4. Se a alteração tocou em tokens visuais, componentes, animações ou assets de marca: atualizar `docs/design-system/design-system.md`.

---

## 2. O Que Conta Como "Alteração Relevante"

- Criação, remoção ou renomeação de arquivos/pastas.
- Alteração de dependências.
- Mudança de estrutura de rotas, componentes ou lógica de negócio.
- Alteração de conteúdo (se for um projeto de conteúdo).
- Mudança de estilo ou design global.
- Alterações de configuração (build, lint, tipagem, etc.).
- Decisões de arquitetura (mesmo sem código alterado).

---

## 3. Formato do Arquivo de Histórico

**Nome do arquivo:** `NN-descricao-curta-AAAA-MM-DD.md`

- `NN` = número sequencial de 2 dígitos, começando em `00` e incrementando (`00`, `01`, `02` … `10`, `11` …). Sempre olhar os arquivos existentes em `docs/historico/` para usar o próximo número disponível.
- `descricao-curta` = resumo em kebab-case, sem acentos ou caracteres especiais.
- `AAAA-MM-DD` = data da alteração.

**Conteúdo do arquivo:**

```markdown
# <Título da alteração>

- **Data:** AAAA-MM-DD
- **Autor:** <Cristian | Claude>
- **Escopo:** <arquitetura | conteudo | UI | config | infra | outro>

## Contexto / Motivação
Por que essa alteração foi feita.

## O que mudou
Lista objetiva dos arquivos/áreas afetadas.

## Impacto
O que pode quebrar, o que precisa ser revisado, próximos passos.
```

---

## 4. Convenções de Nomenclatura (Obrigatórias)

Válidas para **todo o projeto**:

- Nenhum arquivo ou pasta pode ter acentos ou caracteres especiais (ç, til, crase, etc.). Use ASCII puro.
- Nomes compostos usam kebab-case: `meu-arquivo.md`, `design-system/`, `prd-e-arquitetura/`.
- Textos **dentro** dos arquivos podem ser em pt-BR com acentos normalmente. A restrição é só para **nomes** de arquivos e pastas.

---

## 5. Planos de Ação por Fases

Quando houver uma iniciativa grande:

- Criar um arquivo `plano-de-acao-<nome>.md` em `docs/prd-e-arquitetura/`.
- Dividir em fases numeradas, cada uma com: objetivo, checklist e critério de conclusão claro.
- Uma fase só começa quando a anterior está 100% concluída.
- Intercalar fases de testes entre fases de construção — não deixar testes só para o fim.
- A última fase antes do deploy deve cobrir: sanitização/XSS, auditoria de dependências, headers, segredos, links externos com `rel="noopener noreferrer"`, smoke test manual e re-execução da suite automática.
- Ao final de cada fase: marcar como concluída no plano **e** criar o registro correspondente em `docs/historico/`.

---

## 6. Ordem de Leitura Recomendada

Para um agente novo (ou retomando o projeto após pausa):

1. `CLAUDE.md` (raiz)
2. `docs/prd-e-arquitetura/instrucoes.md` (este arquivo)
3. `docs/historico/` (em ordem numérica crescente)
4. `docs/prd-e-arquitetura/product-requirements-document.md`
5. Demais arquivos em `docs/prd-e-arquitetura/` conforme relevância
6. `docs/design-system/design-system.md` (se a tarefa tiver impacto visual)
