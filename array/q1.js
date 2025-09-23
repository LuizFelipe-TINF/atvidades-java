let precos = [];
for (let i = 0; i < 5; i++) {
  precos[i] = Number(prompt("Digite o preço do produto " + (i+1) + ":"));
}

let maior = precos[0];
let indiceMaior = 0;
for (let i = 1; i < 5; i++) {
  if (precos[i] > maior) {
    maior = precos[i];
    indiceMaior = i;
  }
}
alert("Produto mais caro: índice " + indiceMaior + " | preço " + maior);
