function busquedaBinaria(lista,elemento){
    let izquierda = 0, derecha = lista.length-1;

    while(derecha - izquierda > 0){
        let mitad = (derecha + izquierda) / 2;

        if(lista[mitad] > elemento){
            derecha = mitad-1;
        }
        else izquierda = mitad;
    }

    return (lista[derecha] === elemento) ? 1 : 0;
}

function encontrarDiferencia(listaPrimaria,listaSecundaria){
    listaSecundaria.sort();
    let diferencia = [];

    for(let i = 0; i < listaPrimaria.length; i++){
        if(!busquedaBinaria(listaSecundaria,listaPrimaria[i])){
            diferencia.push(listaPrimaria[i]);
        }
    }
    return diferencia;
}

const cin = require('readline-sync');

let lista1 = [1,2,3,4,5];
let lista2 = [3,5];

console.log("La diferencia de ambos conjuntos son : ",encontrarDiferencia(lista1,lista2));