function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

let arr = [5, 2, 4, 6, 1, 3];
console.log("Original array:", arr);
insertionSort(arr);
console.log("Sorted array:", arr);
