//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


// Criar um array de números
var array = [5 ,10 , 8, 3, 9, 2, 7, 6, 4, 1];

// Inicializar as variáveis maior e menor com o primeiro elemento do array
var maior = array[0];
var menor = array[0];

// Percorrer o array e comparar cada elemento com as variáveis maior e menor
for (var i = 1; i < array.length; i++) {
  // Se o elemento for maior que a variável maior, atualizar a variável maior com o elemento
  if (array[i] > maior) {
    maior = array[i];
  }
  // Se o elemento for menor que a variável menor, atualizar a variável menor com o elemento
  if (array[i] < menor) {
    menor = array[i];
  }
}

// Imprimir no console o maior e o menor números contidos no array original
console.log("O maior número é " + maior);
console.log("O menor número é " + menor);
