const cin = require('readline-sync');

const n = cin.question('Digite la altura del triangulo: ');

let l = n,r = n;

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n * 2; j++){
        if(j >= l && j <= r){
            process.stdout.write('*');
        }
        else{
            process.stdout.write(' ');
        }        
    }
    console.log();
    l --;
    r ++;
}
