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


















