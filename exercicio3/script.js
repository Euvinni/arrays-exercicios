//Ex 3

const meusNumerosArrays = [11, 15, 25, 40]
const minhasStringsArrays = [`Violão`, `Guitarra`, `Skate`]
const minhaBaguncaArrays = [`Apple`, 128, true]

const meusNumerosArraysCopia = meusNumerosArrays.slice()
const minhasStringsArraysCopia = minhasStringsArrays.slice()
const minhaBaguncaArraysCopia = minhaBaguncaArrays.slice()

// a)

meusNumerosArraysCopia.unshift(50)
console.log(meusNumerosArrays)
console.log(meusNumerosArraysCopia)

// b)
minhasStringsArraysCopia.pop()
console.log(meusNumerosArrays)
console.log(meusNumerosArraysCopia)

// c) 
minhaBaguncaArraysCopia.splice(1,1)
console.log(minhaBaguncaArrays)
console.log(minhaBaguncaArraysCopia)
