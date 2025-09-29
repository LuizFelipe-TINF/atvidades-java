function processo(valor){
    switch(valor){
        case '1': inserirvenda()
        break;
        case '2': statusdia()
        break;
        case '3': inserirdespesa()
        break;
        case '4': despesadia()
        break;

    }
}

function inserirvenda(){
    
    vendas = [] = prompt("Qual o número de vendas?")
    vendinha = 0
    for (let i = 1; i <= vendas; i++) {
        let total = parseFloat(prompt("Qual o valor?"));
        vendinha = vendinha + total
}
}

function statusdia(){
    
    alert("O número de vendas do dia foi " + vendas + ", e o valor total foi: " + vendinha);

}

function inserirdespesa(){
    
    despesa = [] = prompt("Quantas despesas teve?")
    despesaTot = 0
    for (let i = 1; i <= despesa; i++) {
        let total = parseFloat(prompt("Qual o valor da despesa?"));
        despesaTot = despesaTot + total
}
}

function despesadia(){
    
    alert("O total de despesa do dia foi: "+ despesaTot +" e teve "+ despesa + " despesas");

}

function menu()
{
    let escolha 

    do{
        escolha = prompt(`Menu
        1- Inserir valor de venda
        2- Ver status das vendas do dia
        3- Inserir Valor de uma Despesa
        4- Ver total de despesas do dia
        0- Encerrar`)
        
        processo(escolha)

    }while(escolha != 0)
}

menu()