const mainElement = document.createElement('main') //criação do elemento
const h1Element = document.createElement('h1')
const pElement = document.createElement('p')
const spanElement = document.createElement('span')

const bodyElement = document.querySelector('body')

h1Element.innerHTML = "Tarcísio Alves"  //adicionando valor ao elemento
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


// console.log(body)