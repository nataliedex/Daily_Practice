
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


//   start a farm
// underscore means don't touch this property
class Animal{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    speak(){
        console.log(`${this._name} makes a sound`);
    }
    
}


// extending the class
class Dog extends Animal{
    constructor(name, breed){
        // super comes from the Animal class
        super(name);
        this._breed = breed;
    }
    get breed(){
        return this._breed;
    }
    speak(){
        super.speak();
        console.log(`${this.name} barks`);
    }
    
}

class Cat extends Animal{
    constructor(name, breed, color){
        super(name);
        this._breed = breed;
        this._color = color;
    }
    get breed(){
        return this._breed;
    }
    get color(){
        return this._color;
    }
    speak(){
        super.speak();
        console.log("Meow!");
    }
}

let simba = new Dog("Simba", "Spaniel");
let meowmeow = new Cat("Meow Meow", "kitty", "orange");

let farm = [simba, meowmeow];
for (a of farm){
    a.speak();
}

class Product {
    constructor(name, price, category){
        this._name = name;
        this._price = price;
        this._category = category;
    }
    get name(){
        return this._name;
    }
    get price(){
        return this._price;
    }
    get category(){
        return this._category;
    }
    getDetails(){
        console.log(`Getting details about the ${this._name}`);
    }
}

class Electronics extends Product{
    constructor(name, price, category, warrentyPeriod){
        super(name, price, category);
        this.warrentyPeriod = warrentyPeriod; 
    }
    checkWarrenty(){
        console.log(`checking warrenty for ${this.name}`);
    }
}
class Clothing extends Product {
    constructor(name, price, category, size, material){
        super(name, price, category);
        this.size = size;
        this.material = material;
    }
}
class Books extends Product {
    constructor(name, price, category, author, genre){
        super(name, price, category);
        this.author = author;
        this.genre = genre;
    }
}

const ameliaDress = new Clothing("Amlia Dress", 119.99, "dress", "small", "cotton");
const lordOfTheRings = new Books("Lord of the Rings", 25, "fiction", "someones", "fantasy");
const vcr = new Electronics("VCR", 135, "audio/visual", 12);

ameliaDress.getDetails();
lordOfTheRings.getDetails();
vcr.getDetails();

function positiveSum(arr) {
  return arr.reduce((acc, c) => {
    if(c > 0){
        return acc + c;
    }
    return acc;
  },0); 
}

const thisArray = [1, 4, 6, 9, -10, 3,-14, 27, -8];
console.log(positiveSum(thisArray));

function rowSumOddNumbers(n) {
	// TODO 
    return n ** 3;

}

function isValidWalk(walk) {
    //insert brilliant code here
    let curPosition = [0,0];
    const directions = {
        "n": [0, 1],
        "s": [0, -1],
        "e": [1, 0],
        "w": [-1, 0],
    };
    walk.forEach(step => {
        const [dx, dy] = directions[step];
        curPosition = [curPosition[0] + dx, + curPosition[1] + dy];
    });
    return curPosition[0] === 0 && curPosition[1] === 0 && walk.length === 10;
}

const thisWalk = ['w','e','w','e','w','e','w','e','w','e'];
console.log(isValidWalk(thisWalk));

function squareSum(numbers){
   return numbers.reduce((a, c) => {
        return a + (c ** 2);
    },0);
}

console.log(squareSum(thisArray));

function countSheeps(sheep) {
    // TODO
    return sheep.reduce((acc, cur) => {
        if(cur){
            return acc = acc + 1;
        }
        return acc;
    },0);
  }

const sheepArr = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true];
console.log(countSheeps(sheepArr));

class Contractor {
    constructor(name, role){
        this._name = name;
        this._role = role;
    }
    get name(){
        return this._name;
    }
    get role(){
        return this._role;
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I am a ${this._role}`);
    }

}
class FrontEnd extends Contractor{
    constructor(name, role, tech){
        super(name, role);
        this._tech = tech;
    }
    get tech(){
        return this._tech;
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I use ${this._tech}`);
    }

}
class BackEnd extends Contractor{
    constructor(name, role, tech){
        super(name, role);
        this._tech = tech;
    }
    get tech(){
        return this._tech;
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I use ${this._tech}`);
    }
}

let chelsea = new Contractor("Chelsea", "Developer");
let john = new FrontEnd("John", "Developer", "JavaScript");
let sammy = new BackEnd("Sammy", "Developer", "React");

function numberToString(num) {
    // Return a string of the number here!
    return num.toString();
  }
const aNumber = 6;
console.log(aNumber);
console.log(numberToString(aNumber));

function reverseWords(str){
    return str.split(" ").reverse().join(" "); // reverse those words
  }

const todaysString = "Hello my name is Natalie";
console.log(reverseWords(todaysString));

document.querySelector("button").addEventListener("click", handleFetch);

function handleFetch(){
    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err =>{
        console.log(`error: ${err}`);
    })
}

async function getData() {
    try {
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
getData();

// function moveZeros(arr) {
//     let index = 0;
//     arr.forEach(el => {
//         if(el !== 0){
//             arr[index] = el;
//             index++;
//         }
//     });

//     while(index < arr.length){
//         arr[index] = 0;
//         index++;
//     }
//     return arr;
//   }

//   const nov10Array = ['5', '1', '4', null, '6', 9, '7', null, '3', false, null, [], null, '6', '9', {}, 5, 1, +0, 5, true, 2, 7, +0];
//   console.log(moveZeros(nov10Array));