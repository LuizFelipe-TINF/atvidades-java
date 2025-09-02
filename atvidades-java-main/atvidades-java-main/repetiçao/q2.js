let soma = 0;
let contador = 0;
let idade;

do {
  idade = parseInt(prompt("Digite a idade (ou 0/negativo para parar):"));
  
  if (idade > 0) {
    soma += idade;
    contador++;
  }
} while (idade > 0);

if (contador > 0) {
  let media = soma / contador;
  alert("A idade média da população é: " + media.toFixed(2));
} else {
  alert("Nenhuma idade válida foi informada.");
}