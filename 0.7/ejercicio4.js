function sumaMediaAritmetica(lista){
    let suma = 0;
    lista = listaNumeros.split(',');
    
    for(let i = 0; i < lista.length; i++){
        suma += Number(lista[i]);
    }

    console.log("La suma es: ",suma);
    console.log("La media aritmetica es: ", suma / lista.length);
}


const cin = require('readline-sync');

let listaNumeros = cin.question("Ingrese una lista de numeros: ");

sumaMediaAritmetica(listaNumeros)