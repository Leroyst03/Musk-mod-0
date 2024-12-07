function verificarPalabrasRepetidas(texto){
    let repetidos = new Set(),palabras = new Set();
    texto = texto.toLowerCase();
    texto = texto.split(/[,.;: ]/);

    for(let i = 0; i < texto.length; i++){
        let aux = texto[i],palabra = "";
        for(let j = 0; j < aux.length; j++){  
            palabra += aux[j];
        }
        if(palabras.has(palabra)) repetidos.add(palabra);
        else palabras.add(palabra);
    }
    return repetidos;
}

const cin = require('readline-sync');

let texto = cin.question("Ingrese un texto: ");

console.log("Las palabras que se repiten son: ",verificarPalabrasRepetidas(texto));