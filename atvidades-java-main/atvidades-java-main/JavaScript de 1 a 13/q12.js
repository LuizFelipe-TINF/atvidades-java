let produto = prompt("O salario é:");

produto = Number(produto);


let desconto = ((8/100) * produto);
let precodesc = (produto + desconto);

console.log("Com 8% de aumento o salario é: "+ precodesc);