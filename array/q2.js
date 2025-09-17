let tiposSanguineos = [];

for (let i = 0; i < 10; i++) {
    let tipo = prompt("Digite o tipo sanguíneo da pessoa " + (i + 1) + ":");
    tiposSanguineos.push(tipo);
}

console.log("=== Cadastros de Tipos Sanguíneos ===");
for (let i = 0; i < tiposSanguineos.length; i++) {
    console.log("Pessoa " + (i + 1) + " - Tipo sanguíneo: " + tiposSanguineos[i]);
}