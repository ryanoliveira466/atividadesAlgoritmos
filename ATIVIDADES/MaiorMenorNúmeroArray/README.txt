### Explicação do Código: Encontrar o Maior e o Menor Número em um Array

O código em questão tem como objetivo encontrar o maior e o menor número contidos em um array de números inteiros. A seguir, explico cada parte do código:

1. **Declaração do Array**  
   ```javascript
   var array = [5, 10, 8, 3, 9, 2, 7, 6, 4, 1];
   ```  
   Aqui, é declarado um array chamado `array` que contém uma lista de números inteiros.

2. **Inicialização das Variáveis `maior` e `menor`**  
   ```javascript
   var maior = array[0];
   var menor = array[0];
   ```  
   As variáveis `maior` e `menor` são inicializadas com o primeiro elemento do array. Isso é feito para que possamos comparar os demais elementos do array a partir do segundo índice.

3. **Laço `for` para Percorrer o Array**  
   ```javascript
   for (var i = 1; i < array.length; i++) {
   ```  
   O laço `for` começa a partir do índice `1` (o segundo elemento do array), pois o primeiro elemento já foi utilizado na inicialização das variáveis `maior` e `menor`. O loop continua até o final do array, ou seja, enquanto `i` for menor que `array.length`.

4. **Verificação do Maior Número**  
   ```javascript
   if (array[i] > maior) {
     maior = array[i];
   }
   ```  
   A cada iteração, o código verifica se o elemento atual (`array[i]`) é maior do que o valor armazenado na variável `maior`. Se for verdadeiro, o valor de `maior` é atualizado com o elemento atual.

5. **Verificação do Menor Número**  
   ```javascript
   if (array[i] < menor) {
     menor = array[i];
   }
   ```  
   Da mesma forma, o código verifica se o elemento atual é menor do que o valor armazenado na variável `menor`. Se for verdadeiro, o valor de `menor` é atualizado com o elemento atual.

6. **Impressão dos Resultados**  
   ```javascript
   console.log("O maior número é " + maior);
   console.log("O menor número é " + menor);
   ```  
   Por fim, o código imprime no console o maior e o menor número encontrados no array.

### Resumo do Funcionamento
- O código percorre cada elemento do array.
- Compara cada elemento com as variáveis `maior` e `menor`.
- Atualiza as variáveis sempre que encontra um valor maior ou menor.
- Exibe o resultado no console.