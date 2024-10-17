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
function promptUser() {
    let selectedWord = prompt("What word? ");
}
promptUser();

if(selectedWord === "Stop"){
    words.forEach(word => {
        console.log(word);
    });
} else {
    words.push(selectedWord);
    words.forEach(word => {
        console.log(word);
    });
    promptUser();
}














