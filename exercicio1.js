let a, b
let menor, maior, resto, num
let nprimo = 0
let ehprimo = 0
let contar = 0
let primos = []

//Procurar numeros primos entre a e b
function primosEntre(a, b) {
    if (a <= 1 || b <= 1) {
        console.log("Um dos numeros é menor ou igual à 1, logo não pode ser primo")
    } else if (a == 2 && b > 2) {
        console.log("A é um numero primo")
        console.log("Logica de B por implementar o que fazer....")
    } else if (b == 2 && a > 2) {
        console.log("B é um numero primo")
        console.log("Logica de A por implementar o que fazer....")
    } else {
        if (a > b) {
            console.log("A Maior")
            maior = a
            menor = b
        } else if (b > a) {
            console.log("B Maior")
            menor = a
            maior = b
        } else {
            console.log("A e B são iguais")
            maior = a
            menor = b
        }
        console.log("Valor de A: " + a)
        console.log("Valor de B: " + b)

        console.log("Maior Valor é: " + maior)
        console.log("Menor Valor é: " + menor)



        for (let i = menor; i <= maior; i++) {
            num = i
            // console.log("Num agora é: " + num)

            if ((num % 2) == 0) {
                // console.log("O numero é par, log não serve")
            } else {
                let j = 2
                while (j <= num) {
                    resto = num % j
                    // console.log(resto)

                    if (resto == 0) {
                        contar++
                    }

                    j++
                }
                if (contar>=2) {
                    // console.log("É impar, mas não é primo")
                } else {
                    // console.log("É um nr primo")
                    primos.push(i)
                }
                contar = 0
            }

        }
    }
    
    //Imprimindo a lista dos numeros que são primos
    console.log("Lista de numeros primos: " + primos)
}

console.log("Testando a função")

primosEntre(3, 100)
