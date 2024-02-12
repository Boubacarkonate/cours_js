const getData = async (url) => {                    //déclaration d'une fonction fléchée asynchrone (donc, retournera une promesse) et ayant en paramètre 'url
    try {                                           //capture d'erreur s'il y en a
        const response = await fetch(url);          //const qui va chercher en GET l'url qui remplacera la variable. await est utilisé pour attendre la résolution de la promise

        if (!response.ok) {                          //si response n'est pas ok (signifie true / entre statut 200-299) alors l'error se captée après
            throw new Error('Erreur détectée => ' + response.status);  //lance une nouvelle exception de type Error. Cette exception contiendra un message d'erreur spécifique indiquant que l'erreur a été détectée, ainsi que le code de statut HTTP associé à la réponse.
        }
        
        const data = await response.json();  //extrait les données JSON de la réponse afin de résoudre la promise
        console.log(data);
        
    } catch (error) {
        console.error(error.message);       //récupération de l'erreur
    }
}

getData('./fichier_json/users.json');
getData('https://jsonplaceholder.typicode.com/todos/1');
