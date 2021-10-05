"use strict"

const limpar = (elemento) =>{
    while (elemento.firstChild) {
        elemento.removeChild(elemento.lastChild)
    }
}

const pegarImagens = (raca) => fetch(`https://dog.ceo/api/breed/${raca}/images`)

const procurarImagens = async (evento) => {
    
    if (evento.key === 'Enter') {
        const raca = evento.target.value
        const imagensResponse = await pegarImagens(raca)
        const imagens = await imagensResponse.json()

        limpar(document.querySelector(".galeria-container"))
        limpar(document.querySelector(".slide-container"))
        
        carregarImagens(imagens.message)
        carregarSlides(imagens.message)
    }

}

const getId = (urlImagem) => {
    const posBarra = urlImagem.lastIndexOf('/') + 1
    const posPonto = urlImagem.lastIndexOf('.')
    return urlImagem.substring(posBarra, posPonto)
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    // container.innerHTML += `
    //     <a href="${urlImagem}" class="galeria-itens">
    //         <img src="${urlImagem}" alt="">
    //     </a>
    // `
    const novoLink = document.createElement("a")
    novoLink.href = `#${getId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`
    container.appendChild(novoLink)
}

const criarSlide = (urlImagem, indice, arr) => {

    const container = document.querySelector(".slide-container")

    const slide = document.createElement("div")
    slide.classList.add("slide")
    slide.id = getId(urlImagem)

    const indiceAnterior = indice > 0? indice -1 : arr.length - 1
    const idAnterior = getId(arr[indiceAnterior])

    const indiceProximo = indice < arr.length - 1 ? indice + 1 : 0
    const idProximo = getId(arr[indiceProximo])

    slide.innerHTML = `
        <div class="img-container">
            <a href="#" class="fechar">&#10006;</a>
            <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
            <img src="${urlImagem}" alt="">
            <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
        </div>
    `

    container.appendChild(slide)

}

const carregarImagens = (imagens) => imagens.forEach(criarItem)
const carregarSlides = (imagens) => imagens.forEach(criarSlide)


document.querySelector(".pesquisa-container input")
    .addEventListener('keypress', procurarImagens)