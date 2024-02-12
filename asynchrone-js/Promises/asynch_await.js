//async devant la fonction. Cela indique que la fonction retournera toujours une Promise. 
//await : Vous pouvez utiliser await pour mettre en pause l'exécution de la fonction asynchrone jusqu'à ce que la Promise soit résolue.



//fontion basique

async function getData() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/albums');   //await pour attendre que la requête avec fetch() soit résolue
       
        if (response1.status === 200 && response1.ok === true) {
            const get = await response1.json();                          //await à nouveau pour attendre que les données JSON soient extraites de la réponse avec .json().
            console.log(get);

        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

  //appel fe la fonction


//fonction fléchée

const fetchData = async () => {
  
        const response1 = await fetch('./fichier_json/users.json');   //await pour attendre que la requête avec fetch() soit résolue
        const data1 = await response1.json();                          //await à nouveau pour attendre que les données JSON soient extraites de la réponse avec .json().
        
        const response2 = await fetch('./fichier_json/albums.json');   //await pour attendre que la requête avec fetch() soit résolue
        const data2 = await response2.json();                          //await à nouveau pour attendre que les données JSON soient extraites de la réponse avec .json().
        
        const response3 = await fetch('./fichier_json/post.json');   //await pour attendre que la requête avec fetch() soit résolue
        const data3 = await response3.json();                          //await à nouveau pour attendre que les données JSON soient extraites de la réponse avec .json().
        
        return [data1, data2, data3];

    
}

fetchData()
.then(donnees => console.log(donnees))
.catch(error => console.log(error));