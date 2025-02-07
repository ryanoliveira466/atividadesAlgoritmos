# Atividade Operadores e Comparadores

1. Leia o código abaixo. Indique todas as mensagens impressas no console, 
SEM EXECUTAR o programa.

```javascript
const bool1 = true
const bool2 = false
const bool3 = !bool2
 
let resultado = bool1 && bool2
console.log("a. ", resultado)
 
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
 ```
 ---
 
 2. Seu colega se aproxima de você falando que o código dele não funciona 
como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que 
será impresso no console? 

```javascript
let primeiroNumero = leitor.questionInt("Digite um numero!")
let segundoNumero = leitor.questionInt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma)
```

---

3. Para o exercício anterior, sugira ao seu colega uma solução para que o 
valor impresso no console seja, de fato, a soma dos dois números.

<br><br><br>

## Exercícios de escrita de código

1. Faça um programa que:

 **a**) Pergunte a idade do usuário

 **b**) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
 
 **c**) Imprima no console a seguinte mensagem: **"Sua idade é maior do que a 
do seu melhor amigo?"**, seguido pela resposta (
 <span style="color: red">true</span> ou 
 <span style="color: red">false</span> )

 d) Imprima no console a diferença de idade (não tem problema se sair um 
número negativo

---


 2. Faça um programa que:
 
 **a**) Peça ao usuário que insira um número par

 **b**) Imprima na console o resto da divisão desse número por 2.
 
 **c**) Teste o programa com diversos números pares. Você notou um padrão? 
Escreva em um comentário de código.

 **d**) O que acontece se o usuário inserir um número ímpar? Escreva em um 
comentário de código

---

3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, 
imprima no console:

**a**) A idade do usuário em meses

 **b**) A idade do usuário em dias
 
 **c**) A idade do usuário em hora
 
 ---
 
 4. Faça um programa que pergunte ao usuário dois números. Em seguida, 
faça as operações e imprima no console as seguintes mensagens seguidas 
pelo 
<span style="color: red">true</span> ou 
<span style="color: red">false</span> :

 O primeiro numero é maior que segundo? //true
 
 O primeiro numero é igual ao segundo? //false
 
 O primeiro numero é divisível pelo segundo? //true
 
 O segundo numero é divisível pelo primeiro? //true
 
 Obs: O true ou false vai depender dos números inseridos e do resultado das 
operações
