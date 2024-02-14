const users = [
    {id: 1, 
    name:'Bob'
    },
    {id: 2, 
    name:'Dylan'
    },
];

// je peux faire une 'copie ' d'un tableau :
const usersCopy = [];

                                        //boucle for
for (let i = 0; i < users.length; i++) {
    const element = users[i];
    usersCopy.push({id: element.id, name: element.name});  //  usersCopy.push({...element}); c'est la même chose
    console.log(element.name);
    
}
console.log(usersCopy);


                                        //boucle while
let i = 0;
while (i < usersCopy.length) {
    console.log(usersCopy[i].name); 
    i++; 
}


                                        //creer une fonction comportant une boucle

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const functionLoop = (tableau) => {
    // for (let i = 0; i < tableau.length; i++) {
    //     const element = tableau[i];
    //   console.log(element);  
    // }

    let i = 0;
    for (const element of tableau) {                //for of => pour les tableaux
        console.log(element);
    }
}

functionLoop(number);

const maxNumeber = (array) => {
    let max = -Infinity;
    for (const element of array) {
        if (element > max) {
            max = element;
        }
       
    } 
    return max;
}

const leNbrelePlusGrand = maxNumeber(number);
console.log(leNbrelePlusGrand);


const panier = {
    fruit: 'pommes',
    legume: 'haricot',
    feculent: 'riz',

}

//L'instruction for...in permet d'itérer sur les propriétés énumérables d'un objet 
for (const key in panier ) {
    const value = panier[key];
    const other_value = panier[key];
    console.log(key);
    console.log(value);
    console.log(other_value);
    console.log(key + ':', value);
}


