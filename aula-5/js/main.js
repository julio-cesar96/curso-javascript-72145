function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

const fiatUno = new Carro("Fiat", "Uno", 2008);
console.log(fiatUno.ano);

class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirDados() {
        return `${this.nome}, ${this.idade}`;
    }
}

const alunoManha = new Aluno("Julio Cesar", 28);
console.log(alunoManha.exibirDados());