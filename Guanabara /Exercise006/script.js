

    function gerar(){
        let numero = document.getElementById('numero')
        let res = document.getElementById('res')
        let num = Number(numero)
        let tabuada = 0
        if (numero.value.length ==0){
            window.alert('Por favor, digite um número!')
        } else {
            for (let i = 0; i <= 10; i++){
                tabuada = Number(numero.value) * i
                res.innerHTML += `${numero.value} x ${i} = ${tabuada} <br>`
            }
            
        }
        
    }
    
