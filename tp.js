//1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
function i(num1,num2) {
    let result = num1 + num2;
    return result;
  }
//console.log(i(2,3));

//2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
const nombres =  [66, 77, 88, 99, 1000, 6]

let max = nombres [0]
for (let u = 1; u < nombres.length; u++) {
  if (nombres[u] > max) {
    max = nombres[u]
  }
}
//console.log(max)

//3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.
const p = 'mots'

//console.log(p.replace("o", ''));

//4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.
var a = ["bonjour", "aurevoir", "salut"]
var m = a.sort();
//console.log(m);

//5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".
var a = ["zero", "un", "deux", "trois", "quatre", "cinq", "six", "sept"]
var i = 
function i(nombre){
  let a = nombre
}






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

//console.log(getPropertyValues(objectArray, 'lastname'));

//7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
let j = [1, 2, 3, 4, 5]
j.sort((first, second) => first < second ? 1 : -1)
//console.log(j)

//8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.
 const o = ('Bonjour')
 function maj(str){
let voyelle = "";
for (let i = 0; i < str.length; i++) {
  const regex = /[aeiouy]/i;
  if (regex.test(str[i])) {
    voyelle += str[i].toUpperCase();
  } else {
    voyelle += str[i];
  }
}
return voyelle;
 }

//console.log(maj(o))

//9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.
function total (str){
  let lettre = "";
  for (let i = 0; i < str.length; i++) {
    const regex = /[aeiouy]/i;
    if (regex.test(str[i])){
        lettre += str[i];
    }
  }
  return lettre.length;
}
//console.log(total("Bonjour"))

//- 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

const f = ('Bonjour')
function maj(str){
let voyelle = "";
for (let i = 0; i < str.length; i++) {
 const regex = /[bcdfghjklmnpqrstvwxz]/i;
 if (regex.test(str[i])) {
   voyelle += str[i].toUpperCase();
 } else {
   voyelle += str[i];
 }
}
return voyelle;
}
console.log(maj(f))
