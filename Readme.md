# Hello Devs
---
## Identification

Meu nome é Kevin John, sou programador FullStack, com preferência em Backend. Ao longo da minha carreira como dev, trabalhei com Html+Css+Js e PHP
Também aprofundei em frameworks, onde pude trabalhar com NodeJs e Express, React e VueJs, Laravel 10/11 e 12(Independentemente da versão, eu amo o Laravel😁❤️)

Mas para as minhas praticas, decidi iniciar com JavaScript e se der, farei os exercicios em outras linguagens

---
## Contextualização
Com o avanço da Tecnologia no mundo têm sido criadas novas feramentas e novas habilidades acabam sendo necessarias para o desenvolvimento dos programadores. Agora, em teoria, com o uso de IA, qualquer um pode ser programador(mesmo sendo VibeCoder). Então eu decidi praticar as minhas skils sem AI, pura logica e puro codigo, neste caso em especifico em JavaScript, pedindo pra IA gerar exercicios pra mim, dos basicos aos avancados, para melhorar a minha logica e minhas habilidades.

---

## Motivação
A minha motivação em particular em nao ficar de tras e continuar aprendendo e nao ser dependente de IA (nao usar IA como moleta, mas como dicionario)

---
## Exercicios

---

## 1. Números primos num intervalo (Crivo manual)
Escreva uma função `primosEntre(a, b)` que retorna um array com todos os números primos entre `a` e `b` (inclusive), verificando manualmente a divisibilidade de cada número (sem usar bibliotecas prontas de primos).

---

## 2. Maior sequência de números consecutivos iguais
Dado um array de números, encontre a maior sequência de elementos **repetidos consecutivamente**.
Exemplo: `[1,1,2,2,2,3,1,1,1,1]` → deve retornar `{ valor: 1, quantidade: 4 }`.

---

## 3. Inverter palavras sem inverter as letras
Dada uma frase, inverta a **ordem das palavras**, mas mantendo cada palavra escrita normalmente.
Exemplo: `"o rato roeu a roupa"` → `"roupa a roeu rato o"`. Não pode usar `.reverse()` diretamente no array de palavras — inverta manualmente com um laço.

---

## 4. Verificar se uma string é palíndromo (ignorando espaços e maiúsculas)
Escreva `ehPalindromo(str)` que verifica se uma frase é um palíndromo, ignorando espaços, pontuação e diferença entre maiúsculas/minúsculas, comparando caractere a caractere com dois ponteiros (início e fim), sem usar `.reverse()`.

---

## 5. Matriz — soma das diagonais
Dada uma matriz quadrada (array de arrays), calcule a soma da diagonal principal e da diagonal secundária **usando apenas laços `for`** (sem métodos de array de alto nível).

---

## 6. Rotacionar uma matriz 90 graus
Implemente `rotacionarMatriz(matriz)` que rotaciona uma matriz quadrada 90 graus no sentido horário, **sem criar uma matriz nova** — a rotação deve ser feita "in-place", trocando os valores de posição manualmente.

---

## 7. Contar ocorrências sem usar objetos/Map
Dado um array de números, conte quantas vezes cada número aparece, mas resolva **sem usar objeto `{}` nem `Map`** — apenas com arrays paralelos (um array de valores únicos e outro de contagens).

---

## 8. Fibonacci iterativo com condição
Escreva uma função `fibonacciFiltrado(n)` que gera os primeiros `n` números da sequência de Fibonacci, mas pulando (não incluindo) todo número que seja par. A sequência final deve ter exatamente `n` números ímpares de Fibonacci.

---

## 9. Verificar se um número é "Armstrong"
Um número Armstrong é aquele em que a soma de cada dígito elevado à quantidade total de dígitos é igual ao próprio número (ex: `153 = 1³ + 5³ + 3³`). Escreva `ehArmstrong(n)` que verifica isso para qualquer número, calculando a quantidade de dígitos dinamicamente (sem converter para string, apenas com operações matemáticas `% ` e `/`).

---

## 10. Maior soma de subarray contíguo (sem Kadane nomeado)
Dado um array de números (positivos e negativos), encontre a **maior soma possível de um subarray contíguo**, testando combinações com dois laços aninhados (força bruta), e depois otimize para um único laço, guardando a soma "corrente" e a soma "máxima" em variáveis.

Exemplo: `[-2,1,-3,4,-1,2,1,-5,4]` → soma máxima = `6` (subarray `[4,-1,2,1]`).

---

## 11. Verificar se dois arrays são "anagramas" numéricos
Dados dois arrays de números, verifique se um é uma reorganização do outro (mesmos elementos, mesmas quantidades, ordem diferente) **sem usar `.sort()`** — conte as ocorrências de cada valor manualmente e compare.

---

## 12. Triângulo de Pascal
Gere as primeiras `n` linhas do Triângulo de Pascal como um array de arrays, calculando cada valor a partir da linha anterior com laços (sem fórmula de combinação/fatorial direta).

---

## 13. Maior número formado com os dígitos de um array
Dado um array de números de um único dígito (ex: `[3, 30, 34, 5, 9]` tratados como strings de dígitos), organize-os manualmente (sem `.sort()`) para formar o **maior número possível** ao concatená-los.

---

## 14. Contagem regressiva de dígitos repetidos numa string
Dada uma string de números (ex: `"aabbbcccc"`), sem usar RLE nomeado nem regex, percorra a string com um laço e construa uma nova string mostrando cada caractere seguido da quantidade de vezes que ele se repete consecutivamente (ex: `"a2b3c4"`).

---

## 15. Jogo da velha — verificar vencedor
Dada uma matriz 3x3 representando um tabuleiro de jogo da velha (com `"X"`, `"O"` ou `""`), escreva `verificarVencedor(tabuleiro)` que verifica manualmente todas as linhas, colunas e as duas diagonais para determinar se há um vencedor, retornando `"X"`, `"O"` ou `null` se não houver vencedor ainda.

---

## Dicas gerais
- Resolva primeiro com força bruta (mesmo que não seja o mais eficiente) — o objetivo é treinar raciocínio lógico com laços e condicionais.
- Depois de funcionar, tente otimizar reduzindo o número de laços aninhados.
- Teste sempre com casos pequenos primeiro (arrays de 3 a 5 elementos) antes de testar com entradas maiores.
