function mostrarAlerta() {
    Swal.fire('Olá!');
}

async function carregarDados() {
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

function simularProcessamento() {
    Swal.fire('Processo concluído!', '', 'success');
}

