let dist = prompt("A distancia é: ");
let velmedia = prompt("A velocidade media é: ")
let precocombus = prompt("O preço do combustivel é: ")
let consumo = prompt("O consumo do carro é: ")

dist = Number(dist);
velmedia = Number(velmedia);
precocombus = Number(precocombus);
consumo = Number(consumo);


let tempoDeViagem = (dist / velmedia);
console.log("O tempo de viagem é: "+ tempoDeViagem);

let qntDeLitros = (dist / consumo)
console.log("A quantidade de litros é: "+ qntDeLitros)

let custo = (dist * precocombus)
console.log("O custo estimado é: "+ custo)