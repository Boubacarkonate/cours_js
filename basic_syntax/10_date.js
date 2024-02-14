//ATTENTION JS se base sur la date de la machine locale
let now = new Date();

console.log(now);
console.log("toLocaleString : ",now.toLocaleDateString()); //'jj/mm/yyyy
console.log("toDateString : " ,now.toDateString()); //'day month number year 
console.log("getTime : " , now.getTime()); //timeStamp (temps universel UTC en milliseconds écouléés depuis 1970
console.log("getFullYear : " , now.getFullYear()); //retourne l'année
console.log("getMonth : " , now.getMinutes()); //retourne les minutes
console.log("getDay : " , now.getDay()); //retourne le jour

/*
retourne la différence en minutes entre le fuseau horaire UTC, et celui de l'heure locale.
à ce jour en février, on -60 minutes (-1h) de décalage par rapport au temps UTC (temps universel)
*/
console.log('Timezone : ', now.getTimezoneOffset()); 

//créer une date dans le futur ou le passée
let createdYear = new Date(2030,1,0);
console.log(createdYear);
                                 // Y    M D E  H,mm,ss
let createdYear_and_Time = new Date(2019,5,20, 17,15,30);
console.log(createdYear_and_Time);

let time1 = new Date('08/08/1900')  ;
let time2 = new Date('2000-01-25');  //YYYY-MM-DD
let time3 = new Date('2000-01-25T15:30:10');  //YYYY-MM-DD
console.log(time3);

//créer avec timeStamp
let timeStamp = new Date().getTime();
let timeCreated_with_ts = new Date(timeStamp);
console.log('date créée avec le timestamp : ', timeCreated_with_ts);

//déclarer des dates en les modifiants
let date1 = new Date();
date1.setFullYear(2000);
date1.setMonth(1);
date1.setDate(10)
console.log(date1);

//calculer le nombre  de jours entre 2 dates

function dateBetweenDates(date1, date2) {
    return Math.floor((date2 - date1) / (1000 * 3600 * 24  ));
}

let nbreDays = dateBetweenDates(new Date(2000, 1, 1), new Date());
console.log('le nombre de jours écoulés entre 1 janv 2000 et 14 fev 2024 est de ' , nbreDays);