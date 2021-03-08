//PALINDROMA
//Chiedere all’utente di inserire una parola
  var parola = prompt("Scrivi una parola");
  var parolaLower = parola.toLowerCase();

  console.log(parolaLower);
//Creare una funzione per capire se la parola inserita è palindroma
  var check = palindroma(parola);

//FUNCTIONS
function palindroma(parola) {
  var parolaReverse = parolaLower.split('').reverse().join('');
  var flag = false;
  if (parolaReverse === parolaLower) {
    flag = true;
    console.log("La parola è palindroma!");
  } else {
    console.log("La parola non è palindroma!");
  }
  return flag;
}


//PARI E DISPARI
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var utente = prompt("Pari o Dispari?");
console.log(utente);
var utenteNum = parseInt(prompt("Dammi un numero da 1 a 5"));
console.log(utenteNum);

var pcNum = randomNum(1, 5);//Generiamo un numero random sempre da 1 a 5
console.log(pcNum);

var somma = somma(utenteNum, pcNum);//Sommiamo i 2 numeri
console.log(somma);

if (somma % 2 == 0 && utente=="pari") { //Dichiariamo chi ha vinto.
  console.log("L'utente vince!");
} else if (somma % 2 !== 0 && utente=="dispari"){
  console.log("L'utente vince!");
} else  {
  console.log("Il PC vince!");
}

//FUNCTIONS
function randomNum(min, max) {
  pcNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return pcNum;
}

function somma (a, b) {
  return a + b;
}
