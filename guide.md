comment ajouter un JavaScript basique à votre page, en créant un exemple « Hello world ! »
il faut tout d'abord crée un dossier x puis crée a l'interieur main.js ou autre. Ensuite dans index.html
il faut ajouter cette ligne <script src="scripts/main.js"></script> avant la balise fermante </body>
cette élément a pour role de lié le JavaScript a la page.
Enfin en mettant ce code :
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';
nous devrions avoir "Bonjour, monde !" sur notre page.

JavaScript :
variable:
Les variables, sont des conteneurs qui stock des valeurs. Elle se declare avec le mot-clé let puis
le nom de la variable, let myVariable;
puis on peut lui donner sa valeur let myVariable = "Bob"

Fonctions :
Les fonctions sont un moyen de compacter des fonctionalitée pour evitée de ré-écrir tout le code.
let myVariable = document.querySelector('h1');
alert('Bonjour !');

Evenement : Il sert a ajouter de l'interaction comme cliquer sur un lien ou autre. Il reçoit l'information
de la page et reagis en consequance.
