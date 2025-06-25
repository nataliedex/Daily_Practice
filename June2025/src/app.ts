let message: string = "Hello World";

console.log(message);

export const digitize = (n: number): number[] => {

    return n.toString().split('').reverse().map(Number);

  };

  console.log(digitize(12345));

  export function oddOrEven(array: number[]) {

    let value: number = 0;

    array.map(x => value += x);

    return (value % 2) ? "odd" : "even";
    // enter code here
  };

  console.log(oddOrEven([1,3,4]));

  export function binaryArrayToNumber(arr: number[]): number {
    let value: number = 0;
    let j: number = 0;
    
    for(let i: number = arr.length-1; i >= 0; i-- ){
        value += (arr[i] === 1 ? 2 ** j : 0);
        j++;
    }
    
    return value;

  };

  console.log(binaryArrayToNumber([1, 0, 1, 1]));
  
  
  