//utiliser 1 callback
function test(callback) {
    callback();
}

function myCallback(){
    console.log('test');
}

test(myCallback);

///////////////////////////////////////////////////////////////////

//utiliser plusieurs callbacks en même temps
function testPlusieursCallbacks(callback1, callback2) {
    callback1();
    callback2();
}

function myCallback1(){
    console.log('hello');
}


const myCallback2 = () => {
    console.log('world');
};


 testPlusieursCallbacks(myCallback1, myCallback2);

////////////////////////////////////////////////////////////////////

//utiliser paramètre dans une callback

function testCallbackWithParam(callback) {
    let nbre = (Math.random());
    callback(nbre);
}

function myCallbackWithParam(param) {
    console.log(param + ' => je suis le paramètre de la callback affichhé');
}

testCallbackWithParam(myCallbackWithParam);





//fontion 1 
function salutation(name) {
    alert("Bonjour " + name);
  }
  
//fonction2 
  function processUserInput(mafonctionCallback) {
    var name = prompt("Entrez votre nom.");
    mafonctionCallback(name);    
    
    
 //fonction callback  => la fonction a en paramètre la fonction2   = fonction1(fonction2)
 //donc lorsque la première se terminera, la seconde s'exécutera
  processUserInput(salutation);  
  }

 

 var chiffreA = 2
var chiffreB =5

  function nbre(a, b, mafonctionCallback) {
      let result = a+b;
      console.log(result); 
      mafonctionCallback(result)
  }

  function multiplication (result) {
    let newResultat = result * 10
    console.log( newResultat);
  }

 
   nbre(chiffreA, chiffreB,multiplication) ;


let array = [1,2,3,4,5,6,7,8,9];


function mafunction (tab, monCallback) {
    const newArray = [];

    for (let i = 0; i < tab.length; i++) {
       newArray.push(monCallback(tab[i]));
    }
    return newArray;
}

let tableau =  mafunction(array, (function (val) { 
                                    return val *10
                                 }
                                    )
                            );


console.log(tableau);


//////////////////////////////////////////////////////


function person(personName, welcomeFunction) {
    let name = personName;
    welcomeFunction(name); 
}

function welcome(name) {
    alert('Hi ' + name);
}

let a = 'Bob';
person(a, welcome);


////////////////////////////////////////////////////////////

function identity(name, age, callback) {
    let personName = name;
    let personAge = age;
    callback( personName + ' et je suis âgé de ' + personAge + ' ans' )
}

function welcome(message) {
    console.log( 'qui es-tu ? ' + message);
}

let f = 'jean'
let b = 20

identity(f,b,welcome)

