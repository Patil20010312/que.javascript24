function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; 
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}


let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotateArray(arr, k)); 