// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

// chiedi due numeri parseInt devono essere numeri non lettere 🐱‍👤
var numero1 = parseInt(prompt("Dammi un numero"));

var numero2 = parseInt(prompt("Dammi un altro numero"));

// se il primo numero è maggiore del secondo stampalo, e viceversa
// se i numeri sono uguali esce un alert 🐱‍👤
if (numero1 > numero2) {
  console.log(numero1);
} else if (numero2 > numero1) {
  console.log(numero2);
} else {
  alert("I numeri sono uguali");
}
