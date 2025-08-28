let maior = -Infinity;
let menor = Infinity;
let i = 1;

while (i <= 10) {
  let valor = parseFloat(prompt(`Digite o ${i}º valor:`));

  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }

  i++;
}

alert("Maior valor: " + maior + "\nMenor valor: " + menor);