//1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
function i(num1,num2) {
    let result = num1 + num2;
    return result;
  }
console.log(i(2,3));

//2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
const nombres =  [66, 77, 88, 99, 1000, 6]

let max = nombres [0]
for (let u = 1; u < nombres.length; u++) {
  if (nombres[u] > max) {
    max = nombres[u]
  }
}
console.log(max)

//3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.
const p = 'mots'

console.log(p.replace("o", ''));

//4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.
var a = ["bonjour", "aurevoir", "salut"]
var m = a.sort();
console.log(m);

//5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".






//6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.

const objectArray = [
  {firstname : "John", lastname: "Doe"},
  {firstname : "John", lastname: "Doe"},
  {firstname : "John", lastname: "Doe"},
  {firstname : "John", lastname: "Doe"},
  {firstname : "John", lastname: "Doe"},
  {firstname : "John", lastname: "Doe"},

]

function getPropertyValues( objArray, propName) {
  return objArray.map(obj => obj[propName]);
}

console.log(getPropertyValues(objectArray, 'lastname'));