var eta = parseInt(prompt('Quanti anni hai?'));
console.log(eta);
var km = parseInt(prompt('Quanti km dovrai percorrere?'));
console.log(km);

var prezzoKm = Math.floor(km * 0.21);

//Variabile prezzo sconto young
var percentualeYoung = prezzoKm * 20 / 100;
var prezzoScontoYoung = prezzoKm - percentualeYoung;

//Variabile prezzo sconto old
var percentualeOld = prezzoKm * 40 / 100;
var prezzoScontoOld = prezzoKm - percentualeOld;


if (eta < 18) {
document.getElementById("msg-prezzo").innerHTML = "Ciao, hai meno di 18 anni, stai usufruendo dello sconto young, così il tuo biglietto costa " + prezzoScontoYoung+ "€, " + "invece di " + prezzoKm + "€";

}
else if (eta > 65 ) {
document.getElementById("msg-prezzo").innerHTML = "Ciao, hai più di 65 anni, stai usufruendo dello sconto old, così il tuo biglietto costa " + prezzoScontoOld + "€, " + "invece di " + prezzoKm + "€";
}
else {
  document.getElementById("msg-prezzo").innerHTML = "Ciao, Il tuo biglietto costa " + prezzoKm + "€";
}
