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

function minimumSteps(numbers, value){
    if(numbers.length === 0 || value < 0) return 0;

    numbers.sort((a,b) => a - b);

    let sum = 0;
    

    for (let steps = 0; steps < numbers.length; steps++){
        sum += numbers[steps];

        if(sum >= value){
            return steps;
        } 
    }
    return numbers.length;

  }

const thisArray = [2,1,2,9,10,22,4];
const aNumber = 12;
console.log(minimumSteps(thisArray, aNumber));