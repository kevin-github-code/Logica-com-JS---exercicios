/*
Exemplo: "o rato roeu a roupa" → "roupa a roeu rato o".
 Não pode usar .reverse() diretamente no array de palavras
  — inverta manualmente com um laço.
*/

// Esta é a frase que queremos inverter
let frase = "o rato roeu a roupa"
// Esta é a lista de palavras que vamos criar
let listaPalavras = []
// Esta é a frase invertida que vamos criar
let fraseInvertida = []
// Esta é a palavra atual que vamos criar
let palavraAtual = ""

// A logica aqui é que queremos pegar cada palavra da frase e adicionar a lista de palavras
// Para isso, vamos percorrer a frase e verificar por cada caractere se é um espaço ou não
// Se for um espaço, significa que a palavra atual terminou e vamos adicionar a lista de palavras
// Se não for um espaço, significa que a palavra atual continua e vamos adicionar o caractere a palavra atual
for (let i = 0; i < frase.length; i++) {
  if(frase[i] !== " ") {
    palavraAtual += frase[i]
  } else {
    listaPalavras.push(palavraAtual)
    palavraAtual = ""
  }
}

// Então, após conseguir a lista de palavras, vamos percorrer a lista de palavras e inverte-la e adicionar a frase invertida
for (let j = 4; j > 0; j--) {
   fraseInvertida.push(listaPalavras[j])  
}

// Então, vamos imprimir a frase invertida
console.log(fraseInvertida.join(" "))