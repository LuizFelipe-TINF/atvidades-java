let notas = [];
let freq = [];

for (let i = 0; i < 8; i++) {
  notas[i] = Number(prompt("Digite a nota da matéria " + (i+1) + ":"));
  freq[i] = Number(prompt("Digite a frequência (%) da matéria " + (i+1) + ":"));
}

// a) média da frequência
let soma = 0;
for (let i = 0; i < 8; i++) {
  soma += freq[i];
}
let mediaFreq = soma / 8;

// b) quantas notas acima de 60
let acima = 0;
for (let i = 0; i < 8; i++) {
  if (notas[i] > 60) {
    acima++;
  }
}

alert("Média de frequência: " + mediaFreq + "\nNotas acima de 60: " + acima);
