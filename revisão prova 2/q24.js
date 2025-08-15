const poke1 =
{
    id: "",
    nome: "",
    tipo: "",
    poder: "",
    hp: ""
}

poke1.id = prompt("Qual o id do pokemon?")
poke1.nome = prompt("Qual o nome do pokemon?")
poke1.tipo = prompt("Qual o tipo do pokemon?")
poke1.hp = prompt("Qual o hp do pokemon?")


poke1.hp = Number(poke1.hp)
poke1.poder = Number(poke1.poder)
poke1.poder = (Math.random() * 10)
poke1.poder = Math.floor(poke1.poder) + 1

const poke2 =
{
    id: "",
    nome: "",
    tipo: "",
    poder: "",
    hp: ""
}

poke2.id = prompt("Qual o id do pokemon?")
poke2.nome = prompt("Qual o nome do pokemon?")
poke2.tipo = prompt("Qual o tipo do pokemon?")
poke2.hp = prompt("Qual o hp do pokemon?")

poke2.hp = Number(poke2.hp)
poke2.poder = Number(poke2.poder)
poke2.poder = (Math.random() * 10)
poke2.poder = Math.floor(poke2.poder) + 1

console.log(poke1);
console.log(poke2);

for (turnos = 0; poke1.hp > 0 && poke2.hp > 0; turnos++) {

    console.log("Hp do ", poke1.nome , " esta em: ", poke1.hp)
    console.log("Hp do ", poke2.nome , " esta em: ", poke2.hp)

    poke1.hp = poke1.hp - (poke2.poder + 3)
    poke2.hp = poke2.hp - poke1.poder

    if (poke1.hp <= 0) 
    {
        console.log("O ", poke2.nome, " saiu vencedor da batalha")
        break;
    }

    if (poke2.hp <= 0) 
    {
        console.log("O ", poke1.nome, " saiu vencedor da batalha")
        break;
    }

}