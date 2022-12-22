const readline = require('readline'); //sert aux entrées clavier

const randomNumber = Math.round(Math.random() * 10); //dans ma variable randomNumber je stock Math random qui choisis un nombre au hasard entre la tranche donner
const lives = 1;
//Gére les interactions avec readline
const terminal = readline.createInterface(
{
  input : process.stdin,
  output : process.stdout
});


