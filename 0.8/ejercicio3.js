function contarLetras(texto){
    let contador = new Map();
    texto = texto.split(' ');

    for(let i = 0; i < texto.length; i++){
        let aux = texto[i];
        console.log(aux);
        for(let j = 0; j < aux.length; j++){
            if(!contador.has(aux[j])){
                contador.set(aux[j],1);
            }
            else{
                contador.set(aux[j],contador.get(aux[j]) + 1);
            }
        }
    }
    return contador;
}

const cin = require('readline-sync');

let texto = cin.question("Ingrese un texto: ");

console.log(contarLetras(texto));