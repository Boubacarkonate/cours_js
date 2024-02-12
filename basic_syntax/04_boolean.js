/*le type de données [Boolean] en Js nous permet de faire la manipulation de
la valeur vraie ou fausse */

console.log(true, false);

//Methodes pouvant nous retourner un boolean
let email = 'email@gmail.com';

console.log(email.includes('@'));       //La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.
console.log(email.includes('x'));

//Operateurs de comparaison [==, !=, >, <, >=, <=]
let age = 25;
let nom = 'Musole';

console.log(age == 25);
console.log(age != 25);
console.log(age > 30);
console.log(age < 30);
console.log(age <= 25);
console.log(age >= 25);
console.log(nom == 'musole');
console.log(nom != 'musole');

//Une fausse implementation
console.log(age == '25');
console.log(age != '25');

//Voici une meilleure approche pour la comparaison
console.log(age === '25'); // le variable de type different ne peut jamais etre le meme
console.log(age !== '25');
console.log(age === 25);