const leitor = require("readline-sync");

//1. Qual é a sintaxe básica do loop "while" em JavaScript?

//O while avalia se a condição é verdadeira ou falsa,se for verdadeira 
//era continuará funcionando até que ela receba um valor falso e pare.

let enquanto = 1
while(enquanto <= 5){
    console.log("Valor loop: ", enquanto)
    enquanto++;
}

//2. Como podemos usar o "switch case" em conjunto com o loop "while"?

//Podemos usar o "while" com o "switch case" para criarmos um menu onde o código se repete,por exemplo,no swicth case
//temos as opções de 1 a 5 e para cada opção uma operação enquanto essa afirmação no while for verdadeira,o código
//continuará funcionando,podemos encerrar o código colocando um valor 6 como "SAIDA" e o while seria falso e então
//encerraria o código





//3. Como podemos definir múltiplos casos para um único bloco de código no "switch case"?

//dentro do switch podemos colocar "case (Número ou string):(Dois pontos) seguido da operação que será realizada
//Voçe pode fazer isso quantas vezes quiser dependendo do tamanho do se código






//4. É obrigatório usar a declaração "break" após cada caso no "switch case"?

//Sim pois sem ela o código mostra todas as operações dentro do switch,com o break o código "para" onde ele deveria parar.





//5. Podemos usar expressões booleanas nos casos do "switch case"?

//Sim,como dito na 2 questão,enquanto for true o switch case continuará funcionando até que voçe coloque um valor booleano falso em uma opção do 
//switch case,então ele para ali.




//6. É possível ter um caso padrão no "switch case"? Se sim, como podemos usá-lô?

//Sim, o nome dessa função no switch case é "Default"; é quando nenhum dos valores correspondem aos valores que estão dentro do switch
//é parecido com o "else"






//7. O que acontece se não houver nenhum caso correspondente ao valor fornecido no "switch case"?

//Nenhum bloco de código será mostrado





//8. Podemos usar o "switch case" sem um loop? Se sim, qual seria um exemplo de uso?

//Sim,um exemplo seria algum programa onde voçe pode selecionar algo apenas uma vez ou onde somente uma opção é valida.




//9. É possível ter casos vazios no "switch case"? Se sim, por que usaríamos isso?

//Sim,seria útil para executar vários paraâmetros com uma escolha feita pelo usuário

let dia = 'segunda';

switch (dia) {
  case 'sábado':
  case 'domingo':
    console.log('É fim de semana!');
    break;
  case 'segunda':
  case 'terça':
  case 'quarta':
  case 'quinta':
  case 'sexta':
    console.log('É dia de semana.');
    break;
  default:
    console.log('Dia inválido.');
}

