# Aula: Funções Construtoras e Armazenamento em JavaScript

## Objetivos da Aula

- **Compreender o uso de funções construtoras** em JavaScript para modelar e instanciar objetos.
- **Desenvolver habilidades** para criar classes com métodos e construtores que inicializam propriedades e encapsulam funcionalidades.
- **Entender o conceito e a estrutura do JSON** como formato de dados para representação e transmissão de informações.
- **Aplicar a conversão entre objetos JavaScript e JSON.**

---

## 1. Função Construtora

### O que é e para que serve

Funções construtoras são usadas para criar e inicializar objetos em JavaScript. Elas funcionam como "fábricas" de objetos, permitindo a criação de várias instâncias com as mesmas propriedades e métodos.

### Como usar

1. A função deve começar com uma letra maiúscula (convenção).
2. Utilize o operador `new` para criar uma instância.

### Exemplo Prático

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos.`);
    };
}

// Criando instâncias
const pessoa1 = new Person("João", 25);
const pessoa2 = new Person("Maria", 30);

pessoa1.greet(); // Olá, meu nome é João e eu tenho 25 anos.
pessoa2.greet(); // Olá, meu nome é Maria e eu tenho 30 anos.
```

---

## 2. Storage API

### O que é

A Storage API fornece métodos para armazenar dados simples no navegador do usuário, persistindo informações entre sessões ou na mesma sessão.

### Tipos de Storage

#### **localStorage**

- Dados persistem mesmo após o fechamento do navegador.
- Ideal para armazenar preferências ou configurações do usuário.

#### **sessionStorage**

- Dados são apagados assim que a aba ou janela do navegador é fechada.
- Ideal para informações temporárias relacionadas a uma sessão específica.

### Comparação: localStorage x sessionStorage

| **localStorage**          | **sessionStorage**          |
|---------------------------|-----------------------------|
| Dados persistem indefinidamente. | Dados expiram ao fechar a aba. |
| Bom para configurações do usuário. | Bom para dados temporários. |
| Mais durável.             | Mais seguro contra exposição acidental. |

### Como Usar

#### Armazenando Dados

```javascript
// localStorage
localStorage.setItem("username", "João");

// sessionStorage
sessionStorage.setItem("sessionID", "12345");
```

#### Recuperando Dados

```javascript
// Recuperando do localStorage
const username = localStorage.getItem("username");
console.log(username); // João

// Recuperando do sessionStorage
const sessionID = sessionStorage.getItem("sessionID");
console.log(sessionID); // 12345
```

#### Removendo Dados

```javascript
// Remover um item específico
localStorage.removeItem("username");
sessionStorage.removeItem("sessionID");

// Limpar tudo
localStorage.clear();
sessionStorage.clear();
```

---

## 3. JSON

### O que é

JSON (**JavaScript Object Notation**) é um formato leve de troca de dados, amplamente usado em APIs e armazenamento local.

### Como usar JSON para Armazenar Dados

#### Conversão: Objeto JavaScript ↔ JSON

```javascript
const user = {
    name: "Ana",
    age: 28,
    isStudent: true
};

// Convertendo para JSON
const userJSON = JSON.stringify(user);
console.log(userJSON); // {"name":"Ana","age":28,"isStudent":true}

// Convertendo de JSON para Objeto
const userObject = JSON.parse(userJSON);
console.log(userObject.name); // Ana
```

### Armazenando JSON no Storage

#### Exemplo Prático

```javascript
const preferences = {
    theme: "dark",
    notifications: true
};

// Salvando no localStorage
localStorage.setItem("preferences", JSON.stringify(preferences));

// Recuperando do localStorage
const savedPreferences = JSON.parse(localStorage.getItem("preferences"));
console.log(savedPreferences.theme); // dark
```

---

## Conclusão

Nesta aula, aprendemos:
- Como criar objetos reutilizáveis com **funções construtoras**.
- Como usar a **Storage API** para armazenar e recuperar informações no navegador.
- Como o **JSON** facilita a troca de dados entre aplicações e o armazenamento local.

Esses conceitos são fundamentais para desenvolver aplicações interativas e responsivas que manipulam e armazenam dados com eficiência. 🚀
