function sum(i) {
    // console.log(i);
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);