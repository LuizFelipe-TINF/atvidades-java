let membros = parseInt(prompt("Quantos membros tem a família?"));
let total = 0;

for (let i = 1; i <= membros; i++) {
  let salario = parseFloat(prompt(`Digite o salário do membro ${i}:`));
  total += salario;
}

alert("O total de dinheiro da família é: R$ " + total.toFixed(2));