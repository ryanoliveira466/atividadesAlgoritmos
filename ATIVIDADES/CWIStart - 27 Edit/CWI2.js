//Funções, Vetores e Matrizes - Refazer 1

//1 function somarNumeroPalavras(s) {

//          let array = []

//          for (var x = 0; x < s.length; x++) {

//              for (let a = 0; a < s[x].length; a++) {
//                  array.push(s[x][a])

//              }

//          }


//          let arrayWithAllLetters = array
//          let arrayLetter = []
//          let arrayOnlyNumber = []
//          let result = 0

//              for (let i = 0; i < arrayWithAllLetters.length; i++) {

//                  for (var e = 0; e < arrayWithAllLetters[i].length; e++) {

//                     let letter = arrayWithAllLetters[i][e]
//                     letter.split("")
//                     arrayLetter.push(letter)

//                  }

//              }




//               for (var r = 0; r < arrayLetter.length; r++) {
//                  if (!isNaN(parseFloat(arrayLetter[r]))) {
//                     arrayOnlyNumber.push(parseFloat(arrayLetter[r]))   
//                  }
//               }




//               const sum = arrayOnlyNumber.reduce((acc, curr) => acc + curr, 0);
//               result = sum
//               console.log(result);

//               return result

//      }

//      somarNumeroPalavras([["A2AbbDDs","HH2HHH"], ["kkkk2kkL","hu2Jq", "xx2S"]])





//2

//   function minusculaMaiuscula(s) {

//       let array = []

//       for (var x = 0; x < s.length; x++) {

//           for (let a = 0; a < s[x].length; a++) {
//               array.push(s[x][a])

//           }

//       }


//       let arrayWithAllLetters = array
//       let arrayUpperLower = []
//       let upper = 0
//       let lower = 0
//       let arrayFinalCountUpLow = []
//       let result = 0

//           for (let i = 0; i < arrayWithAllLetters.length; i++) {

//               for (var e = 0; e < arrayWithAllLetters[i].length; e++) {

//                  let letter = arrayWithAllLetters[i][e]
//                  letter.split("")
//                  arrayUpperLower.push(letter)

//               }

//           }

//           for (var r = 0; r < arrayUpperLower.length; r++) {
//              if (arrayUpperLower[r] === arrayUpperLower[r].toUpperCase()) {
//                  upper = upper + 1

//              }

//              else if(arrayUpperLower[r] === arrayUpperLower[r].toLowerCase()){
//                  lower = lower + 1
//              }

//           }

//           arrayFinalCountUpLow = [upper, lower]
//           result = arrayFinalCountUpLow




//       console.log(result);


//   }

//   minusculaMaiuscula([["AAbbDDs","HHHHH"], ["kkkkkkL","huJq", "xxS"]])


//3


//    function duplaMatriz(s){

//      let array = []


//      for (var x = 0; x < s.length; x++) {

//          for (let a = 0; a < s[x].length; a++) {
//              array.push(s[x][a])

//          }

//      }

//        let twins = array
//        let firstElement = twins[0]
//        let arrayWithTwins = []
//        let result = []


//        while (twins.length > 0) {

//           for (let i = 0; i < twins.length; i++) {


//               if(firstElement == twins[i]){
//                  arrayWithTwins.push(firstElement)
//               } 

//           }

//           result.push(arrayWithTwins)
//           arrayWithTwins = []


//           while (twins.indexOf(firstElement) !== -1) {
//               for (let x = 0; x < twins.length; x++) {

//                   if(firstElement == twins[x]){
//                       twins.splice(x, 1)
//                   } 

//               }   
//           }



//           firstElement = twins[0]

//        }

//        console.log(result);


//    }

//    duplaMatriz([['maca', 'pera'], ['pera', 'maca']])











//Algoritmos Básicos

//1

// function encontrarKthMaior(array, k) {

//     let finalArray = []
//     let arrayNum = array
//     let result = 0


//      while (arrayNum.length > 0) {

//         let excluirArrayoriginal = 0
//         let num = arrayNum[0]

//         for (var i = 0; i < arrayNum.length; i++) {
//             if (num < arrayNum[i]) {
//                 num = arrayNum[i]
//                 excluirArrayoriginal = i
//             }

//         }

//         if(excluirArrayoriginal > 0){
//             arrayNum.splice(excluirArrayoriginal,1)
//         }

//         else{
//             arrayNum.splice(0,1)
//         }

//         finalArray.push(num)


//      }

//      result = finalArray[k-1]
//      console.log(result);




// }

// encontrarKthMaior([5,10,9,8,8,7] , 2)




//2
//  function menor(array, k) {

//      let finalArray = []
//      let arrayNum = array
//      let result = 0


//       while (arrayNum.length > 0) {

//          let excluirArrayoriginal = 0
//          let num = arrayNum[0]

//          for (var i = 0; i < arrayNum.length; i++) {
//              if (num > arrayNum[i]) {
//                  num = arrayNum[i]
//                  excluirArrayoriginal = i
//              }

//          }

//          if(excluirArrayoriginal > 0){
//              arrayNum.splice(excluirArrayoriginal,1)
//          }

//          else{
//              arrayNum.splice(0,1)
//          }

//          finalArray.push(num)


//       }

//       result = finalArray[0]
//       console.log(result);




//  }

//  menor([5,10,9,8,8,7])



//3

// function numeroExiste(x, array){
//     let num = x
//     let boolean = false

//     for (let i = 0; i < array.length; i++) {
//         if (num === array[i]) {
//             boolean = true
//         }

//     }

//     return boolean
// }









//Strings
//1
// function capPrimeiraLetra(string) {
//     let arraySplitedWords = string.split(" ");

//     for (let i = 0; i < arraySplitedWords.length; i++) {
//         let word = arraySplitedWords[i];
//         arraySplitedWords[i] = word.charAt(0).toUpperCase() + word.slice(1);
//     }

//     let result = arraySplitedWords.join(" ");
//     console.log(result);
// }

// capPrimeiraLetra('arroz banana'); // Arroz Banana





//2
//   function verificaInicioOuFim(string, substring){

//      let word = string.replace(/[^\p{L}\p{N} ]/gu, "").replace(/\s+/g, ' ').trim();
//      let subWord = substring.replace(/\s+/g, ' ').trim();
//      let words = word.split(' ')
//      let StartsWith = false
//      let EndsWith = false
//      let MidWith = false
//      let NotExist = false

//      console.log(word);


//          if (words[0] === subWord) {
//              StartsWith = true
//          }

//          if (words[words.length - 1] === subWord) {
//              EndsWith = true
//          }

//          for (let i = 1; i < words.length - 1; i++) {
//              if (words[i] === subWord) {
//                  MidWith = true
//              }

//          }

//          if(EndsWith == false && StartsWith == false && MidWith == false){
//              NotExist = true
//          }

//          if (StartsWith && EndsWith) {
//            return `Sim, começa e termina com "${substring}"`
//          }
//          else if (StartsWith){
//            return `Sim, começa com "${substring}"`
//          }
//          else if (EndsWith){
//            return `Sim, termina com "${substring}"`
//          }
//          else if (MidWith){
//              return `Não começa nem termina com "${substring}"`
//            }
//          else{
//            return `Não existe "${substring}"`
//          }


//   }

//   verificaInicioOuFim('Olá, mundo!, de novo Olá',"Olá");


//3

// function inverterString(string) {
//     let arrayNormalFlow = string.split("")
//     let arrayUpsideFlow = []
//     let upsideDownWord = 0

//     for (var i = arrayNormalFlow.length - 1; i >= 0; i--) {
//         arrayUpsideFlow.push(arrayNormalFlow[i])
//     }

//     upsideDownWord = arrayUpsideFlow.join("")

// }

// inverterString('laranja')






//Estrutura de Controle Refazer - 2

//1

// function contarMedalha(medals) {



//     if (medals.length != 5) {
//         return `Array não tem exatamente 5 elementos`
//     }

//     let trues = []



//     for (var i = 0; i < medals.length; i++) {
//         if (medals[i] == true) {
//             trues.push(true)
//         }
//     }

//     console.log(trues);

//     if (trues.length >= 1 && trues.length < 2) {
//         return `Bronze`
//     }

//     if (trues.length >= 3 && trues.length < 5) {
//         return `Prata`
//     }

//     if (trues.length == 5) {
//         return `Ouro`
//     }

// }

// console.log(contarMedalha([true,true,true,true,true]));



// 2
//  function finalizacaoRapida(vidaInimigo, danosPorTurno, turnosMaximos) {

//      let expected = vidaInimigo
//      let damagePerRound = danosPorTurno
//      let maxRound = turnosMaximos
//      let howManyRoundToEnd = 0
//      let damageDuringRounds = 0
//      let percentage = 0
//      let outOfRounds = false




//      for (var i = 0; i < maxRound; i++) {
//          damageDuringRounds = damageDuringRounds + damagePerRound
//          howManyRoundToEnd++

//          if (damageDuringRounds >= expected ) {
//             console.log(howManyRoundToEnd);
//              break;
//          }   
//      }






//      if (!(damageDuringRounds >= expected)) {
//         outOfRounds = true

//      }

//      else{
//         percentage = howManyRoundToEnd / maxRound
//         percentage = percentage * 100
//      }








//     if(outOfRounds){
//         return `C`
//     }

//      if (percentage <= 25) {
//          return `S`
//      }

//      if(percentage > 25 && percentage <= 50){
//          return `A`
//      }

//      if (percentage > 50 && percentage <= 100) {
//          return `B`
//      }




//  }

//console.log(finalizacaoRapida(100,50,10));
//console.log(finalizacaoRapida(120,30,10));
//console.log(finalizacaoRapida(200,25,8));


//3


// function funcaoAtaque(valorDado,modificador,dificuldade) {

//     let finalAttack = valorDado + modificador
//     let valueToBeat = dificuldade

//     if (finalAttack >= valueToBeat) {
//         return true
//     }
//     else{
//         return false
//     }

// }











//Entrada e Saída de Dados e Operadores
//1
// function impares(array) {

//     let arrayOdd = []

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 1) {
//             arrayOdd.push(array[i])
//         }
//     }

//     const sum = arrayOdd.reduce((acc, curr) => acc + curr, 0);
//     return sum
// }




//2
// function numeroPerfeito(a){

//  let number = a
//  let result = 0

//  for (var i = 0; i < a; i++){
//      if(a % i === 0){
//          result += i
//      }
//  }

//  if (result == number) {
//      return true

//  }

//  else{
//      return false
//  }




// }

// console.log(numeroPerfeito(12));



//3
// function vezesNumeroArray(array) {
//     const product = array.reduce((acc, curr) => acc * curr, 1);
//     return product
// }    










//Ambiente e Variáveis - Refazer
//1
// function somarIdade(person1, person2) {

//     let persons = [person1, person2]
//     let boolean = false

//     for (var i = 0; i < persons.length; i++) {
//         if (typeof persons[i].name !== "string" || typeof persons[i].age !== "number" || persons[i].age < 0) {
//             boolean = true
//             break;
//         }
//     }

//     if (boolean) {
//         return `Tipos para name/string e age/number estão incorretos ou age negativo`
//     }

//     else {
//         let ages = person1.age + person2.age
//         return ages
//     }


// }

// console.log(somarIdade({
//     "name": "Ryan",
//     "age": 21
// },
//     {
//         "name": "Sophia",
//         "age": 16
//     }));




//2

// function minuscula(word) {

//     if(typeof word !== "string"){
//         return `Parâmetro não é do tipo "string"`
//     }

//     else{
//         return word.toLocaleLowerCase()
//     }

// }






//3
//  function ehDesenvolvedor(person) {

//     if (
//         typeof person !== 'object' ||
//         person === null ||
//         Array.isArray(person) ||
//         Object.keys(person).length === 0
//     ) {
//         return `Parâmetro não é do tipo "object ou objeto vazio"`
//     }

//      else{

//         if (typeof person.name !== 'string' || typeof person.job !== 'string') {
//             return `Parâmetros do objetos são diferentes de string`
//         }

//         else{

//             if ((person.job).toLowerCase() == "desenvolvedor") {
//                 return true
//              }

//              else{
//                 return false
//              }

//         }
//      }

//  }



// console.log(ehDesenvolvedor(
//     {name: "asa",
//         job:"Desenvolvesdor"

//     }
// ));





//JSON - Refazer
//1 aninhados
// let obj = {
//     "a": {
//         "b": {
//             "c": {
//                 "d": 10
//             }
//         }
//     }
// }


// function buscarValorAninhado(obj, chave) {

//     let boolean = true

//     if (obj === null || Object.keys(obj).length === 0) {
//         return null
//     }

//     if (typeof chave !== 'string') {
//         return `Key is not a string`
//     }


//     let objEachInteraction = obj
//     let result = 0
//     while (boolean) {

//         let found = false;


//         for (const key in objEachInteraction) {



//             if (chave === key) {
//                 result = objEachInteraction[key]
//                 boolean = false
//                 found = true

//             }

//             else {
//                 objEachInteraction = objEachInteraction[key]
//                 found = true
//             }

//         }

//         if (!found) {
//             boolean = false;
//             result = null;
//         }

//     }




//     for (const key in objEachInteraction) {
//         result = objEachInteraction[key]
//         break;
//     }

//     console.log(result);


// }

// buscarValorAninhado(obj, "a");



//2

// function removerPropriedade(obj, remover) {

//     let object = obj
//     let arrayRemover = remover
//     let keys = []


//     if (object === null || Object.keys(object).length === 0) {
//         return {}
//     }

//     for (const key in object) {

//         for (var a = 0; a < arrayRemover.length; a++) {
//             if (arrayRemover[a] == key) {
//                 delete object[key]
//             }

//         }

//     }


//     console.log(object);


// }


// removerPropriedade(
//     {
//         "a": 1,
//         "b": 2,
//         "c": 3
//     },
//     ["a","c"]
// )





//3

// function jsonParaQueryString(obj) {

//     const invalidCharsRegex = /[<>"\^`{}|\\^]/;

//     for (const key in obj) {

//         if (typeof obj[key] !== 'string' && typeof obj[key] !== 'number') {
//             return "Error: Only strings or numbers are allowed.";
//         }


//         if (invalidCharsRegex.test(obj[key])) {
//             return "Error: Special characters are not allowed.";
//         }
//     }


//     let stringQuery = "";
//     for (const key in obj) {
//         stringQuery += `${key}=${obj[key]}&`;
//     }


//     if (stringQuery.endsWith("&")) {
//         stringQuery = stringQuery.slice(0, stringQuery.length - 1);
//     }

//     return stringQuery;
// }

// console.log(jsonParaQueryString({
//     'name': "Maria",
//     "cargo": 1
// }));


// console.log(jsonParaQueryString({
//     'name': "Maria@home",
//     "cargo": "Desenvolvedora"
// }));

