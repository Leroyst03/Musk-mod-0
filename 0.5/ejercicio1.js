const cin = require('readline-sync');
let memoria = [];

function Fiborecursivo(numero){
    if(numero == 1 || numero == 0) return memoria[numero];
    if(memoria[numero] > 0) return memoria[numero];
    return memoria[numero] = (Fiborecursivo(numero-1) + Fiborecursivo(numero-2));
}

let numero = cin.question("Ingrese un numero: ");

for(let i = 0; i <= numero; i++){
    memoria[i] = 0;
}
memoria[1] = 1;
Fiborecursivo(numero);

for(let i = 1; i < 11; i++){
    memoria[i] *= 2;
    console.log(memoria[i]);
}   