const leitor = require("readline-sync");

let acoesDesenvolvedores;
let confirmacao;
let confirmacaoDesempilhar;
let acoes;
let acoesDesempilhadas = []
let quantidadeDesempilhar;
let quantidadeEmpilhar;
let confirmacaoEmpilhar;
let confirmacaoMenu;
let confirmacaoMenu2;




// Implementação de uma Pilha em JavaScript
class Pilha {
    constructor() {
    this.items = [];
    }
    // Adiciona um elemento ao topo da pilha
    empilhar(element) {
    this.items.push(element);
    }
    // Remove o elemento do topo da pilha e retorna-o
    desempilhar() {
    if (this.isEmpty()) {
    return "A pilha está vazia";
    }
    return this.items.pop();
    }
    // Retorna o elemento do topo da pilha sem removê-lo
    topo() {
    if (this.isEmpty()) {
    return "A pilha está vazia";
    }
    return this.items[this.items.length - 1];
    }
    // Verifica se a pilha está vazia
    isEmpty() {
    return this.items.length === 0;
    }
    // Retorna o tamanho da pilha
    tamanho() {
    return this.items.length;
    }
    }
    // Exemplo de uso da Pilha

    let pilha = new Pilha();

    //Função para relatar atividades

    parteUm()

    function parteUm(){
   
    acoesDesenvolvedores = leitor.questionInt("Quantas atividades voce quer relatar? ")

    for(var i = 0; i < acoesDesenvolvedores ; i++){

    acoes = leitor.question("Qual atividade a ser relatada? ")
    pilha.empilhar(acoes);
      
    }


    confirmacao = leitor.keyInYNStrict("Deseja adicionar mais atividades? ")
    

    if(confirmacao === true){

    parteUm()
    return;

    }


    if(confirmacao === false){

    confirmacaoDesempilhar = leitor.keyInYNStrict("Deseja desempilhar a atividade passada?")

    }

if(confirmacaoDesempilhar === false){

    console.log("Topo:",pilha.topo()); // Saída: 2
    console.log("Tamanho:",pilha.tamanho()); // Saída: 2


    confirmacaoMenu = leitor.keyInYNStrict("Quer iniciar o programa novamente?")


    if(confirmacaoMenu === true){
        parteUm()
        return;
    }

    if(confirmacaoMenu === false){
        console.log("ACABOU")
    }

}

if(confirmacaoDesempilhar === true){

    quantidadeDesempilhar = leitor.questionInt("Quantas atividades deseja desempilhar? ")

    for(var i = 0 ; i < quantidadeDesempilhar ; i++){
        
    acoesDesempilhadas.push(pilha.desempilhar())
    
}

parteDois()

}

}


//Função para empilhar novamente
function parteDois(){
console.log("Pilha:",pilha.items)
console.log("Quantidade restante:", pilha.tamanho())
console.log("Acoes desempilhadas:" ,acoesDesempilhadas)


confirmacaoEmpilhar = leitor.keyInYNStrict("Deseja empilhar alguma atividade anterior?")


if(confirmacaoEmpilhar === false){

     console.log("Atividades desempilhadas:", acoesDesempilhadas)
     console.log("Pilha:",pilha.items)
     console.log("Topo da pilha:",pilha.topo()); // Saída: 2
     console.log("Quantidade da pilha:",pilha.tamanho()); // Saída: 2
     


    let = confirmacaoMenu1 = leitor.keyInYNStrict("Quer iniciar o programa novamente?")

    if(confirmacaoMenu1 === true){
        parteUm()
        return;
    }

    if(confirmacaoMenu1 === false){
        console.log("ACABOU")
    }
    
}

if(confirmacaoEmpilhar === true){

for (var i = 0; i < acoesDesempilhadas.length ; i++){
    console.log("Posição",i, "Elemento",acoesDesempilhadas[i])
}

    
    console.log(acoesDesempilhadas)
   
    
    quantidadeEmpilhar = leitor.questionInt("Qual ativiade gostaria de empilhar: ")
    

    pilha.empilhar(acoesDesempilhadas[quantidadeEmpilhar])
    acoesDesempilhadas.splice(quantidadeEmpilhar, 1)


    console.log("Atividades desempilhadas restantes",acoesDesempilhadas)
    console.log("Pilha:",pilha.items)
    console.log("Topo da pilha:",pilha.topo()); // Saída: 2
    console.log("Quantidade da pilha:",pilha.tamanho()); // Saída: 2




    confirmacaoMenu2 = leitor.keyInYNStrict("Quer empilhar novamente?")



    if(confirmacaoMenu2 === true){
        parteDois()
        return;
    }


    if(confirmacaoMenu2 === false){

    let confirmacaoMenu4 = leitor.keyInYNStrict("Quer iniciar o programa novamente?")

    if(confirmacaoMenu4 === true){
        parteUm()
        return;
    }

    if(confirmacaoMenu4 === false){
       console.log("ACABOU")
    }



}

}

}










    




















