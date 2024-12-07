const cin = require('readline-sync');

let cont  = new Map();
cont.set('a',0);
cont.set('e',0);
cont.set('i',0);
cont.set('o',0);
cont.set('u',0);
const cad = cin.question("Digite una frase: ");

for(let i = 0; i < cad.length; i++){    
    if (cont.has(cad[i])) {
        cont.set(cad[i], cont.get(cad[i]) + 1);
    }    
}

console.log(cont.get('a') + cont.get('e') + cont.get('i') + cont.get('o') + cont.get('u'));