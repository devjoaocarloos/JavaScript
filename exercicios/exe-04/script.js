const turista = prompt("Qual o seu nome turista?");
let cidades = "";
let cidadeVisitada = 0;

let visitou = prompt("Vc já visitou alguma cidade? (Sim/Não)");

while (visitou === "Sim") {
  let cidade = prompt("Qual o nome da cidade?");
  cidades += " - " + cidade + "\n";
  cidadeVisitada++;
  visitou = prompt("Vc visitou alguma outra cidade?");
}

alert(
  "\n Nome do turista: " + turista +
  "\n Quantidade de cidades visitadas: " + cidadeVisitada +
  "\n Cidades Visitadas: \n" + cidades
);
