//Ambientes e variáveis
//1
// function numeroParaString(num){
//     return num.toString()
// }
//2
//ehDev
//3
//somarIdade








//Estrutura de controle
//1
// function aplicarDesconto(valor, descontoPercentual) {
//     let desconto = valor * (descontoPercentual / 100);
//     let valorFinal = valor - desconto;
//     return valorFinal;
//   }

//   console.log(aplicarDesconto(200, 10)); // 180
//2
//vidaInimigo
//3

// function factorial(n){

//     let fac = 1
//     for (var i = 1; i < n + 1; i++) {
//         fac = fac * i
//     }

//     return fac
// }

// console.log(factorial(3))







//Funções, Vetores e Matrizes
//1
//    function contarLetraPalavra(s, letter) {

//        let array = []

//        for (var x = 0; x < s.length; x++) {

//            for (let a = 0; a < s[x].length; a++) {
//                array.push(s[x][a])

//            }

//        }


//        let arrayWithAllLetters = array
//        let arrayUpperLower = []
//        let upper = 0
//        let arrayFinalCount = []
//        let result = 0

//            for (let i = 0; i < arrayWithAllLetters.length; i++) {

//                for (var e = 0; e < arrayWithAllLetters[i].length; e++) {

//                   let letter = arrayWithAllLetters[i][e]
//                   letter.split("")
//                   arrayUpperLower.push(letter)

//                }

//            }

//            for (var r = 0; r < arrayUpperLower.length; r++) {
//               if (arrayUpperLower[r].toLowerCase() === letter.toLowerCase()) {
//                   upper = upper + 1

//               }    
//            }


//            arrayFinalCount = [upper]
//            result = arrayFinalCount




//        console.log(result);


//    }

//     contarLetraPalavra([["AabbDDs","HHHHH"], ["kkkkkkL","huJq", "xxS"]],'a')

//2
//Separar palavras pelo seu tamamho .length
// function separarPalavraTamanho(s) {
//     let array = [];

//     // Junta todas as palavras em um único array
//     for (let x = 0; x < s.length; x++) {
//         for (let a = 0; a < s[x].length; a++) {
//             array.push(s[x][a]);
//         }
//     }

//     let twins = [...array];
//     let result = [];

//     while (twins.length > 0) {
//         let firstElement = twins[0];
//         let arrayWithTwins = [firstElement.length];

//         // Agrupa todas as palavras com o mesmo tamanho
//         for (let i = 0; i < twins.length; i++) {
//             if (firstElement.length === twins[i].length) {
//                 arrayWithTwins.push(twins[i]);
//             }
//         }

//         result.push(arrayWithTwins);

//         // Remove as palavras já agrupadas
//         twins = twins.filter(palavra => palavra.length !== firstElement.length);
//     }

//     // Ordena os grupos com base no tamanho (primeiro item de cada subarray)
//     result.sort((a, b) => a[0] - b[0]);

//     console.log(result);
// }


// separarPalavraTamanho([['maca', 'sol', 'lua', 'filme'], ['gato', 'amor','bocas'],['jogo', 'ceu', 'dente', 'cubos']]);
// // Saída: [[3, "sol", "lua", "céu"], [4, "maca", "pera"]]

//3
// UpperLower

//    function minusculaMaiuscula(s) {

//        let array = []

//        for (var x = 0; x < s.length; x++) {

//            for (let a = 0; a < s[x].length; a++) {
//                array.push(s[x][a])

//            }

//        }


//        let arrayWithAllLetters = array
//        let arrayUpperLower = []
//        let upper = 0
//        let lower = 0
//        let arrayFinalCountUpLow = []
//        let result = 0

//            for (let i = 0; i < arrayWithAllLetters.length; i++) {

//                for (var e = 0; e < arrayWithAllLetters[i].length; e++) {

//                   let letter = arrayWithAllLetters[i][e]
//                   letter.split("")
//                   arrayUpperLower.push(letter)

//                }

//            }

//            for (var r = 0; r < arrayUpperLower.length; r++) {
//               if (arrayUpperLower[r] === arrayUpperLower[r].toUpperCase()) {
//                   upper = upper + 1

//               }

//               else if(arrayUpperLower[r] === arrayUpperLower[r].toLowerCase()){
//                   lower = lower + 1
//               }

//            }

//            arrayFinalCountUpLow = [upper, lower]
//            result = arrayFinalCountUpLow




//        console.log(result);


//    }

//    minusculaMaiuscula([["AAbbDDs","HHHHH"], ["kkkkkkL","huJq", "xxS"]])



//JSON
//1
// function normalizarJSON(obj) {

//     let newObj = {}

//     for (let key in obj) {

//        newObj[key.toLowerCase()] = obj[key]
//       }

//       return newObj


// }

// normalizarJSON(
//     {
//       'noME': 'Ryna',
//       'idade' : 25  
//     }
// )

//2
// function ordenarJSON(arr, atributo) {
//     return arr.sort((a, b) => {
//       if (typeof a[atributo] === 'string') {
//         return a[atributo].localeCompare(b[atributo]);
//       }
//       return a[atributo] - b[atributo];
//     });
//   }

//   console.log(ordenarJSON(
//     [{ nome: 'Ryan', idade: 10 }, { nome: 'Sophia', idade: 20 }],
//     'nome'
//   ));


//3
// function removerValorNulo(obj) {
//     let newObj = {};

//     for (let key in obj) {
//         if (obj[key] !== null) {
//             newObj[key] = obj[key];
//         }
//     }

//     return newObj;
// }


// console.log(removerValorNulo({'nome': null, 'idade': 20}));

















//myWay
//Separar palavars pelo seu tamanho .length
//  function separarPalavraTamanho(s) {
//      let array = [];


//      for (let x = 0; x < s.length; x++) {
//          for (let a = 0; a < s[x].length; a++) {
//              array.push(s[x][a]);
//          }
//      }

//      let twins = [...array];
//      let result = [];




//      while (twins.length > 0) {
//          let firstElement = twins[0];
//          let arrayWithTwins = [firstElement.length];


//          for (let i = 0; i < twins.length; i++) {
//              if (firstElement.length === twins[i].length) {
//                  arrayWithTwins.push(twins[i]);
//              }
//          }

//          result.push(arrayWithTwins);




//          let = arrayAddElementDiferentLengthThanBefore = []
//          for (let x = 0; x < twins.length; x++) {

//              if (firstElement.length !== twins[x].length) {
//                 arrayAddElementDiferentLengthThanBefore.push(twins[x])
//              }

//          }

//          twins = arrayAddElementDiferentLengthThanBefore
//          arrayAddElementDiferentLengthThanBefore = []

//      }


//       result.sort((a, b) => a[0] - b[0]);

//     for (var i = 0; i < result.length; i++) {
//         const element = array[i];

//     }

//      console.log(result);
//  }


//  separarPalavraTamanho([['maca', 'sol', 'lua', 'filme'], ['gato', 'amor', 'bocas'], ['jogo', 'ceu', 'dente', 'cubos']]);




//FOR LOOPS DO WHILE

// function ordenarJSON(arr, atributo) {
//     let len = arr.length;
//     let swapped;

//     do {
//       swapped = false;
//       for (let i = 0; i < len - 1; i++) {
//         let a = arr[i][atributo];
//         let b = arr[i + 1][atributo];

//         let shouldSwap = false;

//         if (typeof a === 'string' && typeof b === 'string') {
//           if (a.localeCompare(b) > 0) {
//             shouldSwap = true;
//           }
//         } else if (a > b) {
//           shouldSwap = true;
//         }

//         if (shouldSwap) {
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//           swapped = true;
//         }
//       }
//     } while (swapped);

//     return arr;
//   }

//   console.log(ordenarJSON(
//     [{ nome: 'Ryan', idade: 10 }, { nome: 'Sophia', idade: 20 }],
//     'nome'
//   ));


















//Desafio Final

//1
// function dadosNasa(dados) {
//     let data = dados.replace(/,/g, " ").split(" ").filter(item => item.trim() !== "");
//     let distanceMilionsKm = parseFloat(data[2])
//     let velocityKm = parseFloat(data[1])
//     let diameter = parseFloat(data[3])

//     let risk = "Baixo"

//     if (velocityKm > 30000 && velocityKm <= 50000 && (distanceMilionsKm < 10) == false) {
//         risk = "Moderado"
//     }

//     if (distanceMilionsKm < 10 || velocityKm > 50000) {
//         risk = "Alto"
//     }






//     if (diameter > 500) {
//         if (risk == "Baixo") {
//             risk = "Moderado"
//         }

//         else if(risk == "Moderado"){
//             risk = "Alto"
//         }
//     }





//     let objData = {
//         "asteroide":data[0],
//         "velocidadeKmh": parseFloat(data[1]),
//         "distanciaMilhoesKm":parseFloat(data[2]).toFixed(2),
//         "diametroMetros":parseFloat(data[3]),
//         "risco":risk
//     }

//     console.log(objData);



// }

// // dadosNasa("Apophis, 50000, 20, 450")
// // dadosNasa("Bennu, 60000, 8, 600")
// dadosNasa("Bennu, 30000, 15, 200")





//2
//  function calcularIMC(array){
//      let objectsArray = []
//      array.forEach(element => {
//          newObj = {
//              "nome": element[0],
//              "imc": (element[1]/element[2] ** 2).toFixed(2),
//              "classificacao": categoriaIMC(element[1], element[2]),
//              "idade": element[3],
//          }

//          objectsArray.push(newObj)
//      });

//     return objectsArray.sort((a, b) => parseFloat(a.imc) - parseFloat(b.imc));

//  }



// function categoriaIMC(weight,height) {
//     let bmi = weight/height ** 2

//     if (bmi <= 18.5) {
//         return "Abaixo do normal"
//     }

//     if (bmi >= 18.6 && bmi <= 24.9) {
//         return "Peso normal"
//     }

//     if (bmi >= 25.0 && bmi <= 29.9) {
//         return "Sobrepeso"
//     }

//     if (bmi >= 30.0 && bmi <= 34.9) {
//         return "Obesidade grau 1"
//     }

//     if (bmi >= 35.0 && bmi <= 39.9) {
//         return "Obesidade grau 2"
//     }

//     if (bmi >= 40) {
//         return "Obesidade grau 3"
//     }

// }


// console.log(calcularIMC([["Carlos", 75, 1.80, 45],["José", 90, 1.70, 40],["Maria", 55, 1.65, 32]]));


//3

function analisarDesmatamentoPorDecada(data) {

    data.sort((a, b) => a[0] - b[0])
    let arrayYears = []


    for (var i = 0; i < data.length; i++) {
        arrayYears.push(data[i][0])
    }


    //


    let arrayDecades = []
    let arrayDecadesForIfs = []

    for (var r = 0; r < arrayYears.length; r++) {

        let year = arrayYears[r].toString();
        let beginDecade = year.slice(0, -1) + 0;
        let endDecade = year.slice(0, -1) + 9;
        let decade = `${beginDecade}-${endDecade}`
        arrayDecades.push(decade)

        for (let i = 0; i < arrayDecades.length - 1; i++) {
            if (decade === arrayDecades[i]) {
                arrayDecades.splice(i, 1);
                i--;  
            }
        }

    }


    arrayDecades.forEach(element => {

        let modifiedString = element.replace("-", ",");
        let yearArray = modifiedString.split(",");
        arrayDecadesForIfs.push(yearArray)

    });




    //

    let objData = []
    let total = 0
    let divisor = 0
   
    

   
    for (let d = 0; d < arrayDecades.length; d++) {
   
        for (var x = 0; x < data.length; x++) {
            if (data[x][0] >= arrayDecadesForIfs[d][0] && data[x][0] <= arrayDecadesForIfs[d][1]) {
                divisor++
                total = total + data[x][1] 
            }
        }

        let newObj = {
            "decada": arrayDecades[d],
            "total": total,
            "media": total/divisor
        }
        objData.push(newObj)

        total = 0
        divisor = 0

    }

    return objData
    


}


console.log(analisarDesmatamentoPorDecada([[2001, 15000], [2005, 35000], [2009, 45000],[1998, 10000],[1999, 20000],[2011, 10000],[2013, 20000],]));
