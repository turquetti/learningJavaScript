const aluno01 = {
    nome: "Gabriela",
    nota: 9.8
}

const aluno02 = {
    nome: "Bolacha",
    nota: 8
}

const aluno03 = {
    nome: "Jacquin",
    nota: 7
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota)/3

//Se média maior que 5, parabenizar a turma

if(media > 5) {
    console.log(`A nota foi de ${media}`. Parabéns!`)
} else {
    console.log('A média é menor que 5.')
}