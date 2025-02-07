# Algoritmo Rabin-Karp

O **algoritmo Rabin-Karp** é um algoritmo de busca de padrões em texto que utiliza uma técnica chamada **hashing** para procurar uma string (o padrão) dentro de outra string (o texto) de maneira eficiente. Esse algoritmo é especialmente útil quando você precisa encontrar múltiplas ocorrências de um padrão em um texto.

## Como funciona o algoritmo?

O Rabin-Karp usa uma **função de hash** para calcular um valor numérico (hash) para o padrão e para substrings do texto. O algoritmo compara os hashes das substrings do texto com o hash do padrão, o que permite uma comparação eficiente.

### Passos principais:

1. **Calcular o hash do padrão**: Primeiro, o algoritmo calcula o valor de hash do padrão que queremos encontrar.
2. **Calcular o hash de substrings do texto**: O algoritmo então calcula os valores de hash para substrings do texto, com o mesmo comprimento do padrão.
3. **Comparação**: Se o hash da substring do texto for igual ao hash do padrão, é feita uma comparação caracter a caracter entre o padrão e a substring. Caso contrário, o algoritmo move para a próxima posição do texto.

### Vantagens do algoritmo:

- **Eficiência**: A principal vantagem do Rabin-Karp é que ele pode encontrar múltiplas ocorrências de um padrão em um único texto, de forma mais rápida do que outros algoritmos de busca, como o algoritmo de força bruta.
- **Busca múltipla**: Ele é muito eficiente quando precisamos procurar vários padrões no mesmo texto, pois o algoritmo calcula o hash uma vez e reutiliza esse valor para buscar todos os padrões.

### Desvantagens:

- **Colisões de hash**: O algoritmo pode ter colisões de hash, ou seja, diferentes substrings podem ter o mesmo valor de hash. Nesse caso, é necessário realizar uma comparação detalhada, o que pode diminuir a eficiência.
- **Complexidade de hashing**: A função de hash precisa ser bem projetada para garantir que o algoritmo seja eficiente.

### Complexidade:

- O **pior caso** ocorre quando há muitas colisões de hash, e a complexidade pode chegar a **O(n * m)**, onde `n` é o tamanho do texto e `m` é o tamanho do padrão.
- O **melhor caso** é quando não há colisões, e a complexidade pode ser reduzida para **O(n + m)**.

## Exemplo de uso:

Suponha que queremos encontrar a palavra "abc" no texto "abcabcabc":

1. Calculamos o hash da palavra "abc".
2. Calculamos o hash das substrings de "abcabcabc" de tamanho 3 (que é o tamanho da palavra).
3. Comparamos os hashes e, quando encontramos um valor igual, fazemos a comparação detalhada dos caracteres.

O algoritmo Rabin-Karp será capaz de identificar todas as ocorrências de "abc" no texto de maneira eficiente.

## Conclusão

O algoritmo **Rabin-Karp** é uma abordagem poderosa para a busca de padrões em textos, especialmente útil quando há a necessidade de realizar buscas múltiplas ou quando o texto é muito grande. No entanto, sua eficiência depende da qualidade da função de hash escolhida.
