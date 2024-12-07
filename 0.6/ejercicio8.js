const cin = require('readline-sync');

const n = cin.question("Digite la altura del rectangulo: ");
const m = cin.question("Digite el ancho del rectangulo: ");

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= m; j++){
        if(i == 1 || i == n){
            process.stdout.write('*');
        }
        else if(j == 1 || j == m){
            process.stdout.write('*');
        }
        else{
            process.stdout.write(' ');
        }
    }
    console.log();
}