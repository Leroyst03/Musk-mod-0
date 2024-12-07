function elementosRepetidos(lista){
    let contador = new Set();
    lista = lista.split(',')
    let repetidos = new Set();
    
    for(let i = 0; i < lista.length; i++){
        if(contador.has(lista[i])){
            repetidos.add(lista[i]);   
        }
        else{
            contador.add(lista[i]);
        }
    }

    if(repetidos.size > 0){
        console.log('Los elementos repetidos son: ',repetidos);
    }
    else console.log("No hay elementos repetidos");
}

const cin = require('readline-sync');

let listaElementos = cin.question("Ingrese la lista de elementos: ");

elementosRepetidos(listaElementos);

  