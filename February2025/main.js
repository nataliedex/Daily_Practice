function boolToWord( bool ){
    return bool ? "Yes" : "No";
  }

const value = true;
console.log(boolToWord(value), "Yes");

function removeSmallest(numbers) {
    if (numbers.length === 0) return [];

    let minValue = Math.min(...numbers);
    let location = numbers.findIndex(num => num === minValue);

    return numbers.slice(0, location).concat(numbers.slice(location + 1));
  }

const myArray1 = [1,2,3,4,5];
const myArray2 = [5,3,2,1,4];

console.log(removeSmallest(myArray1), "[2,3,4,5]");
console.log(removeSmallest(myArray2), "[5,3,2,4]");