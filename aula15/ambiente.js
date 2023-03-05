let num = [5, 7, 9, 5, 1]
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} números.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}
