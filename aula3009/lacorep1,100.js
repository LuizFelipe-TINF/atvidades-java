
function alterarMSG(nome){
    const elemento = document.getElementById("msg")
    elemento.innerHTML = `Boa tarde ${nome}!`
    }
    
    let elementoBotao = document.getElementById("btnConfirm")
    
    elementoBotao.addEventListener("click", function(){
        
       const elemento = document.getElementById("msg")

       const nome = document.getElementById("nome").value

       console.log(nome)

        elemento.innerHTML = `Boa tarde ${nome}!`

        let numerosElemento = document.getElementById("numeros");
        for (let i = 1; i <= 100; i++) {
        numerosElemento.innerHTML += i + " "; //" " para adicionar um espaço entre os números, faz virar string
    }
    
    })