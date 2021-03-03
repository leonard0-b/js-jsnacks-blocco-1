var pippo = []

for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));

  if (numero%2 === 1) {
    pippo.push(numero);
  }
}

console.log(pippo);
