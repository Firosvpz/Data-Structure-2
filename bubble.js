let arr = [2, 3, 4, 5, 1, 6];
const n = arr.length;
let swapped;

do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
        }
    }
} while (swapped);

console.log(arr);
