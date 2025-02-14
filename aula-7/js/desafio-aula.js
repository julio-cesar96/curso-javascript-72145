function atualizarDocumento(titulo, itens) {
    // Seleciona ou cria o elemento do título
    let tituloElemento = document.getElementById("titulo");
    if (!tituloElemento) {
        tituloElemento = document.createElement("h1");
        tituloElemento.id = "titulo";
        document.body.appendChild(tituloElemento);
    }
    tituloElemento.textContent = titulo;

    // Seleciona ou cria a lista
    let lista = document.getElementById("lista");
    if (!lista) {
        lista = document.createElement("ul");
        lista.id = "lista";
        document.body.appendChild(lista);
    }

    // Limpa a lista antes de adicionar novos itens
    lista.innerHTML = "";

    // Adiciona os itens da lista
    itens.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}

// Exemplo de uso
atualizarDocumento("Minha Lista", ["Item 1", "Item 2", "Item 3"]);
