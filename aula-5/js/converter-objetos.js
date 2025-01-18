const produto = {
    id: 1,
    nome: "Feijão"
}

console.log(produto);

const produtoJSON = JSON.stringify(produto);

console.log(produtoJSON);

const produtoParse = JSON.parse(produtoJSON);
console.log(produtoParse);