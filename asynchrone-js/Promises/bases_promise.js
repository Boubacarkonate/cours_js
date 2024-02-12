//fonction classique
function test () {
    return new Promise((resolve, reject) => {                   //crée et retourne une Promise. À l'intérieur du constructeur de la Promise ont met les fonctions resolve() et reject() en paramètre
        resolve(' succés de la demande : voici les données');      //fonction resolve() qui contiendra les données
        reject('erreur : demande non validée');                      // fonction reject() qui contiendra les erreurs
    })
}
//réponse à la promesse
test()
    .then(result => {
        console.log( result);
    })
    .then(promise2 => {
        console.log('je suis la deuxième');
    })
    .then(promise3 => {
        console.log('je suis la 3ème promesse');
    })
    .catch(error => {
        console.log( error);
    });

///////////////////////////////////////////////////////////

//fonction fléchée
const test2 = new Promise((resolve, reject) => {
        let x = Math.random() * 1000;                               //par défaut, Math.random() est un nbre compris en 0 et 1

            if (x > 10) {
                resolve(x);
            } else {
                reject(x);
            }
    });

//réponse à la promesse
test2
    .then(data =>{                         //data is a imaginary variable. It represents the x of resolve()
        console.log('succès ',data);
    })
    .catch(error =>{                            //error is a imaginary variable. It represents the x of reject()
        console.log('erreur ',error);
    })