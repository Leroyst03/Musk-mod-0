function verificarPalindromo(texto){
    texto = texto.toLowerCase().replace(/\s+/g,'');
    
    let textoAuxiliar = texto.split('').reverse().join('');

    if(textoAuxiliar === texto){
        return "Si es un palindromo";
    }

    return "No es un palindromo";
}

const cin = require('readline-sync');

let texto = cin.question("Ingrese el texto: ");

console.log(verificarPalindromo(texto));