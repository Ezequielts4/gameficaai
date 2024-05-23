let menu = document.getElementById("menu")

let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

// outra forma -> menu.classList.toggle("menu-fechado")

function abreFechaMenu() {

    if (menu.classList.contains("menu-fechado")) {
        // abrir o menu

        menu.classList.remove("menu-fechado")

        // mostrar ícone X e esconder o ícone barras

        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"

    }
    else {
        // fechar o menu
        menu.classList.add("menu-fechado")

        // mostrar o ícone barras e esconder o ícone X

        iconeBarras.style.display = "inline"

        iconeX.style.display = "none"

    }
}

// mostrar novamente o menu acima da responsividade 
onresize = () => {

    menu.classList.remove("menu-fechado")

    iconeBarras.style.display = "none"

    iconeX.style.display = "inline"
}

// carrossel

let banner = document.querySelector(".banner")

//array - vetor - lista

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0;

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {

    // remove o slide atual
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) 
    {
        slideAtual++;
    }

    else
    {
        slideAtual = 0;
    }

    // mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}


function mostrarSlideAnterior() {

    // remove o slide atual
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) 
    {
        slideAtual--;
    }

    else
    {
        slideAtual = 2;
    }

    // mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {
    banner.classList.remove(slides[slideAtual])

    slideAtual = indiceSlide;

    banner.classList.add(slides[slideAtual])
}
