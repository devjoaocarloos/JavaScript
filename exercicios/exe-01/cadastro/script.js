let nome = prompt("Qual seu nome?");
let sobrenome = prompt("Qual seu sobrenome?");
let campoDeEstudo = prompt("Qual seu campo de estudo?");
let anoDeNascimento= prompt("Qual seu ano de nascimento?");
let idade = 2024 - anoDeNascimento;

alert(
  "O nome do recruta é: " + nome + " " + sobrenome + 
  "\n Seu campo de estudo é: " + campoDeEstudo + 
  "\n Sua Idade é: " + idade
  );