let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}
document.addEventListener("keydown",function (event){
    pular();
});
var testarColisao = setInterval( function() {

    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var Esquerdaquadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if( Esquerdaquadrado < 60 && Esquerdaquadrado > 0 && topoPersonagem >= 530){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!')
    }
    
}, 10)