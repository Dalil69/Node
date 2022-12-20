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
const fs = require('fs');

fs.readFile("fichier2.js", )

//3 Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.

const { http2serverResponse} = require('http2');

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
    console.log('server web listening on port 3000')
});