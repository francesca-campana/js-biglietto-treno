var eta = parseInt(prompt('Quanti anni hai?'));
console.log(eta);
var km = parseInt(prompt('Quanti km dovrai percorrere?'));
console.log(km);
//var euro = 1 * 0.21;
//console.log(euro);
var prezzoKm = Math.floor(km * 0.21);
var percentuale = prezzoKm * 20 / 100;
var prezzoScontoYoung = prezzoKm - percentuale;

if (eta <= 20) {
document.getElementById("young").innerHTML = "Il tuo biglietto costa " + prezzoScontoYoung;


}
else {
  document.getElementById("young").innerHTML = "Il tuo biglietto costa " + prezzoKm;
}
