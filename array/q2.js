let tipos = [];
for (let i = 0; i < 10; i++) {
  tipos[i] = prompt("Digite o tipo sanguíneo da pessoa " + (i+1) + ":");
}

let textoTipos = "";
for (let i = 0; i < 10; i++) {
  textoTipos += "Pessoa " + i + ": " + tipos[i] + "\n";
}
alert(textoTipos);
