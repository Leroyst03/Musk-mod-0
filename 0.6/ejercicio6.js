const cin = require('readline-sync');

const n = cin.question("Digite un año: ");

if((n % 4 == 0 && n % 100 != 0) || n % 400 == 0){
    console.log("El año es bisiesto: ");
}
else{
    console.log("El año no es bisiesto");
}