localStorage.setItem('boas-vindas', 'Olá, estudante da Corder');
localStorage.setItem('emAula', true);

for (let i = 0; i < localStorage.length; i++) {
    let chave = localStorage.key(i);
    console.log(`Chave: ${chave}, Valor: ${localStorage.getItem(chave)}`);
}

localStorage.clear();