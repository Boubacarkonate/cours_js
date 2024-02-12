fetch('https://jsonplaceholder.typicode.com/todos/' )
    .then(respData=> respData.json())
    .then(dataFile=>console.log(dataFile))
    .catch((err) => {
        console.error('error is', err.status, err.message);
    });




fetch('https://jsonplaceholder.typicode.com/todos/' )
   .then(resp => {
    console.log(resp);

    if (resp.status === 200 && resp.ok === true) {
        resp.json()
            .then(data => console.log(data))
    } else {
        console.log('erreur', resp.status);
   }})



    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => {
    // Vérifiez si la réponse est OK (statut HTTP 200)
    if (!response.ok) {
      throw new Error('Erreur de réseau : ' + response.status);
    }
    // Analyser la réponse JSON
    return response.json();
  })
  .then(data => {
    // Faire quelque chose avec les données
    console.log(data);
  })
  .catch(error => {
    // Gérer les erreurs de réseau ou d'analyse JSON
    console.error('Erreur lors de la récupération des données :', error);
  });