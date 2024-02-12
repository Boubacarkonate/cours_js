let age = 14;
console.log(age);

let age1 = age + 12;
console.log(age1);

///////////////CONVERTION //////////

let convert = String(age) + 12;
console.log(convert);

let stringAge = '50';
let convertInNumber = Number(stringAge) + 12;
console.log(convertInNumber);

//////////NOT A NUMBER =NaN //////////

const p = 'bonjour';
const x = Number(p);
console.log(x);

//méthode pour vérifier si la variable n'est pas un nombre
console.log(Number.isNaN(x));


///////////opérateur d'affectation////////////////////
let nbre = 50;
console.log(nbre);

console.log(nbre +=5); 
//nbre = nbre + 5

console.log(nbre -=5);
//nbre = nbre - 5

let incrementation = 40;
incrementation++;
//incrementation = incrementation + 1 
console.log(incrementation);

let decrementation = 40;
decrementation --;
//decrementation = decrementation - 1
console.log(decrementation);