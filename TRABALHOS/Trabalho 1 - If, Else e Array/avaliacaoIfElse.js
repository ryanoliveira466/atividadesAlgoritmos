const leitor = require("readline-sync");
//1

let num1 = leitor.questionInt("Número 1: ");
let num2 = leitor.questionInt("Número 2: ");

if(num1>0 && num2>0){
    console.log("Soma dos positivos: ", num1 + num2);
}
else{
    console.log("Números não positivos")
}
//2

let num11 = leitor.questionInt("Número 1: ");
let num22 = leitor.questionInt("Número 2: ");

if(num11%2===0 || num22%2===0){
    console.log("Multiplicação" , num11 * num22);
}
else{
    console.log("Números inválidos");
}

//3
let num111 = leitor.questionInt("Número 1: ");
let num222 = leitor.questionInt("Número 2: ");

if(num222!==0){
    console.log("Divisão: ", num111 / num222);
}
else{
    console.log("Divisor inválido");
}

//4
let array = [1,2,3,4,5,6];
array.splice(0,1)
console.log(array);
array.splice(4,1);
console.log(array);

//5
let string = "eu sou uma pessoa muito gentil"
console.log(string.match(/[aeiou]/g));

//6
let string1 = "eu sou uma pessoa muito gentil"
console.log(string1.match(/[^aeiou]/g));

//7
let array1 = [1,2,3,4,5,6];

if(array1.length>=2){
    console.log(array1[array1.length - 1]);
}
else{
    console.log("Menos que dois elementos");
}

//8
let array2 = [1,2,3,4,5];

if(array2.length>=1 && array2[0]>0){
    console.log("Array", array2);
}
else{
    console.log("Não atende os requisitos");
}




