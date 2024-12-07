function matrizTranspuesta(matriz){
    let matrizNueva = [];

    for(let i = 0; i < matriz[0].length; i++){
        matrizNueva[i] = [];
        for(let j = 0; j < matriz.length; j++){
            matrizNueva[i][j] = matriz[j][i];
        }
    }

    return matrizNueva;
}

let matriz = [[0,1,2],[3,4,5],[6,7,8]];

console.log(matrizTranspuesta(matriz)); 