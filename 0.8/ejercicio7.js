function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

function generarArrayAleatorio(tamaño) {
    let arr = [];
    for (let i = 0; i < tamaño; i++) {
        arr.push(Math.floor(Math.random() * 100000));
    }
    return arr;
}

let array = generarArrayAleatorio(100000);

console.time('Tiempo de ejecución de QuickSort es: ');
quickSort(array);
console.timeEnd('Tiempo de ejecución de QuickSort es: ');
