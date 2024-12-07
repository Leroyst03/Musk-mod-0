function verficarSecuencia(texto){
   texto = texto.split('');
    let act = [],cola = [],contador = 0;

   for(let i = 0; i < texto.length; i++){
        if(texto[i] == '('){
            act.push(')');
            cola.push(texto[i]);
            contador ++;
        }
        else if(texto[i] == '['){
            act.push(']');
            cola.push(texto[i]);
            contador ++;
        }
        else if(texto[i] == '{'){
            act.push('}');
            cola.push(texto[i]);
            contador ++;
        }

        if(texto[i] == act[act.length-1]){
            act.pop();
            cola.pop();
            contador ++;
        }
    }
    return contador == texto.length?  1 : 0;
}

const cin = require('readline-sync');

let texto = cin.question('Ingrese un texto: ');

if(verficarSecuencia(texto))console.log("Secuencia correcta");
else console.log("Secuencia incorrecta");
