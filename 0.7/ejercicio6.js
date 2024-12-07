function matrizNumerada(size){
    let matriz = [],contador = 1;

    for(let i = 0; i < size; i++){
        matriz[i] = [];

        for(let j = 0; j < size; j++){
            matriz[i].push(contador);
            contador ++;
        }
    }
    return matriz;
}

const cin = require('readline-sync');

let size = cin.question("Ingrese las proporciones de la matriz cuadrada: ");

console.log(matrizNumerada(size));