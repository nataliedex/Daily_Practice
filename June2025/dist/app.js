let message = "Hello World";
console.log(message);
export const digitize = (n) => {
    return n.toString().split('').reverse().map(Number);
};
console.log(digitize(12345));
export function oddOrEven(array) {
    let value = 0;
    array.map(x => value += x);
    return (value % 2) ? "odd" : "even";
    // enter code here
}
;
console.log(oddOrEven([1, 3, 4]));
export function binaryArrayToNumber(arr) {
    let value = 0;
    let j = 0;
    console.log("arr: ", arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log("i:", i);
        console.log("j:", j);
        console.log("current value of number: ", value);
        console.log("arr[i]: ", arr[i]);
        value += (arr[i] === 1 ? 2 ** j : 0);
        j++;
        console.log("value: ", value);
    }
    return value;
}
;
console.log(binaryArrayToNumber([1, 0, 1, 1]));
