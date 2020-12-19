# ecmascript-8-e-9
 ## Curso de EcmaScript 8 e 9: Novas formas de escrever em Javascript
 Este repositório armazena os códigos desenvolvidos nas aulas do curso **Curso de EcmaScript 8 e 9: Novas formas de escrever em Javascript** da __*Alura*__
 
 ## Tópicos
 O curso possui os seguintes tópicos:
 1. Atualizações nas strings e arrays
 2. Entendendo as mudanças no Object
 3. Analisando mais a fundo eventos assíncronos
 4. Vamos trabalhar com iterators

## Atualizações nas strings e arrays
Neste tópico foram passadas duas novas funcionalidades, **string padding** e **includes**

### String Padding
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

### includes
**Includes** é um método para localizar um valor dentro de um array. Este métodos retorna um booleno (true ou false)

*Exemplo*
```
const aprovados = ['Marcelo', 'Aline', 'Felipe', 'Gustavo', 'Marcia'];
const nomeAprovado = aprovados.includes('Felipe');
console.log(nomeAprovado)
```

[Documentação MDN Array.prototype.includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains)
