## Trabalho 2 - Functions
 Hoje vamos trabalhar com programação funcional. Para isso temos nossa função 
principal, chamada main() que tem a função de centralizar toda a funcionalidade do 
código.
 1) Você consegue escrever uma função main() que gere essas mensagens em quatro 
linhas separadas?

 **Use the val keyword when the value doesn't change.**
 
 **Use the var keyword when the value can change.**
 
 **When you define a function, you define the parameters that can be passed to it.**
 
**When you call a function, you pass arguments for the parameters.**
 
 ---
 
 2) Escreva uma função main() que tenha uma variável com o nome do item, o valor e 
um desconto em %. No final faça o print do nome do item, do valor original e do valor 
com desconto.

---
 3) Escreva uma função que calcule quantos adultos e quantas crianças tem em uma 
festa e faça esse log: **("The total party size is:”, total)**.

---
 4) Escreva uma função que receba o valor bruto do salário, faça os descontos de INSS 
e IRRF (baseado em porcentagem real) e faça um log mostrando o valor do salário 
bruto, o valor dos descontos e o valor do salário líquido.

---
 5) Faça uma função main() que tenha 3 números. Faça quatro funções a mais, uma 
para cada operação matemática. Dentro da main() você irá chamar as outras funções 
para fazer as 4 operações com todos os números alocados. Um exemplo em Kotlin:

```kotlin
fun main() {
 val firstNumber = 10
 val secondNumber = 5
 val thirdNumber = 8
 val result = add(firstNumber, secondNumber)
 println("$firstNumber + $secondNumber = $result")
 }
 ```
 
 ---
 
 6) Escreva uma função main() que tenha o nome do usuário e o nome do sistema 
operacional que ele usa. Em outra função chamada displayAlertMessage() você deve 
ter uma mensagem padrão, exemplo: 

**“There's a new sign-in request on ${**a**} for your Google Account ${**b**}."**
 e você deve chamar essa função pela main() passando o nome do indivíduo e do 
sistema como parâmetro.

---

 7) Faça uma função main() que tenha o tempo que você gastou no celular ontem e no 
celular hoje. Você criará uma função chamada timeSpent() que retorna um Boolean 
true para hoje maior que ontem
 
