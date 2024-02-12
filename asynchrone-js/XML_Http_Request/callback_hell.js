
const getfileData = (ressource, dataCallback) => { 
const request = new XMLHttpRequest();
request.open('GET', ressource)
request.send();
// console.log(request.readyState);
request.addEventListener('readystatechange', ()=> {
    if (request.readyState === 4 && request.status === 200) {
     let requestValidate =  request.responseText;
     console.log('url correcte');
     const lire = JSON.parse(requestValidate);     //JSON.parse() est une fonction en JavaScript qui permet de convertir une chaîne de caractères JSON en objet JavaScript.
     dataCallback(lire)
    } else if (request.readyState === 4) {
        dataCallback('impossible de récupérer cet objet json');
    }
});

}

getfileData('./fichier_json/users.json', dataCallback => {
    console.log(dataCallback);

    getfileData('./fichier_json/albums.json', dataCallback => {
        console.log(dataCallback);
     });
        getfileData('./fichier_json/post.json', dataCallback => {
            console.log(dataCallback);
        })
});

/*

"Callback hell" (littéralement "l'enfer des rappels") est un terme utilisé pour décrire une situation 
dans laquelle le code JavaScript devient difficile à lire et à maintenir en raison d'un enchevêtrement 
excessif de fonctions de rappel imbriquées. Cela se produit souvent dans les situations où vous avez 
plusieurs opérations asynchrones qui doivent être effectuées en séquence.

Dans cet exemple, chaque opération asynchrone (getfileData) nécessite une 
fonction de rappel pour gérer le résultat. Avec plusieurs opérations imbriquées, le code devient rapidement 
difficile à lire et à comprendre.

Pour éviter le "callback hell", vous pouvez utiliser des techniques telles que les promesses ou 
les fonctions asynchrones (async/await) en JavaScript moderne. Ces techniques permettent d'écrire du code asynchrone de manière 
plus claire et plus lisible.
*/