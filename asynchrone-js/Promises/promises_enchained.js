
const getfileData = (ressource) => { 
    return new Promise((resolve, reject) => {
        
  
    const request = new XMLHttpRequest();
    request.open('GET', ressource)
    request.send();
    // console.log(request.readyState);
    request.addEventListener('readystatechange', ()=> {
        if (request.readyState === 4 && request.status === 200) {
         let requestValidate =  request.responseText;
         const lire = JSON.parse(requestValidate);     //JSON.parse() est une fonction en JavaScript qui permet de convertir une chaîne de caractères JSON en objet JavaScript.
         resolve(lire)
        } else if (request.readyState === 4) {
            reject('impossible de récupérer cet objet json');
        }
    });  
})
    
    }

    getfileData('./fichier_json/users.json')
         .then((result) => {
            console.log('promesse1', result);
            return getfileData('./fichier_json/users.json')
        })
        .then((result2) =>{
            console.log('promesse2', result2);
            return getfileData('./fichier_json/post.json')
        })
        .then((result3) =>{
            console.log('promesse3', result3);
            return getfileData('./fichier_json/albums.json')
        })
        .catch((err) => {
            console.log(err);
        });
       
       