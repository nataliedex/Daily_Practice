function descendingOrder(n){
    return Number(n.toString().split("").sort((a,b) => b - a).join(""));
  }

const num = 123456789;
console.log(descendingOrder(num));

function maps(x){
  return x.map((el) => el * 2);
}

const myArray = [2, 2, 2, 2, 2, 2];
console.log(maps(myArray));

function tribonacci(signature,n){
  //your code here
  if (n === 0){
    return [];
  } else if(n <= 3){
    return signature.slice(0,n);
  } else {
    let result = signature.slice();
    while (result.length < n){
      const nextValue = result[result.length-1] + result[result.length-2] + result[result.length-3];
      result.push(nextValue);
      
    }
    return result;
  }
}

const triArray = [0,3,5];
const numElements = 7;
console.log(tribonacci(triArray, numElements));