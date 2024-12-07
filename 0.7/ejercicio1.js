const cin = require('readline-sync');

function calcularCircunferencia(radio){
    return 2 * Math.PI * radio;
}

let radio = cin.question("Introduce el radio: ");
console.log(calcularCircunferencia(radio));