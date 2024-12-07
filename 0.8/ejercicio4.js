function comprobarAnagrama(palabra1,palabra2){
    palabra1 = palabra1.toLowerCase().replace(/\s+/g, ''); 
    palabra2 = palabra2.toLowerCase().replace(/\s+/g, '');
    palabra1 = palabra1.split('').sort().join(''); 
    palabra2 = palabra2.split('').sort().join('');

    return palabra1 === palabra2 ? "Son anagramas": "No son anagramas";
}

const cin = require('readline-sync');

let palabra1 = cin.question("Introduce una palabra: ");
let palabra2 = cin.question("Ingrese otra palabra: ");

console.log(comprobarAnagrama(palabra1,palabra2));