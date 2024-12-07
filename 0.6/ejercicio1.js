const cin = require('readline-sync');

const input = cin.question("Digite un numero: ");

const n = parseInt(input);

if(isNaN(n)){
    console.log("No es numero");
}

else if(n % 2 == 0){
    if(n > 0) console.log("El numero es positivo y par");
    else console.log("El número es negativo y par");
}

else{
    if(n > 0) console.log("El numero es positivo y impar");
    else console.log("El numero es negativo y impar");
}