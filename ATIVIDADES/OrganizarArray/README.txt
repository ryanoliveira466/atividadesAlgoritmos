### Explicação do Código: Função `menorMaior`

O objetivo deste código é organizar um array de números em ordem crescente, removendo os elementos do array original à medida que o menor valor é encontrado. A função `menorMaior` recebe um array como argumento e organiza seus elementos em outro array chamado `finalArray`. Vamos analisar o código passo a passo:

---

### 1. **Declaração das Variáveis**  
```javascript
let finalArray = []
let arrayNum = array
```
- `finalArray`: Um array vazio que armazenará os elementos ordenados em ordem crescente.  
- `arrayNum`: Uma cópia do array original, que será manipulado durante a execução do código.

---

### 2. **Laço `while`**  
```javascript
while (arrayNum.length > 0) {
```
O `while` continua executando o código enquanto `arrayNum` não estiver vazio, ou seja, enquanto ainda houver elementos no array original.

---

### 3. **Inicialização de Variáveis de Controle**  
```javascript
let excluirArrayoriginal = 0
let num = arrayNum[0]
```
- `excluirArrayoriginal`: Armazena o índice do menor número encontrado no array. Inicialmente, é definido como `0`.  
- `num`: Armazena o valor do primeiro elemento do `arrayNum`. Ele será comparado com os demais elementos para encontrar o menor número.

---

### 4. **Laço `for` para Encontrar o Menor Número**  
```javascript
for (var i = 0; i < arrayNum.length; i++) {
    if (num > arrayNum[i]) {
        num = arrayNum[i]
        excluirArrayoriginal = i
    }
}
```
- O `for` percorre cada elemento do `arrayNum`.  
- Se `num` for maior que o elemento atual (`arrayNum[i]`), o valor de `num` é atualizado com o elemento menor encontrado.  
- O índice do menor elemento (`excluirArrayoriginal`) também é atualizado.

---

### 5. **Remoção do Menor Número do Array Original**  
```javascript
if (excluirArrayoriginal > 0) {
    arrayNum.splice(excluirArrayoriginal, 1)
} else {
    arrayNum.splice(0, 1)
}
```
- Se o menor número não estiver na primeira posição (`excluirArrayoriginal > 0`), o elemento na posição `excluirArrayoriginal` é removido com o método `splice()`.  
- Caso contrário, o primeiro elemento do array (`arrayNum[0]`) é removido.

---

### 6. **Adicionar o Menor Número ao Array Final**  
```javascript
finalArray.push(num)
```
O menor número encontrado é adicionado ao `finalArray`, que armazena os números em ordem crescente.

---

### 7. **Impressão dos Resultados**  
```javascript
console.log("Array Vazia", arrayNum)
console.log('Array organizada', finalArray)
```
- Após o término do `while`, `arrayNum` estará vazio.  
- `finalArray` conterá os números ordenados em ordem crescente.

---

### 8. **Chamada da Função**
```javascript
menorMaior([5, 10, 9, 8, 7])
```
- A função é chamada com um array de números como argumento.  
- O resultado será o array `[5, 7, 8, 9, 10]`.

---

### **Resumo do Funcionamento**
1. O código busca o menor número do array em cada iteração.  
2. Remove esse número do array original (`arrayNum`).  
3. Adiciona o menor número encontrado ao array `finalArray`.  
4. Repete o processo até que o array original esteja vazio.  
5. O array final contém os números em ordem crescente.