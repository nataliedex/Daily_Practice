
// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon 
// on your team that each have evolved at least once. You have bulbasaur which is at 
// level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, 
// and weedle which is at level 1 and evolves at level 7. Create three variables to store 
// the number of rare candies each of your pokemon would need to evolve (rare candies 
// increase your level by one). Finally, create a fourth variable named totalCandies that 
// sums all the rare candies you would need. 
let bulbasaurCandies = 16-5;
let weedleCandies = 7-1;
let caterpieCandies = 7-1;

let totalCandies = bulbasaurCandies + weedleCandies + caterpieCandies;

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 
// degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another 
// fuction that tells you wheither or not charmander can battle
// (32°F − 32) × 5/9 = 0°C
function temperature(f){
    const c = (f - 32) * (5/9);
    return c;
}

function check(currentTemp){
    let converted = temperature(currentTemp);
    if(converted > 0){
        console.log("warm enough to battle");
    } else {
        console.log("too cold!");
    }
}    
check(30);

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. 
// Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer 
function undergroundBattle(partySize){
    for( let i = 1; i <= partySize; i++) {
        console.log("Pikachu I choose you")
    }
}

undergroundBattle(7);


//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a 
// function /that reverses your list and prints it to the console. 
const pokemonParty = ['babusaur', 'weedle', 'caterpie'];
const reverseParty = pokemonParty.reverse();
console.log(reverseParty);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the 
// sum of the squares of each element in a is strictly greater than the sum of the cubes of each 
// element in b.
function sumSquares(a){
    let sumSquares = 0;
    a.forEach(el =>{
        sumSquares += el ** 2;
    });
    return sumSquares;
}
function sumCubes(b){
    let sumCubes = 0;
    b.forEach(el => {
        sumCubes += el ** 3;
    });
    return sumCubes;
}

function compare(a, b){
    if(sumSquares(a) > sumCubes(b)){
        return true;
    } else {
        return false;
    }
}

function compareArrays(a, b){
    return (a.reduce((acc, c) => acc + c ** 2,0 ) > b.reduce((acc, c) =>  acc + c ** 3,0));
}
//Return a new array consisting of elements which are multiple of their own index in input array 
// (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//Given an array of integers as strings and numbers, return the sum of the array values as if all 
// were numbers.Return your answer as a number.

function returnElementArray(arr){
    return arr.filter((e, i) => e % i === 0)

};

// espresso machine

class EspressoMachine {
    constructor(model, brand, color,cost) {
        // properties and perimeters
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.cost = cost;
    }
    brew(){
        console.log("Brewing...");
    }
    steam(){
        console.log("Steaming...");
    }
    clean(){
        console.log("Time to clean...");
    }
}

const brevilleMachine = new EspressoMachine("Classic Pro", "breville", "red", 500);
console.log(brevilleMachine);

class Room{
    constructor(name, type, windows, floorType, bookshelf, toilet, sinkNum, shower){
        this.name = name;
        this.type = type;
        this.windows = windows;
        this.floorType = floorType;
        this.bookshelf = bookshelf;
        this.toilet = toilet;
        this.sinkNum = sinkNum;
        this.shower = shower
    }
    washWindows(){
        console.log("Washing windows...");
    }
    sweepFloor(){
        console.log("Sweeping...");
    }
    mapFloor(){
        console.log("Mopping...");
    }
    organizeBookshelf(){
        console.log("Organizing...");
    }
    dust(){
        console.log("Dusting...");
    }
    cleanToilet(){
        console.log("Scrub Toilet");
    }
    cleanSinks(){
        console.log("Cleaning sinks...");
    }
    cleanShower(){
        console.log("Cleaning shower...");
    }
    changeSheets(){
        console.log("Changing sheets...");
    }
    changeTowels(){
        console.log("Changing Towels...");
    }
    cleanBaseboards(){
        console.log("Cleaning baseboards...");
    }
    cleanWalls(){
        console.log("Clean walls...");
    }
    cleanStove(){
        console.log("Cleaning stove...");
    }
    cleanAppliances(){
        console.log("Cleaning appliances...");
    }
    tidyUp(){
        console.log("Tidying...")
    }

}
// too much to analyze here!
let hourlyRate = 250;
let hours = 160;
let taxRate = .35;

function calculateProfit(rate, numOfHourse, taxes){
    return rate * numOfHourse * (1 - taxes);
}
function holdForTaxes(profitMade){
    return hourlyRate * hours - profitMade;
}

let profit = calculateProfit(hourlyRate, hours, taxRate);
let taxesHeld = holdForTaxes(profit);

console.log(profit);
console.log(taxesHeld);

// Encapsulation 
let seriousBusinessPerson = {
    hourlyRate: 250,
    hours: 160,
    taxRate: .35,
    calculateProfit: function(){
        return this.hourlyRate * this.hours * (1 - this.taxRate);
    },

}
// abstractions - hide unnecessary details, to make smaller more manageable pieces of code

function AgencyContractor(hourlyRate, hours, taxRate){
    this.hours = hours;
    this.taxRate = taxRate;
    let rate = hourlyRate;
    let calculateProfit = function(){
        return rate * this.hours * (1 - this.taxRate);
    }
    this.invoiceClient = function(){
        return `Your invoice total is ${rate * this.hours}`;
    }
}
let natalie = new AgencyContractor(250, 160, .35);
console.log(natalie.invoiceClient());
console.log(natalie.hourlyRate);


function validParentheses(parenStr) {
    // length needs to be even, else false
    // equal number of left sides and right sides
    // if a set is closed, next char can not be a closed
    // Your code here
    const splitString = parenStr.split("");
    console.log(splitString);
    let stack = [];
    for(let char of splitString) {
        if(char === "("){
            stack.push(char);
        } else if( char === ")"){
            if(stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return stack.length === 0; 
}


  const myString = "()()())";
  console.log(validParentheses(myString));
  