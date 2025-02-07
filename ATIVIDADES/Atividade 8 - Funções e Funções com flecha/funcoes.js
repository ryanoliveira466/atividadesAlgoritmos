const leitor = require("readline-sync");

let a = leitor.questionInt("N1: ");
let b = leitor.questionInt("N2: ");

function média(a, b){
   return (a + b) / 2;
}

console.log(média(a, b ));

//1 a)

function eu(){
    return 'Eu sou Ryan de Oliveira,tenho 19 anos moro em Novo Hamburgo e sou estudante.';
}
console.log(eu());

//1 b)
let nome;
let idade;
let cidade;
let profissão;

function info(nome, idade, cidade, profissão){
nome = "Laís"
idade = "23"
cidade = "São Paulo"
profissão = "Instrutora"

    console.log('Eu sou', nome,'tenho', idade,'moro em', cidade,'e sou', profissão)

} 
info(nome,idade,cidade,profissão);

//2 a)

let num1 = leitor.questionInt("N1: ");
let num2 = leitor.questionInt("N2: ");

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(num1, num2));

//2 b)

let num3 = leitor.questionInt("N1: ");
let num4 = leitor.questionInt("N2: ");

function igualMaior(num3, num4){
    return num3 >= num4;
}

console.log(igualMaior(num3, num4));

//2 c)

let num5 = leitor.questionInt("N1: ");

function par(num5){
    return num5%2===0
}

console.log(par(num5));

//2 d)

let string;

function frase(string){
    
    string = leitor.question("Frase: ");
    console.log(string.length)
    console.log(string.toUpperCase());
    
}
frase(string);

//3 a)

let num11 = leitor.questionInt("N1: ")
let num22 = leitor.questionInt("N2: ")

function mais(num11, num22){
return num11 + num22;

}

 function menos(num11 , num22){
    return num11 - num22;
 }

 function divisão(num11, num22){
    return num11 / num22;
 }

 function multiplicação(num11, num22){
    return num11 * num22;
 }

 console.log("Soma: ",mais(num11, num22),
            "Menos: ",menos(num11, num22),
            "Divisão: ",divisão(num11, num22),
            "Multiplicação: ",multiplicação(num11, num22));

 //4 a)
const arrow=(a)=>console.log(a);

arrow('Oi')

//4 b)
const arrow2=(c2, c)=>console.log(c2 + c);

arrow2();

let c2 = 5
let c = 5

arrow(arrow2(c2, c));

//5 
let catA;
let catB;
let fórmula;
let hip;

function hipotenusa(catA, catB){
catA = leitor.questionFloat("Cateto A: ");
catB = leitor.questionFloat("Cateto B: ");
fórmula = (catA**2 + catB**2)
hip = Math.sqrt(fórmula)

console.log(hip);
}

hipotenusa(catA, catB)
