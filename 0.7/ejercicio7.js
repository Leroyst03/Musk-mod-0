function desglosarTexto(texto){
    texto = texto.split(' ');
    let k = 0,j = 0,textoNuevo = [];

    textoNuevo[k] = [];
    for(let i = 0; i < texto.length; i++){
        if(j < 5){
            textoNuevo[k].push(texto[i]);
            j ++;
        }
        else{
            j = 0;
            k ++;
            textoNuevo[k] = [];
            textoNuevo[k].push(texto[i]);
            j ++;
        }
    }
    return textoNuevo;
}

const cin = require('readline-sync');

let texto = cin.question("Ingrese un texto: ");

console.log(desglosarTexto(texto));