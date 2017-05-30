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
//2

var vragenlijstII = ''

//3

var vragenlijstIII = ''

var helpA = 0
var helpB = 0
var helpC = 0
var helpI = "(1) tekst \n\tVoer tekst in die je aan het einde kan zien (na alle 3 de commando's)\n(2) vragenlijst\n\tStel een vragenlijst op tot maximaal 3 vragen\n\t\tALLEEN MAAR BESCHIKBAAR IN LIJN 1!\n(3) cancel\n\tAnnuleert die lijn, er wordt geen commando uitgevoerd\n(4) help\n\tLaat het help menu zien"
var helpII = "(1) tekst \n\tVoer tekst in die je aan het einde kan zien (na alle 3 de commando's)\n(2) cancel\n\tAnnuleert die lijn, er wordt geen commando uitgevoerd\n(4) help\n\tLaat het help menu zien"
var helpIII = "(1) tekst \n\tVoer tekst in die je aan het einde kan zien (na alle 3 de commando's)\n(2) cancel\n\tAnnuleert die lijn, er wordt geen commando uitgevoerd\n(4) help\n\tLaat het help menu zien"
var helponderaan = "\n\nDe COMMANDO'S zijn hoofdlettergevoelig, gebruik dus alleen maar kleine letters, (bijv. commando: tekst ; tekst: HAlLo1234567890)"

//
//lijn 1
lijnI = prompt('Voer code in voor lijn 1', "")

//help
if(lijnI == 'help') { commandoI = 'help' }
if(commandoI == 'help') { helpA = prompt('WELKOM IN HET HELP MENU\nVoer de lijn in waar je hulp voor nodig hebt:\n1, 2 of 3')  }
if(commandoI == 'help') { if(helpA == 1) { alert("Lijn 1 kan je de volgende commando's geven:\n" + helpI + helponderaan) } }
if(commandoI == 'help') { if(helpA == 2) { alert("Lijn 2 kan je de volgende commando's geven:\n" + helpII + helponderaan) } }
if(commandoI == 'help') { if(helpA == 3) { alert("Lijn 3 kan je de volgende commando's geven:\n" + helpIII + helponderaan) } }

//tekst commando
if(lijnI == 'cancel') { commandoI = 'cancel' }
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

//help
if(lijnII == 'help') { commandoII = 'help' }
if(commandoII == 'help') { helpB = prompt('WELKOM IN HET HELP MENU\nVoer de lijn in waar je hulp voor nodig hebt:\n1, 2 of 3')  }
if(commandoII == 'help') { if(helpB == 1) { alert("Lijn 1 kan je de volgende commando's geven:\n\n" + helpI + helponderaan) } }
if(commandoII == 'help') { if(helpB == 2) { alert("Lijn 2 kan je de volgende commando's geven:\n\n" + helpII + helponderaan) } }
if(commandoII == 'help') { if(helpB == 3) { alert("Lijn 3 kan je de volgende commando's geven:\n\n" + helpIII + helponderaan) } }

//cancel
if(lijnII == 'cancel') { commandoII = 'cancel' }
if(commandoII == 'cancel') { alert('Lijn 2 is geannuleerd!') }

//tekst commando
if(lijnII == 'tekst') { commandoII = 'tekst'; }
if(commandoII == 'tekst') { tekstII = prompt('Voer de tekst in voor regel 2', "") }


//
//lijn 3
lijnIII = prompt('Voer code in voor lijn 3', "")

//help
if(lijnIII == 'help') { commandoI = 'help' }
if(commandoIII == 'help') { helpC = prompt('WELKOM IN HET HELP MENU\nVoer de lijn in waar je hulp voor nodig hebt:\n1, 2 of 3')  }
if(commandoIII == 'help') { if(helpC == 1) { alert("Lijn 1 kan je de volgende commando's geven:\n" + helpI + helponderaan) } }
if(commandoIII == 'help') { if(helpC == 2) { alert("Lijn 2 kan je de volgende commando's geven:\n" + helpII + helponderaan) } }
if(commandoIII == 'help') { if(helpC == 3) { alert("Lijn 3 kan je de volgende commando's geven:\n" + helpIII + helponderaan) } }

//cancel
if(lijnIII == 'cancel') { commandoIII = 'cancel' }
if(commandoIII == 'cancel') { alert('Lijn 3 is geannuleerd!') }

//tekst commando
if(lijnIII == 'tekst') { commandoIII = 'tekst' }
if(commandoIII == 'tekst') { tekstIII = prompt('Voer de tekst in voor regel 3', "") }


if(lijnI == 'tekst') { alert(tekstI + '\n' + tekstII + '\n' + tekstIII) }
if(lijnII == 'tekst') { alert(tekstI + '\n' + tekstII + '\n' + tekstIII) }
if(lijnIII == 'tekst') { alert(tekstI + '\n' + tekstII + '\n' + tekstIII) }
		
