const leitor = require("readline-sync");
//Desafio
let numero1;
let numero2;
numero1 = leitor.questionInt("Primeiro número, ");
numero2 = leitor.questionInt("Segundo número, ");
console.log("O primeiro número somado ao segundo número resulta em", numero1 + numero2)
console.log("O primeiro número multiplicado pelo segundo número resulta em", numero1 * numero2 )
//Desafio2
let numero3;
let numero4;
numero3 = leitor.questionInt("Primeiro número, ");
numero4 = leitor.questionInt("Segundo numero, ");
let x = numero3 * numero4;
let y = numero3 / numero4;
console.log("Multiplicação", x );
console.log("Divisão", y );