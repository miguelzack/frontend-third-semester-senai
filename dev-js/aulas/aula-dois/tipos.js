var nome = "25"
var idade = 17
var vivoBoolean = true
var vivo = 1
let naosei
let end = null
let numerogrande = BigInt(1)
let symbol = Symbol(1)

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof vivoBoolean)
console.log(typeof vivo)
console.log(typeof naosei)
console.log(end)
console.log(typeof numerogrande)
console.log(typeof symbol)

console.log(" ")

var nomeConvertido = Number(nome)
console.log(typeof nomeConvertido)

var idadeConvertida = String(idade)
console.log(typeof idadeConvertida)

var vivoConvertido = Boolean(vivo)
console.log(typeof vivoConvertido)

//Valor primitivo é o tipo mais simples de variável, no qual armazena um único valor.
// Ou seja, defini que o valor para nome é Miguel, quando eu colocar nome = Alberto, ele não vai adicionar como na lista, ele vai substituir o valor.

//Valor por referência é objeto e array. Ao copiar o mesmo, não é copiado o valor, mas simo endereço na memória.