# Funções de Ordem Superior e Manipulação do DOM

## 1. O que é o DOM?

O **DOM (Document Object Model)** é uma interface que representa a estrutura de um documento HTML como uma árvore de objetos. Ele permite que o JavaScript interaja e manipule o conteúdo da página.

### Importância do DOM

A manipulação do DOM é fundamental para tornar páginas dinâmicas e interativas. Sem ele, páginas seriam apenas documentos estáticos.

### Como acessar nós do DOM

Podemos acessar os elementos do DOM utilizando diferentes métodos:

#### 1. `getElementById()`
```js
const titulo = document.getElementById("meuTitulo");
titulo.style.color = "blue";
```

#### 2. `getElementsByClassName()`
```js
const elementos = document.getElementsByClassName("minhaClasse");
for (let el of elementos) {
    el.style.backgroundColor = "yellow";
}
```

#### 3. `querySelector()` e `querySelectorAll()`
```js
const primeiroParagrafo = document.querySelector("p");
const todosOsParagrafos = document.querySelectorAll("p");
```

## 2. Percorrendo a coleção de HTML com `for...of`

Quando utilizamos `getElementsByClassName` ou `querySelectorAll`, obtemos uma coleção de elementos. Podemos percorrê-la com `for...of`:

```js
const paragrafos = document.querySelectorAll("p");
for (const p of paragrafos) {
    p.style.fontSize = "18px";
}
```

## 3. Modificando Nós do DOM

Podemos modificar atributos, classes, ou o próprio conteúdo de um elemento HTML.

### Modificar o conteúdo de um nó
```js
document.getElementById("meuTitulo").textContent = "Novo Título";
```

### Modificar atributos
```js
document.getElementById("meuLink").setAttribute("href", "https://www.google.com");
```

### Modificar classes
```js
document.getElementById("meuElemento").classList.add("novaClasse");
```

## 4. Criando e Eliminando Elementos do DOM

### Criando elementos dinamicamente
```js
const novoElemento = document.createElement("p");
novoElemento.textContent = "Este é um novo parágrafo";
document.body.appendChild(novoElemento);
```

### Removendo elementos
```js
const elementoParaRemover = document.getElementById("meuElemento");
elementoParaRemover.remove();
```

## 5. Eventos de Elementos

Os eventos permitem que o usuário interaja com a página, como cliques, teclas pressionadas, etc.

### As 3 formas de definir eventos no JavaScript

#### 1. No HTML diretamente
```html
<button onclick="alert('Botão clicado!')">Clique em mim</button>
```

#### 2. Usando `addEventListener()`
```js
document.getElementById("meuBotao").addEventListener("click", function() {
    alert("Botão clicado!");
});
```

#### 3. Atribuindo a uma propriedade do elemento
```js
const botao = document.getElementById("meuBotao");
botao.onclick = function() {
    alert("Botão clicado!");
};
```