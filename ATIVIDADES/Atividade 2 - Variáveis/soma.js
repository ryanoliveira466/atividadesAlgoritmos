const leitor = require("readline-sync");
//1
let numero1;
let numero2;
numero1 = leitor.questionInt("N1; ");
numero2 = leitor.questionInt("N2; ");
let soma = numero1 + numero2;

console.log("Soma é igual a", soma);
//2
let numero3;
let numero4;
let numero5;
numero3 = leitor.questionInt("N1: ");
numero4 = leitor.questionInt("N2: ");
numero5 = leitor.questionInt("N3: ");
let soma2 = (numero3 * numero4) / numero5;
console.log("A conta é igual a ", soma2);

//3
let numero6;
let numero7;
let numero8;
numero6 = leitor.questionInt("N1: ");
numero7 = leitor.questionInt("N2: ");
numero8 = leitor.questionInt("N3: ");
let soma3 = (numero6 - numero7) * numero8;


console.log("A conta é igual a ", soma3);
//4
let numero9;
let numero10;
numero9 = leitor.questionInt("N1: ");
numero10 = leitor.questionInt("N1: ");
let soma4 = numero9%numero10
console.log("A conta é igual a ", soma4);