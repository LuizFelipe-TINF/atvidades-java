const livro =
{
nome: "",
older: "",
pages: "",
nacionality: ""
}
livro.nome = prompt("Qual o nome do livro?")
livro.older = prompt("Qual o ano do livro?")
livro.pages = prompt("Quantas paginas tem o livro?")
livro.nacionality = prompt("Qual a nacionalidade do autor do livro? \n 1.Brasileiro \n 2.Outro")


const livro2 =
{
nome: "",
older: "",
pages: "",
nacionality: ""
}
livro2.nome = prompt("Qual o nome do livro?")
livro2.older = prompt("Qual o ano do livro?")
livro2.pages = prompt("Quantas paginas tem o livro?")
livro2.nacionality = prompt("Qual a nacionalidade do autor do livro? \n 1.Brasileiro \n 2.Outro")



if(livro.older < livro2.older)
{
    console.log("O livro ", livro.nome, " é o livro mais velho")
}
else if(livro.older > livro2.older)
{
    console.log("O livro ", livro2.nome, " é o livro mais velho")
}
else
{
    console.log("Os livros tem a mesma idade")
}


if(livro.pages > livro2.pages)
{
    console.log("O livro ", livro.nome, " é o que tem mais paginas")
}
else if(livro.pages < livro2.pages)
{
    console.log("O livro ", livro2.nome, " é o que tem mais paginas")
}
else
{
    console.log("Os livros tem a mesma quantidade de paginas")
}


if(livro.nacionality == 1)
{
    console.log("O livro ", livro.nome, " é brasileiro")
}
else if(livro2.nacionality == 1)
{
    console.log("O livro ", livro2.nome, " é brasileiro")
}
else if(livro.nacionality == 2)
{
    console.log("O livro ", livro.nome, " é de outro país")
}
else if(livro2.nacionality == 2)
{
    console.log("O livro ", livro2.nome, " é de outro país")
}