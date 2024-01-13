let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

let x = parseFloat(numero1);
let y = parseFloat(numero2);

let soma = x + y;
let subtr = x - y;
let mult = x * y;
let div = x / y;

alert(
  "Resultados: " + 
  "\n Soma: " + soma + 
  "\n Subtração: " + subtr + 
  "\n Multiplição: " + mult + 
  "\n Divisão: " + div
  );