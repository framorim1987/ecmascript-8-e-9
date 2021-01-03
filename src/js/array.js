const aprovados = ['Marcelo', 'Aline', 'Felipe', 'Gustavo', 'Marcia'];

//Antes
const nomeIndexOf = aprovados.indexOf('Felipe');
document.getElementById("array-antes").innerHTML = nomeIndexOf;

//Depois
const nomeAprovado = aprovados.includes('Felipe');
document.getElementById("array-depois").innerHTML = nomeAprovado;
//console.log(nomeAprovado)