let filmes = [];

for (let i = 0; i < 6; i++) {
    let nome = prompt("Digite o nome do filme " + (i + 1) + ":");
    let nota = Number(prompt("Digite a nota do filme " + (i + 1) + ":"));
    filmes.push({ nome: nome, nota: nota });
}

let opcao;
do {
    opcao = prompt(
        "=== MENU ===\n" +
        "a) Imprimir dados de 1 filme\n" +
        "b) Avaliar um filme\n" +
        "c) Alterar dados de um filme\n" +
        "d) Finalizar e mostrar todos os filmes\n" +
        "Escolha uma opção:"
    ).toLowerCase();

    switch (opcao) {
        case "a":
            let indiceA = Number(prompt("Digite o índice do filme (0 a " + (filmes.length - 1) + "):"));
            if (indiceA >= 0 && indiceA < filmes.length) {
                console.log("Filme: " + filmes[indiceA].nome + " | Nota: " + filmes[indiceA].nota);
            } else {
                console.log("Índice inválido!");
            }
            break;

        case "b":
            let indiceB = Number(prompt("Digite o índice do filme (0 a " + (filmes.length - 1) + "):"));
            if (indiceB >= 0 && indiceB < filmes.length) {
                let novaNota = Number(prompt("Digite a nova nota do filme:"));
                filmes[indiceB].nota = (filmes[indiceB].nota + novaNota) / 2;
                console.log("Nota atualizada! Nova média: " + filmes[indiceB].nota.toFixed(2));
            } else {
                console.log("Índice inválido!");
            }
            break;

        case "c":
            let indiceC = Number(prompt("Digite o índice do filme (0 a " + (filmes.length - 1) + "):"));
            if (indiceC >= 0 && indiceC < filmes.length) {
                let novoNome = prompt("Digite o novo nome do filme:");
                let novaNota = Number(prompt("Digite a nova nota do filme:"));
                filmes[indiceC].nome = novoNome;
                filmes[indiceC].nota = novaNota;
                console.log("Dados do filme atualizados!");
            } else {
                console.log("Índice inválido!");
            }
            break;

        case "d":
            console.log("=== Lista final de filmes ===");
            for (let i = 0; i < filmes.length; i++) {
                console.log("[" + i + "] Filme: " + filmes[i].nome + " | Nota: " + filmes[i].nota);
            }
            console.log("Programa finalizado!");
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
    }

} while (opcao !== "d");