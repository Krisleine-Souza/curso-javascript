let vetores = [1, 3, 6, 9, 7, 4]
vetores.sort()
console.log(vetores)
/*
for (let pos=0; pos < vetores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}
*/

for(let pos in vetores) {
    console.log(`A posição ${pos} tem o valor ${vetores}`)
}
