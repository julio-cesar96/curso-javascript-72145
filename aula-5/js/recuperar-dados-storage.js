let usuario = localStorage.getItem('usuario');

if (usuario) {
    console.log(usuario);
} else {
    usuario = prompt('Insira o nome do usuário');
    if (usuario) {
        localStorage.setItem('usuario', usuario)
    }
}