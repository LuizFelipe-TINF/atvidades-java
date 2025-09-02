const filme = {

    nome: "",
    classificacao: ""
}

filme.nome = prompt("Qual o nome do filme?")
filme.classificacao = prompt("Qual a classificação do filme?")

console.log("O filme", filme.nome, "tem a classificação", filme.classificacao)