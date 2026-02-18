let numeros = [2,5,1,4,71,43,64,67,90,84]
console.log("Array original:")
console.log(numeros)

let numerosPares = numeros.filter(n => n % 2 === 0)
console.log("Array filtrado por números pares:")
console.log(numerosPares)

let numerosAoQuadrado = numeros.map(n => n * n)
console.log("Array com todos os números elevados ao quadrado:")
console.log(numerosAoQuadrado)

let numerosSoma = numeros.reduce((acc, n) => acc + n, 0)
console.log("Todos os números do array somados:")
console.log(numerosSoma)

console.log("Array ordenado:")
console.log(numeros.sort())

console.log("Array invertido:")
console.log(numeros.reverse())