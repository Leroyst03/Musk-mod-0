const  V = [0,1];

for(let i = 1; i <= 9; i++){
    V.push(V[V.length-1] + V[V.length-2]);
}

for(let i = 1; i < 11; i++){
    V[i] *= 2;
    console.log(V[i]);
}   