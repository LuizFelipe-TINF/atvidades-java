const Batman = {

    nota: "",
    views: "",
    genero: ""

}
Batman.nota = prompt("Qual a nota para o filme do Batman cavaleiro das trevas")
Batman.nota = Number(Batman.nota)

Batman.views = prompt("Quantas visualizações teve o filme de Batman cavaleiro das trevas")
Batman.views = Number(Batman.views)

Batman.idade = prompt("Qual a idade para assistir o filme de Batman cavaleiro das trevas")
Batman.idade = Number(Batman.idade)


const Deadpool = {

    nota: "",
    views: "",
    genero: ""

}
Deadpool.nota = prompt("Qual a nota para o filme Deadpool")
Deadpool.nota = Number(Deadpool.nota)

Deadpool.views = prompt("Quantas visualizações teve o filme Deadpool")
Deadpool.views = Number(Deadpool.views)

Deadpool.idade = prompt("Qual idade para assistir o filme Deadpool")
Deadpool.idade = Number(Deadpool.idade)

console.log("O filme de Batman cavaleiro das trevas teve nota ", +Batman.nota, "e um total de ", +Batman.views, ", o filme é para maiores de ", +Batman.idade)

console.log("O filme Deadpool teve nota ", +Deadpool.nota, "e um total de ", +Deadpool.views, ", o filme é para maiores de ", +Deadpool.idade)


if (Deadpool.nota > Batman.nota)
{
    console.log("O filme Deadpool foi melhor avaliado")
}
else if(Batman.nota > Deadpool.nota)
{
    console.log("O filme de Batman cavaleiro das trevas foi melhor avaliado")
}
else
{
    console.log("Os dois filmes tiveram a mesma nota")
}

