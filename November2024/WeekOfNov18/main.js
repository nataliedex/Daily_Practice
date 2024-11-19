function evenOrOdd(number) {
    if(number % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

const myNum = 6;
console.log(evenOrOdd(myNum));

function sum (numbers) {
    return numbers.reduce((acc, cur) => {
        return acc + cur;
    },0);
  }

const myArray = [];
console.log(sum(myArray));

function squareDigits(num){
    return Number(num.toString().split("").map((el) => el ** 2).join(""));   
  }

const thisNum = 54323;
console.log(squareDigits(thisNum));