// let produto = { nome: "Notebook", preco: 3500, estoque: 10 };
//
// for (let chave in produto) {
//     console.log(chave, ":", produto[chave]);
// }

let pessoa = {
    nome: "Miguel",
    idade: 18,
    profisao: "estudante",
    apresentar() {
        return `Olá ${this.nome}, você tem ${this.idade} anos e é ${this.profisao}.`
    }
}
console.log(pessoa.apresentar())


let loja = {
    nome: "Renner",
    produtos: ["camisa", "camiseta", "calça"]
}

for (let chave in loja) {
    console.log(chave, ":", loja[chave]);
}