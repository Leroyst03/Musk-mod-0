function verficarParentesisBalanceados(texto){
    texto = texto.split('');
    let izquierda = [],derecha = [];

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == '('){
            izquierda.push(texto[i]);
        }
        else{
            derecha.push(texto[i]);
        }
        if(izquierda.length > 0 && derecha.length > 0){
            izquierda.pop();
            derecha.pop();
        }
    }
    return derecha.length > 0 || izquierda.length > 0 ? "No esta balanceado" : "Esta balanceado";
}

const cin = require('readline-sync');

let texto = cin.question("Ingrese un texto: ");

console.log(verficarParentesisBalanceados(texto));