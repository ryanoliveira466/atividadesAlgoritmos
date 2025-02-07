//INTERPRETAÇÃO

//1. O código vai fazer a soma até chegar no número 4
//variável "valor" recebe o resultado 1 na primeira rodada do loop,e essa ação se repete até "valor" ser 4 

//2. a) Vai ser impresso os números 19,21,23,25,27,30 pois são maiores de 18
// b) Fiz esse código que mostra o índice e o elemento da array

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

function verifyIndex(n){
    for (var i = 0; i < n ; i++){
    
    let index = 0
    index = index =+ i;
    console.log("index position: ",index ,"Array element", lista[index]);
    
}
}

verifyIndex(lista.length) //// n = number of elements

//3 Seria impresso "*", "**" , "***" , "****" e depois disso o código iria parar pois o "while" não seria mais true


