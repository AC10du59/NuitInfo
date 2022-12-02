var pion = document.getElementById("pion");
var jeux = 0;
var boutton = document.getElementById("jouer");

function avancer(){
        pion.style.transitionDuration = "1s";
    if(jeux == 0) pion.style.transform = "rotate(65deg)";
    if(jeux==1) pion.style.transform = "rotate(110deg)";
    if(jeux==2) pion.style.transform = "rotate(155deg)";
    if(jeux==3) pion.style.transform = "rotate(200deg)";
    if(jeux==4) pion.style.transform = "rotate(245deg)";
    if(jeux==5) pion.style.transform = "rotate(290deg)";
    if(jeux==6) pion.style.transform = "rotate(335deg)";
    jeux++;
}

boutton.onclick = avancer;

