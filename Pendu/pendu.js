var fin = true;
var nb_erreurs = 0;
var nb_passe = 0;
var tab_mots;
var nb_mots = 0;
var chaine_rangee = "";
var le_mot = ""; var lindication = "";
var mem_mot = "";
var le_scrore = 10;
var lettres_ok ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var la_touche ="";

recuperer();

function recuperer() {
	tab_mots = mots_a_trouver().split('*');
	nb_mots = tab_mots.length;
}

function debuter() {
	if(la_touche==" ")
		return;	
		
	fin = false; nb_coups = 0; chaine_rangee = "";
	nb_passe = 0; nb_erreurs = 0; le_score = 10;
	
	suivant();
}

function init_calques() {
    var parent = document.getElementById('apercu');
    var enfants = parent.getElementsByTagName('div');

    for (var i = 0; i < enfants.length; i++) {
        if(enfants[i].id != 'saut1' && enfants[i].id !='saut2') enfants[i].style.backgroundColor = '#EDEEEE';
    }
}

function suivant() {
	var tab_enigme;
	var nb_alea = Math.floor(Math.random() * nb_mots);	
	le_score = le_score-nb_erreurs/4;
	document.getElementById("leScore").innerHTML = "Votre score : <strong>" + le_score + " / 10</strong> - Mots restants : <strong>" + (10 - nb_passe) + "</strong>"
	document.getElementById("lePendu").src = "img_pendu/pendu_defaut.png";
	nb_erreurs=0;
	init_calques();
	
	while(chaine_rangee.indexOf("-" + nb_alea + "-")>-1)
	{
		nb_alea = Math.floor(Math.random() * nb_mots);
	}
	
	chaine_rangee += "-" + nb_alea + "-";
	tab_enigme = tab_mots[nb_alea].split(':');
	le_mot = tab_enigme[0];
	lindication = tab_enigme[1];
	mem_mot = le_mot.toUpperCase();
	le_mot = le_mot.toUpperCase().replace(/[A-Z]/g,"_");
		
	document.getElementById("indication").innerHTML = "Indication :<br /><strong>" + lindication + "</strong>";
	document.getElementById("leMot").innerHTML = le_mot;
}
	
function clavier(evenement) {
    var indice=0;
    var la_lettre='';
    var trouve = false;

    if(fin==true) return;

    var touche = window.event ? evenement.keyCode : evenement.which;
    touche = String.fromCharCode(touche).substr(0,1);

    if(touche==' ') {
        la_touche = ' ';
        return;
    }
    if(lettres_ok.indexOf(touche)==-1) return;

    document.getElementById('calque_' + touche.toLowerCase()).style.backgroundColor = '#666666';

    for (indice=0; indice<=mem_mot.length-1; indice++) {
        la_lettre = mem_mot.substr(indice,1);
        if(la_lettre==touche) { 
            trouve = true;
            le_mot = le_mot.substr(0,indice) + la_lettre + le_mot.substr(indice + 1);
            document.getElementById('leMot').innerHTML = le_mot;
        }
    }
    if(trouve == true) {
        if(le_mot == mem_mot) {
            nb_passe++;
            if(nb_passe==10) {
                document.getElementById('leScore').innerHTML = 'Votre score :<strong>' + (le_score-nb_erreurs/4) + ' / 10</strong> - Mots restants : <strong>' + (10 - nb_passe) + '</strong> <strong>Victoire !</strong>';
                fin = true;
            } else {
                window.setTimeout(function attendre(){ suivant(); }, 1000);
            }
        }
    } else {
        nb_erreurs++;
        document.getElementById('lePendu').src = 'img_pendu/pendu' + nb_erreurs + '.png';
        if(nb_erreurs==4) {
            nb_passe++;
            if(nb_passe==10) fin = true
            window.setTimeout(function attendre(){ suivant(); }, 1000);
        }
    }
}