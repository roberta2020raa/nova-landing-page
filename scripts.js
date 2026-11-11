const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const cards = document.querySelectorAll(".cardProjeto");
const track = document.querySelector(".carrosselTrack");
const indicadores = document.querySelectorAll(".carrosselIindicators button");
let indiceAtual = 0;

const formPrincipal =document.querySelector(".formPrincipal");
const campoNome = document.getElementById("contact-name");
const mensagens = document.getElementById("contact-text");
const botaoMenu = document.querySelector(".menuMobile");
const listaMenu = document.querySelector(".menuList");
const linksMenu = document.querySelectorAll(".nav-item");




formPrincipal.addEventListener("submit",(event)=>{
    event.preventDefault();
    const valorDigitado = campoNome.value.trim();
    const mensagemDigitada = mensagens.value.trim();
    const mensagemWhatsApp = `Olá meu nome é ${valorDigitado}. ${mensagemDigitada}`;
    const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);
    const numeroWhatsApp = 5511987808364;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    

    if(!valorDigitado||!mensagemDigitada){
        alert("Preencha os campos");
        return;
    }

    if (valorDigitado.length < 3){
        alert("O campo Nome deve conter pelo menos 3 caracteres.");
        return;  
    }
    if (mensagemDigitada.length < 10){
        alert("O campo Mensagem deve conter pelo menos 10 caracteres.");
        return;
    }

    window.open(urlWhatsApp,"_blank");

    console.log(valorDigitado);
    console.log(mensagemDigitada);
    console.log(mensagemWhatsApp);
    console.log(mensagemCodificada);
    console.log(numeroWhatsApp);
    console.log(urlWhatsApp);
});

next.addEventListener("click",()=>{
    if (indiceAtual < cards.length-1){
        indicadores[indiceAtual].classList.remove("active");
        cards[indiceAtual].classList.remove("active");
        indiceAtual ++;
        cards[indiceAtual].classList.add("active");
        track.style.transform = `translateX(${indiceAtual * -100}%)`;
        indicadores[indiceAtual].classList.add("active");

      
    }


});

previous.addEventListener("click",()=>{
    if(indiceAtual > 0 ){
        indicadores[indiceAtual].classList.remove("active");
        cards[indiceAtual].classList.remove("active");
        indiceAtual --;
        cards[indiceAtual].classList.add("active");
        track.style.transform = `translateX(${indiceAtual * -100}%)`;
        indicadores[indiceAtual].classList.add("active");
    }
});

botaoMenu.addEventListener("click",()=>{
    const menuAberto = listaMenu.classList.toggle("is-open");
    botaoMenu.setAttribute("aria-expanded",menuAberto);

    
});

linksMenu.forEach((link)=>{
    link.addEventListener("click",()=>{
        listaMenu.classList.remove("is-open");
        botaoMenu.setAttribute("aria-expanded","false");
    })

});
