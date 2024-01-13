let x = prompt("Digite o valor de x");
let y = prompt("Digite o valor de y");

x = parseFloat(x);
y = parseFloat(y);

let soma = x + y;
let subtr = x - y;
let mult = x * y;
let div = x / y;

alert(
  "O resultado da soma é: " + soma + 
  "\n O resultado da subtração é: " + subtr + 
  "\n O resultado da multiplição é: " + mult + 
  "\n O resultado da divisão é: " + div
  );