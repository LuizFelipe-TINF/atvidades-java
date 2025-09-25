function processo(){
    switch(valor){
        case '1': gerarpoke()
        break;
        case '2': taxapoke()
        break;
        case '3': historicopoke()
        break;
        
    }
}








function menu()
{
    let escolha 

    do{
        escolha = prompt(`Menu
        1- Gerar pokemão
        2- Taxas de captura
        3- Histórico de pokemãos gerados
        0- Encerrar`)
        
        processo(escolha)

    }while(escolha != 0)
}

menu()