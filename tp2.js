//1 Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.
const fs = require('fs');

fs.readFile("fichier.js", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

//2 Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.