const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send();
// console.log(request.readyState);
request.addEventListener('readystatechange', ()=> {
    if (request.readyState === 4 && request.status === 200) {
     let requestValidate =  request.responseText;
     console.log('url correcte',requestValidate);
     const lire = JSON.parse(requestValidate);     //JSON.parse() est une fonction en JavaScript qui permet de convertir une chaîne de caractères JSON en objet JavaScript.
     console.log(lire);
    } else if (request.readyState === 4) {
        console.log('impossible de récupérer cet objet json');
    }
});

// Les statuts code HTTP les plus fréquents sont les suivants :

        // 100 Continue : tout fonctionne jusqu’à présent; le client devrait continuer avec la requête ;
        // 200 OK : Les requête a été un succès ;
        // 301 Moved Permanently : L’identifiant de ressource unique (URI) relatif à la ressource demandée a changé de localisation de façon permanente ;
        // 302 Found : L’identifiant de ressource unique (URI) relatif à la ressource demandée a changé de localisation de façon temporaire ;
        // 304 Not Modified : Indique au client que la réponse n’a pas été modifiée depuis le dernier accès et qu’il peut utilisée la version en cache ;
        // 401 Unauthorized : Indique que le client doit s’identifier s’il veut accéder à la réponse ;
        // 403 Forbidden : Indique que le client n’a pas l’autorisation d’accéder à ce contenu ;
        // 404 Not Found : Le serveur n’a pas pu trouver la ressource demandée ;
        // 500 Internal Server Error : Le serveur a rencontré une situation qu’il ne peut pas gérer.