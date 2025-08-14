let valorHora = prompt("Digite o valor recebido por hora: ");
let horasTrabalhada = prompt("Digite a quantidade de horas trabalhadas: ");

valorHora = Number(valorHora);
horasTrabalhada = Number(horasTrabalhada);

let salario = (valorHora * horasTrabalhada);

console.log("O salario é: "+ salario);