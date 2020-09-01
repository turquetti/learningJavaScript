

function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)
        if (pas <= 0){
            window.alert('Passo Inválido, considerando Passo 1!')
            pas = 1
        }
        if(ini < fi) {
            for(let i = ini; i <= fi; i = i + pas){
                res.innerHTML += ` ${i} `
            }
        } else {
            for(let i = ini; i >= fi; i = i - pas){
                res.innerHTML += ` ${i} `
            }
        }
    }
}
