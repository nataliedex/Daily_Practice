const rps = (p1, p2) => {
    if(p1.toLowerCase() === "rock"){
        if(p2.toLowerCase() === "paper"){
            return "Player 2 won!";
        } else if(p2.toLowerCase() === "scissors"){
            return "Player 1 won!";
        } else {
            return "Draw!"
        }
    } else if(p1.toLowerCase() === "paper"){
        if(p2.toLowerCase() === "scissors"){
            return "Player 2 won!";
        } else if(p2.toLowerCase() === "rock"){
            return "Player 1 won!";
        } else {
            return "Draw!"
        }
    } else if(p1.toLowerCase() === "scissors"){
        if(p2.toLowerCase() === "rock"){
            return "Player 2 won!";
        } else if(p2.toLowerCase() === "paper"){
            return "Player 1 won!";
        } else {
            return "Draw!"
        }
    }
};

// console.log(rps("rock", "Scissors"), "Player 1 won!");
// console.log(rps("rock", "paper"), "Player 2 won!");
// console.log(rps("rock", "rock"), "Draw!");
// console.log(rps("paper", "Scissors"), "Player 2 won!");
// console.log(rps("paper", "paper"), "Draw");
// console.log(rps("paper", "rock"), "Player 2 won!");
// console.log(rps("scissors", "Scissors"), "Draw!");
// console.log(rps("scissors", "paper"), "Player 2 won!");
// console.log(rps("scissors", "rock"), "Player 1 won!");

const rockpaperscissors= (p1, p2) => {
    const winning = {rock: "scissors", paper: "rock", scissors: "paper"};
    if(p1.toLowerCase() === p2.toLowerCase()) return 'Draw!';
    if (p2 === winning[p1]){
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
}

// console.log(rockpaperscissors("paper", "paper"), "game 2: Draw");
// console.log(rockpaperscissors("paper", "rock"), "Player 2 won!");
// console.log(rockpaperscissors("scissors", "Scissors"), "Draw!");
// console.log(rockpaperscissors("scissors", "paper"), "Player 2 won!");
// console.log(rockpaperscissors("scissors", "rock"), "Player 1 won!");

function sortArray(array) {
    const oddNumbers = [];
    const oddLocations = [];
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 !== 0){
            oddLocations.push(i);
            oddNumbers.push(array[i]);
        }
    }
    console.log("oddnumbers: ", oddNumbers);
    console.log("oddlocations: ", oddLocations);
    oddNumbers.sort((a, b) => a-b);

    for(let i = 0; i < oddLocations.length; i++){
        array[oddLocations[i]] = oddNumbers[i];
    }
    return array;
  }




const myArray=[9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(sortArray(myArray), "[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]");

const binaryArrayToNumber = arr => {
    let value = 0;
    for(let i = 0; i < arr.length; i++){
        value = (value * 2) + arr[i];
    }
    return value;
  };

const bianaryOne = [0, 0, 0, 1];
const bianaryTwo = [1, 0, 0, 1, 1, 1];
const binaryThree = [1,1,0,0,1,0];

console.log(binaryArrayToNumber(bianaryOne), "1");
console.log(binaryArrayToNumber(bianaryTwo), "39");
console.log(binaryArrayToNumber(binaryThree), "50");

function oddOrEven(array) {
    return array.reduce((a, c) => a + c, 0) % 2 === 0 ? "even" : "odd";
}

 const oddOrEvenArray = [0, -1, -5];
 console.log(oddOrEven(oddOrEvenArray), "even");
