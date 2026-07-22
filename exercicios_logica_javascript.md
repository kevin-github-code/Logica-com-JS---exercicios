# Lista de Exercícios de Lógica de Programação — JavaScript (Nível Difícil)

> Todos os exercícios devem ser resolvidos **apenas em JavaScript puro** (sem bibliotecas externas).
> Recomenda-se resolver primeiro no papel/pseudo-código antes de codificar.

---

## 1. Sequência de Collatz com memória
Escreva uma função `collatzSteps(n)` que retorna o número de passos necessários para que `n` chegue a 1, seguindo a conjectura de Collatz:
- Se `n` é par: `n = n / 2`
- Se `n` é ímpar: `n = 3n + 1`

Depois, otimize a função usando um **cache (memoization)** para evitar recalcular sequências já conhecidas, e escreva `collatzMax(limit)` que retorna o número entre `1` e `limit` que produz a sequência mais longa.

---

## 2. Parênteses balanceados com múltiplos tipos
Implemente `isBalanced(str)` que recebe uma string contendo `()`, `[]`, `{}` misturados com outros caracteres (letras, números) e retorna `true` se todos os parênteses estiverem corretamente balanceados e aninhados, `false` caso contrário. Não pode usar regex para resolver a lógica principal — apenas estrutura de pilha (array como stack).

---

## 3. Maior subsequência crescente (LIS)
Dado um array de números, implemente `longestIncreasingSubsequence(arr)` que retorna o **comprimento** da maior subsequência estritamente crescente (os elementos não precisam ser contíguos).

Exemplo: `[10, 9, 2, 5, 3, 7, 101, 18]` → `4` (subsequência `[2, 3, 7, 18]`).

Bônus: resolva em complexidade O(n log n).

---

## 4. Detecção de ciclo em lista ligada
Implemente uma lista ligada simples em JS (com `next`) e a função `hasCycle(head)` usando o algoritmo de **Floyd (tartaruga e lebre)** para detectar se há um ciclo, sem usar `Set`/`Map` para marcar nós visitados.

---

## 5. Resolver labirinto (Backtracking)
Dado um labirinto representado por uma matriz de `0` (caminho livre) e `1` (parede), escreva `solveMaze(matrix, start, end)` que retorna **um caminho válido** (array de coordenadas) do ponto inicial ao final, usando backtracking. Se não houver caminho, retorne `null`.

---

## 6. Parser de expressões matemáticas
Implemente `evaluateExpression(str)` que recebe uma string como `"3 + 4 * (2 - 1) / 2"` e retorna o resultado numérico, respeitando a precedência de operadores e parênteses — **sem usar `eval()` ou `Function()`**. Dica: implemente um parser recursivo (shunting-yard ou parser descendente recursivo).

---

## 7. Permutações sem repetição
Escreva `permutations(arr)` que retorna todas as permutações possíveis de um array, sem usar bibliotecas prontas. Otimize para evitar permutações duplicadas quando o array tiver elementos repetidos.

---

## 8. Problema das N-Rainhas
Implemente `solveNQueens(n)` que retorna todas as soluções possíveis para posicionar `n` rainhas num tabuleiro `n x n` sem que se ataquem mutuamente. Cada solução deve ser representada como um array de posições (índice da coluna por linha).

---

## 9. Compressão Run-Length reversível
Implemente `compress(str)` e `decompress(str)` que fazem compressão RLE (ex: `"aaabbbcc"` → `"a3b3c2"`) e a operação inversa. Trate corretamente números que já existiam na string original (ex: caracteres numéricos misturados com letras) sem gerar ambiguidade.

---

## 10. Grafo — caminho mais curto sem bibliotecas
Dado um grafo representado como lista de adjacência (objeto JS), implemente `dijkstra(graph, start)` que retorna as distâncias mínimas do nó `start` a todos os outros nós, implementando você mesmo uma **min-heap (fila de prioridade)** em JavaScript puro (proibido usar arrays com `.sort()` a cada iteração).

---

## 11. Detector de anagramas em massa
Escreva `groupAnagrams(words)` que recebe um array de milhares de palavras e retorna grupos de anagramas, com complexidade eficiente (evite comparar todas as palavras entre si — pense em uma chave canônica por grupo).

---

## 12. Máquina de estados para validação de JSON simplificado
Implemente `isValidMiniJSON(str)` que valida (retorna `true`/`false`) se uma string representa um JSON simplificado válido — suportando apenas objetos `{}`, arrays `[]`, strings, números e booleanos — implementado como uma **máquina de estados finita**, sem usar `JSON.parse`.

---

## 13. Torres de Hanói generalizada (4 pinos)
Implemente a solução clássica das Torres de Hanói com 3 pinos e depois generalize para **4 pinos** (algoritmo de Frame-Stewart), retornando a sequência de movimentos e o número mínimo de movimentos para `n` discos.

---

## 14. Autômato celular (Jogo da Vida)
Implemente o Jogo da Vida de Conway numa grade toroidal (as bordas se conectam, formando um "mundo" contínuo). Escreva `nextGeneration(grid)` que retorna o próximo estado da grade, e `simulate(grid, steps)` que retorna o estado após `n` gerações.

---

## 15. Escalonador de tarefas com dependências (Ordenação Topológica)
Dado um conjunto de tarefas com dependências (ex: `{ A: [], B: ['A'], C: ['A', 'B'] }`), implemente `scheduleTasks(deps)` que retorna uma ordem válida de execução usando **ordenação topológica**, detectando e reportando erro caso exista uma dependência cíclica.

---

## Regras gerais
- Não é permitido usar bibliotecas externas (lodash, etc.) nem `eval`.
- Priorize legibilidade e comente a lógica das partes mais complexas.
- Sempre que possível, analise e escreva a complexidade (Big O) da sua solução.
- Teste cada função com pelo menos 3 casos, incluindo casos-limite (arrays vazios, valores negativos, entradas grandes).
