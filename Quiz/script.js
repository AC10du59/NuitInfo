
var nb_question = 1;
var points = 0;

var QR = {
    'question' : [
        'Qu’est ce qu’une MST ?',
        'Laquelle de ces maladies n’est pas des MST?',
        'Quel symptôme ne peut pas être causé par une MST?',
        'Quel traitement ne s’appliquent pas aux MST?',
        'Combien de personnes sont touchées par le sida en France?',
        'Combien de personnes ignorent qu ils sont touchées par le sida en France?',
        'Qui peut être touché par les MST ?',
        'Le sida ne peut pas se transmettre:',
        'La tranche d âge où il y a le plus de nouvelle infection est:',
        'Quelle est l’espérance de vie d’une personne atteinte du sida',
        'En quelle année serait apparu le sida ?',
        'De quel continent aurait émergé le sida ? ',
        'C’est quoi une chlamydia? ',
        'Où puis-je me faire dépister ?',
        'Quel est le deuxième nom du sida',
        'Quel est le premier symptôme à apparaître du SIDA',
        'Quels sont les meilleurs traitements du Sida ?',
        'Quelle star est morte à cause d’une MST',
        ],
        'choix1':[
            'Une MST est un Maux Sans arrêt de Tête',
            'Le sida',
            'Démangeaison',
            'Les sirops',
            '153 milles personnes',
            '25 milles personnes',
            'Les femmes',
            'Lors d un contact visuel',
            '-20 ans ',
            '-5 ans',
            '1921',
            'Europe',
            'C est un autre nom pour dire VIH',
            'Chez moi',
            'VIH',
            'Un état grippal',
            'Médicament prescrit par le medecin',
            'Queen',
        ],
        'choix2':[
            'Les MST sont des Maladie Sexuellement Tranmisible',
            'La chlamydia',
            'Diarrhée',
            'Les antiseptiques',
            '253 milles personnes',
            '5 milles personnes',
            'Les hommes',
            'Lors d un rapport sexuel',
            '20-35 ans ',
            '5-20 ans',
            '1931',
            'Asie',
            'Est une autre MST ',
            'Dans un laboratoire',
            'VHI',
            'Nez bouché',
            'Une chimiothérapie',
            'Macron',
        ],
        'choix3':[
            'Une MST est une Maladie Sans Trouble',
            'L oenobiol',
            'Anomalie de la peau',
            'Les antibiotiques locaux',
            '353 milles personnes',
            '45 milles personnes',
            'Les femmes et les hommes',
            'Lors d un partage de seringue',
            '35-50 ans ',
            '20+ ans ',
            '1941',
            'Afrique',
            'La reponse c',
            'A la pharmacie',
            'MST',
            'Fièvre',
            'Il y a aucun traitement',
            'Claude Francois',
        ],

    'reponse' : [
        '1',
        '3',
        '2',
        '1',
        '1',
        '1',
        '3',
        '1',
        '2',
        '3',
        '2',
        '3',
        '2',
        '2',
        '1',
        '1',
        '3',
        '1',
    ],
    'deja_utiliser' : [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
}

var alea = Math.floor(Math.random()*18);
question.innerHTML = QR['question'][alea];
QR['deja_utiliser'][alea] = 1;
console.log(QR['choix1'][alea]);
document.querySelector('#choix1').textContent=QR['choix1'][alea];
document.querySelector('#choix2').textContent=QR['choix2'][alea];
document.querySelector('#choix3').textContent=QR['choix3'][alea];
nb_question++;
document.querySelector('#progress').value="Question "


function verif1(){
    if(QR['reponse'][alea]==1){
        document.querySelector('#choix1').style.backgroundColor='#7FFF00';
        points++;
    }
    else if(QR['reponse'][alea]==2){
        document.querySelector('#choix2').style.backgroundColor='#7FFF00';
        document.querySelector('#choix1').style.backgroundColor='#FF0000';
    }
    else{
        document.querySelector('#choix1').style.backgroundColor='#FF0000';
        document.querySelector('#choix3').style.backgroundColor='#7FFF00';
    }
}
function verif2(){
    if(QR['reponse'][alea]==2){
        document.querySelector('#choix2').style.backgroundColor='#7FFF00';
        points++;
    }
    else if(QR['reponse'][alea]==1){
        document.querySelector('#choix1').style.backgroundColor='#7FFF00';
        document.querySelector('#choix2').style.backgroundColor='#FF0000';
    }
    else{
        document.querySelector('#choix2').style.backgroundColor='#FF0000';
        document.querySelector('#choix3').style.backgroundColor='#7FFF00';
    }
}

function verif3(){
    if(QR['reponse'][alea]==3){
        document.querySelector('#choix3').style.backgroundColor='#7FFF00';
        points++;
    }
    else if(QR['reponse'][alea]==2){
        document.querySelector('#choix2').style.backgroundColor='#7FFF00';
        document.querySelector('#choix3').style.backgroundColor='#FF0000';
    }
    else{
        document.querySelector('#choix3').style.backgroundColor='#FF0000';
        document.querySelector('#choix1').style.backgroundColor='#7FFF00';
    }
}

function suivante(){
    if(nb_question<6){
        alea = Math.floor(Math.random()*18);
        if(QR['deja_utiliser'][alea] == 0){
            question.innerHTML = QR['question'][alea];
            QR['deja_utiliser'][alea] = 1;
            console.log(QR['choix1'][alea]);
            document.querySelector('#choix3').style.backgroundColor='#8e44ad';
            document.querySelector('#choix2').style.backgroundColor='#8e44ad';
            document.querySelector('#choix1').style.backgroundColor='#8e44ad';
            document.querySelector('#choix1').textContent=QR['choix1'][alea];
            document.querySelector('#choix2').textContent=QR['choix2'][alea];
            document.querySelector('#choix3').textContent=QR['choix3'][alea];
            nb_question++;
            document.querySelector('#progress').value="Question ";
        }
    }
    else {
        document.querySelector('#choix3').style.backgroundColor='#8e44ad';
        document.querySelector('#choix2').style.backgroundColor='#7FFF00';
        document.querySelector('#choix1').style.backgroundColor='#8e44ad';
        document.querySelector('#choix1').textContent="Fin de la session de quiz"
        document.querySelector('#choix2').textContent="Vous avez " + points+"points";
        document.querySelector('#choix3').textContent="";
    }
}