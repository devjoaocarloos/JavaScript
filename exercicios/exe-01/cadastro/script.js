let nome = prompt("Informe o primeiro nome do recruta:");
let sobrenome = prompt("Informe o sobrenome do recruta");
let campoDeEstudo = prompt("Qual é o campo de estudo do recruta?");
let anoDeNascimento= prompt("Qual é o ano de nascimento do recruta?");
let idade = 2024 - anoDeNascimento;

alert(
  "Recruta cadastro com sucesso!" +
  "\n Nome completo: " + nome + " " + sobrenome + 
  "\n Campo de estudo: " + campoDeEstudo + 
  "\n Idade: " + idade
  );