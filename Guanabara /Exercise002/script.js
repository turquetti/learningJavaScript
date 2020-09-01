let agora = new Date()
let hora = agora.getHours()
let res = document.getElementById('res')
let img = document.getElementById('img')

if (hora >= 0 && hora < 12){
    res.innerHTML = `Agora são ${hora} horas.`
    document.body.style.background="yellow"
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Morning%2C_just_after_sunrise%2C_Namibia.jpg/280px-Morning%2C_just_after_sunrise%2C_Namibia.jpg"
} else if (hora <= 18){
    res.innerHTML= `Agora são ${hora} horas.`
    document.body.style.background="orange"
    img.src = "https://cdn.mensagenscomamor.com/content/images/m000193815.jpg?v=0&w=300&h=200"
} else {
    res.innerHTML = `Agora são ${hora} horas.`
    document.body.style.background="blue"
    img.src="https://www.aluralingua.com.br/artigos/assets/night.jpg"

}

