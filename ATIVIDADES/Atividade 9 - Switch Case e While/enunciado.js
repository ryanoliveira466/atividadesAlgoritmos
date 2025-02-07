//1. Crie um loop "while" que solicite ao usuário um número de 1 a 3 e exiba uma
//mensagem correspondente usando "switch case".

const leitor = require("readline-sync");

let menu = true 

while(menu){
    let opcoes = leitor.questionInt("Número de 1 a 3: \n")

    switch(opcoes){
        case 1:
        console.log("Bom")
        break;
    
        case 2:
        console.log("Ótimo")
        break;
    
        case 3:
        console.log("Excelente")
        break; 

        default:
            console.log("Número inválido")
            menu = false
}
}

//2. Faça um loop "while" que peça ao usuário para digitar uma cor e, em seguida,
//use "switch case" para exibir uma mensagem correspondente do tipo “Amarelo
//me lembra primavera”, use sua criatividade!.

let menu1 = true

while(menu1){
    let cores = leitor.question("Digite uma cor: \n")

    switch(cores){
    case "Amarelo":
    console.log("Amarelo da cor do sol")
    break;
            
    case "Veremlho":
    console.log("Vermelho da cor do amor")
    break;
            
    case "Verde":
    console.log("Verde da cor da natureza ")
    break;
            
    case "Azul":
    console.log("Azul da cor do mar")
    break;

    default:
        console.log("Cor inválida")
        menu1 = false
    }
}

//3. Faça um loop "while" que peça ao usuário para digitar um número de 1 a 12 e,
//em seguida, use "switch case" para exibir o nome do mês correspondente.

let menu2 = true

while(menu2){
    let meses = leitor.questionInt("Selecione um número de 1 a 12: \n")

    switch(meses){
            case 1:
            console.log("Janeiro") 
            break;

            case 2:
            console.log("Fevereiro") 
            break;

            case 3:
            console.log("Março") 
            break;

            case 4:
            console.log("Abril") 
            break;

            case 5:
            console.log("Maio") 
            break;

            case 6:
            console.log("Junho") 
            break;

            case 7:
            console.log("Julho") 
            break;

            case 8:
            console.log("Agosto") 
            break;

            case 9:
            console.log("Setembro") 
            break;

            case 10:
            console.log("Outubro") 
            break;

            case 11:
            console.log("Novembro") 
            break;

            case 12:
            console.log("Dezembro") 
            break;

            default:
                console.log("Número inválido")
                menu2 = false
    }
}

//4. Crie um loop "while" que solicite ao usuário um código de produto (A, B ou C) e
//exiba uma mensagem informando o preço correspondente usando "switch
//case".

let menu3 = true

while(menu3){

let codigoProduto = leitor.question("Código produto: \n")

switch(codigoProduto){
        case "A":
        console.log("Celular, 1200R$")
        break;

        case "B":
        console.log("Fone Bluetooth, 150R$")
        break;

        case "C":
        console.log("Controle XBOX, 300R$")
        break;

        default:
            console.log("Código inválido")
            menu3 = false
}
}

//5. Crie um loop "while" que solicite ao usuário uma nota de 0 a 100 e exiba uma
//mensagem informando o conceito correspondente (A, B, C, D ou F) usando
//"switch case". Utilize condicionais nessa questão.

//Não consegui usar o switch case nessa questão:

let menu4 = true

while(menu4){
    
    let avaliacao = leitor.question("Nota de 0 a 100: ");

    if(avaliacao <=20){
        console.log("NOTA F");
    }
    
    else if(avaliacao>=21 && avaliacao <=40){
        console.log("NOTA D");

    }

    else if(avaliacao>=41 && avaliacao <=60){
        console.log("NOTA C");

    }

    else if(avaliacao>=61 && avaliacao <=80){
        console.log("NOTA B"); 
    
    }

    else if(avaliacao>=81 && avaliacao <=100){
        console.log("NOTA A")
    }

    else if(avaliacao>100){
        console.log("Número inválido")
    }

    else if(avaliacao === "F"){
    console.log("Saindo")
    menu4 = false
    }

    else{
        console.log("Opção inválida")
    }
}   

//6. Crie um loop "while" que solicite ao usuário uma opção de transporte (carro,
//ônibus ou bicicleta) e exiba uma mensagem informando a velocidade média
//correspondente usando "switch case".

menu5 = true

while(menu5){
    
    let transportes = leitor.question("Selecione carro,onibus ou bicicleta:  ")

    switch(transportes){
        case "carro":
        console.log("Quase todos os carros podem atingir 160 km/h")
        break;

        case "onibus":
        console.log("Velocidade média de ônibus é 17 km/h")
        break;

        case "bicicleta":
        console.log("velocidade média de uma bicicleta speed gira em torno de 15 km/h a 25 km/h,")
        break;

        default:
            console.log("Opção inválida")
            menu5 = false

    }
} 

//7. Faça um loop "while" que peça ao usuário para digitar um número de 1 a 5 e,
//em seguida, use "switch case" para exibir uma mensagem correspondente ao
//número digitado.

menu6 = true

while(menu6){

    let numeros = leitor.questionInt("Esolha entre 1 a 5:  ")

    switch(numeros){

        case 1:
        console.log("Quando um homem aprende a amar,ele tem que lidar com o risco de odiar");
        break;

        case 2:
            console.log("A regra de ensino básica; \nVoçe não pode abrir a mente de outro se não tiver uma mente aberta");
        break;

        case 3:
            console.log("Aqueles que seguem o caminho da vingança nunca acabam bem,voçe só se destrói,e ainda que tenha sucesso voçe se vinga \nE o que sobrará com isso? Nada! Um vazio")
        break;

        case 4:
            console.log("Portanto,um homem bom,ainda que seja escravo é livre;mas um homem mau,ainda que seja rei,é escravo.\nPois este serve não a um homem,somente,mas o que é pior,a tantos senhores quantos forem seus vícios")
        
        break;

        case 5:
            console.log("Um lugar onde pensam em voçe,esse lugar voçe pode chamar de lar");
        break;

        default:
            console.log("Opção inválida");
            menu6 = false

    }
}