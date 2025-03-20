function getAge(inputString){

    return parseInt(inputString.split("")[0]);
    }
console.log(getAge("4 years old"), "4");

function alphabetized(s) {
    return s
        .split("")
        .filter(char => /[a-zA-Z]/.test(char))
        .sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .join("");
}

console.log(alphabetized("The Holy Bible"), "BbeehHilloTy");

function accum(s) {
    return s
        .split("")
        .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
        .join("-")
    
}

console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu" );

  function howManyTimes(time1, time2) {
    let start = new Date(time1);
    let end = new Date(time2);
    
    let strikes = 0;
    let currentStrikes = 0;

    let hours = start.getHours() % 12 || 12; 
    let minutes = start.getMinutes();
    let seconds = start.getSeconds();

    if(minutes === 0 && seconds > 0 && seconds <= hours){
        currentStrikes = hours - seconds + 1;
    }
    
    while (start < end) {
        let hours = start.getHours() % 12 || 12; 
        let minutes = start.getMinutes();
        let seconds = start.getSeconds();

        if (minutes === 0 && seconds === 0) {
            currentStrikes = hours; 
        }

        if (minutes === 30 && seconds === 0) {
            currentStrikes = 1; 
        }


        if (currentStrikes > 0) {
            strikes++;
            currentStrikes--; 
        }

        start.setSeconds(start.getSeconds() + 1);
    }
    
    return strikes;
}

function rot13(message){
    const cipher = {

        "t": "g",
        "u": "h",
        "v":  "i",
        "w": "j",
        "x": "k",
        "y": "l",
        "z": "m",
        "a": "n",
        "b": "o",
        "c": "p",
        "d": "q",
        "e": "r",
        "f": "s",
        "g": "t",
        "h": "u",
        "i": "v",
        "j": "w",
        "k": "x",
        "l": "y",
        "m": "z",
        "n": "a",
        "o": "b",
        "p": "c",
        "q": "d",
        "r": "e",
        "s": "f",
        "T": "G",
        "U": "H",
        "V":  "I",
        "W": "J",
        "X": "K",
        "Y": "L",
        "Z": "M",
        "A": "N",
        "B": "O",
        "C": "P",
        "D": "Q",
        "E": "R",
        "F": "S",
        "G": "T",
        "H": "U",
        "I": "V",
        "J": "W",
        "K": "X",
        "L": "Y",
        "M": "Z",
        "N": "A",
        "O": "B",
        "P": "C",
        "Q": "D",
        "R": "E",
        "S": "F"
    };
    let newMessage = [];
    message.split("").forEach(char => {
        newMessage.push(cipher[char] || char);
    });
   
    return newMessage.join("");
  }

console.log(rot13("test"), "grfg");


function filter_list(l) {
    return l.filter(char => typeof(char) === "number");

  }

console.log(filter_list([1,2,'a','b']), "[1,2]");

function findSmallestInt(arr) {
    let smallest = arr[0];
    arr.forEach(value => {
        if(value < smallest){
            smallest = value;
        }
    });
    return smallest;
  }

console.log(findSmallestInt([34, 15, 88, 2]), "2");

function paperwork(n, m) {
  return (n < 0 || m < 0) ? 0 : n * m;
}

console.log(paperwork(5,5), "25");

const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : (2 * l) + (2 * w);
  };

console.log(areaOrPerimeter(3,  3), "9");

function isIsogram(str){
    let newArray = [];
    for(let char of str.toLowerCase().split("")){
        if(newArray.includes(char)){
            return false;
        }
        newArray.push(char);
    }

    return true;
    
  }

console.log(isIsogram("aba"), "false");

function validatePIN (pin) {
    if(pin.length !== 4 && pin.length !== 6){
        return false
    }
    return /^\d+$/.test(pin);
  }

console.log(validatePIN("1244"), "true");

function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600);
  }

  console.log(cockroachSpeed("1.08"), "30");

  function removeEveryOther(arr){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(i === 0 || i % 2 === 0){
            newArray.push(arr[i]);
        }
    }
    return newArray;
  }

  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);

// triplet counting
function tripletCounting(arr, sum){
    let finalArray = [];

    for(let i = 0; i < arr.length - 2; i++){
        for(let j = i + 1; j < arr.length - 1; j++){
            for(let k = j + 1; k < arr.length; k++){
                if(arr[i] + arr[j] + arr[k] === sum){
                    finalArray.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return finalArray;
}

// array needs to be at least 3 values
// array will contain only positive numbers
// array will always have at least one instance where the 3 values will equal the sum
// There will always be a sum value

// loop through the array and and individually add the items and when there are 3 items in the
// array we will sum them up and see if they equal the sum value

console.log(tripletCounting([1, 2, 3, 4, 5, 6, 7, 8, 9], 15), "(1,5,9), (2,4,9), (2,5,8), (3,4,8)");


function tripletCountingPartDeux(arr, value){
    let finalArray = [];
    for(let i = 0; i < arr.length  -2; i++){
        for(let j = i + 1; j < arr.length - 1; j++){
            for(let k = j + 1; k < arr.length; k++) {
                if(arr[i] + arr[j] + arr[k] === value){
                    finalArray.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return finalArray;


}

console.log(tripletCountingPartDeux([1, 2, 3, 4, 5, 6, 7, 8, 9], 15), "(1,5,9), (2,4,9), (2,5,8), (3,4,8)");

function flatten(arr){
    let result=[];
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

//return should be a 1D array
//the input should be an n dimensional array
//array will never be empty

// flatten([1, [2, [3, 4, [5]], 6], 7]) // Output: [1, 2, 3, 4, 5, 6, 7]

console.log(flatten([1, [2, [3, 4, [5]], 6], 7]), "[1, 2, 3, 4, 5, 6, 7]");

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);

console.log(maximum);

let myString = "Hello my name is natalie"
let stringArray = [...myString];
let sortString = stringArray.sort();
let sortToString = sortString.join("");
console.log(stringArray);
console.log(sortString);
console.log(sortToString);

function snail(array) {
    let result = [];

    while (array.length) {
        result = result.concat(array.shift()); 

        array.forEach(row => row.length && result.push(row.pop())); 

        if (array.length) {
            result = result.concat((array.pop() || []).reverse()); 
        }

        for(let i = array.length - 1; i >=0 ; i--){
            result.push(array[i].shift());
        }

        array = array.filter(row => row.length); 
    }

    return result;
}

console.log(snail([[1,2,3, 4, 5], [6, 7, 8, 9, 10], [11,12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), "[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]");

function newAvg(arr, newavg) {

    let total = Math.ceil(newavg * (arr.length + 1) - (arr.reduce((a, c) => a + c, 0)));

    if(total <= 0){

        throw new Error("Expected New Average is too low");
    
    } else {
        return total;
    }
     
}

// reduce method where we use an acc and a cur value and a starting place.
// reduce method needs to go to another variable

// (reduced arr + x )/ (arr.length + 1) = newavg
// (x) = newavg * (arr.length + 1) - (reduced arr)


// arr doesn't need to be greater than 0 because if it is 0l the newavg = x

console.log(newAvg( [14, 30, 5, 7, 9, 11, 15], 92), "645");