# Manipulação de Arrays e Objetos em JavaScript

Neste arquivo, exploraremos os conceitos de arrays e objetos em JavaScript, detalhando suas diferenças, aplicações, métodos úteis e exemplos práticos para cada tópico. 

---

## Estrutura e Manipulação de Arrays

Arrays são estruturas que permitem armazenar múltiplos valores em uma única variável, organizados por índices numéricos. 

### Criando e Acessando Arrays

```javascript
// Criando um array
const frutas = ["maçã", "banana", "laranja"];

// Acessando elementos
console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"
```

### Métodos de Manipulação de Arrays

#### Adicionar e Remover Elementos

```javascript
// Adicionando elementos
frutas.push("uva"); // Adiciona ao final
frutas.unshift("manga"); // Adiciona ao início

console.log(frutas); // ["manga", "maçã", "banana", "laranja", "uva"]

// Removendo elementos
frutas.pop(); // Remove o último
frutas.shift(); // Remove o primeiro

console.log(frutas); // ["maçã", "banana", "laranja"]
```

#### Iteração com Arrays

```javascript
// Iterando com for...of
for (const fruta of frutas) {
  console.log(fruta);
}
```

#### Outros Métodos Úteis

```javascript
// Encontrar um elemento
const indice = frutas.indexOf("banana"); // 1

// Filtrar elementos
const frutasComA = frutas.filter(fruta => fruta.includes("a"));
console.log(frutasComA); // ["maçã", "banana", "laranja"]

// Mapear elementos
const frutasEmMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasEmMaiusculas); // ["MAÇÃ", "BANANA", "LARANJA"]
```

---

## Estrutura e Manipulação de Objetos

Objetos são coleções de pares chave-valor usados para representar dados mais complexos.

### Criando e Acessando Objetos

```javascript
// Criando um objeto
const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor"
};

// Acessando propriedades
console.log(pessoa.nome); // "João"
console.log(pessoa["idade"]); // 30
```

### Métodos e Propriedades

```javascript
// Adicionando métodos
pessoa.saudar = function() {
  return `Olá, meu nome é ${this.nome}.`;
};

console.log(pessoa.saudar()); // "Olá, meu nome é João."
```

### Utilizando o Construtor `new`

```javascript
function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
  this.descrever = function() {
    return `Este é um ${this.marca} ${this.modelo}.`;
  };
}

const meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.descrever()); // "Este é um Toyota Corolla."
```

---

## Estruturas de Dados Avançadas: Arrays e Objetos Aninhados

### Trabalhando com Dados Aninhados

```javascript
const escola = {
  nome: "Escola ABC",
  turmas: [
    { nome: "Turma A", alunos: ["Ana", "Bruno"] },
    { nome: "Turma B", alunos: ["Carlos", "Diana"] }
  ]
};

// Acessando dados aninhados
console.log(escola.turmas[0].alunos[1]); // "Bruno"
```

### Iteração com `for...in` e `for...of`

#### `for...in`

```javascript
// Iterando sobre as chaves de um objeto
for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
```

#### `for...of`

```javascript
// Iterando sobre os elementos de um array
for (const turma of escola.turmas) {
  console.log(`Turma: ${turma.nome}`);
  for (const aluno of turma.alunos) {
    console.log(`Aluno: ${aluno}`);
  }
}
```

---

## Exercícios e Soluções

### Exercício 1
**Dada a seguinte matriz:**

```javascript
const frutas = ['uva', 'pêra', 'banana'];
```
**Qual método adicionaria 'manga' ao final do array?**

**Respostas:**
- A: `frutas.unshift('mango');`
- B: `frutas.push('manga');` (Correta)
- C: `frutas.pop('manga');`

**Explicação:** O método `push` é usado para adicionar elementos ao final de um array.

```javascript
frutas.push('manga');
console.log(frutas); // ['uva', 'pêra', 'banana', 'manga']
```

---

### Exercício 2
**Dada a seguinte matriz:**

```javascript
const frutas = ['uva', 'pêra', 'banana'];
```
**Qual método adicionaria 'manga' ao final do array?**

**Respostas:**
- A: `frutas.unshift('mango');`
- B: `frutas.push('manga');` (Correta)
- C: `frutas.pop('manga');`

**Explicação:** Assim como no exercício anterior, o método `push` é o mais adequado.

```javascript
frutas.push('manga');
console.log(frutas); // ['uva', 'pêra', 'banana', 'manga']
```

---

### Exercício 3
**Dada a seguinte matriz:**

```javascript
const numbers = [70, 55, 88, 63, 97];
```
**Qual método seria usado para encontrar o índice do valor 88 no array?**

**Respostas:**
- A: `numbers.indexOf(88);` (Correta)
- B: `numbers.includes(88);`
- C: `numbers.reverse(88);`

**Explicação:** O método `indexOf` retorna o índice da primeira ocorrência do elemento especificado.

```javascript
const index = numbers.indexOf(88);
console.log(index); // 2
```

---

### Exercício 4
**Dado o seguinte array:**

```javascript
const palavras = ['tomate', 'cenoura', 'maçã', 'banana', 'laranja'];
```
**Se você deseja ordenar em ordem alfabética e juntar os elementos com vírgulas, qual opção está correta?**

**Respostas:**
- A: `palavras.reverse().join('-');`
- B: `palavras.sort().join(', ');` (Correta)
- C: `palavras.push(', ').sort();`

**Explicação:** O método `sort` organiza os elementos em ordem alfabética e `join` converte o array em uma string com o separador especificado.

```javascript
const resultado = palavras.sort().join(', ');
console.log(resultado); // "banana, cenoura, laranja, maçã, tomate"
```

---

### Exercício 5
**Crie um array de cores e peça para o usuário preencher com 5 cores diferentes. Usando o `console.log`, exiba o array completo e seu tamanho. Das cores inseridas, peça ao usuário para eliminar uma delas.**

**Para cada cor presente no array, exiba a frase "Na posição {i} temos a cor {cor}". Peça para o usuário inserir uma nova cor e verifique se a cor já existe no array; caso ela já exista, não faça nada. Caso ainda não exista, insira na primeira posição.**

```javascript
// Criando um array vazio
const cores = [];

// Pedindo ao usuário para preencher com 5 cores
for (let i = 0; i < 5; i++) {
  const cor = prompt(`Digite a cor ${i + 1}:`);
  cores.push(cor);
}

console.log("Cores inseridas:", cores);
console.log("Tamanho do array:", cores.length);

// Pedindo para o usuário remover uma cor
const corParaRemover = prompt("Digite uma cor para remover:");
const indexRemover = cores.indexOf(corParaRemover);
if (indexRemover !== -1) {
  cores.splice(indexRemover, 1);
}

// Exibindo as cores com suas posições
cores.forEach((cor, i) => {
  console.log(`Na posição ${i} temos a cor ${cor}`);
});

// Pedindo ao usuário para adicionar uma nova cor
const novaCor = prompt("Digite uma nova cor para adicionar:");
if (!cores.includes(novaCor)) {
  cores.unshift(novaCor);
}

console.log("Cores finais:", cores);
```

