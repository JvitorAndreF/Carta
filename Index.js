function virar(){
    let $virar1 = document.getElementById("contenedor")
    let $Abrir = document.getElementById("abrir")

    $virar1.style.transition ='all 1s';
    $virar1.style.transform = 'rotateY(180deg)';
    
    $Abrir.style.transition='all 1s .5s';
    $Abrir.style.transform='rotateX(180deg)';
    $Abrir.style.zIndex='0';

    ler();
}

function ler(){
    
    let $carta = document.getElementById("carta");
    let $texto = document.querySelectorAll('#carta hgroup  h2');
    let $perspe = document.getElementById('#perspectiva');

    $carta.style.transition='all .5s 1s';
    $carta.style.top='-300px';
    $carta.style.height='500px';

    $perspe.style.transition = 'all 1s';
    $perspe.style.transform='rotateY(450deg)';

    $texto.style.transition = 'all 1s';
    $texto.style.transform = 'translateZ(180px)'




}

function fechar(){

}