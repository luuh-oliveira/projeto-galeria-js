"use strict"

const imagens = [
    "./img/img1_sakura.jpg",
    "./img/img2_mtFuji.jpg",
    "./img/img3.jpg",
    "./img/img4_ponte.jpg",
    "./img/img5_caminho.jpg",
    "./img/img6_rua.jpg",
    "./img/img7_tokyo.jpg",
    "./img/img8_toquio.jpg"
]

const getId = (urlImagem) => urlImagem.split("/")[2].split(".")[0].toLowerCase()

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


const carregarImagens = () => imagens.forEach(criarItem)
const carregarSlides = () => imagens.forEach(criarSlide)

carregarImagens()
carregarSlides()