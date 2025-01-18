// Criar um array vazio para armazenar as cores
let colors = [];

// Pedir para o usuário preencher o array com 5 cores diferentes
for (let i = 0; i < 5; i++) {
  let color = prompt(`Insira a cor ${i + 1}:`);
  colors.push(color);
}

// Exibir o array completo e seu tamanho no console
console.log("Array completo:", colors);
console.log("Tamanho do array:", colors.length);

// Pedir ao usuário para eliminar uma cor
let colorToRemove = prompt("Escolha uma cor para remover do array:");
let indexToRemove = colors.indexOf(colorToRemove);
if (indexToRemove !== -1) {
  colors.splice(indexToRemove, 1);
  console.log(`A cor '${colorToRemove}' foi removida.`);
} else {
  console.log(`A cor '${colorToRemove}' não foi encontrada no array.`);
}

// Exibir as cores com suas posições
colors.forEach((color, index) => {
  console.log(`Na posição ${index} temos a cor ${color}`);
});

// Pedir ao usuário para inserir uma nova cor
let newColor = prompt("Insira uma nova cor:");
if (colors.includes(newColor)) {
  console.log(`A cor '${newColor}' já existe no array. Nada foi alterado.`);
} else {
  colors.unshift(newColor);
  console.log(`A cor '${newColor}' foi adicionada na primeira posição.`);
}

// Exibir o array final e seu tamanho
console.log("Array final:", colors);
console.log("Tamanho final do array:", colors.length);
