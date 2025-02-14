let paragrafo = document.getElementById("paragrafo1");
console.log(paragrafo);
paragrafo.innerHTML = "<span> Altarei a tag do nó de p para span </span>";

let paises = document.getElementsByClassName("paises");
paises[0].remove();

let container = document.querySelector(".container");
container.className = "row";

let novoTexto = document.createElement("p");
novoTexto.innerHTML = "<p> Este é um texto criado diretamente via Javascript </p>";
document.body.appendChild(novoTexto);

let btnCadastro = document.querySelector("#cadastrar");

btnCadastro.addEventListener('click', () => {
    console.log("Fui clicado");
})