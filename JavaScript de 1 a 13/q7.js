let produto = prompt("O preço é:");

produto = Number(produto);


let desconto = ((5/100) * produto);
let precodesc = (produto - desconto);

console.log("Com 5% de desconto o preço é: "+ precodesc);