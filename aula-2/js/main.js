// if ... else - se ... entao

let idade = 28;

if (idade >= 18) { // retorna um valor booleano true
    // caso a condição seja verdadeira, ou seja, neste exemplo, a variavel idade é maior ou igual a 18
    console.log("É maior de idade, pode tirar a habilitação");
} else {
    // caso a condicão seja falsa, ou seja, a variavel idade for menor que 18
    console.log("É menor de idade, não pode tirar a habilitação")
}

// valores booleanos - true ou false

let estaChovendo = false;

if (estaChovendo) {
    console.log("Levar guarda-chuva");
} else {
    console.log("Passar protetor solar");
}

// operadores relacionais

let altura = 140;
let comChuva = false;
if (altura >= 120 || !!comChuva) {
    console.log("Pode entrar na montanha-russa!");
} else {
    console.log("Desculpe, você é muito baixo.");
}

// operadores lógicos


let nivel = 12;
let mana = 30;
let temPedraMagica = true;


//    true                      true
if (nivel >= 10 && (mana > 50 || temPedraMagica)) {
    console.log("Você pode usar a espada mágica!");
} else {
    console.log("Você não está qualificado para usar a espada mágica.");
}