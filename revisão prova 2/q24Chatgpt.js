// Função para sortear um valor de poder entre 1 e 10
function sortearPoder() {
  return Math.floor(Math.random() * 10) + 1;
}

// Função para verificar vantagem elemental
function vantagem(tipo1, tipo2) {
  return (
    (tipo1 === "agua" && tipo2 === "fogo") ||
    (tipo1 === "fogo" && tipo2 === "terra") ||
    (tipo1 === "terra" && tipo2 === "agua")
  );
}

// Lendo dados dos dois pokemãos
let pokemon1 = {
  id: Number(prompt("Digite o ID do primeiro pokemão:")),
  nome: prompt("Digite o nome do primeiro pokemão:"),
  tipo: prompt("Digite o tipo do primeiro pokemão (agua, fogo ou terra):").toLowerCase(),
  poder: sortearPoder()
};

let pokemon2 = {
  id: Number(prompt("Digite o ID do segundo pokemão:")),
  nome: prompt("Digite o nome do segundo pokemão:"),
  tipo: prompt("Digite o tipo do segundo pokemão (agua, fogo ou terra):").toLowerCase(),
  poder: sortearPoder()
};

// Exibindo informações iniciais
console.log("=== POKEMÃOS ===");
console.log(pokemon1);
console.log(pokemon2);

// Aplicando vantagem elemental
let poder1 = pokemon1.poder;
let poder2 = pokemon2.poder;

if (vantagem(pokemon1.tipo, pokemon2.tipo)) {
  poder1 += 3;
} else if (vantagem(pokemon2.tipo, pokemon1.tipo)) {
  poder2 += 3;
}

// Determinando vencedor
console.log("\n=== RESULTADO DA LUTA ===");
console.log(`${pokemon1.nome} (Poder: ${poder1}) VS ${pokemon2.nome} (Poder: ${poder2})`);

if (poder1 > poder2) {
  console.log(`🏆 ${pokemon1.nome} venceu a batalha!`);
} else if (poder2 > poder1) {
  console.log(`🏆 ${pokemon2.nome} venceu a batalha!`);
} else {
  console.log("⚔️ A batalha terminou em empate!");
}
