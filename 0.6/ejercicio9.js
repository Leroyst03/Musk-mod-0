const cin = require('readline-sync');

const V = new Map();

V.set(0,"Cero");
V.set(1,"Uno",);
V.set(2,"Dos");
V.set(3,"Tres");
V.set(4,"Cuatro");
V.set(5,"Cinco");
V.set(6,"Seis");
V.set(7,"Siete");
V.set(8,"Ocho");
V.set(9,"Nueve");
V.set(10,"Diez");

let ans;
while(true){
    let n = cin.question("Digite un numero del 0 al 10: ");
    if(n >= 0 && n <= 10){
        ans = parseInt(n);
        break;
    }
}

console.log(V.get(ans));