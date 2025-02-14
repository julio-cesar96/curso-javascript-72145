# Uso Avançado de JavaScript: Promises, Fetch e Bibliotecas Externas

## 1. Promises em JavaScript

### O que são Promises?
Promises são uma maneira de lidar com operações assíncronas em JavaScript. Elas representam um valor que pode estar disponível agora, no futuro ou nunca.

```javascript
const minhaPromise = new Promise((resolve, reject) => {
    let sucesso = true;
    setTimeout(() => {
        if (sucesso) {
            resolve("Operação concluída com sucesso!");
        } else {
            reject("Houve um erro na operação.");
        }
    }, 2000);
});

minhaPromise
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.error(erro));
```

### Estados de uma Promise
1. **Pending**: Estado inicial, antes da operação assíncrona ser concluída.
2. **Fulfilled**: Quando a operação assíncrona é bem-sucedida.
3. **Rejected**: Quando a operação assíncrona falha.

## 2. Uso do Fetch e Promises
Fetch é uma API do JavaScript para realizar chamadas HTTP de maneira assíncrona.

```javascript
function obterDados() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(dados => console.log(dados))
        .catch(erro => console.error("Erro ao obter dados", erro));
}

obterDados();
```

### Async/Await para Fetch
Outra forma de lidar com fetch é usando `async/await`, tornando o código mais limpo e legível.

```javascript
async function obterDadosAsync() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let dados = await response.json();
        console.log(dados);
    } catch (erro) {
        console.error("Erro ao obter dados", erro);
    }
}

obterDadosAsync();
```

## 3. Uso de Bibliotecas Externas: SweetAlert
O SweetAlert é uma alternativa elegante para os alertas nativos do JavaScript.

### Instalação
Adicione o SweetAlert no projeto via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

### Exemplo de Alerta Simples
```javascript
Swal.fire('Olá, mundo!');
```

### Exemplo com Botões Interativos

```javascript
Swal.fire({
    title: 'Deseja continuar?',
    text: "Esta ação não pode ser desfeita!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, continuar!',
    cancelButtonText: 'Cancelar'
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire('Ação confirmada!', '', 'success');
    } else {
        Swal.fire('Ação cancelada', '', 'error');
    }
});
```

## 4. Integração de Fetch e SweetAlert
Vamos criar uma função que pergunta ao usuário se ele deseja carregar dados de uma API e exibe o resultado no console.

```javascript
function carregarDados() {
    Swal.fire({
        title: 'Carregar dados?',
        text: "Deseja buscar informações da API?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                let dados = await response.json();
                console.log(dados);
                Swal.fire('Dados carregados!', '', 'success');
            } catch (erro) {
                Swal.fire('Erro ao buscar dados', '', 'error');
            }
        }
    });
}

carregarDados();
```

## 5. Exercício Prático
Crie um projeto que contenha três botões que acionem diferentes ações com SweetAlert e Fetch. Exemplo:
- Um botão que exibe uma mensagem de alerta.
- Um botão que pergunta ao usuário se deseja carregar dados de uma API.
- Um botão que exibe um alerta de sucesso após uma simulação de processamento.

```html
<button onclick="Swal.fire('Olá!')">Mostrar Alerta</button>
<button onclick="carregarDados()">Carregar Dados</button>
<button onclick="Swal.fire('Processo concluído!', '', 'success')">Simular Processamento</button>
```


## Conclusão
Neste material, exploramos:
- **Promises**, entendendo seu funcionamento e aplicabilidade.
- **Fetch**, integrando chamadas assíncronas à API.
- **SweetAlert**, aprimorando a experiência do usuário com alertas personalizados.
- **Integração prática**, combinando Fetch e SweetAlert para criar uma experiência interativa.

Pratique e experimente diferentes configurações para dominar o uso avançado do JavaScript! 🚀
