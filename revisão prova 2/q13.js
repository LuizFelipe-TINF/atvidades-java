const pessoa =
{
nome: "",
peso: "",
altura: "",
temperatura: ""
}

pessoa.nome = prompt("Qual o nome da pessoa?")

pessoa.peso = prompt("Qual o peso da pessoa?")
pessoa.peso = Number(pessoa.peso)

pessoa.altura = prompt("Qual a altura da pessoa?")
pessoa.altura = Number(pessoa.altura)

pessoa.temperatura = prompt("Qual a temperatura ?")
pessoa.temperatura = Number(pessoa.temperatura)

if(pessoa.temperatura >= 37.5)
{
    console.log("",pessoa.nome,"está com febre")
}
else{
    console.log("Não está com febre")
}
