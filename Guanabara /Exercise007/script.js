let add = []
// function adicionar(){
//     let numero = document.getElementById('numero')
//     let num = Number(numero.value)
//     let res = document.getElementById('res')
//     let addNum = add.push(num)
//     res.innerHTML += `O valor ${num} foi adicionado! </br>`
//     console.log(add)
// }

function finalizar(){
    let resDois = document.getElementById('res2')
    let resTres = document.getElementById('res3')
    let resQuatro = document.getElementById('res4')
    let resCinco = document.getElementById('res5')
    let resSeis = document.getElementById('res6')
    resDois.innerHTML = `Temos ${add.length} números cadastrados!`
    let maxNum = Math.max(...add)
    resTres.innerHTML = `O maior número foi ${maxNum}`
    let minNum = Math.min(...add)
    resQuatro.innerHTML = `O menor número foi ${minNum}`
    let soma = 0
    for (let i = 0; i < add.length; i++){
        soma = soma + add[i]
        console.log(soma)
        resCinco.innerHTML = `A soma dos valores é ${soma}`
    }
    let media = soma/add.length
    resSeis.innerHTML = `A média dos número é ${media}`


}

    // function gerar(){
    //     let numero = document.getElementById('numero')
    //     let res = document.getElementById('res')
    //     let num = Number(numero)
    //     let tabuada = 0
    //     if (numero.value.length ==0){
    //         window.alert('Por favor, digite um número!')
    //     } else {
    //         for (let i = 0; i <= 10; i++){
    //             tabuada = Number(numero.value) * i
    //             res.innerHTML += `${numero.value} x ${i} = ${tabuada} <br>`
    //         }
            
    //     }
        
    // }
    
