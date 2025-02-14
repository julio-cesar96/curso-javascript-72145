# Gerenciamento de Assincronismo e Erros em JavaScript

## Introdução
A programação assíncrona em JavaScript é essencial para lidar com operações demoradas, como requisições HTTP e manipulação de eventos no navegador, sem bloquear a execução do código.

## Call Stack e Event Loop

### Call Stack (Pilha de Chamadas)
A **Call Stack** é uma estrutura de dados que gerencia a execução das funções no JavaScript. O JavaScript é **single-threaded**, o que significa que ele executa uma única tarefa por vez. Quando uma função é chamada, ela é adicionada à pilha e removida quando termina sua execução.

```javascript
function primeira() {
    console.log("Primeira função");
    segunda();
}

function segunda() {
    console.log("Segunda função");
}

primeira();
```

**Ordem de execução:**
1. `primeira()` é chamada e entra na Call Stack.
2. `console.log("Primeira função")` é executado.
3. `segunda()` é chamada e entra na Call Stack.
4. `console.log("Segunda função")` é executado.
5. `segunda()` finaliza e sai da Call Stack.
6. `primeira()` finaliza e sai da Call Stack.

### Event Loop
O **Event Loop** gerencia a execução do código assíncrono, permitindo que o JavaScript processe tarefas demoradas sem bloquear a execução do restante do código.

```javascript
console.log("Antes do setTimeout");

setTimeout(() => {
    console.log("Dentro do setTimeout");
}, 2000);

console.log("Depois do setTimeout");
```

**Fluxo de execução:**
1. `console.log("Antes do setTimeout")` é executado.
2. `setTimeout()` é chamado, enviando sua callback para a **Task Queue**.
3. `console.log("Depois do setTimeout")` é executado imediatamente.
4. Após 2 segundos, a callback do `setTimeout` entra na Call Stack via **Event Loop** e imprime "Dentro do setTimeout".

## setTimeout e setInterval

### setTimeout
Executa uma função após um determinado tempo.

```javascript
setTimeout(() => {
    console.log("Mensagem exibida após 3 segundos");
}, 3000);
```

### setInterval
Executa uma função repetidamente em um intervalo de tempo.

```javascript
let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log(`Executando... (${contador})`);
    if (contador === 5) {
        clearInterval(intervalo);
    }
}, 1000);
```

## Fetch e gerenciamento de Promises

### O que são Promises?
Uma **Promise** representa uma operação assíncrona que pode:
- **Ser resolvida** (sucesso)
- **Ser rejeitada** (erro)

```javascript
const promessa = new Promise((resolve, reject) => {
    let sucesso = true;
    setTimeout(() => {
        if (sucesso) {
            resolve("Operação concluída com sucesso!");
        } else {
            reject("Ocorreu um erro na operação.");
        }
    }, 2000);
});

promessa
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.error(erro));
```

### Fetch API
Utilizamos o `fetch()` para fazer requisições HTTP.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erro na requisição", error));
```

## Async/Await
O `async/await` simplifica o tratamento de Promises.

```javascript
async function buscarDados() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Erro na requisição", error);
    }
}

buscarDados();
```

**Vantagens do async/await:**
- Código mais legível.
- Facilidade no tratamento de erros com `try/catch`.

## Conclusão
Gerenciar assincronismo é essencial para o desenvolvimento web moderno. Compreender **Call Stack, Event Loop, Promises e Async/Await** permite escrever código mais eficiente e responsivo.
