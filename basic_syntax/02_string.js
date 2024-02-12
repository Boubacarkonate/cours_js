//déclaration des strings
let myString1 = "Bonjour";
let myString2 = 'coucou';
let myString3 = `j'habite à "Paris`;

//////CONCATENATION//////////////////////

const conca = myString1 + ', ' + myString3 ; 
console.log(conca);

const testConcatenation = `Où habites-tu ? ${myString2}, ${myString3} `;

console.log(testConcatenation);


/////////////////////Méthodes pour les strings////////////////////////////////////:

//récupérer  charactère/ index
const firstCharacter = myString1[0];
console.log(firstCharacter);

//Méthodes pour avoir nbre de caractères
const lengthWords = myString1.length;
console.log(lengthWords);

//Méthodes pour mettre un string en majuscule
const majuscule = myString1.toUpperCase();
console.log(majuscule);

//Méthodes pour mettre un string en minuscule
const minuscule = myString1.toLowerCase();
console.log(minuscule);

//Methodes autres
// indexOf()
// slice() 
// replace()
// charAt()     renvoie une nouvelle chaîne contenant le caractère (ou, plus précisément, le point de code UTF-16) à la position indiquée en argument.
// typeof()     type de données
// .trimStart() pour supprimer les espaces au débur du string   #  .trimEnd()  supprime les espaces en fin du string
// concact()  combine plusieurs strings en une seule
// split()  place les strings en un tableau ordonné
// ......................
 