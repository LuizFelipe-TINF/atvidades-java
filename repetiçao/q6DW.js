let matriculas = [];
let notas = [];
let soma = 0;
let i = 0;

do {
    let matricula = prompt(`Digite a matrícula do aluno ${i + 1}:`);
    let nota = Number(prompt(`Digite a nota do aluno ${i + 1}:`));
    matriculas.push(matricula);
    notas.push(nota);
    soma += nota;
    i++;
} while (i < 5);

let media = soma / 5;

console.log("Matrículas dos alunos com nota acima da média:");
i = 0;
do {
    if (notas[i] > media) {
        console.log(matriculas[i]);
    }
    i++;
} while (i < 5);