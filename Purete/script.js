oui = document.getElementById("oui");
non = document.getElementById("non");
question = document.getElementById("question");

var nb_question = 0;
var points = 0;

var QR = {
    'question' : [
        'As-tu déjà parler des IST avec quelqu’un',
        'As-tu déjà eu un cours sur les IST',
        'Connais-tu la Donovanose',
        'Connais-tu la trichomonas',
        'T’es-tu déjà fait dépister',
        'Connais-tu la vaginose à gardnerella',
        'Sais-tu ce qu’est les morpions',
        'As-tu une IST',
        'As-tu déjà utilisé un préservatif',
        'As-tu déjà utiliser un moyen de contraception',
        'Connais-tu un vaccins contre les IST',
        'As-tu déjà pratiquer le cunilingus sans préservatif',
        'As-tu déjà pratiquer la pénétration anal sans préservatif ',
        'Connais-tu ligne Azur?',
        'Connais-tu un numéro pour parler de sa sexualité',
        'As-tu déjà appeler un numéro pour parler de ta sexualité',
        'As-tu déjà participer au téléthon',
        'As-tu déjà pratiqué le quickie sans que ça ne soit avec ton partenaire?',
        'T’es–tu déjà renseigné sur les IST',
        'As-tu déjà porter le ruban rouge',
        'Connais-tu le site https://www.sida-info-service.org/',
        'Es-tu déjà aller sur le site https://www.sida-info-service.org/',
        'As-tu déjà eu peur d’une personne ayant une IST?',
        'Connais-tu plus de 3 IST ?',
        'As-tu déjà fait un don à une association qui lutte contre les IST?',
        'Connais-tu plus de 2 façons d’avoir une IST ?',
        'Sais-tu à quoi correspond le mot IST ?',
        'Connais-tu plus de 2 moyens de contraception ?',
        'Est-ce-que tu t’es déjà renseigné sur une IST? ',
        'Es-tu déjà allé sur un site du gouvernement parlant de IST? '
     ],
    'reponse' : [
        'oui',
        'oui',
        'oui',
        'oui',
        'oui',
        'oui',
        'oui',
        'non',
        'oui',
        'oui',
        'oui',
        'non',
        'non',
        'oui',
        'oui',
        'oui',
        'oui',
        'non',
        'oui',
        'oui',
        'oui',
        'oui',
        'non',
        'oui',
        'oui',
        'oui',
        'oui',
        'oui',
        'oui',
        'oui'
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

var alea = Math.floor(Math.random()*30);
question.innerHTML = QR['question'][alea];
QR['deja_utiliser'][alea] = 1;
nb_question++;

oui.onclick= function(){
    if(QR['reponse'][alea]=='oui'){
        points++;
    }
    alea = Math.floor(Math.random()*30);
    while(QR['deja_utiliser'][alea]==1){
        alea = Math.floor(Math.random()*30);
    }
    question.innerHTML = QR['question'][alea];
    QR['deja_utiliser'][alea] = 1;
    nb_question++;
    if(nb_question == 9) window.close();
}

non.onclick =function(){
    if(QR['reponse'][alea]=='non'){
        points++;
    }
    alea = Math.floor(Math.random()*30);
    while(QR['deja_utiliser'][alea]==1){
        alea = Math.floor(Math.random()*30);
    }
    question.innerHTML = QR['question'][alea];
    QR['deja_utiliser'][alea] = 1;
    nb_question++;
    if(nb_question == 9) window.close();
}