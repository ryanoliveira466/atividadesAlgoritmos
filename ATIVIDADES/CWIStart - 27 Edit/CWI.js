//REAFAZER !!!//Entrada e Saída de Dados e Operadores



//1

//  function contarFrequencia(s){

//      let word = s.split('')
//      let firstLetter = word[0]
//      let count = 0;
//      let result = []
//      let map = new Map();


//      while (word.length > 0) {

//         for (let i = 0; i < word.length; i++) {

//             //Conta a quantidade de vezes que a letra aparece
//             if(firstLetter == word[i]){
//                 count = count + 1 
//             } 

//         }

//         //Coloca o resultado na array
//         result.push(firstLetter, count)
//         map.set(firstLetter,count);



//         //remove todas as letras que correspondem a letra escolhida da array com cada letra da palavra
//         //usamos while indexOf pois se no array tiver somente 2 letras elas forem iguas como [N,N]
//         //ou se elas estiverem juntas uma com a outra (index1 e index2) então só removerá 1 
//         //pois ele deletará o index e avançará porém o elemento que queriamos deletar vai passar a ser dono do antigo index que foi deletado, assim passando pelo for
//         //na lógica
//         //Com o while garantimos que todos os elementos correspondentes serão deletados para assim então seguir com a lógica  
//         while (word.indexOf(firstLetter) !== -1) {
//             for (let x = 0; x < word.length; x++) {

//                 if(firstLetter == word[x]){
//                     word.splice(x, 1)
//                 } 

//             }   
//         }



//         firstLetter = word[0]
//         count = 0

//      }

//      //Poderia fazer uma lógica onde ele pula de 2 em 2 mas
//      // é mais eficiente definir o map quando pegamos os elementos já prontos
//     //  let map = new Map();

//     //  for (let index = 0; index < result.length; index++) {
//     //     map.set(result[index],result[index]);
//     //  }

//       let obj = {};
//       map.forEach((valor, chave) => {
//       obj[chave] = valor;
//        });

//     console.log(obj);



//  }

//  contarFrequencia("sffdaarrill")


//2

// function produtoElementos(numArray) {

//     let result = 0
//     let firstNumber = numArray[0]

//     for (var i = 1; i < numArray.length; i++) {
//         result = firstNumber * numArray[i]
//         firstNumber = result
//     }

//     console.log(result);


// }

// produtoElementos([5,-2,3])



//3
//    function numeroPerfeito(a){

//     let number = a
//     let result = 0

//     for (var i = 0; i < a; i++){
//         if(a % i === 0){
//             result += i
//         }
//     }

//     if (result == number) {
//         return true

//     }

//     else{
//         return false
//     }




//    }

//    console.log(numeroPerfeito(12));












//++



//Estrutura de Controle

//2
// function contarJedis(n){
//     let jedis = (n+1)/3
//     return Math.round(jedis);  
// }

// q 2 3 q 5 6 q 8 9 q 11 12 q 14 15 q 17 18 q



//*














//REAFAZER !!!//Vetores e Matrizes
//1
//   function duplaMatriz(s){

//     let array = []


//     for (var x = 0; x < s.length; x++) {

//         for (let a = 0; a < s[x].length; a++) {
//             array.push(s[x][a])

//         }

//     }

//       let twins = array
//       let firstElement = twins[0]
//       let arrayWithTwins = []
//       let result = []


//       while (twins.length > 0) {

//          for (let i = 0; i < twins.length; i++) {


//              if(firstElement == twins[i]){
//                 arrayWithTwins.push(firstElement)
//              } 

//          }

//          result.push(arrayWithTwins)
//          arrayWithTwins = []


//          while (twins.indexOf(firstElement) !== -1) {
//              for (let x = 0; x < twins.length; x++) {

//                  if(firstElement == twins[x]){
//                      twins.splice(x, 1)
//                  } 

//              }   
//          }



//          firstElement = twins[0]

//       }

//       console.log(result);


//   }

//   duplaMatriz([['maca', 'pera'], ['pera', 'maca']])


//2

// function somarMaiorMenorNumero(s) {

//     let array = []

//     for (var x = 0; x < s.length; x++) {

//         for (let a = 0; a < s[x].length; a++) {
//             array.push(s[x][a])

//         }

//     }

//     var greater = array[0];
//     var lesser = array[0];


//     for (var i = 1; i < array.length; i++) {

//         if (array[i] > greater) {
//             greater = array[i];
//         }

//         if (array[i] < lesser) {
//             lesser = array[i];
//         }
//     }


//     let arrayWithAllNumbers = array
//     let arrayGreaterLesser = []
//     let result = 0

//         for (let i = 0; i < arrayWithAllNumbers.length; i++) {


//             if (arrayWithAllNumbers[i] == greater || arrayWithAllNumbers[i] == lesser) {
//                 arrayGreaterLesser.push(arrayWithAllNumbers[i])
//             }

//         }

//         const sum = arrayGreaterLesser.reduce((acc, curr) => acc + curr, 0);
//         result = sum


//     console.log(result);


// }

// somarMaiorMenorNumero([[240, 5, 8, 1], [240, 1, 1, 88, 44]])




//3

//  function minusculaMaiuscula(s) {

//      let array = []

//      for (var x = 0; x < s.length; x++) {

//          for (let a = 0; a < s[x].length; a++) {
//              array.push(s[x][a])

//          }

//      }


//      let arrayWithAllLetters = array
//      let arrayUpperLower = []
//      let upper = 0
//      let lower = 0
//      let arrayFinalCountUpLow = []
//      let result = 0

//          for (let i = 0; i < arrayWithAllLetters.length; i++) {

//              for (var e = 0; e < arrayWithAllLetters[i].length; e++) {

//                 let letter = arrayWithAllLetters[i][e]
//                 letter.split("")
//                 arrayUpperLower.push(letter)

//              }

//          }

//          for (var r = 0; r < arrayUpperLower.length; r++) {
//             if (arrayUpperLower[r] === arrayUpperLower[r].toUpperCase()) {
//                 upper = upper + 1

//             }

//             else if(arrayUpperLower[r] === arrayUpperLower[r].toLowerCase()){
//                 lower = lower + 1
//             }

//          }

//          arrayFinalCountUpLow = [upper, lower]
//          result = arrayFinalCountUpLow




//      console.log(result);


//  }

//  minusculaMaiuscula([["AAbbDDs","HHHHH"], ["kkkkkkL","huJq", "xxS"]])













//Algoritmos Básicos

//3

//    function existeDuplicata(array){



//        let arrayElements = array
//        let firstElement = arrayElements[0]
//        let result = false


//        while (arrayElements.length > 0) {


//           for (let i = 1; i < arrayElements.length; i++) {

//               if(firstElement.toLowerCase() == arrayElements[i].toLowerCase()){
//                  result = true  
//                  break;
//               } 

//           }


//           while (arrayElements.indexOf(firstElement) !== -1) {
//               for (let x = 0; x < arrayElements.length; x++) {

//                   if(firstElement == arrayElements[x]){
//                       arrayElements.splice(x, 1)
//                   } 

//               }   
//           }

//           firstElement = arrayElements[0]

//        }

//        console.log(result);



//    }

//    existeDuplicata(['r','a',"c","r"])










//REFAZER!!!//Strings
//1
// function paraSnakeCase(text) {
//     let normalSpaceText = text.split("  ").join(" ").replace(/[^\p{L}\p{N} ]/gu, "");
//     let newText = normalSpaceText.split(" ").join("_").toLowerCase(); 
//     console.log(newText); 
// }

// paraSnakeCase("Meu nome é João")



//2
//  function verificaInicioOuFim(string, substring){

//     let word = string.replace(/[^\p{L}\p{N} ]/gu, "").replace(/\s+/g, ' ').trim();
//     let subWord = substring.replace(/\s+/g, ' ').trim();
//     let words = word.split(' ')
//     let StartsWith = false
//     let EndsWith = false
//     let MidWith = false
//     let NotExist = false
 
//         if (words[0] === subWord) {
//             StartsWith = true
//         }

//         if (words[words.length - 1] === subWord) {
//             EndsWith = true
//         }

//         for (let i = 1; i < words.length - 1; i++) {
//             if (words[i] === subWord) {
//                 MidWith = true
//             }
            
//         }

//         if(EndsWith == false && StartsWith == false && MidWith == false){
//             NotExist = true
//         }

//         if (StartsWith && EndsWith) {
//           return `Sim, começa e termina com "${substring}"`
//         }
//         else if (StartsWith){
//           return `Sim, começa com "${substring}"`
//         }
//         else if (EndsWith){
//           return `Sim, termina com "${substring}"`
//         }
//         else if (MidWith){
//             return `Não começa nem termina com "${substring}"`
//           }
//         else{
//           return `Não existe "${substring}"`
//         }
    

//  }

//  console.log(verificaInicioOuFim('Olá, mundo!, de novo Olá',"Olá"));



//3 
// function concatenar(str1, str2, delimitador){

//     let arrayString = [str1.trim(), str2.trim()]
//     let word = arrayString.join(delimitador)

//     console.log(word);
    
    
// }

// concatenar("Arroz","Vodka",")")
 