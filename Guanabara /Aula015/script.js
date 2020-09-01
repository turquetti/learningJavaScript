let num = [5,8,9,3]
num.push(1)
num.sort()
console.log(num.length)
console.log(num[1])
console.log(num[0])

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)