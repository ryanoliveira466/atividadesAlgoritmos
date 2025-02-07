const leitor = require("readline-sync");


//Questão 1 
// 1.1

let num1 = leitor.questionInt("Insira um número: ")
let num2 = leitor.questionInt("Insira um número: ")

function soma(a,b){
    console.log(a + b)
}

soma(num1,num2)

//1.2

let num3 = leitor.questionInt("Insira um número: ")
let num4 = leitor.questionInt("Insira um número: ")

function multiplicacao(a,b){
    console.log(a * b)
}

multiplicacao(num3,num4)

//1.3

//Já chamadas


















//Questão 2
//2.1



let arrayString = []

let string = leitor.question("String para ser invertida: ")


// O valor de "i" começa com o valor total do tamanho da string - 1 por causa do index que começa por 0
//Depois disso o "i" que começa com o valor total da string vai subtraindo por - 1 até chegar em 0 onde está a última letra da string (usamos o "for" para fazer esse loop)


function inverterString(string){

for (var i = string.length - 1; i > -1; i--){
    
    arrayString.push(string[i])
    
}




console.log(arrayString.toString())


}




inverterString(string)

//2.2


let a;
let string2 = leitor.question("String para contar as vogais: ")

function contarVogais(string2){

    console.log(string2.match(/[aeiou]/g));
    a = string2.match(/[aeiou]/g)
    console.log(a.length)

}

contarVogais(string2)

//2.3
//Já chamadas













//Questão 3
//3.1 , 3.2 & 3.3

var pessoa1 = new pessoa("Ryan",19)
var pessoa2 = new pessoa("Francisco",60)


function pessoa(nome,idade){
    this.nome = nome
    this.idade = idade
    this.apresentar = `Nome: ${nome} \nIdade: ${idade}`
}

console.log(pessoa1.apresentar)
console.log(pessoa2.apresentar)




















//Questão 4 
//4.1

let resultadoSoma = 0
let numeros = [1,2,3,4,5]

function somarArray(numeros){

for(var i = 0; i < numeros.length ; i++){

resultadoSoma += numeros[i]


}


console.log(resultadoSoma)

}

somarArray(numeros)



//Questão 5
//5.1

let respostaUsuario;
let stringTelefone = []
let arrayAgenda = []
menu = true

//Criamos uma variável "menu" com o valor de "true" assim o usuário pode adicionar vários contatos.
//Quando esse menu tiver o valor de "false",esse ciclo vai parar.

while(menu){
let nome1 = leitor.question("Nome contato: ")
let telefone1 = leitor.question("Telefone: ")
let email1 = leitor.question("Email: ")

let pessoa = new contato(nome1,telefone1,email1)


function contato(nome,telefone,email){
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.informacoes = ` Nome ${nome}\n Telefone ${telefone}\n Email ${email}`
}





//Criamos uma array onde é armazenada o contato que foi escrito.
//Vários contatos podem ser colocados nessa array contanto que o usuário queira adicionar mais e que o menu seja "true" 

function adicionarContato(a){

    arrayAgenda.push(a)
}

adicionarContato(pessoa)






//Aqui perguntamos se o usuário deseja prosseguir adicionando contatos
//Se a resposta for "sim" então ele vai poder repitir o ciclo desde o iníco do código;o ciclo de adicionar um novo contato e esse contato ser armazenado na array junto com o contato que foi armazenado anterirmente
//Se a reposta for "não" então o código ativa a função de listar contatos,listando todos os contatos que foram colocados até agora e o menu por sua fez se torna "false",parando o ciclo

respostaUsuario = leitor.keyInYNStrict('Gostaria de continuar?');


if(respostaUsuario === true){
    menu = true
}

if(respostaUsuario === false){
    menu = false

    function listarContatos(){

        for(var i = 0; i < arrayAgenda.length ; i++){
    
    
        console.log(`Contato índex`, i)
    
        console.log(arrayAgenda[i].informacoes)
    
        }
    
    }
    
    
    listarContatos()






}

}
