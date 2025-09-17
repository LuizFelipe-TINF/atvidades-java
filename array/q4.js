 let disciplinas = [];
let totalFrequencia = 0;
let contadorNotasAcima = 0;

let qtdDisciplinas = Number(prompt("Quantas disciplinas deseja cadastrar?"));

for (let i = 0; i < qtdDisciplinas; i++) {
    let nome = prompt("Digite o nome da disciplina " + (i + 1) + ":");
    let nota = Number(prompt("Digite a nota da disciplina " + (i + 1) + ":"));
    let frequencia = Number(prompt("Digite a frequência (%) da disciplina " + (i + 1) + ":"));

    disciplinas.push({
        nome: nome,
        nota: nota,
        frequencia: frequencia
    });

    totalFrequencia += frequencia;
}


let mediaFrequencia = totalFrequencia / disciplinas.length;


for (let i = 0; i < disciplinas.length; i++) {
    if (disciplinas[i].nota > 60) {
        contadorNotasAcima++;
    }
}


console.log("=== Relatório ===");
console.log("Média de frequência: " + mediaFrequencia.toFixed(2) + "%");
console.log("Quantidade de notas acima de 60%: " + contadorNotasAcima);