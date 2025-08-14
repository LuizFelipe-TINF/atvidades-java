let op = prompt(" 1.soma \n 2.subtração \n 3.multiplicação \n 4.divisão")
op = Number(op)

let n1 = prompt("Digite um numero")
n1 = Number(n1)

let n2 = prompt("Digite outro numero")
n2 = Number(n2)

let nfinal

if (op == 1) {

    nfinal = n1 + n2

    console.log("A soma dos numeros é :" + nfinal)
    
}
else if (op == 2) {

    nfinal = n1 - n2

    console.log("A subtração dos numeros é :" + nfinal)
    
}
else if (op == 3) {

    nfinal = n1 * n2

    console.log("A multiplicação dos numeros é :" + nfinal)
    
}
else if (op == 4) {

    nfinal = n1 / n2

    console.log("A divisão dos numeros é :" + nfinal)
    
}
else{

    console.log("A operação é inexistente")
}