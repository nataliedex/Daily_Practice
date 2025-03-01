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
