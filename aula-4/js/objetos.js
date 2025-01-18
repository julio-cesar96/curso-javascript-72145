//Um objeto um conjunto de chave, valor e comportamento
//propriedade = caracterisca do objeto
//valor = o valor da propriedade do objeto
function Carro(marca, modelo, transmissao, quantidadePorta) {
    this.marca = marca;
    this.modelo = modelo;
    this.transmissao = transmissao;
    this.quantidadePorta = quantidadePorta;
    this.acelerar = function () {
        return `Acelerando meu ${this.modelo}`;
    }
}

const carroDoAlexandre = new Carro("Honda", "HRV", "Automática", 4);
console.log(carroDoAlexandre.acelerar());

const carro = {
    marca: "Ford",
    modelo: "Fusion"
}

for (const prop in carro) {
    console.log(`${prop}: ${carro[prop]}`);
}
