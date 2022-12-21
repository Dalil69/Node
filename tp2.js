//1 Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.
const s = require('fs');

s.readFile("fichier.js", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    //console.log(data)
})

//2 Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.
//const fs = require('fs');

//fs.readFile("fichier2.js", )

//3 Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.

/*const { http2serverResponse} = require('http2');

http.createServer((htttRequest, httpResponse)=> {

    fs.readFile('test.txt', 'utf-8', (err, data)=> {
        if(err) {
            console.log(err)

            httpResponse.statusCode = 500;
            httpResponse.end('an errpr has occured.');
            return;
        }
        httpResponse.seHeader('Content-Type', 'text/plain');
        httpResponse.end(data);

    })
}).listen(3000, () => {
    //console.log('server web listening on port 3000')
});*/

//4 Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.
/*const fs = require("fs").promises;

async function main(){
    await findSalesFiles("Dossier");
}

main();

async function findSalesFiles(folderName) {
    const rp = await fs.readdir(folderName);
    //console.log(rp);
}*/

//5 Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.
const fs = require("fs").promises;
const path = require("path");

async function main() {
    const Bonjourrr = path.join(__dirname, "Bonjour");
    const Bonjour = path.join(__dirname, "Aurevoir")


try {
    await fs.mkdir(Bonjour);
} catch {
    console.log('${Bonjour} already exists.')
}
const ok =  await findSalesFiles(Bonjourrr);

await fs.writeFile(path.join(Bonjour, "report.json"), "");
console.log(`Sales report written to ${Bonjour}`);
}

