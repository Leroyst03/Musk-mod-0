const cin = require('readline-sync');

function calcularArea(radio){
    return Math.PI * (radio * radio);
}

let radio = cin.question("Ingrese el radio de la circunferencia: ");

console.log(calcularArea(radio));