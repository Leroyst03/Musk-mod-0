function invertirPalabra(palabra){
    let palabraInvertida = "";
    palabra = palabra.split('');
    while(palabra.length > 0){
        palabraInvertida += palabra.pop();
    }

    return palabraInvertida;
}

const cin = require("readline-sync");

let palabra = cin.question("Ingrese una palabra: ");

console.log("La palabra invertida es: ",invertirPalabra(palabra));