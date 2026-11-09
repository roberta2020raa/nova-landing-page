const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const cards = document.querySelectorAll(".cardProjeto");
const track = document.querySelector(".carrosselTrack");
const indicadores = document.querySelectorAll(".carrosselIindicators button");
let indiceAtual = 0;

console.log(indicadores.length);

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

