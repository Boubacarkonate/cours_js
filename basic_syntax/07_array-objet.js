//déclarer un array

let tableau = ["a", "b", "c", "d", "e", "f"];
console.table(tableau);                         //affiche les données d'un tableu en clé-valeur

let element = tableau[4];
console.log(element);

let tableauVide = [];
console.log(tableauVide);

/////////////////////////////les methodes des tableaux/////////////////////

                                // .foreach()
let panier = ['apple', 'banana', 'pie', 'orange', 'strawberry'];

panier.forEach(el => console.log(el)); //je peux utiliser si je n'ai pas d'autre code, paramètres...
//     return console.log(el);
// })  

let panier1 = ['apple', 'banana', 'pie', 'orange', 'strawberry'];

panier1.forEach( (el, index, array) => console.log(el, index, array) );
/*
panier1.forEach(function (el, index, array) {
    return console.log(el, index, array);
})

*/


                            //.map()

//Cette méthode retourne un nouveau tableau avec ses nouvelles données

const users = [
    {   //index 0
        id: 1,
        name: 'John',
        age: 45
    },
    {  //index 1
        id: 2,
        name: 'Peter',
        age: 28
    },
    {   //index 2
        id:3,
        name: 'Paul',
        age: 30
    }
    
];

//récupérer une valeur dans un objet
console.log(users[1].name); //'Peter'

//récupérer toutes les valeurs (en réalité, je vais créer un nouveau tableu avec les valeurs récupérées)
const recuperationAge = users.map(ageUser => ageUser.age);
console.log(recuperationAge);
const f = users.find(element => element.id === 3);
console.log(f);  //retourne les données de l'id demandé




                //.find()

/* La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition 
donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée. */

const array1 = [5, 12, 8, 130, 44];
const firstValueFounded = array1.find( (element) => element > 10 ); //doit retourner la première valeur inférieure à 10 ds array1  
console.log(firstValueFounded);

//findIndex() est dans le même principe que le précédent mais renvoie plutôt l'index de la valeur du tableau
const indexFounded = array1.findIndex( (element) => element === 44);
console.log(indexFounded);

//indexOf() est sur le même principe que le findIndex(). 
//Mais avec le findIndex() on faire des calculs, des conditions, d'appel d'autres méthodes alors que indexOf renvoie seulement un index.

const onlyIndex = array1.indexOf(8);
console.log(onlyIndex);



                                //.some()
/*
La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. 
Elle renvoie un booléen indiquant le résultat du test.
*/

const arrayVerification = [1, 2, 3, 4, 5];

// vérifie si un élément est pair
const even = (element) => element % 2 === 0;

console.log(arrayVerification.some(even));


                                //.every()
/*
La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une 
fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.
*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const array2 = [1, 30, 39, 29, 10, 13];

console.log(array2.every(isBelowThreshold));
//si un élément est au-dessous alors ce sera fase

/*
on pourrait par exemple l'utiliser comme ceci : 
                const ar = [];
                for(...){
                    if(callback(el)) {
                        arr.push(el)
                    }
                }
*/

                    //includes()
/*
La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.
*/

let job = ['éducateur', 'pompier', 'docteur']
console.log(job.includes('docteur'));


                            //filter()
/*
La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent
 une condition déterminée par la fonction callback. Elle filtre mes données que je souhaite récupérer ds un nouveau tableau
*/

const salary = [1000, 8000, 200, 35000];
const filterSalary = salary.filter(el => el > 1000);
console.log(filterSalary);


                        //.sort()
/*
La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue 
sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.
*/

const letters = ['c', 'e', 'a', 'd', 'b'];
console.log(letters.sort());

//petite subtilité si je veux trier des nombres
const numbers = [6, 10, 4, 20, 5, 3];                       
console.log(numbers.sort());

//tri croissant
const numbersCroissant = numbers.sort( (a,b) => a - b);
console.log(numbersCroissant);

//tri décroissant
const numbersDecroissant = numbers.sort( (a,b) => b - a );
console.log(numbersDecroissant);


                            //reduce()
/*
La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) 
afin de la réduire à une seule valeur. ou de la droite vers gauche avec reduceRight();
                                           [1, 2, 3, 4]
l'accummulateur commence à 0 par défaut => 0 + la valeur courante 1 = 1
                                           1 (accumulateur) + valeur courante 2 = 3
                                           3 + 3  = 6
                                           6 + 4 = 10

*/

//pour calculer la moyenne par exemple :

const notes = [12, 10, 8, 16, 5, 11];
const moyenne = ( notes.reduce( (a,b) => a + b ) / notes.length ).toFixed( 2 );  
console.log(moyenne);
/*
1) je fais la somme des notes du tableau avec reduce()
2) je divise le reduce() par la longueur de mon tableau de notes
3) je mets le tout entre parenthèse pour utiliser .toFixed afin d'avoir 2 chiffres après la virgule 
*/


                        //.pop()
/*
La méthode pop() supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.
*/

const element_Array = [1, 2, 3, 4, 5, 6];
const lastElementDeleted = element_Array.pop(); //le 6 sera supprimé
console.log(lastElementDeleted); //le 6 est retourné
console.log(element_Array); // tableau avec la valeur 6 supprimé



                        //.push()

// La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.

const animals = [];
let loup = animals.push('wolf');
let requin = animals.push('shark');
let chien = animals.push('dog');

console.log(animals);

                        //.unshift()

//La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.

const array3 = [1, 2, 3];

console.log(array3.unshift(4, 5));
// Expected output: 5

console.log(array3);
// Expected output: Array [4, 5, 1, 2, 3]



                        //.shift()

//La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.

const array4 = [1, 2, 3];

const firstElement = array4.shift();

console.log(array4);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1





                        //.reverse()

/*La méthode reverse() transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient 
le premier et ainsi de suite. */

const tab_ordered = [1, 2, 3, 4, 5, 6];
const tab_reversed = tab_ordered.reverse();
console.log(tab_reversed);