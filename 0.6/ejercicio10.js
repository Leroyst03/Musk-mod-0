const cin = require('readline-sync');

let con = 0;
let random = Math.floor(Math.random() * 10) + 1;
console.log("Adivina el numero que se encuentra en el rango 1-10");
while(true){
    con ++;
    let n = cin.question("Adivina: ");

    if(n == random){
        console.log(`¡Correcto! Has necesitado ${con} intentos`);
        break;
    }
}
