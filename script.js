// ==============================
// Botão Voltar ao Topo
// ==============================

// Cria o botão
const botao = document.createElement("button");

// Texto do botão
botao.innerHTML = "↑";

// Classe
botao.classList.add("topo");

// Acessibilidade
botao.setAttribute("aria-label","Voltar ao topo");

// Adiciona ao body
document.body.appendChild(botao);

// Evento de clique
botao.addEventListener("click", function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// Mostrar e esconder botão
window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        botao.style.display="block";

    }else{

        botao.style.display="none";

    }

});
