const cin = require('readline-sync');

const a = cin.question("Digite a: ");
const b = cin.question("Digite b: ");
const c = cin.question("Digite c: ");

if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0) console.log("Hay al menos un numero par");
else console.log("No hay numeros pares");