// let fullName = "Cleo de Jesus"
// console.log(fullName.split(" "))
//
// let arrayString = fullName.split(" ");
// console.table(arrayString)
//
// let arrayCount = arrayString.length;
// console.log(arrayCount)
//
// let name = arrayString[0]
// let lastName = arrayCount[arrayCount -1]
//
// function welcome() {
//  console.log("hello world")
// }
// welcome()
//
// function welcomecComParams(name) {
//     console.log(`Olá, ${name}`)
// }
// welcomecComParams("chocolate")


function nome(nomecompleto) {
    // var nomecompleto = prompt("Digite o seu nome:")
    let arrayNome = nomecompleto.split(" ")
    console.log(`Seja Bem-Vindo ${arrayNome[0]} ${arrayNome[arrayNome.length - 1]}`)
}

nome("Miguel Zacharias da Silva")