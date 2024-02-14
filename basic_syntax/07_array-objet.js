//déclarer un array

let tableau = ["a", "b", "c", "d", "e", "f"];
console.table(tableau);                         //affiche les données d'un tableu en clé-valeur sous forme de table

//accéder à une valeur
let element = tableau[4];
console.log(element);

let tableauVide = [];
console.log(tableauVide);



                            //Destructuring pattern de array ou d'objet


// le destructuring pattern => décomposer un tableau / extraire les éléments d'1 tableau/ objet en une seule ligne

//exemple :
let tableauLetters = ["a", "b", "c", "d", "e", "f"];  //tableau initial
//pour extraire les données d'un tableu, normoalement on fait:
//tableauLetters[0]
//tableauLetters[1]
//...



//Avec le destructuring
//   tableau1         tableau3         tableau3               tableau initial décomposé en 3 tableaux
let [firstCharacter, secondCharacter, ...otherCharacters ] = tableauLetters;

console.log(firstCharacter, secondCharacter);
console.log(otherCharacters);

const myObjet = {
    size : 40,
    mark : 'Nike',
    height : 100,
    color : 'blue'
};
/*
Dans votre code, vous utilisez la décomposition d'objets (object destructuring) pour extraire des propriétés spécifiques d'un objet.
normalement on fait :
    myObjet.size
    myObjet.mark
    ...
*/

//avec le destructuring :
let {size,mark, ...decomposition2} = myObjet
console.log(size,mark, decomposition2);

//le destructuring peut être utile pour des fonctions 
const person = { 
    name: 'John',
    age: 34,
    job: 'worker',
    born: '20/10/1980'
};

const displayPerson = ({ name, age }) => {
    console.log(`${name} a ${age} ans`);
};

displayPerson(person);


function getPerson() {
    return {
      name: 'John',
      age: 30,
      country: 'USA'
    };
  }
  
  const { name, age, country } = getPerson();
  
  console.log(name); // Affiche 'John'
  console.log(age); // Affiche 30
  console.log(country); // Affiche '



//accéder aux propiétés d'un objet

let sport = {
    collectif: 'foot',
    individuel: 'boxe',
    doux: 'yoga'
}

console.log(sport.collectif);
console.log(sport['individuel']);

//creer un objet de manière différente
let objetcreated = {};
console.log(objetcreated);

objetcreated.nom = 'bernard';
objetcreated.age = 30;
console.log(objetcreated);


let objet4 = new Object()
// console.log(objet4);
objet4.taille = 185;
// console.log(objet4);
objet4.question = function(){
    console.log('Quelle est ta taille ? '+ objet4.taille);
}

objet4.question();

  /////////////////////////////////////////////////////////////////////////////////////////

                            //transformer des objets en array

const pays = {
    capitale: 'Paris',
    population: 60000000,
    langue: 'français',
}

const recuperation_props = Object.keys(pays);
console.log(recuperation_props);
//maintenant que c'est un tableau, si je souhaite , je peux le mapper pour retourner une liste ...



const basketTeam = {
    john: 195,
    mike: 205,
    bob: 189,
    kyle: 212
}

const recuperation_values = Object.values(basketTeam);
console.log(recuperation_values);
//en récupérant les valeurs en array je peux les filtrer par exemple avec filter()


const recuperation_cle_valeur = Object.entries(basketTeam);
console.log(recuperation_cle_valeur);
//je récupère des sous arrays contenant les keys et leurs values



//pour cloner un objet
const copy_basketTeam = {
    ...basketTeam,
    //team: 'Eagles'    on peut rajouter des proprietés à la copy
};
console.log(copy_basketTeam);

//assembler des objets avec le destructuring et le spread operator ' ... '
let firstLetter = {
    1: 'A',
    2: 'B',
    3: 'C',
}

let secondLetter = {
    4: 'D',
    5: 'E',
    6: 'F',
}

const letters = {
    ...firstLetter,
    ...secondLetter,
}

console.log(letters);

