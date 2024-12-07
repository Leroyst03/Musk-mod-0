function matrizMultiplicada(size){
    let matriz = [];

    for(let i = 0; i < size; i++){
        matriz[i] = [];

        for(let j = 0; j < size; j++){
            matriz[i].push(j * i);
        }
    }
    return matriz;
}
    
const cin = require('readline-sync');

let size = cin.question("Ingrese la proprcion de la matriz: ");

console.log(matrizMultiplicada(size));
