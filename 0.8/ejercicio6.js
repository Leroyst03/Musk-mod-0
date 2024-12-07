function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let aux = arr[j];
                arr[j] = arr[i];
                arr[i] = aux;
            }
        }
    }
    return arr;
}

function generarArrayAleatorio(size){
    let arr = [];
    for (let i = 0; i < size; i++){
        arr.push(Math.floor(Math.random() * 100000));
    }
    return arr;
}

let array = generarArrayAleatorio(100000);

console.time('El algoritmo burbuja tardo: ');
bubbleSort(array);
console.timeEnd('El algoritmo burbuja tardo: ');
