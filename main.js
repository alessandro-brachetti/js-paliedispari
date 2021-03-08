//PALINDROMA
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

  var parola = prompt("Scrivi una parola");
  var parolaLower = parola.toLowerCase();

  palindroma(parola);
  
//FUNCTIONS
function palindroma (parola) {
  var parolaReverse = parolaLower.split('').reverse().join('');

  return parolaReverse === parolaLower;
}

// var utente = prompt("Scrivi una parola");
//
// palindrome(utente);
//
// function palindrome(parola) {
//  var parola = utente.toLowerCase();
//  var len = parola.length;
//  for (var i = 0; i < len/2; i++) {
//    if (parola[i] !== parola[len - 1 - i]) {
//        return false;
//        console.log("NO");
//    }
//  }
//  return true;
//  console.log("SI");
// }

//PARI E DISPARI
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var utente = prompt("Pari o Dispari?");
console.log(utente);
var utenteNum = parseInt(prompt("Dammi un numero da 1 a 5"));
console.log(utenteNum);

var pcNum ;
randomNum(1, 5);//Generiamo un numero random sempre da 1 a 5

console.log(pcNum);


var somma = somma(utenteNum, pcNum);//Sommiamo i 2 numeri
console.log(somma);

if (somma % 2 == 0) { //Dichiariamo chi ha vinto.
  console.log("Il pari vince");
} else {
  console.log("Il dispari vince");
}

//FUNCTIONS
function randomNum(min, max) {
  pcNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return pcNum;
}

function somma (a, b) {
  return a + b;
}
