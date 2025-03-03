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

console.log(howManyTimes("2016-08-14 12:00:00","2016-08-14 12:00:01"), "1");
