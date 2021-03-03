var numero1 = parseInt(prompt("Dammi un numero"));

var numero2 = parseInt(prompt("Dammi un altro numero"));

if (numero1 > numero2) {
  console.log(numero1);
} else if (numero2 > numero1) {
  console.log(numero2);
} else {
  alert("I numeri sono uguali");
}
