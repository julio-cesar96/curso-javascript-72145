let nome = "Julio" // escopo global
// declarando uma função sem parametro
// function saudacao() {
//     // escopo da função
//     let nome = prompt("Por favor, diga o seu nome"); -> variavel de escopo local
//     alert(`Olá ${nome}, seja bem vindo ao nosso sistema`);
// }

//chamada da função
//saudacao();
//saudacao();
//saudacao();


//função com parametro
// function saudacaoComNome(nome) { // `nome` é o parametro da função `saudacaoComNome`
//     //escopo da função
//     alert(`Olá ${nome}, seja bem vindo ao nosso sistema`);
// }

//saudacaoComNome("Julio"); // "Julio" é o argumento passado para função `saudacaoComNome`
//saudacaoComNome("Ian"); // "Ian" é o argumento passado para função `saudacaoComNome`

// function somaDePalavras(palavra1, palavra2) {
//     console.log(`${palavra1} ${palavra2}`);
// }

// somaDePalavras("Julio", "Cesar");

// function calculadora(primeiroNumero, segundoNumero, operacao) {
//     const operacoes = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//         "*": (a, b) => a * b,
//         "/": (a, b) => b !== 0 ? a / b : "Erro: Divisão por zero",
//     };

//     const executarOperacao = operacoes[operacao];

//     if (!executarOperacao) {
//         return "Operação inválidada. Use '+', '-', '*'ou '/'. ";
//     }

//     return executarOperacao(primeiroNumero, segundoNumero);
// }

// console.log(calculadora(10, 100, "*"));
// console.log(calculadora(1908, 100, "+"));