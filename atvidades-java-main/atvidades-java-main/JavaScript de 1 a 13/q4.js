let n1 = prompt("Digite a primeira nota: ");
let n2 = prompt("Digite a segunda nota: ");
let n3 = prompt("Digite a terceira nota: ");

let p1 = prompt("Digite o peso da primeira nota: ");
let p2 = prompt("Digite o peso da segunda nota: ");
let p3 = prompt("Digite o peso da terceira nota: ");


n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);

p1 = Number(p1);
p2 = Number(p2);
p3 = Number(p3);

let mediaPonderada =((n1*p1 + n2*p2 + n3*p3) / (p1 + p2 + p3));

console.log("A media ponderada é: "+ mediaPonderada);