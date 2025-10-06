
const alunos = [
    { nome: "Luiz Felipe", 
        nota: 10 
    },
    { nome: "Otávio", 
        nota: 7 
    },
    { nome: "Ryan", 
        nota: 5 
    }
];


function criarNo() {
    
    alunos.forEach(aluno => {
 
        const elementoNome = document.createElement("h2");
        elementoNome.innerText = aluno.nome;

        const elementoNota = document.createElement("p");
        elementoNota.innerText = `Nota: ${aluno.nota}`;

       
        const divAluno = document.createElement("div");
        divAluno.classList.add("aluno"); 

        divAluno.appendChild(elementoNome);
        divAluno.appendChild(elementoNota);

        
        document.body.appendChild(divAluno);
    });
}

criarNo();
