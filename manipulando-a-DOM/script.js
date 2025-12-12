const mainElement = document.createElement('main') //criação do elemento
const h1Element = document.createElement('h1')
const pElement = document.createElement('p')
const spanElement = document.createElement('span')

const bodyElement = document.querySelector('body')

h1Element.innerHTML = "Tarcísio Alves Bertolino"  //adicionando valor ao elemento
pElement.innerHTML = "Desenvolvedor"
spanElement.innerHTML = "Cataguases - MG"

mainElement.style.display = 'flex'  //colocando estilo no mainElement
mainElement.style.flexDirection = 'center'

mainElement.classList.add('flex', 'flex-col', 'gap-4') //adicionando as classes do css

h1Element.style.fontSize = '2.4rem'  
pElement.style.fontSize = '1.8rem'
spanElement.style.fontSize = '1.4rem'

//criando os elemento posicionado em tela
bodyElement.appendChild(mainElement)
mainElement.appendChild(h1Element)
mainElement.appendChild(pElement)
mainElement.appendChild(spanElement)


function resetarCoresDeFundoPadrao(corPadrao){ //função para reduzir o
    cardFiat.style.backgroundColor = corPadrao
    cardFerrari.style.backgroundColor = corPadrao
    cardJeep.style.backgroundColor = corPadrao
    cardRam.style.backgroundColor = corPadrao
}

const cardFiat = document.getElementById("fiat")
const cardFerrari = document.getElementById("ferrari")
const cardJeep = document.getElementById("jeep")
const cardRam = document.getElementById("ram")

cardFiat.addEventListener('click', () => {
    resetarCoresDeFundoPadrao('#202020')
    cardFiat.style.backgroundColor = 'red'    
})

cardFerrari.addEventListener('click', () => {
    resetarCoresDeFundoPadrao('#202020')
    cardFerrari.style.backgroundColor = 'red'
})

cardJeep.addEventListener('click', () => {
    resetarCoresDeFundoPadrao('#202020')
    cardJeep.style.backgroundColor = 'red'
})

cardRam.addEventListener('click', () => {
    resetarCoresDeFundoPadrao('#202020')
    cardRam.style.backgroundColor = 'red'
})
