/*L'opérateur ternaire, également appelé expression ternaire, est une structure 
de contrôle en JavaScript qui vous permet d'écrire une instruction conditionnelle
de manière concise.*/

//condition ? expressionSiVrai : expressionSiFaux;

/*      => if(){

            } else{

            }
*/

let age = 24;
age == 24 ? console.log('good') : console.log('bad');

const age1 = 20;
const message = (age1 >= 18) ? 'Majeur' : 'Mineur';
console.log(message); // Affichera 'Majeur'