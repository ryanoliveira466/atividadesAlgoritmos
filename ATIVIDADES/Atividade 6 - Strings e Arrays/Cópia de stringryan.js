const leitor = require("readline-sync");
//1
let nome = leitor.question("Nome: ");
let cor = leitor.question("Cor favorita: ");
console.log(`A cor favorita de ${nome} é ${cor}`);
console.log("A cor favorita de", nome , "é",  cor,);

//2
let frase = leitor.question("Insira uma frase: ");
const novafrase = frase.replace("o","i")
 console.log(frase.toUpperCase());
 console.log(novafrase)
 console.log(frase.length);

 //3
 const array = ["dog1", "dog2", "dog3", "dog4", "dog5"];
 let posição = leitor.questionInt("Insira número de 0 a 4: ");
 console.log(array[posição]);

 //4
 let numeros = [1,2,3,4,5,6];
 console.log(numeros.length);
 numeros.push(7);
 console.log(numeros)
 numeros.splice(3,2);
 console.log(numeros.length);
console.log(numeros);
