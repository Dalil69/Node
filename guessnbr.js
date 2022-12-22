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
    console.log('Tu as '+ lives+' vies');
    
  } 
//Sinon si la reponse est inferrieur au nombre choisi alors il sera signaler qu'il faut monter le nombre
  else if (answerNum < randomNumber){

        console.log('Plus haut !');
        console.log('Tu as '+ lives +' lives left');
        
  }
//si c'est egale alors il gagne
   else if (answerNum === randomNumber)
  {
    console.log('GAGNER!!!');
    console.log('Tu gagne avec '+lives+ ' vie');
    process.exit(0);
    
  }
//si autre qu'un nombre est inserer il y a une erreur
  else
  {
    console.log("Ce n'est pas reconnue comme un nombre !");
    console.log('Tu as '+lives+' vies');
    
  }

  //si les vies sont = a 0 c'est perdu
  if (lives == 0)
  {
    console.log('PERDU!!! Le perdant reçoit un gage donner par les autres joueurs.');
    process.exit(0);
    
  } 





  terminal.prompt();
});




