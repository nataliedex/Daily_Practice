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


