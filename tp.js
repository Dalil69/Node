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
const p = 'zugdaugquksdusdhui'

console.log(p.replace('a', ''));
console.log(p.replace('e', ''))
console.log(p.replace('i', ''))
console.log(p.replace('o', ''))
console.log(p.replace('u', ''))
console.log(p.replace('y', ''))