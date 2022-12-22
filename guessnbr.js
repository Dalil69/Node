const readline = require('readline'); //sert aux entrées clavier

const randomNumber = Math.round(Math.random() * 5); //dans ma variable randomNumber je stock Math random qui choisis un nombre au hasard entre la tranche donner
const lives = 5;
//Gére les interactions avec readline
const terminal = readline.createInterface(
{
  input : process.stdin,
  output : process.stdout
});

terminal.setPrompt('Devine le prix! (0-10): ');//Ici setPrompt me sert a reécrir l'ennoncer dans la console
terminal.prompt();
terminal.on('line', function(answer) //la fonction contient le parametre reponse
{
  const answerNum = parseInt(answer); //la varibale answerNum est lier a la reponse donc answer
//Si la reponse est superrieur au nombre choisi alors il sera signaler qu'il faut baisser le nombre
  if (answerNum > randomNumber)
  {
    console.log('Plus bas !');
    console.log('Tu as '+ (lives-1)+' vies');
  }
//Sinon si la reponse est inferrieur au nombre choisi alors il sera signaler qu'il faut monter le nombre
  else if (answerNum < randomNumber){
  
        console.log('Plus haut !');
        console.log('Tu as '+ (lives-1) +' lives left');
  }

 