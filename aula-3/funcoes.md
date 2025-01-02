# Introdução às Funções em JavaScript

## O que são Funções?
Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas permitem organizar e modularizar o código, tornando-o mais limpo e eficiente.

```javascript
// Exemplo básico de função
function saudacao() {
  console.log("Olá, mundo!");
}

saudacao(); // Chama a função e exibe "Olá, mundo!"
```

---

## Parâmetros e Valores de Retorno
### Parâmetros
Parâmetros são valores que passamos para a função para personalizar seu comportamento.

```javascript
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

saudacao("Alice"); // Exibe "Olá, Alice!"
saudacao("Bob");   // Exibe "Olá, Bob!"
```

### Valores de Retorno
Funções podem retornar valores para que possamos usá-los em outras partes do código.

```javascript
function soma(a, b) {
  return a + b;
}

const resultado = soma(5, 7); // 12
console.log(resultado);
```

---

## Escopo de Variáveis
O escopo define onde as variáveis estão disponíveis no código.

### Escopo Local
Variáveis declaradas dentro de uma função só podem ser acessadas dentro dela.

```javascript
function exemploEscopo() {
  let mensagem = "Estou dentro da função!";
  console.log(mensagem);
}

exemploEscopo(); // Exibe "Estou dentro da função!"
// console.log(mensagem); // Erro: mensagem não está definida
```

### Escopo Global
Variáveis declaradas fora de funções podem ser acessadas em qualquer parte do código.

```javascript
let mensagem = "Estou fora da função!";

function exemploEscopoGlobal() {
  console.log(mensagem);
}

exemploEscopoGlobal(); // Exibe "Estou fora da função!"
```

---

## Funções Anônimas
Funções sem nome que podem ser atribuídas a variáveis ou usadas diretamente.

```javascript
const saudacao = function(nome) {
  return `Olá, ${nome}!`;
};

console.log(saudacao("Carlos"));
```

---

## Arrow Functions
Uma sintaxe mais curta para declarar funções. Ideal para funções simples.

```javascript
const soma = (a, b) => a + b;

console.log(soma(10, 15)); // 25

// Arrow function com mais de uma linha
const multiplicar = (a, b) => {
  const resultado = a * b;
  return resultado;
};

console.log(multiplicar(3, 4)); // 12
```

---

## Organização e Eficiência no Código
Funções ajudam a evitar repetição e tornam o código mais modular e legível.

```javascript
// Código sem funções
const nome1 = "Alice";
console.log(`Bem-vinda, ${nome1}!`);

const nome2 = "Bob";
console.log(`Bem-vindo, ${nome2}!`);

// Código com funções
function boasVindas(nome) {
  console.log(`Bem-vindo(a), ${nome}!`);
}

boasVindas("Alice");
boasVindas("Bob");
```

---

## Exercício Prático
### Desafio 1: Criar uma calculadora simples
1. Escreva uma função para somar dois números.
2. Escreva uma função para subtrair dois números.
3. Escreva uma função que chama as duas funções anteriores e imprime os resultados.

```javascript
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function calculadora(a, b) {
  console.log(`Soma: ${somar(a, b)}`);
  console.log(`Subtração: ${subtrair(a, b)}`);
}

calculadora(8, 3);
```

