// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.

var meStesso = {

  'nome' : 'Alberto',
  'cognome' : 'Gambino',
  'eta' : 34
}

var mioNome = '';

for(var key in meStesso){

  mioNome += meStesso[key] + ' '
}


// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome

nomeStudenti = [];

for(var key in studenti){

  nomeStudenti = studenti[key]['nome'] + ' ' + studenti[key]['cognome']
}

var studenti = [

  {'nome' : 'Pippo','cognome': 'Dongu', 'eta' : 32},
  {'nome' : 'Zlatan', 'cognome' : 'Ibrahimovic', 'eta' : 40},
  {'nome' : 'Cristiano', 'cognome' : 'Ronaldo', 'eta': 35},
  {'nome' : 'Guybrush', 'cognome' : 'Threepwood', 'eta' : 100}

]




// - Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.

var nuovoNome = prompt('inserisci il tuo nome')
var nuovoCognome = prompt('inserisci il tuo cognome')
var nuovaEta = parseInt(prompt('inserisci la tua eta'))

var nuovoStudente = {'nome': nuovoNome, 'cognome' : nuovoCognome, 'eta' : nuovaEta}

studenti.push(nuovoStudente)

function init(){


console.log(mioNome);
console.log(nomeStudenti);
console.log(studenti);

}

$(document).ready(init)
