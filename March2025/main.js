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