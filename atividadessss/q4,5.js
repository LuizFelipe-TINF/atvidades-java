const computador ={
    marca: "positivo",
    processador: "core i3",
    memoria: "8GB",
    hd: "1TB"
}

function criarNo(){
    const elementoMarca = document.createElement("h1")
    elementoMarca.innerText = `${computador.marca}`

    const elementoProcessador = document.createElement("h2")
    elementoProcessador.innerText = `${computador.processador}`

    const elementoMemoria = document.createElement("h2")
    elementoMemoria.innerText = `${computador.memoria}`

    const elementoHd = document.createElement("p")
    elementoHd.innerText = `${computador.hd}`

    const divPc = document.createElement("div")
    divPc.classList.add("produto")

    divPc.appendChild(elementoMarca)
    divPc.appendChild(elementoProcessador)
    divPc.appendChild(elementoMemoria)
    divPc.appendChild(elementoHd)

    document.body.appendChild(divPc)
}

criarNo()