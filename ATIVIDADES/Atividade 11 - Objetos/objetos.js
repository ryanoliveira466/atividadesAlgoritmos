const leitor = require("readline-sync")

//1 e 2

var pessoa1 = new pessoa("Ryan",19,"Estudante")

function pessoa(nome,idade,profissao){
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    this.apresentarInfo = `Nome: ${this.nome} \nIdade: ${this.idade} \nProfissão: ${this.profissao}`
}



console.log(pessoa1.apresentarInfo)

//3 e 4

var carro1 = new carro("VolksWagen","Golf GTI MK5",2004)

function carro(marca,modelo,ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.informacoes = `Marca: ${marca} \n Modelo: ${modelo} \n Ano: ${ano}`
}

console.log(carro1.informacoes);

//5 e 6

var produto1 = new produto("Mochila",50,3)

function produto(nome,preco,quantidade){
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
    this.total = `Valor Total: ${preco * quantidade}`
}

console.log(produto1.total)

//7 e 8 

var contaBancaria1 = new contaBancaria("Franscisco",2000,300,1000)

function contaBancaria(titular,saldo,depositar,sacar){
    this.titular = titular
    this.saldo = saldo
    this.depositar = saldo + depositar
    this.sacar = (saldo + depositar) - sacar
  
}

console.log(contaBancaria1.sacar)

//9 e 10 

var livro1 = new livro("Bíblia","Jesus",2366,`Livro está sendo lido`)

function livro(titulo,autor,paginas,ler){
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.ler = ler
    
}

console.log(livro1.ler)
