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
document.getElementById("msg-prezzo").innerHTML = "Il tuo biglietto costa " + prezzoScontoYoung+ "€";

}
else if (eta > 65 ) {
document.getElementById("msg-prezzo").innerHTML = "Il tuo biglietto costa " + prezzoScontoOld+ "€";
}
else {
  document.getElementById("msg-prezzo").innerHTML = "Il tuo biglietto costa " + prezzoKm + "€";
}
