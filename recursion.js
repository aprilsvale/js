function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4])); 






function max(arr) {
    if (arr.length === 0) {
        return -Infinity;
    }

    if (arr.length === 1) {
        return arr[0];
    }
    
    const first = arr[0];
    const maxOfRest = max(arr.slice(1));

     return first > maxOfRest ? first : maxOfRest;
}

console.log(max([3, 1, 4, 2])); 
console.log(max([15, 21, -10])); 