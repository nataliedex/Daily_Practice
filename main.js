class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }
    describe() {
        return(`${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`);
    }
}

const natalie = new Character("Natalie", 124, 25);
const vladi = new Character("Vladi", 170, 36);

const characterButton = document.getElementById("button");
const description = document.getElementById("character");
const clickedButton = document.querySelector(".clicked");
const container = document.getElementById("character-container");

characterButton.addEventListener("click", () =>{
    console.log(characterButton.classList.value);
    console.log(clickedButton);
    if(!clickedButton) {
        characterButton.classList.remove("clicked");
        description.textContent = vladi.describe();
    } else {
        characterButton.classList.add("clicked");
        description.textContent = natalie.describe();
    }
    container.appendChild(description);
});

// create a pizza object that has 4 properties and 3 methods
let pizza = {}

pizza.size = "large";
pizza.toppings = ["tomatoes", "onion", "banana peppers"];
pizza.crust = "stuffed";
pizza.sauce = "red";

pizza.estimatedDeliveryTime = function () {
    console.log("Calculating...");
}
pizza.burnMouth = function() {
    console.log("TOO HOT!");
}
pizza.eatten = function() {
    console.log("All Done!");
}

function PizzaMachine(size, toppings, crust, sauce) {
        this.size = size
        this.toppings = toppings
        this.crust = crust
        this.sauce = sauce
        this.estimatedDeliveryTime = function() {
            console.log("Calculating...");
        }
        this.burnMouth = function() {
            console.log("Too HOT");
        }
        this.eatten = function() {
            console.log("All Done!");
        }
}

let newPizza = new PizzaMachine("small", ["onions", "tomatoes"], "Thin", "Light");
console.log(newPizza);
newPizza.estimatedDeliveryTime();

function Clothing(name, size, color, image){
    this.name = name;
    this.size = size;
    this.color = color;
    this.image = image;
}

const tommyShirt = new Clothing("Tommy", "Small", "Blue", )

function phoneNumber(numbers){
    const digitsToString = digits.join("");
    console.log(digitsToString);
    if(digitsToString.length !== 10){
        return("invalid number.  Needs 10 digits");
    }
    const formattedNumber = `(${digitsToString.slice(0,3)}) ${digitsToString.slice(3,6)}-${digitsToString.slice(6)}`;
    return formattedNumber;
}

characterButton.innerHTML = phoneNumber([1,2,3,4,5,6,7,8,9,0]);