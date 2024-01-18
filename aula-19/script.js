let dia = parseFloat(prompt("digite um dia da semana:"));

switch (dia) {
  case 0:
    alert("Domingo");
    break;
  case 1:
    alert("segunda-feira");
    break;
  case 2:
    alert("Terça-feira");
    break;
  case 3:
    alert("Quarta-feira");
    break;
  case 4:
    alert("Quinta-feira");
    break;
  case 5:
    alert("Sexta-feira");
    break;
  case 6:
    alert("Sábado");
    break;
  default:
    alert('Digite um numero entre 0 e 6');
}