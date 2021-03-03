var mail = prompt("Inserisca un nome");

var nomi = ["Goku", "Vegeta", "Freezer", "Majin Bu", "Genio delle Tartarughe"]

// nomi[0] = Goku
// nomi[1] = Vegeta
// nomi[2] = Freezer
// nomi[3] = Majin Bu
// nomi[4] = Genio delle Tartarughe

var flag = false;

for (var i = 0; i < nomi.length; i++) {
  if (nomi[i] == mail) {
    flag = true;
  }
}

  if (flag) {
    alert("Può partecipare alla festa");
  } else {
    alert ("Non può partecipare alla festa");
  }
