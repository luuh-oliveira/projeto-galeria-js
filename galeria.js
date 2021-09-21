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

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    // container.innerHTML += `
    //     <a href="${urlImagem}" class="galeria-itens">
    //         <img src="${urlImagem}" alt="">
    //     </a>
    // `
    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`
    container.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()