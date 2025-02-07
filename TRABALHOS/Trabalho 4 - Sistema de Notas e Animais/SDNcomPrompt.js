const leitor = require("readline-sync");

let notaSomada = 0
let notaAlu;
let notaFinal = []
let notasCadaBi = []
let alunoTotal = []
let pararWhilePorAluno = 0
let mediaGeral = 0



function adicionarNotas(n){
nomeProf = leitor.question("Nome professor: ")
nomeDisc= leitor.question("Nome disciplina: ")
quantidadeAlunos = leitor.questionInt("Quantos alunos?: ")
for (var i = 1; i < quantidadeAlunos + 1; i++){
aluno = leitor.question("Nome Aluno: ")
alunoTotal.push(aluno)

}

console.log("Total alunos:",alunoTotal)


while(pararWhilePorAluno < alunoTotal.length){
for (var i = 1; i < n + 1; i++){

console.log(alunoTotal[pararWhilePorAluno])
notaAlu = leitor.questionInt("Nota: ")


while(notaAlu < 0){



  console.log("Número negativo")
  notaAlu = 0
  console.log(alunoTotal[pararWhilePorAluno])
notaAlu = leitor.questionInt("Nota: ")
}





notaSomada += notaAlu

}

notasCadaBi.push(notaSomada)

notaSomada = 0

pararWhilePorAluno++
    
}

console.log("Nota alunos",notasCadaBi)

calcularMédia()


}
adicionarNotas(6) 

























function calcularMédia(){
for (var i = 0; i < alunoTotal.length; i++){

notaFinal.push(notasCadaBi[i] / 6)
console.log("Média",alunoTotal[i],notaFinal[i])

}


determinarAprovação()

}


function determinarAprovação(){
for (var i = 0; i < alunoTotal.length; i++)

    if(notaFinal[i] >= 6){
        console.log(alunoTotal[i],"Aprovado")

    }

    else{
        console.log(alunoTotal[i],"Reprovado")
    }
}








function listarNotas(){

    console.log("Nome professor:",nomeProf)
    console.log("Disciplina:",nomeDisc)

    
for (var i = 0; i < alunoTotal.length; i++){   

    
    console.log("Nome aluno:",alunoTotal[i])
    console.log("Notas:",notasCadaBi[i])

} 
}

listarNotas()


function estatisticas(){
    
for (var i = 0; i < alunoTotal.length; i++){
    
    mediaGeral += notasCadaBi[i]
    
}
    
    console.log("Média geral:",mediaGeral / (6 * alunoTotal.length))
    console.log("Nota máxima:",Math.max(...notasCadaBi))
    
}

estatisticas()