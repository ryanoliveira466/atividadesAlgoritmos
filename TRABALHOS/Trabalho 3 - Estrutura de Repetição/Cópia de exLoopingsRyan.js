const leitor = require("readline-sync");

//EXERCÍCIOS

//1

let petsNumber = leitor.questionInt("Quantos pets você tem?: ");

let arrayPets = []

if(petsNumber > 0){

for(var i = 0; i < petsNumber; i++){
    
    let namePets = leitor.question("Digite os nomes deles: ")
    arrayPets.push(namePets)
}

console.log(arrayPets)

}

else{
console.log("Que pena! Você pode adotar um pet!")

}

//2 a)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function verifyElementsArray(n){
for (var i = 0; i < n ; i++){

    let index = 0
    index = index =+ i;
    console.log("Array element", arrayOriginal[index]);

}
}

verifyElementsArray(arrayOriginal.length)

// b)

const arrayOriginal2 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function verifyElementsArray1(n){
for (var i = 0; i < n ; i++){

    let index = 0
    index = index =+ i;
    console.log("Array element", arrayOriginal[index] / 10);

}
}

verifyElementsArray1(arrayOriginal2.length)

// c)

const arrayOriginal3 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayNovo = []

function verifyElementsArray2(n){
for (var i = 0; i < n ; i++){

    let index = 0
    index = index =+ i;
    if(arrayOriginal3[index] % 2 === 0 ){
       arrayNovo.push(arrayOriginal3[index]) 

    }
    
}

console.log(arrayNovo)

}

verifyElementsArray2(arrayOriginal3.length)

// d)

const arrayOriginal4 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arraynovo2 = []

function verifyIndex(n){
    for (var i = 0; i < n ; i++){
    
    let index = 0
    index = index =+ i;
    
    arraynovo2.push("O elemento do índex",index,"é",arrayOriginal4[index])
    
}

console.log(arraynovo2)
}

verifyIndex(arrayOriginal4.length)

// e)

console.log("O maior número é",Math.max(...arrayOriginal5),"e o menor é",Math.min(...arrayOriginal5))













  





