

function verificar(){
    let txtano = document.getElementById('txtano')
    let agora = new Date()
    let anoHoje = agora.getFullYear()
    let res = document.getElementById('res')

    if (txtano.value.length == 0 || Number(txtano.value) > anoHoje){
        console.log('Invalido!')
    } else {
        let sexo = document.getElementsByName('radsex')
        let idade = anoHoje - Number(txtano.value)
        let genero = ''
        if (sexo[0].checked){
            genero='Homem'
            if (idade >= 0 && idade < 10){
                //crianca
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        } else if (sexo[1].checked){
            genero='Mulher'
            if (idade >= 0 && idade < 10){
                //crianca
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
            
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`

    }
}
