## Enunciado 1 - Variáveis
 1 - Construa um programa, seguindo os seguintes passos:
 
 **a**) Declare uma variável para armazenar um nome, sem atribuir um valor.

 **b**) Declare uma variável para armazenar uma idade, sem atribuir um valor.
 
 **c**) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando 
typeof .

 **d**) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário 
de código.

 **e**) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às 
variáveis que acabou de criar

**f**) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva 
em um comentário de código.

 **g**) Para finalizar, imprima na tela a mensagem:
 
 "Olá <span style="color:red">nome</span>, você tem <span style="color:red">idade</span> anos".
 Onde <span style="color:red">nome</span> e <span style="color:red">idade</span> são os valores que o usuário inseriu
 
 ---
 
 
 
 2.Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma 
variável. Por exemplo: **"Você está usando uma roupa azul hoje?"**. Depois, siga os passos:

 **a**) Crie três novas variáveis, contendo as respostas
 
 **b**) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. 
Por exemplo:

---

3.Suponha que temos duas variáveis 
**a** e **b**, cada uma com um valor inicial

```javascript
let a = 10
let b = 25
```

Agora, queremos trocar os valores delas, de forma que 
**a** passe a ter o valor de **b** e
 **b** passe a ter o valor de 
**a** . 
Ou seja, no caso desse exemplo acima, **a** passaria a ser 25 e **b** passaria a ser 10

```javascript
let a = 10 
let b = 25 
 
// Aqui faremos uma lógica para trocar os valores 

// Depois de trocados, teremos o seguinte resultado: 
console.log("O novo valor de a é", a) // O novo valor de a é 25 
console.log("O novo valor de b é", b) // O novo valor de b é 10
```


Crie a lógica que deve ser inserida no código para que os valores de **a** e **b** sejam 
trocados, independente de qual valor essas variáveis assumam inicialmente (ou 
seja: não basta dizer que 
**a = 25** e 
**b = 10** porque se os valores iniciais mudarem, a 
lógica do seu programa teria que mudar também).




## Desafio Variáveis

1.Faça um programa que receba dois números do usuário e execute as seguintes operações, imprimindo os resultados no console:

    **a)**. O primeiro número somado ao segundo número resulta em: `x`.
    
    **b)**. O primeiro número multiplicado pelo segundo número resulta em: `y`.



<br><br><br><br><br>

## Enunciado 2 - Análise
 **a)** Analise o programa abaixo e diga o que será impresso no console, SEM 
EXECUTAR o programa

```javascript
let a = 10 
let b = 10 
console.log(b) 
b = 5 
console.log(a, b)
```

**b)** Analise o programa abaixo e diga o que será impresso no console, SEM 
EXECUTAR o programa.

```javascript
let a = 10 
let b = 20 
c = a 
b = c 
a = b 
console.log(a, b, c)
```

**c)** Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes 
para as variáveis. Lembre-se que devemos escolher nomes significativos, 
usar o padrão camelCase. Alem disso, os nomes não podem começar com 
números ou caracteres especiais.

```javascript
let p = leitor.question("Quantas horas você trabalha por dia?") 
let t = leitor.question("Quanto você recebe por dia?") 
console.log(`Voce recebe ${t/p} por hora`)
```
