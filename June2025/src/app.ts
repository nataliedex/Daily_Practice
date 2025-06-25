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

  export function xo(str: string) : boolean {
    return str.toLowerCase().split('').filter(el => el === "x").length ===str.toLowerCase().split('').filter(el => el === "o").length;
  }

  console.log(xo("ooXmmmXx"));
  
  
  export function longestConsec(strarr: string[], k: number): string {

    if (k <= 0 || k > strarr.length) return "";
    let longestString: string = "";

    for(let i: number = 0; i <= strarr.length - k; i++){
        const combined: string = strarr.slice(i, i + k).join("");
        if(combined.length > longestString.length) {
            longestString = combined;
        }
    }
    

    return longestString;
}

console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));

  