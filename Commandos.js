function startCFE() {
var taal = prompt('Kies een taal:\n1) Nederlands\n2) COMING SOON\n\n\n')
if (taal == 1) { // TAAL NL
taal = Nederlands;
} elseif(taal = '1 Nederlands') { // TAAL NL
taal = Nederlands;
}

if (taal == 2) { // ENGLISH
alert('English is coming soon!');
taal = 'Engels';
}
if (taal == 'Engels') { // ENGLISH
alert('Welcome!');
var lijnI = ''
var lijnII = ''
var lijnIII = ''


var commandoI = ''
var commandoII = ''
var commandoIII = ''

//commando's

//tekst
var tekstI = ''
var tekstII = ''
var tekstIII = ''


var vragenlijstI = ''

//1

var checkI = ''
var checkII = ''
var checkIII = ''

var stelI = ''
var stelII = ''
var stelIII = ''

var vraagQWI = ''
var vraagQWII = ''
var vraagQWIII = ''

var antwoordI = ''
var antwoordII = ''
var antwoordIII = ''

var berichtnavragen = ''
var bedankbericht = 'Thanks for answering these questions!'

var vraagWI = ''
var vraagWII = ''
var vraagWIII = ''

var vraagGesteldI = ''
var vraagGesteldII = ''
var vraagGesteldIII = ''

//spel
var spel = ''
var spelerA = ''
var spelerB = ''
var alleSpellen = "(1) Guess the number\n\tGuess the number\n(2) Rock paper scissors\n\tPlay Rock paper scissors with a computer!\n\nChoose the number of the game!";


// Raad Het Getal
var spelRHG = ''
var geradenGetal = '0'
var spelgewonnenRHG = 'Well done! The number was indeed ' + spelRHG + '!'
var ngRHG = 'Too bad that is not correct!'
var aantalKeerGeraden = 0
var checkspelgewonnenRHG = 'nee'


//Steen Papier Schaar
var computersps = ''
var spelerAsps = ''
var computerPsps = 0
var spelerAPsps = 0
var vraagsps = "(1) Rock\n(2) Paper\n(3) Scissors\n\n\tDial the number!"
var benamingsps = ''
var tussenstand = "Computer " + computerPsps + ' - ' + spelerAsps + " You"
var opnieuwsps = true
var herhaalsps = 0
var setscoresps = 0
var gelijkspelPsps = false

//spelII
var spelII = ''
var spelII = '0'
var spelerAII = ''
var spelerBII = ''
var alleSpellen = "(1) Guess the number\n\tGuess the number\n(2) Rock Paper Scissors\n\tPlay Rock Paper Scissors against the computer! "
//Steen Papier Schaar

var computerspsII = ''
var spelerAspsII = ''
var computerPspsII = 0
var spelerAPspsII = 0
var benamingspsII = ''
var tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAspsII + " You"
var opnieuwspsII = true
var herhaalspsII = 0
var setscoresps = 0
var gelijkspelPspsII = false

//help
var helpA = 0
var helpB = 0
var helpC = 0
var helpI = "Not yet available";
var helpII = "Not yet available";
var helpIII = "Not yet available";
var helponderaan = "\n\nThe commands are case sensitive, so use only lowercase letters, (e.g. text)"

//
//lijn 1
lijnI = prompt('Enter code for line 1', "")

//als er op annuleer wordt gedrukt
if(lijnI == null) { alert('Line 1 is cancelled!');console.log('line 1 (lijnI) is cancelled'); }

//Steen Papier Schaar
if(lijnI == 'spel') { commandoI = 'spel' }
if(commandoI == 'spel') {
spel = prompt('You can choose from the following games\n' + alleSpellen + '\nEnter the number of the game NOT the name of the game!', "") }

if(spel == '2') {

do {
if(setscoresps === herhaalsps) { spelerAPsps = 0;computerPsps = 0;gelijkspelPsps = confirm("Would you like that when the computer has the same as what you've both a point get?\n\nPress CANCEL if you don't want to\n\nPress OK if you want to"); }
computersps = Math.floor((Math.random() * 3) + 1); 
spelerAsps = prompt(vraagsps);
if(spel == '2') {
if(spelerAsps == '1') { benamingsps = 'rock' };
if(spelerAsps == '2') { benamingsps = 'paper' };
if(spelerAsps == '3') { benamingsps = 'scissors' };
//		hetzelfde
if(gelijkspelPsps == true) {
if(computersps == spelerAsps) { 
computerPsps = computerPsps + 1;
spelerAPsps = spelerAPsps + 1;
if(computersps == spelerAsps) {
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " You";
alert('Both of you had ' + benamingsps + ' ,both + 1 point!\n\n\t' + tussenstand);
};
};
};
if(gelijkspelPsps == false) {
if(computersps == spelerAsps) { 
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " You";
alert('Both of you had ' + benamingsps + '\n\n\t' + tussenstand);
};
};
//		Computer: rock | Speler: scissors
if(spel == '2') {
if(computersps == '1') {
if(spelerAsps == '3') {
computerPsps = computerPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " You";
alert('Too bad, the computer had rock and you had scissors.\n\nComputer + 1 point\n\n\t' + tussenstand);
};
};
}
//		Computer: rock | Speler: paper
if(spel == '2') {
if(computersps == '1') {
if(spelerAsps == '2') {
spelerAPsps = spelerAPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " You";
alert('Well done! The computer had rock and you had paper!\n\nYou + 1 point\n\n\t' + tussenstand);
};
};
}
//		Computer: paper | Speler: scissors
if(spel == '2') {
if(computersps == '2') {
if(spelerAsps == '3') {
spelerAPsps = spelerAPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " You";
alert('Well done! The computer had paper and you had scissors!\n\nYou + 1 point\n\n\t' + tussenstand);
};
};
}
//		Computer: paper | Speler: rock
if(spel == '2') {
if(computersps == '2') {
if(spelerAsps == '1') {
computerPsps = computerPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " You";
alert('Too bad, the computer had paper and you had rock.\n\nComputer + 1 point\n\n\t' + tussenstand);
};
};
}
//		Computer: scissors | Speler: rock
if(spel == '2') {
if(computersps == '3') {
if(spelerAsps == '1') {
spelerAPsps = spelerAPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " You";
alert('Well done! The computer had scissors and you had rock!\n\nYou + 1 point\n\n\t' + tussenstand);
};
};
}
//		Computer: scissors | Speler: paper
if(spel == '2') {
if(computersps == '3') {
if(spelerAsps == '2') {
computerPsps = computerPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " You";
alert('Too bad, the computer had scissors and you had paper.\n\nComputer + 1 point\n\n\t' + tussenstand);
};
};
}
herhaalsps = 1;
opnieuwsps = confirm('Would you like to play again?')
}; 
} while (opnieuwsps == true);
}
 //Raad het getal
if(lijnI == 'spel') { commandoI = 'spel' }
if(commandoI == 'spel') {
if(spel == '1') { spelRHG = Math.floor((Math.random() * 10) + 1); spelerA = prompt('What is your name?', ""); 
geradenGetal = prompt('The number is between 1 and 10, good luck ' + spelerA + '!\n\nYou can only guess 5 times', "");
}; } 
if(spel == '1') { spelgewonnenRHG = 'Well done! The number was indeed ' + spelRHG + '!'
}
if(spel == '1') { spelRHG = Math.floor((Math.random() * 10) + 1); spelerA = prompt('What is your name?', ""); 
geradenGetal = prompt('The number is between 1 and 10, good luck ' + spelerA + '!\n\nYou can only guess 5 times', "");
}
if(spel == '1') { spelgewonnenRHG = 'Well done! The number was indeed ' + spelRHG + '!'
}

if(spel == '1') {

if(checkspelgewonnenRHG == 'nee') { if(geradenGetal == spelRHG) { if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('You have lost, the number was ' + spelRHG) }; 
}; 
}; 
}
if(spel == '1') {
if(checkspelgewonnenRHG == 'nee') {
geradenGetal = prompt('The number is between 1 and 10', "")
if(geradenGetal == spelRHG) {
if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('You have lost, the number was ' + spelRHG);checkspelgewonnenRHG = 'ja'; }; 
}; 
};
}
if(spel == '1') {
if(checkspelgewonnenRHG == 'nee') {
geradenGetal = prompt('The number is between 1 and 10', "")
if(geradenGetal == spelRHG) {
if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('You have lost, the number was ' + spelRHG);checkspelgewonnenRHG = 'ja'; }; 
}; 
};
}
if(spel == '1') {
if(checkspelgewonnenRHG == 'nee') {
geradenGetal = prompt('The number is between 1 and 10', "")
if(geradenGetal == spelRHG) {
if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('You have lost, the number was ' + spelRHG);checkspelgewonnenRHG = 'ja'; }; 
}; 
};
}
if(spel == '1') {
if(checkspelgewonnenRHG == 'nee') {
geradenGetal = prompt('The number is between 1 and 10', "")
if(geradenGetal == spelRHG) {
if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('You have lost, the number was ' + spelRHG);checkspelgewonnenRHG = 'ja'; }; 
}; 
};
}

}



if (taal == 'Nederlands') { // TAAL NL BEGIN
alert('Welkom!');
var lijnI = ''
var lijnII = ''
var lijnIII = ''


var commandoI = ''
var commandoII = ''
var commandoIII = ''

//commando's

//tekst
var tekstI = ''
var tekstII = ''
var tekstIII = ''


var vragenlijstI = ''

//1

var checkI = ''
var checkII = ''
var checkIII = ''

var stelI = ''
var stelII = ''
var stelIII = ''

var vraagQWI = ''
var vraagQWII = ''
var vraagQWIII = ''

var antwoordI = ''
var antwoordII = ''
var antwoordIII = ''

var berichtnavragen = ''
var bedankbericht = 'Bedankt voor het beantwoorden van deze vragen!'

var vraagWI = ''
var vraagWII = ''
var vraagWIII = ''

var vraagGesteldI = ''
var vraagGesteldII = ''
var vraagGesteldIII = ''

//spel
var spel = ''
var spelerA = ''
var spelerB = ''
var alleSpellen = "(1) Raad het getal\n\tRaad het getal\n(2) Steen Papier Schaar\n\tSpeel Steen Papier Schaar tegen de computer!\n\nKies het getal!"

//Raad Het Getal
var spelRHG = ''
var geradenGetal = '0'
var spelgewonnenRHG = 'Goed gedaan! Het getal was inderdaad ' + spelRHG + '!'
var ngRHG = 'Jammer dat is niet juist!'
var aantalKeerGeraden = 0
var checkspelgewonnenRHG = 'nee'

//Steen Papier Schaar
var computersps = ''
var spelerAsps = ''
var computerPsps = 0
var spelerAPsps = 0
var vraagsps = "(1) Steen\n(2) Papier\n(3) Schaar\n\n\tKies het nummer!"
var benamingsps = ''
var tussenstand = "Computer " + computerPsps + ' - ' + spelerAsps + " Jij"
var opnieuwsps = true
var herhaalsps = 0
var setscoresps = 0
var gelijkspelPsps = false

//spelII
var spelII = ''
var spelII = '0'
var spelerAII = ''
var spelerBII = ''
var alleSpellen = "(1) Raad het getal\n\tRaad het getal\n(2) Steen Papier Schaar\n\tSpeel Steen Papier Schaar tegen de computer! "
//Steen Papier Schaar

var computerspsII = ''
var spelerAspsII = ''
var computerPspsII = 0
var spelerAPspsII = 0
var benamingspsII = ''
var tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAspsII + " Jij"
var opnieuwspsII = true
var herhaalspsII = 0
var setscoresps = 0
var gelijkspelPspsII = false

//help
var helpA = 0
var helpB = 0
var helpC = 0
var helpI = "(1) tekst \n\tVoer tekst in die je aan het einde kan zien (na alle 3 de commando's)\n(2) vragenlijst\n\tStel een vragenlijst op tot maximaal 3 vragen\n\t\tALLEEN MAAR BESCHIKBAAR IN LIJN 1!\n(3) cancel\n\tAnnuleert die lijn, er wordt geen commando uitgevoerd\n(4) spel\n\tSpeel verschillende spelletjes\n(5) help\n\tLaat het help menu zien"
var helpII = "(1) tekst \n\tVoer tekst in die je aan het einde kan zien (na alle 3 de commando's)\n(2) cancel\n\tAnnuleert die lijn, er wordt geen commando uitgevoerd\n(4) spel\n\tSpeel verschillende spelletjes\n(5) help\n\tLaat het help menu zien"
var helpIII = "(1) tekst \n\tVoer tekst in die je aan het einde kan zien (na alle 3 de commando's)\n(2) cancel\n\tAnnuleert die lijn, er wordt geen commando uitgevoerd\n(4) help\n\tLaat het help menu zien"
var helponderaan = "\n\nDe COMMANDO'S zijn hoofdlettergevoelig, gebruik dus alleen maar kleine letters, (bijv. tekst)"

//
//lijn 1
lijnI = prompt('Voer code in voor lijn 1', "")

//als er op annuleer wordt gedrukt
if(lijnI == null) { alert('Lijn 1 is geannuleerd!');console.log('lijn 1 (lijnI) is geannuleerd'); }

//Steen Papier Schaar
if(lijnI == 'spel') { commandoI = 'spel' }
if(commandoI == 'spel') {
spel = prompt('Je kunt kiezen uit de volgende spellen\n' + alleSpellen + '\nVul het getal in van het spel NIET de naam van het spel!', "") }

if(spel == '2') {

do {
if(setscoresps === herhaalsps) { spelerAPsps = 0;computerPsps = 0;gelijkspelPsps = confirm('Wil je dat wanneer de computer hetzelfde heeft als wat jij hebt beide een punt krijgen?\n\nDruk op ANULLEER als je dat NIET wilt\n\nDruk op OK als je dat WEL wilt'); }
computersps = Math.floor((Math.random() * 3) + 1); 
spelerAsps = prompt(vraagsps);
if(spel == '2') {
if(spelerAsps == '1') { benamingsps = 'steen' };
if(spelerAsps == '2') { benamingsps = 'papier' };
if(spelerAsps == '3') { benamingsps = 'schaar' };
//		hetzelfde
if(gelijkspelPsps == true) {
if(computersps == spelerAsps) { 
computerPsps = computerPsps + 1;
spelerAPsps = spelerAPsps + 1;
if(computersps == spelerAsps) {
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " Jij";
alert('Jullie hadden allebei ' + benamingsps + ' ,allebei + 1 punt!\n\n\t' + tussenstand);
};
};
};
if(gelijkspelPsps == false) {
if(computersps == spelerAsps) { 
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " Jij";
alert('Jullie hadden allebei ' + benamingsps + '\n\n\t' + tussenstand);
};
};
//		Computer: steen | Speler: schaar
if(spel == '2') {
if(computersps == '1') {
if(spelerAsps == '3') {
computerPsps = computerPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " Jij";
alert('Jammer, de computer had steen en jij had schaar.\n\nComputer + 1 punt\n\n\t' + tussenstand);
};
};
}
//		Computer: steen | Speler: papier
if(spel == '2') {
if(computersps == '1') {
if(spelerAsps == '2') {
spelerAPsps = spelerAPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " Jij";
alert('Goed zo! De computer had steen en jij had papier!\n\nJij + 1 punt\n\n\t' + tussenstand);
};
};
}
//		Computer: papier | Speler: schaar
if(spel == '2') {
if(computersps == '2') {
if(spelerAsps == '3') {
spelerAPsps = spelerAPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " Jij";
alert('Goed zo! De computer had papier en jij had schaar!\n\nJij + 1 punt\n\n\t' + tussenstand);
};
};
}
//		Computer: papier | Speler: steen
if(spel == '2') {
if(computersps == '2') {
if(spelerAsps == '1') {
computerPsps = computerPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " Jij";
alert('Jammer, de computer had papier en jij had steen.\n\nComputer + 1 punt\n\n\t' + tussenstand);
};
};
}
//		Computer: schaar | Speler: steen
if(spel == '2') {
if(computersps == '3') {
if(spelerAsps == '1') {
spelerAPsps = spelerAPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " Jij";
alert('Goed zo! De computer had schaar en jij had steen!\n\nJij + 1 punt\n\n\t' + tussenstand);
};
};
}
//		Computer: schaar | Speler: papier
if(spel == '2') {
if(computersps == '3') {
if(spelerAsps == '2') {
computerPsps = computerPsps + 1;
tussenstand = "Computer " + computerPsps + ' - ' + spelerAPsps + " Jij";
alert('Jammer, de computer had schaar en jij had papier.\n\nComputer + 1 punt\n\n\t' + tussenstand);
};
};
}
herhaalsps = 1;
opnieuwsps = confirm('Wil je opnieuw?')
}; 
} while (opnieuwsps == true);
}
 
//Raad het getal
if(lijnI == 'spel') { commandoI = 'spel' }
if(commandoI == 'spel') {
if(spel == '1') { spelRHG = Math.floor((Math.random() * 10) + 1); spelerA = prompt('Wat is je naam?', ""); 
geradenGetal = prompt('Het getal zit tussen de 1 en 10, veel succes ' + spelerA + '!\n\nJe mag maar 5 keer raden', "");
}; } 
if(spel == '1') { spelgewonnenRHG = 'Goed gedaan! Het getal was inderdaad ' + spelRHG + '!'
}
if(spel == '1') { spelRHG = Math.floor((Math.random() * 10) + 1); spelerA = prompt('Wat is je naam?', ""); 
geradenGetal = prompt('Het getal zit tussen de 1 en 10, veel succes ' + spelerA + '!\n\nJe mag maar 5 keer raden', "");
}
if(spel == '1') { spelgewonnenRHG = 'Goed gedaan! Het getal was inderdaad ' + spelRHG + '!'
}

if(spel == '1') {

if(checkspelgewonnenRHG == 'nee') { if(geradenGetal == spelRHG) { if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('Je hebt verloren, het getal was ' + spelRHG) }; 
}; 
}; 
}
if(spel == '1') {
if(checkspelgewonnenRHG == 'nee') {
geradenGetal = prompt('Het getal zit tussen de 1 en 10', "")
if(geradenGetal == spelRHG) {
if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('Je hebt verloren, het getal was ' + spelRHG);checkspelgewonnenRHG = 'ja'; }; 
}; 
};
}
if(spel == '1') {
if(checkspelgewonnenRHG == 'nee') {
geradenGetal = prompt('Het getal zit tussen de 1 en 10', "")
if(geradenGetal == spelRHG) {
if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('Je hebt verloren, het getal was ' + spelRHG);checkspelgewonnenRHG = 'ja'; }; 
}; 
};
}
if(spel == '1') {
if(checkspelgewonnenRHG == 'nee') {
geradenGetal = prompt('Het getal zit tussen de 1 en 10', "")
if(geradenGetal == spelRHG) {
if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('Je hebt verloren, het getal was ' + spelRHG);checkspelgewonnenRHG = 'ja'; }; 
}; 
};
}
if(spel == '1') {
if(checkspelgewonnenRHG == 'nee') {
geradenGetal = prompt('Het getal zit tussen de 1 en 10', "")
if(geradenGetal == spelRHG) {
if(aantalKeerGeraden != 5) { aantalKeerGeraden = aantalKeerGeraden + 1; alert(spelgewonnenRHG); checkspelgewonnenRHG = 'ja' }; 
};
if(geradenGetal != spelRHG) { 
alert(ngRHG); if(aantalKeerGeraden != 5) { 
aantalKeerGeraden = aantalKeerGeraden + 1 }; 
if(aantalKeerGeraden == 5) { alert('Je hebt verloren, het getal was ' + spelRHG);checkspelgewonnenRHG = 'ja'; }; 
}; 
};
}

//help
if(lijnI == 'help') { commandoI = 'help' }
if(commandoI == 'help') { helpA = prompt('WELKOM IN HET HELP MENU\nVoer de lijn in waar je hulp voor nodig hebt:\n1, 2 of 3', "")  }
if(commandoI == 'help') { if(helpA == 1) { alert("Lijn 1 kan je de volgende commando's geven:\n" + helpI + helponderaan) } }
if(commandoI == 'help') { if(helpA == 2) { alert("Lijn 2 kan je de volgende commando's geven:\n" + helpII + helponderaan) } }
if(commandoI == 'help') { if(helpA == 3) { alert("Lijn 3 kan je de volgende commando's geven:\n" + helpIII + helponderaan) } }

//tekst commando
if(lijnI == 'cancel') { commandoI = 'cancel';console.log('lijn 1 (lijnI) is geannuleerd'); }
if(commandoI == 'cancel') { alert('Lijn 1 is geannuleerd!') }
if(lijnI == 'tekst') { commandoI = 'tekst' }
if(commandoI == 'tekst') { tekstI = prompt('Voer de tekst in voor regel 1 (De titel)', "") }

//vragenlijst
if(lijnI == 'vragenlijst') { commandoI = 'vragenlijst'; }
if(commandoI == 'vragenlijst') { vraagWI = prompt('Voer de eerste vraag in', "");checkI = 'ok' }
	if(commandoI == 'vragenlijst') { if(checkI == 'ok') { vraagQWII = confirm("Wil je nog een vraag?") } }
	if(commandoI == 'vragenlijst') {
		if(vraagQWII == true) { vraagWII = prompt('Voer de tweede vraag in', "");checkII = 'ok' } }
			if(commandoI == 'vragenlijst') { vraagQWIII = confirm("Wil je nog een vraag?") }
	if(commandoI == 'vragenlijst') {
				if(vraagQWIII == true) { vraagWIII = prompt('Voer de derde en laatste vraag in', "") 
					if(vraagQWIII == true) { bedankbericht = prompt('Voer een bedankt bericht in voor na de vragen!', "Bedankt voor het beantwoorden van deze vragen! Geef de computer nu terug aan mij!") }
					if(vraagQWIII == true) { stelIII = confirm("Moeten de vragen gesteld worden?") }
					if(stelIII == true) { antwoordI = prompt(vraagWI , "");vraagGesteldI = 'ja'; }
					if(vraagGesteldI == 'ja') { if(stelIII == true) { antwoordII = prompt(vraagWII , "");vraagGesteldII = 'ja'; } }
					if(vraagGesteldIII == 'ja') { if(stelIII == true) { antwoordIII = prompt(vraagWIII , "");vraagGesteldIII = 'ja'; } }
					if(vraagGesteldIII == 'ja') { berichtnavragen = confirm(bedankbericht) }
					if(berichtnavragen == true) { if(vraagGesteldIII == 'ja') { alert('Klik op ok/ja om de antwoorden te zien!');alert('Vraag 1) (' + vraagWI + ') ' + antwoordI + '\n (Druk op OK om vraag 2 te bekijken)');alert('Vraag 2) (' + vraagWII + ') ' + antwoordII + '\n (Druk op OK om vraag 3 te bekijken)');alert('Vraag 3) (' + vraagWIII + ') ' + antwoordIII) } }
				
				
				if(vraagQWIII == false) { bedankbericht = prompt('Voer een bedankt bericht in voor na de vragen!', "Bedankt voor het beantwoorden van deze vragen! Geef de computer nu terug aan mij!") }
					if(vraagQWIII == false) { stelII = confirm("Moeten de vragen gesteld worden?") }
						if(stelII == true) { antwoordI = prompt(vraagWI , "");vraagGesteldI = 'ja'; }
						if(vraagGesteldI == 'ja') { if(stelII == true) { antwoordII = prompt(vraagWII , "");vraagGesteldII = 'ja'; } }
							if(vraagGesteldII == 'ja') { berichtnavragen = confirm(bedankbericht) }
								if(berichtnavragen == true) { if(stelII == true) { if(vraagGesteldII == 'ja') { alert('Klik op ok/ja om de antwoorden te zien!');alert('Vraag 1) (' + vraagWI + ') ' + antwoordI + '\n Druk op OK om vraag 2 te bekijken)');alert('\nVraag 2) (' + vraagWII + ') ' + antwoordII) } } }
			}
		if(commandoI == 'vragenlijst') {
		if(vraagQWII == false) { {bedankbericht = prompt('Voer een bedankt bericht in voor na de vraag!', "Bedankt voor het beantwoorden van deze vraag! Geef de computer nu terug aan mij!") } }
		if(vraagQWII == false) { stelI = confirm("Moet de vraag gesteld worden?") }
			if(stelI == true) { antwoordI = prompt(vraagWI , "");vraagGesteldI = 'ja'; }
			if(stelI == false) { alert('De vragen worden na dit bericht gesteld!');stelI = true }
		}
			if(checkI == 'ok') { if(vraagGesteldI != 'ja') {antwoordI = prompt(vraagWI , ""); }; berichtnavragen = confirm(bedankbericht) }
				if(berichtnavragen == true) { if(stelI == true) { alert('Klik op ok om het antwoord te zien!');alert('1) ' + antwoordI) } }
				if(berichtnavragen == false) { if(stelI == true) { alert('Klik op ok om het antwoord te zien!');alert('Vraag 1) (' + vraagWI + ') ' + antwoordI) } }
			}
			
//lijn 2
lijnII = prompt('Voer code in voor lijn 2', "")

//spel
if(lijnII == 'spel') { commandoII = 'spelII' }
if(commandoII == 'spelII') {
spelII = prompt('Je kunt kiezen uit de volgende spellen\n' + alleSpellen + '\nVul het getal in van het spelII NIET de naam van het spelII!', "") }
// Steen Papier Schaar
if(spelII == '2') {

do {
if(setscoresps === herhaalspsII) { spelerAPspsII = 0;computerPspsII = 0;gelijkspelPspsII = confirm('Wil je dat wanneer de computer hetzelfde heeft als wat jij hebt beide een punt krijgen?\n\nDruk op ANULLEER als je dat NIET wilt\n\nDruk op OK als je dat WEL wilt'); }
computerspsII = Math.floor((Math.random() * 3) + 1); 
spelerAspsII = prompt(vraagsps);
if(spelII == '2') {
if(spelerAspsII == '1') { benamingspsII = 'steen' };
if(spelerAspsII == '2') { benamingspsII = 'papier' };
if(spelerAspsII == '3') { benamingspsII = 'schaar' };
//		hetzelfde
if(gelijkspelPspsII == true) {
if(computerspsII == spelerAspsII) { 
computerPspsII = computerPspsII + 1;
spelerAPspsII = spelerAPspsII + 1;
if(computerspsII == spelerAspsII) {
tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAPspsII + " Jij";
alert('Jullie hadden allebei ' + benamingspsII + ' ,allebei + 1 punt!\n\n\t' + tussenstandII);
};
};
};
if(gelijkspelPspsII == false) {
if(computerspsII == spelerAspsII) { 
tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAPspsII + " Jij";
alert('Jullie hadden allebei ' + benamingspsII + '\n\n\t' + tussenstandII);
};
};
//		Computer: steen | Speler: schaar
if(spelII == '2') {
if(computerspsII == '1') {
if(spelerAspsII == '3') {
computerPspsII = computerPspsII + 1;
tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAPspsII + " Jij";
alert('Jammer, de computer had steen en jij had schaar.\n\nComputer + 1 punt\n\n\t' + tussenstandII);
};
};
}
//		Computer: steen | Speler: papier
if(spelII == '2') {
if(computerspsII == '1') {
if(spelerAspsII == '2') {
spelerAPspsII = spelerAPspsII + 1;
tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAPspsII + " Jij";
alert('Goed zo! De computer had steen en jij had papier!\n\nJij + 1 punt\n\n\t' + tussenstandII);
};
};
}
//		Computer: papier | Speler: schaar
if(spelII == '2') {
if(computerspsII == '2') {
if(spelerAspsII == '3') {
spelerAPspsII = spelerAPspsII + 1;
tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAPspsII + " Jij";
alert('Goed zo! De computer had papier en jij had schaar!\n\nJij + 1 punt\n\n\t' + tussenstandII);
};
};
}
//		Computer: papier | Speler: steen
if(spelII == '2') {
if(computerspsII == '2') {
if(spelerAspsII == '1') {
computerPspsII = computerPspsII + 1;
tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAPspsII + " Jij";
alert('Jammer, de computer had papier en jij had steen.\n\nComputer + 1 punt\n\n\t' + tussenstandII);
};
};
}
//		Computer: schaar | Speler: steen
if(spelII == '2') {
if(computerspsII == '3') {
if(spelerAspsII == '1') {
spelerAPspsII = spelerAPspsII + 1;
tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAPspsII + " Jij";
alert('Goed zo! De computer had schaar en jij had steen!\n\nJij + 1 punt\n\n\t' + tussenstandII);
};
};
}
//		Computer: schaar | Speler: papier
if(spelII == '2') {
if(computerspsII == '3') {
if(spelerAspsII == '2') {
computerPspsII = computerPspsII + 1;
tussenstandII = "Computer " + computerPspsII + ' - ' + spelerAPspsII + " Jij";
alert('Jammer, de computer had schaar en jij had papier.\n\nComputer + 1 punt\n\n\t' + tussenstandII);
};
};
}
herhaalspsII = 1;
opnieuwspsII = confirm('Wil je opnieuw?')
}; 
} while (opnieuwspsII == true);
}
// Raad Het Getal

var spelRHGII = ''
var geradenGetalII = '0'
var spelgewonnenRHG = 'Goed gedaan! Het getal was inderdaad ' + spelRHGII + '!'
var ngRHGII = 'Jammer dat is niet juist!'
var aantalKeerGeradenII = 0
var checkspelgewonnenRHGII = 'nee'

if(lijnII == 'spelII') { commandoII = 'spelII' }
if(commandoII == 'spelII') {
if(spelII == '1') { spelRHGII = Math.floor((Math.random() * 10) + 1); spelerA = prompt('Wat is je naam?', ""); 
geradenGetalII = prompt('Het getal zit tussen de 1 en 10, veel succes ' + spelerA + '!\n\nJe mag maar 5 keer raden', "");
}
if(spelII == '1') { spelgewonnenRHG = 'Goed gedaan! Het getal was inderdaad ' + spelRHGII + '!'
}
if(lijnII == 'spelII') { commandoII == 'spelII' }
if(commandoII == 'spelII') {
spelII = prompt('Je kunt kiezen uit de volgende spellen\n' + alleSpellen + '\nVul het getal in van het spelII NIET de naam van het spelII!', "") }
if(spelII == '1') { spelRHGII = Math.floor((Math.random() * 10) + 1); spelerA = prompt('Wat is je naam?', ""); 
geradenGetalII = prompt('Het getal zit tussen de 1 en 10, veel succes ' + spelerA + '!\n\nJe mag maar 5 keer raden', "");
}
if(spelII == '1') { spelgewonnenRHG = 'Goed gedaan! Het getal was inderdaad ' + spelRHGII + '!'
}

if(spelII == '1') {

if(checkspelgewonnenRHGII == 'nee') { if(geradenGetalII == spelRHGII) { if(aantalKeerGeradenII != 5) { aantalKeerGeradenII = aantalKeerGeradenII + 1; alert(spelgewonnenRHG); checkspelgewonnenRHGII = 'ja' }; 
};
if(geradenGetalII != spelRHGII) { 
alert(ngRHGII); if(aantalKeerGeradenII != 5) { 
aantalKeerGeradenII = aantalKeerGeradenII + 1 }; 
if(aantalKeerGeradenII == 5) { alert('Je hebt verloren, het getal was ' + spelRHGII) }; 
}; 
}; 
}
if(spelII == '1') {
if(checkspelgewonnenRHGII == 'nee') {
geradenGetalII = prompt('Het getal zit tussen de 1 en 10', "")
if(geradenGetalII == spelRHGII) {
if(aantalKeerGeradenII != 5) { aantalKeerGeradenII = aantalKeerGeradenII + 1; alert(spelgewonnenRHG); checkspelgewonnenRHGII = 'ja' }; 
};
if(geradenGetalII != spelRHGII) { 
alert(ngRHGII); if(aantalKeerGeradenII != 5) { 
aantalKeerGeradenII = aantalKeerGeradenII + 1 }; 
if(aantalKeerGeradenII == 5) { alert('Je hebt verloren, het getal was ' + spelRHGII);checkspelgewonnenRHGII = 'ja'; }; 
}; 
};
}
if(spelII == '1') {
if(checkspelgewonnenRHGII == 'nee') {
geradenGetalII = prompt('Het getal zit tussen de 1 en 10', "")
if(geradenGetalII == spelRHGII) {
if(aantalKeerGeradenII != 5) { aantalKeerGeradenII = aantalKeerGeradenII + 1; alert(spelgewonnenRHG); checkspelgewonnenRHGII = 'ja' }; 
};
if(geradenGetalII != spelRHGII) { 
alert(ngRHGII); if(aantalKeerGeradenII != 5) { 
aantalKeerGeradenII = aantalKeerGeradenII + 1 }; 
if(aantalKeerGeradenII == 5) { alert('Je hebt verloren, het getal was ' + spelRHGII);checkspelgewonnenRHGII = 'ja'; }; 
}; 
};
}
if(spelII == '1') {
if(checkspelgewonnenRHGII == 'nee') {
geradenGetalII = prompt('Het getal zit tussen de 1 en 10', "")
if(geradenGetalII == spelRHGII) {
if(aantalKeerGeradenII != 5) { aantalKeerGeradenII = aantalKeerGeradenII + 1; alert(spelgewonnenRHG); checkspelgewonnenRHGII = 'ja' }; 
};
if(geradenGetalII != spelRHGII) { 
alert(ngRHGII); if(aantalKeerGeradenII != 5) { 
aantalKeerGeradenII = aantalKeerGeradenII + 1 }; 
if(aantalKeerGeradenII == 5) { alert('Je hebt verloren, het getal was ' + spelRHGII);checkspelgewonnenRHGII = 'ja'; }; 
}; 
};
}
if(spelII == '1') {
if(checkspelgewonnenRHGII == 'nee') {
geradenGetalII = prompt('Het getal zit tussen de 1 en 10', "")
if(geradenGetalII == spelRHGII) {
if(aantalKeerGeradenII != 5) { aantalKeerGeradenII = aantalKeerGeradenII + 1; alert(spelgewonnenRHG); checkspelgewonnenRHGII = 'ja' }; 
};
if(geradenGetalII != spelRHGII) { 
alert(ngRHGII); if(aantalKeerGeradenII != 5) { 
aantalKeerGeradenII = aantalKeerGeradenII + 1 }; 
if(aantalKeerGeradenII == 5) { alert('Je hebt verloren, het getal was ' + spelRHGII);checkspelgewonnenRHGII = 'ja'; }; 
}; 
};
}

//als er op annuleer wordt gedrukt
if(lijnII == null) { alert('Lijn 2 is geannuleerd!');console.log('lijn 2 (lijnII) is geannuleerd'); }

//help
if(lijnII == 'help') { commandoII = 'help' }
if(commandoII == 'help') { helpB = prompt('WELKOM IN HET HELP MENU\nVoer de lijn in waar je hulp voor nodig hebt:\n1, 2 of 3')  }
if(commandoII == 'help') { if(helpB == 1) { alert("Lijn 1 kan je de volgende commando's geven:\n\n" + helpI + helponderaan) } }
if(commandoII == 'help') { if(helpB == 2) { alert("Lijn 2 kan je de volgende commando's geven:\n\n" + helpII + helponderaan) } }
if(commandoII == 'help') { if(helpB == 3) { alert("Lijn 3 kan je de volgende commando's geven:\n\n" + helpIII + helponderaan) } }

//cancel
if(lijnII == 'cancel') { commandoII = 'cancel' }
if(commandoII == 'cancel') { alert('Lijn 2 is geannuleerd!');console.log('lijn 2 (lijnII) is geannuleerd'); }

//tekst commando
if(lijnII == 'tekst') { commandoII = 'tekst'; }
if(commandoII == 'tekst') { tekstII = prompt('Voer de tekst in voor regel 2', "") }


//
//lijn 3
lijnIII = prompt('Voer code in voor lijn 3', "")

//als er op annuleer wordt gedrukt
if(lijnIII == null) { alert('Lijn 3 is geannuleerd!');console.log('lijn 3 (lijnIII) is geannuleerd'); }

//help
if(lijnIII == 'help') { commandoI = 'help' }
if(commandoIII == 'help') { helpC = prompt('WELKOM IN HET HELP MENU\nVoer de lijn in waar je hulp voor nodig hebt:\n1, 2 of 3')  }
if(commandoIII == 'help') { if(helpC == 1) { alert("Lijn 1 kan je de volgende commando's geven:\n" + helpI + helponderaan) } }
if(commandoIII == 'help') { if(helpC == 2) { alert("Lijn 2 kan je de volgende commando's geven:\n" + helpII + helponderaan) } }
if(commandoIII == 'help') { if(helpC == 3) { alert("Lijn 3 kan je de volgende commando's geven:\n" + helpIII + helponderaan) } }

//cancel
if(lijnIII == 'cancel') { commandoIII = 'cancel' }
if(commandoIII == 'cancel') { alert('Lijn 3 is geannuleerd!');console.log('lijn 3 (lijnIII) is geannuleerd'); }

//tekst commando
if(lijnIII == 'tekst') { commandoIII = 'tekst' }
if(commandoIII == 'tekst') { tekstIII = prompt('Voer de tekst in voor regel 3', "") }


if(lijnI == 'tekst') { alert(tekstI + '\n' + tekstII + '\n' + tekstIII) }
if(lijnII == 'tekst') { alert(tekstI + '\n' + tekstII + '\n' + tekstIII) }
if(lijnIII == 'tekst') { alert(tekstI + '\n' + tekstII + '\n' + tekstIII) }
};
}
// TAAL NL EINDE
}
