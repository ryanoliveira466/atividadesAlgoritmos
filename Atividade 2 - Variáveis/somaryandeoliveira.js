const leitor = require("readline-sync");
//Exercício 1
//Letra A
let meuNome;
//Letra B
let idade;
//Letra C
console.log(typeof meuNome);
console.log(typeof idade);
//Resposta D :Aparece como undefined porque não atribuimos um valor a ela.
//Letra E
meuNome = leitor.question("Qual e o seu nome; ");
idade = leitor.questionInt("Qual e a sua idade; ");
//Letra F: O tipo das variáveis apareceu porque elas agora têm um valor definido.
console.log(typeof meuNome);
console.log(typeof idade);
//Letra G
console.log("Olá", meuNome, "você tem", idade, "anos!")
//Exercício 2 
let perguntas;
perguntas = leitor.question("voce esta bem?; ");leitor.question("sua roupa e vermelha?: ");leitor.question("seus olhos sao castanhos, ");
let a1 = leitor.question("voce esta bem?; ");
let a2 = leitor.question("sua roupa e vermelha?: ");
let a3 = leitor.question("seus olhos sao castanhos, ");
console.log("voce esta bem?", a1, "sua roupa e vermelha?", a2, "seus olhos sao castanhos?", a3, );
//Exercício 3
let a = 10;
let b = 25;
let c;
c = a
a = b
b = c
console.log("O novo valor de a é", a , "O novo valor de b é", b ,);
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