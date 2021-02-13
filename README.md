# ecmascript-8-e-9
Este repositório armazena os códigos desenvolvidos no **Curso de EcmaScript 8 e 9: Novas formas de escrever em Javascript** da __*Alura*__

## Sobre o projeto
O projeto trata-se de uma lista de exercício que utilizam as novas funcionalidades do EcmaScript 8 e 9.

## Sobre o curso
O curso possui os seguintes tópicos:
1. Atualizações nas strings e arrays
2. Entendendo as mudanças no Object
3. Analisando mais a fundo eventos assíncronos
4. Vamos trabalhar com iterators

Abaixo a explicação sobre as funcionalidades abordadas em cada tópico e exemplos dos códigos desenvolvidos.

## Atualizações nas strings e arrays
Neste tópico foram passadas duas novas funcionalidades, **string padding** e **includes**

#### String Padding
O string padding possui dois métodos **padStart** e **padEnd**, que facilitam a concatenação de strings. Ambos os métodos recebem dois parâmetros, o primeiro parâmetro é o tamanho da nova string e o segundo é a string a ser concatenada
O método **padStart** concatena a nova string no início e o **padEnd** concatena no final

*Exemplo*
```
const numeroCartao = '4806';
const numeroCartaoStringPadStart = numeroCartao.padStart(16, '*');
console.log(numeroCartaoStringPadStart);
```

[Documentação MDN String.prototype.padStart()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
[Documentação MDN String.prototype.padEnd()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

#### includes
**Includes** é um método para localizar um valor dentro de um array. Este métodos retorna um booleno (true ou false)

*Exemplo*
```
const aprovados = ['Marcelo', 'Aline', 'Felipe', 'Gustavo', 'Marcia'];
const nomeAprovado = aprovados.includes('Felipe');
console.log(nomeAprovado)
```

[Documentação MDN Array.prototype.includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains)

## Entendendo as mudanças no Object

#### Object prototype entries
O **Object prototype entries** é um método que transforma o objeto em um array principal, onde cada conjunto chave valor será separado em um novo array dentro desse array principal

*Exemplo*
```
const cursos = {
node: 90,
react: 80,
angular: 70,
vue: 60
}

const cursosEntries = Object.entries(cursos);
cursosEntries.map(curso => console.log(`${curso[0]} - ${curso[1]}`));
```

[Documentação MDN Object.entries()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

#### Object.values
O **Object.values** este método retorna todos os valores do objeto. De todos os conjuntos chave valor ele retornará apenas os valores

*Exemplo*
```
const cursos = {
    node: 90,
    react: 80,
    angular: 70,
    vue: 60
}

const cursosEntries = Object.entries(cursos);
console.log(Object.values(cursos));
```

[Documentação MDN Object.values()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

#### Rest e Spread
A sintaxe de **rest parameter (parâmetros rest)**  nos permite representar um número indefinido de argumentos como um array.

*Exemplo*
```
function renderizarLista(...itens) {

    return document.getElementById(itens[0])
    .innerHTML = `<ul>${itens[1].map(item => `<li>${item}</li>`)}</ul>`
}
```

O **Spread operator** permite unir arrays e objetos, sendo este seu uso mais comum.

*Exemplo*
```
const novosCuros = {angular, ...frameworks}
console.log(novosCuros);
```

[Documentação MDN Parâmetros Rest](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)

[Documentação MDN Spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Analisando mais a fundo eventos assíncronos
