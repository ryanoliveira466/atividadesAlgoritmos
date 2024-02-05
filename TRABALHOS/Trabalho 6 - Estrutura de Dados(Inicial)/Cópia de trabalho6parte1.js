const leitor = require("readline-sync");

let reclamacao;
let menu = true
let confirmacao;

// Implementação de uma Fila em JavaScript
class Fila {
    constructor() {
    this.items = [];
    }
    // Adiciona um elemento ao final da fila

    enfileirar(element) {
    this.items.push(element);
    }
    // Remove o elemento no início da fila e retorna-o

    desenfileirar() {
    if (this.isEmpty()) {
    return "A fila está vazia";
    }
    return this.items.shift();
    }
    // Retorna o elemento no início da fila sem removê-lo

    frente() {
    if (this.isEmpty()) {
    return "A fila está vazia";
    }
    return this.items[0];
    }
    // Verifica se a fila está vazia

    isEmpty() {
    return this.items.length === 0;
    }
    // Retorna o tamanho da fila

    tamanho() {
    return this.items.length;
    }
    }


    let fila = new Fila();

    
    // Exemplo de uso da Fila
    while(menu){
    let quantidadeReclamacao = leitor.questionInt("Quantos problemas voçe quer relatar? ")

    

    for(var i = 0; i < quantidadeReclamacao ; i++){

        reclamacao = leitor.question("Qual o problema a ser relatado? ")
        fila.enfileirar(reclamacao);
      
      }

      confirmacao = leitor.keyInYNStrict("Deseja adicionar mais reclamações? ")

      if(confirmacao === true){
        menu = true
    }
    
    if(confirmacao === false){
        
    console.log(fila.desenfileirar()); // Saída: 1
    console.log(fila.frente()); // Saída: 2
    console.log(fila.tamanho()); // Saída: 2
    menu = false

}


}






//2