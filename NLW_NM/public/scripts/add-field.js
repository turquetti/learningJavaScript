// procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)

// executar uma acao
function cloneField(){
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        field.value = ""
    })
   

    //Colocar na página
    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}
    // Duplicar os campos

    // Colocar na pagina