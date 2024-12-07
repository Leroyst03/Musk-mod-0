const cin = require('readline-sync');

const n = cin.question("Digite un numero: ");

let ans = 1;
for(let i = 1; i <= n; i++){
    ans *= i;
}
console.log(`El factorial de ${n} es: `+ ans);