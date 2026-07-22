// Minha explicacao
// Ex: `[1,1,2,2,2,3,1,1,1,1]` →    
//                   deve retornar `{ valor: 1, quantidade: 4 }`
let contar = 1, maiorContador = 1, numeroVencedor = 1
let maisConsecutivo = 0

let meuArray = [1,1,2,2,2,3,1,1,1,1]

for (let i = 0; i < meuArray.length-1; i++) {
    if (meuArray[i] == meuArray[i+1]) {
        contar+=1
        if (contar > maiorContador) {
            maiorContador = contar
            numeroVencedor = meuArray[i]
        }
    }else {
        contar = 1;
    }
}

console.log("O maior contador foi: "+maiorContador)
console.log("O número vencedor foi: "+numeroVencedor)