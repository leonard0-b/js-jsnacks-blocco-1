// Il software deve chiedere per 10 volte all’utente di inserire
// un numero. Il programma stampa la somma di tutti i numeri
// inseriti.

// creo una variabile somma = 0 🐱‍👤
somma = 0;

// chiedo per 10 volte all'utente di inserire un numero
// per ogni ciclo la somma si sovrascriverà e si sommerà al numero dato 🐱‍👤
for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  somma = somma + numero;

// stampa la somma dei numeri 🐱‍👤
  console.log(somma);
}
