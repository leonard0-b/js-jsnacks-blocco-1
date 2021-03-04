// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

// chiedo all'utente una mail 🐱‍👤
var mail = prompt("Inserisca un nome");
// creo un array con una lista di nomi 🐱‍👤
var nomi = ["Goku", "Vegeta", "Freezer", "Majin Bu", "Genio delle Tartarughe"]

// nomi[0] = Goku
// nomi[1] = Vegeta
// nomi[2] = Freezer
// nomi[3] = Majin Bu
// nomi[4] = Genio delle Tartarughe

// creo una sentinella che ha valore falso 🐱‍👤
var flag = false;

// nel ciclo di lunghezza la lunghezza dell'array 🐱‍👤
// se uno dei singoli nomi corrisponde al nome del prompt allora la sentinella diventa vera 🐱‍👤
for (var i = 0; i < nomi.length; i++) {
  if (nomi[i] == mail) {
    flag = true;
  }
}
// sempre nel ciclo se la sentinella è vera allora alert affermativo,altimenti viceversa 🐱‍👤
  if (flag) {
    alert("Può partecipare alla festa");
  } else {
    alert ("Non può partecipare alla festa");
  }
