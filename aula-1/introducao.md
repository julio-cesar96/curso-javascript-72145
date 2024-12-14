# Revisão de Conceitos Básicos de JavaScript

## Introdução ao JavaScript
JavaScript é uma linguagem de programação usada principalmente no desenvolvimento web para adicionar interatividade e dinamicidade a páginas e aplicativos. Ele é interpretado diretamente pelo navegador, permitindo que desenvolvedores criem experiências ricas e dinâmicas ao usuário.

Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Primeiro Script</title>
</head>
<body>
    <h1>Bem-vindo ao JavaScript!</h1>
    <script>
        console.log("Olá, Mundo!");
    </script>
</body>
</html>
```

## Tipos de Dados e Variáveis
No JavaScript, utilizamos `let` e `const` para declarar variáveis. As variáveis podem armazenar diferentes tipos de dados, como números, strings e valores booleanos.

### Exemplo:
```javascript
// Variáveis com diferentes tipos de dados
let numero = 42;         // Número
let texto = "Olá!";      // String
const booleano = true;   // Booleano

// Imprimindo os tipos das variáveis
console.log(typeof numero);   // Output: number
console.log(typeof texto);    // Output: string
console.log(typeof booleano); // Output: boolean
```

### Restrições:
- Use `let` para variáveis cujo valor pode mudar.
- Use `const` para variáveis que devem permanecer constantes.

## Operadores Aritméticos
Os operadores aritméticos permitem realizar cálculos básicos em JavaScript.

| Operador | Função           | Exemplo             |
|----------|------------------|---------------------|
| `+`      | Adição           | `5 + 2 // 7`       |
| `-`      | Subtração        | `5 - 2 // 3`       |
| `*`      | Multiplicação    | `5 * 2 // 10`      |
| `/`      | Divisão          | `5 / 2 // 2.5`     |

### Exemplo Prático:
```javascript
// Declarando variáveis
let a = 10;
let b = 5;

// Operações matemáticas
let soma = a + b;         // Soma
let subtracao = a - b;    // Subtração
let multiplicacao = a * b; // Multiplicação
let divisao = a / b;      // Divisão

// Exibindo os resultados
console.log("Soma:", soma);             // Output: Soma: 15
console.log("Subtração:", subtracao);   // Output: Subtração: 5
console.log("Multiplicação:", multiplicacao); // Output: Multiplicação: 50
console.log("Divisão:", divisao);       // Output: Divisão: 2
```

## Configuração do Ambiente
Para começar a usar JavaScript, basta abrir o navegador e usar o console de desenvolvedor (F12 > Console). Também é possível usar um editor de texto como VS Code para criar arquivos `.html` e incluir scripts JavaScript dentro da tag `<script>`.

### Primeiro Script:
```html
<script>
    let mensagem = "Bem-vindo ao JavaScript!";
    console.log(mensagem);
</script>
```

## Atividade: Encontre e Corrija o Erro

### Código:
```javascript
let nome = "Ana";
const idade = 25;

let mensagem = "Olá, " + nome + "! Você tem " + idade + " anos.";

console.log(mensagem);
```
