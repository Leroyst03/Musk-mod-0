function Criba(numero){
    let marca = [];

    for(let i = 0; i <= numero + 1; i++){
        marca.push(0);
    }

    for(let i = 2; i * i <= numero; i++){
        if(marca[i]) continue;
        for(let j = i * i; j <= numero; j+=i){
            marca[j] = 1;
        }
    }
    return marca[numero] === 0 ? "El numero es primo" : "El numero no es primo";
}

const cin = require("readline-sync");

let numero = cin.question("Ingrese un numero: ");

console.log(Criba(numero));