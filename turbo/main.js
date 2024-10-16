
// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
// let favDrink = prompt("What is your favorite drink? ").trim();
// console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const word = ["Apple", "Banana", "Fruit"];
for(var i = 0; i < word.length; i++){
    if(word[i] === "Apple"){
        console.log("Here!");
    }
}

let words = "This is a great day to eat an apple, don't you think?";
if(words.search("apple") !== -1){
    console.log("Yes");
} else {
    console.log(("No"));
}


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    const value = Math.floor(Math.random()*3);
    console.log(value);
    if(value === 0){
        return("rock");
    } else if(value === 1){
        return("paper");

    } else {
        return("scissors");
    }
}

rockPaperScissors();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rockPaperScissorGame(yourChoice) {
    let computerValue = rockPaperScissors();
    console.log(`You chose ${yourChoice} and the Computer chose ${computerValue}`);
    if(computerValue === "rock"){
        if(yourChoice === "Rock"){
            console.log();("draw!");
        } else if(yourChoice === "Paper"){
            console.log();("You win!");
        } else {
            console.log();("You lose!");
        }
    } else if(computerValue === "paper"){
        if(yourChoice === "Rock") {
            console.log("You lose!");
        }else if(yourChoice ==="Paper"){
            console.log("Draw");
        } else {
            console.log("You win!");
        }
    } else {
        if(yourChoice === "Rock"){
            console.log("You Win!");
        } else if(yourChoice === "Paper"){
            console.log("You Lose!");
        } else {
            console.log("Draw");
        }
    }
}
// rockPaperScissorGame("Rock");
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame(choices) {
    choices.forEach( choice => rockPaperScissorGame(choice))
}
// playGame(['rock', 'paper', 'scissors', 'rock']);

//Arrays

//Create an array of numbers. Sum all of the numbers. Alert the sum.
let arr = [5,7,9,8,10];
let total = 0;
arr.forEach((value) => {
    total = total + value });
console.log(total);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squared = [];
arr.forEach((value) => {
    squared.push(value ** 2);
});
console.log(squared);

//Create a function that takes string
//Print the reverse of that string to the console
function reverseFunction(str){
    let reverse = [];
    str.forEach((value) => {
        reverse.unshift(value);
    });
    console.log(reverse);
    return reverse; 
}
// reverseFunction([5,7,9,8,10]);


//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str){
    console.log(str);
    let reverse = reverseFunction(str);
    for(var i = 0; i < str.length; i++ ){
        if(str[i] !== reverse[i]){
            console.log("Not a palindrome");
        }
    }
    console.log("PALINDROME!");
}
// palindrome(["R","A","C","E","C","A","R"]);

function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake;
    this.model = carModel;
    this.color = carColor;
    this.doors = numOfDoors;
    this.honk = function(){
        alert("BEEP BEEP BEEP");
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`);
    }
}
let hondaCivic = new MakeCar("Honda", "Civic", "Silver", 4);
let teslaRoadster = new MakeCar("Tesla", "Roadster", "Red", 2);


//Create a mouse object that has 4 properties and 3 methods
let mouse = {}
    
mouse.color = "brown";
mouse.size = "small";
mouse.tailLength = "long";
mouse.ears = 2;
mouse.squeek = function(){
    console.log("Squeek!");
}
mouse.alive = function(){
        console.log(true);
}
mouse.move = function(){
    console.log("He's coming toward you!");
}

console.log(mouse);

function MakeMouse(color, size, tailLength, ears){
    this.color = color;
    this.size = size;
    this.tailLength = tailLength;
    this.ears = ears;
    this.squeek = function(){
        console.log("Squeek!");
    };
    this.alive = function(){
        console.log(true);
    };
    this.move = function(){
        console.log("He's coming toward you!");
    }
}

const brownMouse = new MakeMouse("brown", "BIG", "Medium", 1);
console.log(brownMouse);