// Hello Object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness
function isEmpty(obj){
    for(let key in obj){
        return false;
    } 
    return true; 
}

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

//   let sum = salaries.John + salaries.Ann + salaries.Pete;
//   console.log(sum);
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum);

// Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for(let key in obj){
        if(typeof (obj[key]) === "number"){
            obj[key] = obj[key]* 2;
        }
    }
    console.log(menu);
}
multiplyNumeric(menu);

// Musketeers
let musketeers = ["Athos", "Porthos", "Armais"];

for(var i = 0; i < musketeers.length; i++){
    console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");
musketeers.forEach(musketeer => {
    console.log(musketeer);
});

musketeers.splice[2];

for(const musketeer of musketeers){
    console.log(musketeer);
}

// Sum of values
const values = [3, 11, 7, 2, 9, 10];
let total=0;
values.forEach(value => {
    total += value;
});
console.log(total);

// List of words
let words = [];
let selectedWord;

function promptUser() {
    selectedWord = prompt("What word? ");
    if(selectedWord === "Stop"){
        words.forEach(word => {
            console.log(word);
        });
    } else {
        words.push(selectedWord);
        words.forEach(word => {
            console.log(word);
        });
        // promptUser();
    }
}
// promptUser();


// Create a dog object

function Dog(name, species, size){
    this.name = name,
    this.species = species,
    this.size = size,
    this.bark = function(){
        console.log("Bark!");
    }
}

const winnie = new Dog("Winnie", "King Charles Cavelier", "small");
console.log(winnie);
const moose = new Dog("Moose", "Mix", "Tiny");
console.log(moose);

// Modeling a circle
// const r = Number(prompt("Enter the circle radius:"));

// const circle = {
//     circumference: function() {
//         return 2 * 3.14 * r;
//     },
//     area: function(){
//         return 3.14 * r * r;
//     }
// };

// console.log(`Its circumference is ${circle.circumference}`);
// console.log(`Its area is ${circle.area}`);

// Modeling a bank account
const account = {
    name: "Alex",
    balance: 0,
    credit: function(value) {
        return (this.balance += value);
    },
    describe: function() {
        return `owner: ${this.name}, balance: $${this.balance}`;
    },
}
console.log(account.describe(account.credit(250)));
console.log(account.describe(account.credit(-80)));

// Translate border-left-width to borderLeftWidth


function camelize(str) {
    let words = str.split("-");

    for(let i = 0; i < words.length; i++){
        if(words[i]){
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }   
    }
    console.log(words.join(""));
}

camelize("-Natalie-is-great-");

function range(x, y) {
    let arr = [];
    for(var i = x; i <= y; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(range(10, 21));

function sumOfNumbers(x, y) {
    let total = 0;
    for(var i = x; i <= y; i++) {
        total += i;
    }
    return total;
}
console.log(sumOfNumbers(1, 10));

function stepRange(start, end, step) {
    let arr = [];
    if(step){
        for(var i = start; i <= end; i = i + step) {
            arr.push(i);
        }
    } else {
        for(var i = start; i <= end; i++) {
            arr.push(i);
        }
    }
    
    return arr;
}

console.log(stepRange(1,10));

// Reversing array
function reverseArray(arr){
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.unshift(arr[i]);
    }
    return newArr;
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));

function reverseInPlace(arr){
    arr = reverseArray(arr); 
    return arr;
}

console.log(reverseInPlace(myArray));



//Create a dog object that has four properties and three methods

let dog = {
    color: "brown",
    size: "medium",
    smelly: true,
    hasFur: true,
    bark: function(){
        console.log("bark!");
    },
    poop: function(){
        console.log("POOP!");
    },
    jump: function(){
        console.log("BLAST OFF");
    }
};
console.log(dog);

function CreateDog(color, size, smelly, hasFur){
    this.color = color;
    this.size = size;
    this.smelly = smelly;
    this.hasFur = hasFur;
    this.bark = function(){
        console.log("bark!");
    };
    this.poop = function(){
        console.log("POOP!");
    };
    this.jump = function(){
        console.log("BLAST OFF");
    };
};
const myDog = new CreateDog("Black", "Small", true, false);
CreateDog.prototype.numOfLegs = 4;


console.log(myDog);
console.log(myDog.numOfLegs);

class TonyHawkProSkater{
    constructor(hair, board, speed, hat){
        this.hair = hair;
        this.board = board;
        this.speed = speed;
        this.hat = hat
    }
    saying(){
        console.log("Cool dude!");
    };
    move() {
        console.log("OLLY!");
    };
    fall() {
        console.log("Aw MANNNNNNN!");
    };
}


const jimmyFromTheBlock = new TonyHawkProSkater("brown", "slick", "super fast", "backwards");
console.log(jimmyFromTheBlock);
console.log(jimmyFromTheBlock.move());

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        const dogData = data.message;
        console.log(data.message);
        document.querySelector("img").src = dogData;
        const breed = dogData.split("/")[4];
        document.querySelector("h1").innerHTML = breed;
        
    })
    .catch(err => {
        console.log(`error ${err}`);
    })






















