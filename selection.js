let arr =[2, 3, 4, 5, 1, 6];
const n = arr.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);
