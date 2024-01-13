let nome = "Joao Carlos";

// primeiro recurso
console.log(nome);
console.error(nome); //erro
console.warn(nome); //alerta

// segundo recurso - window -> representa a aba do navegador
// window.alert(nome); //mostra um alerta na tela
nome = window.prompt("Insira o seu nome:");
console.log(nome);

let confirmacao = window.confirm("Confirma essa ação?");
console.log(confirmacao);