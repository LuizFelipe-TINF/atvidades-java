let fitaRNA = [];
let complemento = [];

for (let i = 0; i < 10; i++) {
    let base = prompt("Digite a base da posição " + (i + 1) + " (A, U, C, G):").toUpperCase();
    fitaRNA.push(base);
}

for (let i = 0; i < fitaRNA.length; i++) {
    switch (fitaRNA[i]) {
        case "A":
            complemento.push("U");
            break;
        case "U":
            complemento.push("A");
            break;
        case "C":
            complemento.push("G");
            break;
        case "G":
            complemento.push("C");
            break;
        default:
            complemento.push("?");
            break;
    }
}

console.log("Fita original:     " + fitaRNA.join(" - "));
console.log("Fita complementar:" + complemento.join(" - "));
