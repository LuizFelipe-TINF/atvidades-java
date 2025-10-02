const elemDiv = document.getElementById("conteudoDinamico")

const elementoCriado = document.createElement("p")
const elementoCriado2 = document.createElement("p")

elementoCriado.innerText = `Esse parágrafo foi criado no JS`
elementoCriado2.innerText = `Esse parágrafo foi criado no JSKJJSJSJSJ`

elemDiv.appendChild(elementoCriado)
elemDiv.appendChild(elementoCriado2)