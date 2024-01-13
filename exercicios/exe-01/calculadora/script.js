let x = prompt("Digite o valor de x");
let y = prompt("Digite o valor de y");

x = parseFloat(x);
y = parseFloat(y);

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