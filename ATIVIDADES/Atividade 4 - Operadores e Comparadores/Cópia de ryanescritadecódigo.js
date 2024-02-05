//1

const leitor = require("readline-sync");
let a = leitor.questionInt("Sua idade?: ");
let b = leitor.questionInt("Idade Amigo? ");
console.log("Sua idade é maior do que a do seu melhor amigo?", a>b);
const diferença = a - b;
console.log("Diferença de idade", diferença);

//2

let a1 = leitor.questionInt("Número par: ");
const divisão = a1%2;
console.log("Resultado: ", divisão);

//C Quando colocamos um número par, o resultado sempre será 0
//D Se colocarmos um número ímpar, o resultado sempre será 1

//3

let a3 = leitor.questionInt("Idade anos: ");
let b2 = a3*12
let b3 = a3*365
let b4 = a3*8766

console.log("Mês: ", b2 ,"Ano: " ,b3 ,"Hora: ", b4);

//4

let c = leitor.questionInt("N1: ");
let d = leitor.questionInt("N2: ");


console.log("O primeiro numero é maior que segundo?" , c>d);
console.log("O primeiro numero é igual ao segundo?" , c===d);
console.log("O primeiro numero é divisível pelo segundo?" , c%d==0);
console.log("O segundo numero é divisivel pelo primeiro?" , d%c==0);
