let precos = [];

let indiceMaior = 0;

for (let i = 0; i < 5; i++) {
    let preco = Number(prompt("Digite o preço do produto " + (i + 1) + ":"));
    precos.push(preco);
}

for (let i = 1; i < precos.length; i++) {
    if (precos[i] > precos[indiceMaior]) {
        indiceMaior = i;
    }
}

console.log("O índice do produto mais caro é: " + indiceMaior);
console.log("O preço do produto mais caro é: R$" + precos[indiceMaior].toFixed(2));