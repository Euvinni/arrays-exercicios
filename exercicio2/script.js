//Exercicio 2
const arrayDeNumeros = [11, 7, 40, 859]

const arrayDeStrings = [`violão`, `guitarra`, `vinicius`]

const arrayDeDiversos = [`Chris`, 37, true, `perfume`]

// Parte a)

const quantidadeArrayDeNumeros =(arrayDeNumeros.length)
const quantidadeArrayDeStrings =(arrayDeStrings.length)
const quantidadeArrayDeDiversos =(arrayDeDiversos.length)


console.log(`A quantidade de arrayNumeros é:`, quantidadeArrayDeNumeros)
console.log(`A quantidade de arrayDeStrings é:`, quantidadeArrayDeStrings)
console.log(`A quantidade de arrayDeDiversos é:`, quantidadeArrayDeDiversos)

//Parte b) 

console.log(arrayDeNumeros[0])
console.log(arrayDeStrings[1])
console.log(arrayDeDiversos[2])

// Parte c)

console.log(arrayDeNumeros.includes(40))
console.log(arrayDeDiversos.includes(`guitarra`))


