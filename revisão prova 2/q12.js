const boneco = {

    nome: "",
    preço: "",
    estoque: ""
}

boneco.nome = prompt("Qual o nome do boneco?")

boneco.preço = prompt("Qual o preço do boneco?")
boneco.preço = Number(boneco.preço)

boneco.estoque = prompt("Quantos bonecos há no estoque?")
boneco.estoque = Number(boneco.estoque)

precototal = boneco.preço * boneco.estoque

if(boneco.estoque > 0)
{
        console.log("Há "+boneco.estoque, " boneco(s) "+ boneco.nome, " no estoque, disponíveis 1 por "+boneco.preço, ", e "+boneco.estoque, " boneco(s) "+boneco.nome, " por: ",+precototal);
}