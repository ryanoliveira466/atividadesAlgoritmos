//Verificando Idade
const leitor = require("readline-sync");

let idade = leitor.questionInt("Idade: ");

if(idade>=18){
    console.log("Maior de idade");
    }
    else{
        console.log("Menor de idade");
    }
//Número Positivo ou Negativo
let numero = leitor.questionFloat("Numero: ");
if(numero>0){
    console.log("Positivo");
}
else if ( numero < 0){
    console.log("Negativo");
}
else{
    console.log("O número é um zero");
}
//Login Simples
const senha = 1234;

let senha1 = leitor.questionInt("Senha: ");

if(senha1===senha){
    console.log("Login Bem Sucedido");
}
else{
    console.log("Senha incorreta");
}
//Calculadora Básica
let numero1 = leitor.questionFloat("N1: ");
let numero2 = leitor.questionFloat("N2: ");
let operação = leitor.question("Operação: ");
if(operação === "+"){
    console.log("Soma: ", numero1 + numero2);
}
else if (operação === "-"){
    console.log("Subtração: ", numero1 - numero2);
}
else if (operação === "/"){
    console.log("Divisão: ", numero1 / numero2);
}
else if (operação === "*"){
    console.log("Multiplicação: ", numero1 *numero2);
}
//Maior de Três Números
let n1 = leitor.questionFloat("N1: ");
let n2 = leitor.questionFloat("N2: ");
let n3 = leitor.questionFloat("N3: ");

if(n1>n2 && n1>n3){
    console.log(n1);
}
else if(n2>n1 && n2>n3){
    console.log(n2);
}
else if(n3>n1 && n3>n2){
    console.log(n3);
}
   
