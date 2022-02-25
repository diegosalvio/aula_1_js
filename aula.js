
const nomes = ["Ana Maria", "Antonio Nunes", "Rodrigo Jorge", "Alex Seixas", "Cristina Aguillera"]
//console.log(nomes.length)


//estamos verificando se  nome começa com A
const resultante = nomes.filter((n) => {
    return n.startsWith("A")
})

console.log(resultante)

//const nomes = [1, 2]
//console.log(nomes)
//nomes[0] = 3
//console.log(nomes)
//nomes = "oi"

