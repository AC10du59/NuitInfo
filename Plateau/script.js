var pion = document.getElementById("pion");
var jeux = 0;
var boutton = document.getElementById("jouer");
var preservatif = document.getElementById("preserv");
var jeu = document.getElementById("game");
var regle = document.getElementById("regle");

regle.onclick = function(){
    window.open("regle.html");
}

function avancer(){
        pion.style.transitionDuration = "1s";
    if(jeux == 0){
        pion.style.transform = "rotate(65deg)";
        window.open("../Purete/index.html","_blank");
        preservatif.src="img/preserv2.svg";
    }
    if(jeux==1) {
        pion.style.transform = "rotate(110deg)";
        preservatif.src="img/preserv3.svg";
    }
    if(jeux==2) {
        pion.style.transform = "rotate(155deg)";
        window.open("../Pendu/jeu-du-pendu.html");
        preservatif.src="img/preserv4.svg";
    }
    if(jeux==3) pion.style.transform = "rotate(200deg)";
    if(jeux==4) {
        pion.style.transform = "rotate(245deg)";
        window.open("../Memo/jeu-du-memory.html");
        preservatif.src="img/preserv5.svg";
    }
    if(jeux==5) pion.style.transform = "rotate(290deg)";
    if(jeux==6) {
        pion.style.transform = "rotate(335deg)";
        window.open("../Quiz/quiz.html");
        preservatif.src="img/preserv6.svg";
    }
    jeux++;
}

pion.onclick = avancer;