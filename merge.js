function merge(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor((arr.length/2))
    let left=arr.slice(0,mid)
    let right =arr.slice(mid)   
    return mergeSort((merge(left)),merge(right))
}

function mergeSort(left,right){
    const sortedArr=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }       
    }
    return [...sortedArr,...left,...right]
}

const arr = [-6, -2, 20, 8, 4]
console.log(merge(arr));

// Big O -O(nlogn)