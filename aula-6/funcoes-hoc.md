# Funções de Ordem Superior em JavaScript

## Objetivos da Aula
- **Compreender o conceito de funções de ordem superior em JavaScript.**
- **Desenvolver a habilidade de utilizar funções como parâmetros e retornos.**
- **Explorar métodos de manipulação de arrays.**

---

## O que são Funções de Ordem Superior?
Funções de ordem superior são funções que podem:
- Receber outras funções como argumento.
- Retornar uma nova função.

Essas funções são extremamente poderosas, pois permitem criar abstrações e composições de lógica, facilitando a legibilidade e reutilização do código.

```javascript
// Exemplo básico: função que recebe outra função
function executar(funcao) {
  console.log("Executando a função...");
  funcao();
}

function saudacao() {
  console.log("Olá, mundo!");
}

executar(saudacao);

// Exemplo de função que retorna outra função
function multiplicador(multiplicador) {
  return function (numero) {
    return numero * multiplicador;
  };
}

const dobrar = multiplicador(2);
console.log(dobrar(5)); // Resultado: 10
```

### Vantagens e Melhor Caso de Uso
- **Vantagem:** Permitem maior flexibilidade no código, tornando-o mais modular e reutilizável.
- **Melhor caso de uso:** Quando é necessário encapsular lógica reutilizável ou criar funções dinâmicas com base em parâmetros.

---

## Métodos de Array

Os métodos de array são exemplos clássicos de uso de funções de ordem superior. Vamos explorar cada método com uma definição, um exemplo prático e as vantagens/desvantagens.

### 1. **forEach()**
#### Definição
Executa uma função para cada elemento do array. Não retorna um novo array.

#### Exemplo
```javascript
const numeros = [1, 2, 3, 4];

numeros.forEach((numero) => {
  console.log(numero * 2);
});
```

#### Vantagens e Desvantagens
- **Vantagem:** Simples para iterar sobre elementos.
- **Desvantagem:** Não permite encadeamento, pois não retorna nada.
- **Melhor caso de uso:** Para executar efeitos colaterais, como logs ou alterações em variáveis externas.

---

### 2. **find()**
#### Definição
Retorna o primeiro elemento que satisfaz a condição fornecida.

#### Exemplo
```javascript
const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Carlos" },
];

const usuario = usuarios.find((user) => user.id === 2);
console.log(usuario); // Resultado: { id: 2, nome: "Carlos" }
```

#### Vantagens e Desvantagens
- **Vantagem:** Encontra rapidamente o primeiro elemento correspondente.
- **Desvantagem:** Não retorna todos os elementos que satisfazem a condição.
- **Melhor caso de uso:** Quando só é necessário encontrar um elemento específico.

---

### 3. **filter()**
#### Definição
Retorna um novo array com todos os elementos que atendem à condição fornecida.

#### Exemplo
```javascript
const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares); // Resultado: [2, 4]
```

#### Vantagens e Desvantagens
- **Vantagem:** Retorna todos os elementos que satisfazem a condição.
- **Desvantagem:** Pode ser ineficiente para arrays muito grandes.
- **Melhor caso de uso:** Filtrar dados em listas ou arrays grandes.

---

### 4. **some()**
#### Definição
Verifica se pelo menos um elemento do array satisfaz a condição.

#### Exemplo
```javascript
const numeros = [1, 2, 3, 4];

const temPar = numeros.some((numero) => numero % 2 === 0);
console.log(temPar); // Resultado: true
```

#### Vantagens e Desvantagens
- **Vantagem:** Curto-circuito; para de executar assim que encontra um elemento que satisfaça a condição.
- **Desvantagem:** Apenas verifica a existência, não retorna elementos.
- **Melhor caso de uso:** Verificar rapidamente se algum elemento atende a uma condição.

---

### 5. **map()**
#### Definição
Cria um novo array aplicando uma transformação a cada elemento do array original.

#### Exemplo
```javascript
const numeros = [1, 2, 3, 4];

const dobrados = numeros.map((numero) => numero * 2);
console.log(dobrados); // Resultado: [2, 4, 6, 8]
```

#### Vantagens e Desvantagens
- **Vantagem:** Fácil de encadear e aplicar transformações.
- **Desvantagem:** Cria um novo array, podendo consumir mais memória.
- **Melhor caso de uso:** Quando é necessário transformar dados em massa.

---

### 6. **reduce()**
#### Definição
Reduz o array a um único valor, acumulando resultados ao longo da iteração.

#### Exemplo
```javascript
const numeros = [1, 2, 3, 4];

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // Resultado: 10
```

#### Vantagens e Desvantagens
- **Vantagem:** Versátil; pode ser usado para somas, médias, agregações, etc.
- **Desvantagem:** Sintaxe pode ser difícil de entender para iniciantes.
- **Melhor caso de uso:** Para agregar valores de um array.

---

### 7. **sort()**
#### Definição
Ordena os elementos do array com base em uma função de comparação.

#### Exemplo
```javascript
const nomes = ["Carlos", "Ana", "Bruno"];

nomes.sort();
console.log(nomes); // Resultado: ["Ana", "Bruno", "Carlos"]

const numeros = [10, 2, 5, 1];

numeros.sort((a, b) => a - b);
console.log(numeros); // Resultado: [1, 2, 5, 10]
```

#### Vantagens e Desvantagens
- **Vantagem:** Permite ordenação personalizada com uma função de comparação.
- **Desvantagem:** Modifica o array original.
- **Melhor caso de uso:** Ordenar listas de elementos.

---

## Conclusão
Funções de ordem superior e métodos de array são ferramentas poderosas em JavaScript que permitem escrever código mais legível, eficiente e modular. Aproveite-as para criar soluções flexíveis e dinâmicas no seu dia a dia como desenvolvedor!
