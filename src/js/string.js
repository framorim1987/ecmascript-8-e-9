const nome = 'Felipe';
const sobreNome = 'Amorim';
const numeroCartao = '4806';

const nomeCompletoStringPadStart = sobreNome.padStart(12, nome);

const nomeCompletoStringPadEnd = nome.padEnd(12, sobreNome);

const numeroCartaoStringPadStart = numeroCartao.padStart(16, '*');

console.log(nomeCompletoStringPadStart);
console.log(nomeCompletoStringPadEnd);
console.log(numeroCartaoStringPadStart);