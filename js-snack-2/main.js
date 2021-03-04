// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

// chiedi due parole con .trim elimini gli spazi vuoti 🐱‍👤
var parola1 = prompt(("Scrivi una parola").trim);

var parola2 = prompt(("Scrivi un'altra parola").trim);

// se la lunghezza (.length) di parola1 è maggiore della parola2 stampa la più corta e viceversa 🐱‍👤
if (parola1.length > parola2.length) {
  console.log(parola2, parola1);
} else
  console.log(parola1, parola2);
