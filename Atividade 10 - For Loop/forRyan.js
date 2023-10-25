const leitor = require("readline-sync");
//1

for(let i = 0; i<11; i++){
    console.log(i)
}

//2

let m = leitor.question("Numero:  ");
for(i = 0; i<11; i++){
    
    console.log("Multiplicação", i*m)
}

//3 Escreva um programa que calcule a soma de todos os números pares de 1 a 50 usando um loop "for".

let soma = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        soma = soma + i;
    }
}
console.log(soma);




