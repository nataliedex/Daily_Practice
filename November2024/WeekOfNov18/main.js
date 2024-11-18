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