const leitor = require("readline-sync");
//1


function main(){
    console.log('Use the val keyword when the value doesnt change.');
    console.log('Use the var keyword when the value can change.');
    console.log('When you define a function, you define the parameters that can be passed to it.');
    console.log('When you call a function, you pass arguments for the parameters.');
}
 main();

//2

let item;
let valor;
let desconto;
let precoFinal

function main1(item, valor, desconto){
precoFinal = valor*(desconto/100) 
console.log('Item: ',item , 'Valor: ',valor ,'Desconto: ',valor - precoFinal,);

}

main1('Celular', 1460, 15);

//3

let adultos;
let criancas;
let totalPessoas;

function main2(adultos, criancas){
totalPessoas = adultos + criancas
    console.log('The total party size is:',totalPessoas,'Total');
}

main2(30, 10);

//4

let inss;
let irrf;
let salarioBruto;
let salarioLiquido;

function main3(salarioBruto){
//INSS

if(salarioBruto<=1320){
    inss = (salarioBruto*(7.5/100))
}
else if(salarioBruto>=1320.01&&salarioBruto<=2571.29){
    inss = (salarioBruto*(9/100))
}
else if(salarioBruto>=2571.30&&salarioBruto<=3856.94){
    inss = (salarioBruto*(12/100))
}
else if(salarioBruto>=3856.95&&salarioBruto<=7507.49){
    inss = (salarioBruto*(14/100))
}

else if(salarioBruto>7507.49){
    inss = 0
}
//IRRF

if(salarioBruto<=2112){
    irrf = 0
}
else if(salarioBruto>=2112.01&&salarioBruto<=2826.65){
    irrf = (salarioBruto*(7.50/100) - 158.04)
}
else if(salarioBruto>=2826.66&&salarioBruto<=3751.05){
    irrf = (salarioBruto*(15/100) - 370.04)
}
else if(salarioBruto>=3751.06&&salarioBruto<=4664.68){
    irrf = (salarioBruto*(22.50/100) - 651.73)
}
else if(salarioBruto>=4668.69){
    irrf = (salarioBruto*(27.50/100) - 884.96)
}

salarioLiquido = salarioBruto - inss - irrf
console.log('Bruto:',salarioBruto,'INSS',inss,'IRRF',irrf,'Líquido',salarioLiquido,);
}

main3(3000)

//5

function main4(){
    operacoes(10, 10, 10)
}

function operacoes(num1, num2, num3){
    function soma(){
        console.log(num1 + num2 + num3);
    }
    
    function menos(){
        console.log(num1 - num2 - num3);
    }
    
    function divisao(){
        console.log(num1 / num2 / num3);
    }
    
    function multiplicacao(){
        console.log(num1 * num2 * num3);
    }

    soma();
    menos();
    divisao();
    multiplicacao();
}

main4();

//6

function main5(){

    displayAlertMessage("Ryan", "Android"); // Call the function here
}

function displayAlertMessage(nomeUsuario, sistemaOp){
        console.log("There's a new sign-in request on",nomeUsuario,"for your Google Account",sistemaOp)
    }
main5()

//7

function main6(){
    timeSpent(10, 20)
}
    function timeSpent(tempoGastoHoje, tempoGastoOntem){
if(tempoGastoHoje>tempoGastoOntem){
    console.log(tempoGastoHoje>tempoGastoOntem);
}
else if(tempoGastoHoje===tempoGastoOntem){
    console.log("Mesmo tempo")
}
else{
    console.log(tempoGastoHoje<tempoGastoOntem===tempoGastoHoje>tempoGastoOntem)}
    
}
main6()
