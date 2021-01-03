const nome = 'Felipe';
const sobreNome = 'Amorim';
const numeroCartao = '4806';

//Antes
const nomeCompleto = `${nome} ${sobreNome}`
document.getElementById("string-antes").innerHTML = nomeCompleto;

//Depois
const nomeCompletoStringPadStart = sobreNome.padStart(12, nome);
document.getElementById("string-depois").innerHTML = nomeCompletoStringPadStart;

const nomeCompletoStringPadEnd = nome.padEnd(12, sobreNome);
document.getElementById("string-depois").innerHTML += "<br>" + nomeCompletoStringPadEnd;

const numeroCartaoStringPadStart = numeroCartao.padStart(16, '*');

// console.log(nomeCompletoStringPadStart);
// console.log(nomeCompletoStringPadEnd);
// console.log(numeroCartaoStringPadStart);