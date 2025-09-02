let soma = 0;

while (true) {
  let numero = parseFloat(prompt("Digite um número (0 para encerrar):"));
  
  if (numero === 0) {
    break;
  }
  
  soma += numero;
}

alert("O somatório dos números é: " + soma);