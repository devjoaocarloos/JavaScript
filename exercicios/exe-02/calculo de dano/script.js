const atacante = prompt("Qual é o nome do personagem atacante?");
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"));

const defensor = prompt("Qual o nome do personagem defensor?");
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"));
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
} 

pontosDeVida -= danoCausado

alert(atacante + " casou " + danoCausado + " pontos de dano em " + defensor);
alert (
  atacante + "\n Poder de atacante: " + poderDeAtaque + "\n\n" +
  defensor + "\n Pontos de vida: " + pontosDeVida +
  "\n Poder de defesa: " + poderDeDefesa + "\n Possui escudo: " + possuiEscudo
);