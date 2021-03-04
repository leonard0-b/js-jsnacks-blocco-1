// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

// chiedo numero all'utente🐱‍👤
var numero = prompt("Dammi un numero di 4 cifre");
// console.log(numero);

var somma = 0;

// trasformo la stringa del prompt in numeri🐱‍👤
Array.from(numero);
console.log(numero);

// creo un ciclo di i minore della lunghezza del prompt (4 cifre)🐱‍👤
// creo la variabile somma facendo 0 + il numero in ogni posizione [i]🐱‍👤
for (var i = 0; i < numero.length; i++) {
  somma += parseInt(numero[i]);
}
// stampo la somma🐱‍👤
console.log(somma);
