function climbing(n){
    let newWays=[1,2]
    for(let i=2;i<=n;i++){
        newWays[i]=newWays[i-1]+newWays[i-2]
    }

    return newWays[n-1]
}

console.log(climbing(1));
console.log(climbing(2));
console.log(climbing(3));
console.log(climbing(4));
console.log(climbing(5));

// O(n)