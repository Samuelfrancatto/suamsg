const escolherCor = document.getElementById('escolherCor')
const quadroCores = document.getElementById('quadroCores')
escolherCor.addEventListener('click', abrir)

function abrir(){
    quadroCores.style.display = 'block'
}

const botaoFechar = document.getElementById('botaoFechar')
botaoFechar.addEventListener('click', fechar)

function fechar() {
    quadroCores.style.display = 'none'
}


const cores = document.querySelectorAll('.cores')
const body = document.body

cores.forEach((div) => {
    div.addEventListener('click', () => {
        const corDeFundo = div.style.backgroundColor
        body.style.backgroundColor = corDeFundo
    })
})

const cor = document.getElementById('cor')

cores.forEach((div) => {
    div.addEventListener('click', () => {
        const corDeFundo = div.style.backgroundColor
        cor.style.backgroundColor = corDeFundo
    })
})


function mostrarMensagem(){
    var mensagem = document.getElementById('dica')
    mensagem.style.opacity = '1'

    setTimeout(function() {
        mensagem.style.opacity = 0
    }, 2000)
}


window.onload = mostrarMensagem

document.addEventListener('keydown', function(event) {
    if (event.key === ' '){
        location.reload()
    }
})