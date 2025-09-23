//E - operandos, operação
//P - a partir da operação selecionada realizar o calculo
//S - mostrar na tela e retornar ao menu da calculadora

function soma(a, b){
    return a + b
}

function subtracao(a, b){
    return a - b
}

function multplicacao(a, b){
    return a * b
}

function divisao(a, b){
   if(b != 0){
    return a / b
}
else{
    alert("ERRO! Divisão por zero")
    return
}
}


function operacao(num1, num2, op){
    let res
    switch(op){
        case '1': res = soma(num1, num2);
            break;
        case '2': res = subtracao(num1, num2);
            break;
        case '3': res = multplicacao(num1, num2);
            break;
        case '4': res = divisao(num1, num2);
            break;
    }

    return res
}

function menu()
{
    let escolha = 0

    do{
        escolha = prompt(`Calculadora
        1- Soma
        2- Subtracao
        3- Multplicacao
        4- Divisao
        0- Sair`)

        if(escolha >= 1 && escolha < 5){
            let n1 = parseFloat(prompt("Digite o primeiro numero"))
            let n2 = parseFloat(prompt("Digite o segundo numero"))
            let resultado = operacao(n1, n2, escolha)
            if(resultado){
                alert("O resultado foi " + resultado)
            }
        }
        
    }while(escolha != 0)
}

menu()
