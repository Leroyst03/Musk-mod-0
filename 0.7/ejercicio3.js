const cin = require('readline-sync');

function calcularCircunferenciaArea(radio){
    console.log(2 * Math.PI * radio,Math.PI * (radio * radio));
}

let radio = cin.question("Ingrese el radio: ");

calcularCircunferenciaArea(radio);          
