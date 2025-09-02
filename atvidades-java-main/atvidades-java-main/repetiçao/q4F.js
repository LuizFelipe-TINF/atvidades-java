let maior = null;
let menor = null;

for (let i = 1; i <= 10; i++) {
  let valor = parseFloat(prompt(`Digite o ${i}º valor:`));

  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }
}

alert("Maior valor: " + maior + "\nMenor valor: " + menor);